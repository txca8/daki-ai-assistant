<!DOCTYPE html>
<html lang="ar" dir="rtl" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>DAKI AI Command Center | AMOLED Ultra Dark v2.3</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts: Tajawal & Inter & JetBrains Mono -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">
    
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        amoled: {
                            bg: '#05070a',          // خلفية سوداء عميقة AMOLED
                            surface: '#0d1117',     // بطاقات داكنة
                            elevated: '#161b22',    // عناصر مرتفعة
                            neon: '#2AABEE',        // أزرق تيليجرام نيون مشرق
                            neonDark: '#1a6fa0',    // أزرق داكن
                            purple: '#8b5cf6',      // لمسة بنفسجية نيون
                            gold: '#f59e0b',        // ذهبي المالك
                            danger: '#ef4444',      // أحمر الحظر
                            success: '#10b981',     // أخضر النشاط
                            text: '#f3f4f6',        // نص ناصع
                            muted: '#8b949e'        // نص ثانوي
                        }
                    },
                    fontFamily: {
                        sans: ['Tajawal', 'Inter', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace']
                    }
                }
            }
        }
    </script>

    <style>
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: #05070a; }
        ::-webkit-scrollbar-thumb { background: rgba(42, 171, 238, 0.25); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #2AABEE; }

        html, body {
            background-color: #05070a;
            color: #f3f4f6;
            font-family: 'Tajawal', 'Inter', sans-serif;
            overflow-x: hidden;
            overflow-anchor: none;
            -webkit-tap-highlight-color: transparent;
        }

        .glass-card {
            background: rgba(13, 17, 23, 0.82);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
        }

        .glass-card-hover {
            transition: border-color 0.22s ease, box-shadow 0.22s ease, background-color 0.22s ease;
        }
        .glass-card-hover:hover {
            border-color: rgba(42, 171, 238, 0.45);
            box-shadow: 0 10px 30px rgba(42, 171, 238, 0.12);
        }

        .neon-glow { box-shadow: 0 0 20px rgba(42, 171, 238, 0.22); }
        .gold-glow { box-shadow: 0 0 22px rgba(245, 158, 11, 0.18); }

        .screen-fade {
            animation: smoothOpacity 0.16s ease-out;
        }
        @keyframes smoothOpacity {
            from { opacity: 0.4; }
            to { opacity: 1; }
        }

        /* مفتاح التبديل الزجاجي المضيء */
        .tg-switch {
            position: relative;
            display: inline-block;
            width: 46px;
            height: 25px;
            flex-shrink: 0;
        }
        .tg-switch input { opacity: 0; width: 0; height: 0; }
        .tg-slider {
            position: absolute;
            cursor: pointer;
            top: 0; left: 0; right: 0; bottom: 0;
            background-color: #1e2530;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: .2s;
            border-radius: 25px;
        }
        .tg-slider:before {
            position: absolute;
            content: "";
            height: 19px;
            width: 19px;
            left: 2px;
            bottom: 2px;
            background-color: #8b949e;
            transition: .2s ease;
            border-radius: 50%;
        }
        input:checked + .tg-slider {
            background: linear-gradient(135deg, #1a6fa0, #2AABEE);
            border-color: #2AABEE;
            box-shadow: 0 0 12px rgba(42, 171, 238, 0.4);
        }
        input:checked + .tg-slider:before {
            transform: translateX(21px);
            background-color: #ffffff;
        }
        input:disabled + .tg-slider { opacity: 0.35; cursor: not-allowed; }

        .ambient-bg {
            background-image: 
                radial-gradient(circle at 15% 10%, rgba(42, 171, 238, 0.08) 0%, transparent 40%),
                radial-gradient(circle at 85% 85%, rgba(139, 92, 246, 0.07) 0%, transparent 45%);
        }

        /* شريط تمرير أفقي أنيق وثابت للقوائم الأفقية */
        .rank-scroll-bar::-webkit-scrollbar { height: 4px; }
        .rank-scroll-bar::-webkit-scrollbar-track { background: rgba(255,255,255,0.03); border-radius: 8px; }
        .rank-scroll-bar::-webkit-scrollbar-thumb { background: rgba(42, 171, 238, 0.35); border-radius: 8px; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
</head>
<body class="bg-amoled-bg text-amoled-text min-h-screen flex flex-col items-center justify-start selection:bg-amoled-neon selection:text-black">

    <!-- حاوية التطبيق الرئيسية -->
    <div id="app-shell" class="w-full max-w-3xl min-h-screen bg-amoled-bg/95 border-x border-white/[0.06] flex flex-col relative ambient-bg">
        
        <!-- الشريط العلوي الزجاجي الثابت -->
        <header class="sticky top-0 z-40 glass-card border-b border-white/[0.08] px-3 py-2.5">
            <div class="flex items-center justify-between gap-2">
                <!-- زر الرجوع + عنوان الشاشة -->
                <div class="flex items-center gap-2.5 min-w-0">
                    <button id="global-back-btn" onclick="goBack()" class="hidden w-9 h-9 rounded-full bg-white/[0.05] hover:bg-amoled-neon/20 border border-white/[0.08] active:scale-95 flex items-center justify-center text-amoled-neon transition-colors shrink-0" title="رجوع">
                        <i class="fa-solid fa-arrow-right text-base" id="back-icon"></i>
                    </button>
                    <div class="flex items-center gap-2.5 min-w-0">
                        <div id="header-avatar" class="w-9 h-9 rounded-2xl bg-gradient-to-tr from-amoled-neonDark via-amoled-neon to-amoled-purple flex items-center justify-center text-white font-bold shadow-lg neon-glow shrink-0">
                            <i class="fa-solid fa-paper-plane"></i>
                        </div>
                        <div class="truncate">
                            <h1 id="header-title" class="text-sm sm:text-base font-extrabold text-white truncate tracking-tight">مركز قيادة DAKI AI</h1>
                            <p id="header-subtitle" class="text-[11px] text-amoled-neon flex items-center gap-1.5 font-medium">
                                <span class="w-1.5 h-1.5 rounded-full bg-amoled-success animate-ping"></span>
                                <span data-i18n="status_online">نظام سحابي معزول فائق السرعة</span>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- أدوات التحكم العلوية: محاكي الدور + اللغة -->
                <div class="flex items-center gap-1.5 shrink-0">
                    <select id="role-simulator" onchange="changeSimulatedRole(this.value)" class="bg-amoled-elevated/90 text-[11px] sm:text-xs font-bold text-white border border-amoled-neon/30 rounded-xl px-2 py-1.5 outline-none focus:border-amoled-neon cursor-pointer shadow-inner">
                        <option value="owner">المالك (Owner AI)</option>
                        <option value="rank_3">مشرف عام (Super Admin)</option>
                        <option value="rank_5">مشرف متوسط (Mod)</option>
                        <option value="rank_7">مراقب (Watcher)</option>
                    </select>

                    <select id="lang-selector" onchange="changeLanguage(this.value)" class="bg-amoled-elevated/90 text-[11px] sm:text-xs font-extrabold text-amoled-neon border border-white/[0.1] rounded-xl px-2 py-1.5 outline-none cursor-pointer">
                        <option value="ar">عربي</option>
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                    </select>
                </div>
            </div>

            <!-- شريط الحالة الحي المباشر -->
            <div class="mt-2 pt-1.5 border-t border-white/[0.05] flex items-center justify-between text-[10px] sm:text-[11px] text-amoled-muted overflow-x-auto gap-3 no-scrollbar">
                <div class="flex items-center gap-3 shrink-0">
                    <span class="flex items-center gap-1">
                        <span id="top-ub-dot" class="w-2 h-2 rounded-full bg-amoled-success"></span>
                        Business Account AI: <strong class="text-white" id="top-ub-status">متصل</strong>
                    </span>
                    <span class="text-white/20">|</span>
                    <span class="flex items-center gap-1">
                        <span id="top-bot-dot" class="w-2 h-2 rounded-full bg-amoled-success"></span>
                        DakiSchuleBot: <strong class="text-white" id="top-bot-status">نشط</strong>
                    </span>
                </div>
                <div class="flex items-center gap-1.5 shrink-0 font-mono text-amoled-neon">
                    <i class="fa-solid fa-bolt text-[9px]"></i>
                    <span>Ping: <strong id="live-ping">42ms</strong></span>
                </div>
            </div>
        </header>

        <!-- منطقة المحتوى الديناميكي -->
        <main id="main-container" class="flex-1 flex flex-col pb-24">
            <!-- يتم حقن الشاشات هنا -->
        </main>

        <!-- شريط التنقل السفلي العائم -->
        <nav id="bottom-nav" class="hidden fixed bottom-3 left-1/2 -translate-x-1/2 w-[94%] max-w-2xl glass-card border border-white/[0.12] rounded-2xl z-30 p-1.5 shadow-2xl">
            <div id="bottom-nav-items" class="grid grid-cols-4 gap-1">
                <!-- عناصر التنقل السفلية -->
            </div>
        </nav>

    </div>

    <!-- نافذة تنبيه الصلاحيات الاحترافية (Telegram Modal) -->
    <div id="access-denied-modal" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
        <div class="glass-card border border-amoled-danger/40 rounded-3xl max-w-md w-full p-6 shadow-2xl screen-fade text-center relative overflow-hidden">
            <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amoled-danger via-amoled-gold to-amoled-neon"></div>
            
            <div class="w-16 h-16 rounded-2xl bg-amoled-danger/15 border border-amoled-danger/40 text-amoled-danger flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg">
                <i class="fa-solid fa-shield-halved"></i>
            </div>
            
            <h3 class="text-lg font-extrabold text-white mb-2">وصول مقيد • بوابة Owner AI</h3>
            
            <div class="bg-amoled-bg/90 rounded-2xl p-4 mb-5 text-xs sm:text-sm text-amoled-muted leading-relaxed border border-white/[0.07] text-start space-y-2">
                <p class="text-white font-medium">
                    <i class="fa-solid fa-lock text-amoled-gold ml-1.5"></i>
                    عذراً، هذا القسم مخصص حصرياً لصاحب النظام (<span class="text-amoled-gold font-bold">Owner AI</span>) لإدارة الحساب الشخصي المرتبط والتهيئة الجذرية.
                </p>
                <p>
                    رتبتك الحالية هي <span id="modal-current-role-name" class="text-amoled-neon font-bold">مسؤول</span>، لذا تم تخصيص <strong class="text-white">تبويب المسؤولين</strong> لك لإدارة بوت DakiSchuleBot والأعضاء وفق صلاحياتك.
                </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-2.5">
                <button onclick="goToAdminFromModal()" class="flex-1 bg-gradient-to-r from-amoled-neonDark to-amoled-neon hover:opacity-95 text-white font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg neon-glow">
                    <i class="fa-solid fa-user-shield"></i>
                    <span>الانتقال لقسم المسؤولين</span>
                </button>
                <button onclick="closeDeniedModal()" class="bg-white/[0.06] hover:bg-white/[0.12] text-amoled-muted hover:text-white font-bold py-3 px-4 rounded-xl transition-all">
                    إغلاق
                </button>
            </div>
        </div>
    </div>

    <!-- نافذة النماذج التفاعلية -->
    <div id="custom-form-modal" class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
        <div class="glass-card border border-white/[0.12] rounded-3xl max-w-md w-full p-5 shadow-2xl screen-fade">
            <div class="flex items-center justify-between mb-4 border-b border-white/[0.08] pb-3">
                <h3 id="form-modal-title" class="text-base font-extrabold text-white">إضافة عنصر جديد</h3>
                <button onclick="closeFormModal()" class="w-8 h-8 rounded-full bg-white/[0.06] text-amoled-muted hover:text-white flex items-center justify-center">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div id="form-modal-body" class="space-y-3.5">
                <!-- حقول النموذج -->
            </div>
        </div>
    </div>

    <!-- إشعار Toast بأسلوب تيليجرام النيون -->
    <div id="tg-toast" class="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 hidden glass-card text-white border border-amoled-neon/50 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-bold transition-all neon-glow">
        <i id="toast-icon" class="fa-solid fa-circle-check text-amoled-success"></i>
        <span id="toast-text">تم التنفيذ بنجاح</span>
    </div>

    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <!-- المنطق البرمجي الكامل -->
    <script>
        // ==========================================
        // 1. حالة التطبيق والبيانات المعزولة تماماً (Isolated Systems State)
        // ==========================================
        // DAKI production bridge: every supported action is authenticated by Telegram WebApp initData.
        const DAKI_API = {
            initData: () => window.Telegram?.WebApp?.initData || '',
            async call(action, payload = {}) {
                const initData = this.initData();
                if (!initData) throw new Error('افتح لوحة التحكم من داخل Telegram Web App للتحقق من هويتك.');
                const response = await fetch('/api/admin', { method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify({initData, action, ...payload}) });
                const data = await response.json().catch(() => ({}));
                if (!response.ok || !data.ok) throw new Error(data.error || `HTTP ${response.status}`);
                return data;
            },
            scope(screen = state.history[state.history.length - 1]) { return screen === 'userbot_panel' ? 'business' : 'bot'; },
            async setConfig(scope, key, value) { return this.call('systemConfigSet', {system_scope:scope, key, value}); }
        };
        let DAKI_SESSION = null;
        async function dakiSaveConfig(scope, key, value, success='تم الحفظ في قاعدة البيانات') {
            try { await DAKI_API.setConfig(scope,key,value); showToast(success); return true; }
            catch (e) { showToast(e.message || 'فشل الحفظ في الخادم','danger'); return false; }
        }
        async function dakiLoadSession() {
            try {
                const data = await DAKI_API.call('sessionInfo'); DAKI_SESSION = data.session;
                state.simulatedRole = DAKI_SESSION.is_owner ? 'owner' : ({super_admin:'rank_3',senior_mod:'rank_4',moderator:'rank_5',helper:'rank_6',watcher:'rank_7'}[DAKI_SESSION.role] || 'rank_7');
                const roleSelect = document.getElementById('role-simulator');
                if (roleSelect) { roleSelect.value = state.simulatedRole === 'owner' ? 'owner' : state.simulatedRole; roleSelect.disabled = true; roleSelect.title='الرتبة مأخوذة من جلسة Telegram الموثقة'; }
                const [business, bot] = await Promise.all([
                    DAKI_API.call('systemConfigGet',{system_scope:'business'}),
                    DAKI_API.call('systemConfigGet',{system_scope:'bot'})
                ]);
                if (business.config) { state.businessAccount.active = business.config.enabled !== '0'; }
                if (bot.config) { state.bot.active = bot.config.enabled !== '0'; state.bot.maintenanceMode = bot.config.maintenance === '1'; }
                renderCurrentScreen(false);
            } catch(e) { showToast(e.message || 'تعذر التحقق من الجلسة','danger'); }
        }

        const state = {
            lang: 'ar',
            simulatedRole: 'owner', // 'owner', 'rank_3', 'rank_5', 'rank_7'
            history: ['home'],
            currentTab: 'dashboard',
            subTab: 'private',
            botCmdFilter: 'all', // 'all', 'group', 'ai'
            ubCmdFilter: 'all',  // 'all', 'dm', 'group', 'tools'
            userSearchQuery: '',
            userFilterStatus: 'all', // 'all', 'active', 'banned'
            selectedRankId: 'rank_1',

            // [النظام الأول]: AI الحساب الشخصي (Telegram Business Account AI)
            businessAccount: {
                active: true,
                privateAutoReply: true,
                groupsAutoReply: false,
                handoffEnabled: true,
                handoffPauseHours: 10,
                tone: 'friendly',
                replyLength: 'medium',
                typingDelay: 3,
                stopOnManualReply: true,
                workingHours: '24/7',
                botName: 'DAKI مساعد السيدة Daki',
                thinkingStyle: 'تحليلي ولبق',
                temperature: 0.7,
                // إعدادات عامة متقدمة للحساب الشخصي
                autoReadMessages: false,
                replyToVoiceNotes: true,
                ignoreBotsAndChannels: true,
                autoArchiveMuted: false,
                rateLimitPerUser: 15,
                scheduleStart: '08:00',
                scheduleEnd: '23:00',
                awayAutoMessage: 'مرحباً! السيدة Daki في درس أو اجتماع حالياً، تم تسجيل رسالتك وسنرد عليك فور التفرغ.',
                systemPrompt: 'أنت المساعد الشخصي الذكي في حساب السيدة Daki على تيليجرام. رحب بالمتواصلين بلباقة واحترافية، أجب عن استفساراتهم بوضوح، وإذا طلب أحد التحدث مع السيدة Daki شخصياً أبلغه أنه تم إشعارها وسترد عليه قريباً.',
                bannedWords: ['إعلان', 'ترويج', 'كود خصم', 'روابط خارجية', 'سبام'],
                blockLinks: true,
                ignoreStickers: true,
                liveActivity: [
                    { user: 'زينب الموسوي', msg: 'مرحباً، متى تبدأ دورة اللغة الألمانية A1 الجديدة؟', reply: 'أهلاً زينب! التسجيل متاح حالياً ويمكنني تزويدك بكافة التفاصيل أو إبلاغ السيدة Daki للتواصل معك.', time: 'منذ دقيقتين' },
                    { user: 'مصطفى الكاظمي', msg: 'أريد التحدث مع السيدة Daki بخصوص ملف المنهج', reply: 'تم إرسال إشعار عاجل إلى السيدة Daki، وستقوم بالرد عليك شخصياً في أقرب وقت (تم إيقاف الرد الآلي 10 ساعات).', time: 'منذ 11 دقيقة' },
                    { user: 'نور الهدى', msg: 'شكراً جزيلاً على التوضيح السريع', reply: 'على الرحب والسعة يا نور، في خدمتك دائماً.', time: 'منذ 28 دقيقة' }
                ],
                // أوامر وقواعد تشغيل AI داخل حسابك الشخصي (موسّعة وشاملة)
                accountCommands: [
                    {
                        id: 'ub_cmd_1',
                        cmd: 'تفعيل الرد في الخاص (.ai_on)',
                        category: 'وضع التشغيل',
                        scope: 'dm',
                        desc: 'تشغيل استجابة الذكاء الاصطناعي التلقائية للرسائل الواردة إلى حسابك الشخصي بالنيابة عنك.',
                        active: true
                    },
                    {
                        id: 'ub_cmd_2',
                        cmd: 'إيقاف الرد عند تدخلي يدوياً',
                        category: 'التحكم الذكي',
                        scope: 'dm',
                        desc: 'عندما تكتب أنت رداً يدوياً لأي شخص في حسابك، يتوقف AI عن الرد في تلك المحادثة تلقائياً حتى لا يتقاطع مع كلامك.',
                        active: true
                    },
                    {
                        id: 'ub_cmd_3',
                        cmd: 'التحويل للمالك وإيقاف 10 ساعات',
                        category: 'Human Handoff',
                        scope: 'dm',
                        desc: 'إذا طلب المتحدث التواصل مع السيدة Daki شخصياً، يُرسل إشعار عاجل لك ويصمت AI في محادثته لمدة 10 ساعات (أو حتى يرسل /bot).',
                        active: true
                    },
                    {
                        id: 'ub_cmd_4',
                        cmd: 'محاكاة "يكتب الآن..." قبل الرد',
                        category: 'الواقعية',
                        scope: 'dm',
                        desc: 'إظهار حالة الكتابة الطبيعية لعدة ثوانٍ قبل إرسال رد AI في حسابك ليبدو التفاعل بشرياً وطبيعياً.',
                        active: true
                    },
                    {
                        id: 'ub_cmd_5',
                        cmd: 'وضع الانشغال والاجتماعات (.busy)',
                        category: 'الحالة الشخصية',
                        scope: 'dm',
                        desc: 'تفعيل رد اعتذار ذكي ومهذب يخبر المتواصلين في حسابك بأنك في درس أو اجتماع حالياً وسيتم الرد فور التفرغ.',
                        active: false
                    },
                    {
                        id: 'ub_cmd_6',
                        cmd: 'تلخيص المحادثات الطويلة (.summary)',
                        category: 'إنتاجية الحساب',
                        scope: 'tools',
                        desc: 'أمر سري تكتبه لنفسك داخل أي محادثة في حسابك ليقوم AI بتلخيص آخر 50 رسالة غير مقروءة لك فوراً.',
                        active: true
                    },
                    {
                        id: 'ub_cmd_7',
                        cmd: 'تعديل اسم الحساب والنبذة (.bio / .name)',
                        category: 'إدارة الهوية',
                        scope: 'tools',
                        desc: 'تحديث الاسم الشخصي أو النبذة التعريفية (Bio) لحسابك مباشرة عبر أمر سريع أو تلقائياً حسب جدول الدروس.',
                        active: true
                    },
                    {
                        id: 'ub_cmd_8',
                        cmd: 'حفظ الرسائل والوسائط المؤقتة (.save)',
                        category: 'الأرشفة الخاصة',
                        scope: 'tools',
                        desc: 'بالرد على أي رسالة أو وسائط ذاتية التدمير لحفظ نسخة فورية في رسائلك المحفوظة (Saved Messages).',
                        active: true
                    },
                    {
                        id: 'ub_cmd_9',
                        cmd: 'كشف معلومات المستخدم وسجله (.whois)',
                        category: 'استخبارات الحساب',
                        scope: 'tools',
                        desc: 'جلب ID الحساب، الاسم السابق، والمجموعات المشتركة معه في حسابك الشخصي عند الرد على رسالته.',
                        active: true
                    },
                    {
                        id: 'ub_cmd_10',
                        cmd: 'إذاعة مخصصة لجهات اتصال الخاص (.dm_cast)',
                        category: 'التواصل الجماعي',
                        scope: 'dm',
                        desc: 'إرسال تنبيه رسمي بأسلوب مهذب إلى المحادثات الخاصة النشطة في حسابك مع فاصل زمني آمن لتجنب القيود.',
                        active: false
                    },
                    {
                        id: 'ub_cmd_11',
                        cmd: 'حذف رسائلي في المحادثة (.purge_me)',
                        category: 'الخصوصية والتنظيف',
                        scope: 'tools',
                        desc: 'مسح آخر عدد محدد من رسائلك الصادرة في أي محادثة خاصة أو مجموعة بضغطة واحدة.',
                        active: true
                    },
                    {
                        id: 'ub_cmd_12',
                        cmd: 'الرد التلقائي على الرسائل الصوتية (.voice_ai)',
                        category: 'معالجة الوسائط',
                        scope: 'dm',
                        desc: 'تفريغ الرسائل الصوتية الواردة إلى حسابك نصياً وفهم محتواها والرد عليها بدقة عبر Workers AI.',
                        active: true
                    },
                    {
                        id: 'ub_cmd_13',
                        cmd: 'الترجمة الفورية المزدوجة (.tr_de / .tr_ar)',
                        category: 'أدوات اللغة',
                        scope: 'tools',
                        desc: 'ترجمة أي رسالة في حسابك بين الألمانية والعربية الفصحى فورياً قبل الإرسال أو عند القراءة.',
                        active: true
                    },
                    {
                        id: 'ub_cmd_14',
                        cmd: 'فحص سرعة السيرفر وحالة الاتصال (.ping)',
                        category: 'تشخيص النظام',
                        scope: 'tools',
                        desc: 'عرض زمن استجابة Cloudflare Workers، حالة ربط Business API، وعدد الطلبات اليومية.',
                        active: true
                    }
                ],
                groups: [
                    {
                        id: '-10018492011',
                        name: 'مجموعة طلاب مدرسة داكي - Daki-Schule',
                        members: 1420,
                        aiEnabled: true,
                        behavior: 'عند الذكر أو الرد فقط',
                        admins: ['@Daakkiiii', '@Sara_Admin', '@Omar_Helper'],
                        dailyReplies: 84
                    },
                    {
                        id: '-10019283745',
                        name: 'نادي المحادثة الألمانية A1-A2',
                        members: 3850,
                        aiEnabled: false,
                        behavior: 'وضع المراقبة الصامتة',
                        admins: ['@Daakkiiii', '@Noura_M'],
                        dailyReplies: 0
                    },
                    {
                        id: '-10015543219',
                        name: 'فريق إعداد المناهج والملفات',
                        members: 14,
                        aiEnabled: true,
                        behavior: 'تفاعل ذكي كامل',
                        admins: ['@Daakkiiii', '@Lead_Editor'],
                        dailyReplies: 42
                    }
                ],
                accountUsers: [
                    { id: '519283741', name: 'زينب الموسوي', username: '@zainab_m', messages: 142, firstSeen: '2026-01-12', bannedFromAccount: false, handoffPaused: false, color: 'from-cyan-500 to-blue-600' },
                    { id: '628391022', name: 'مصطفى الكاظمي', username: '@mustafa_k', messages: 89, firstSeen: '2026-02-04', bannedFromAccount: false, handoffPaused: true, color: 'from-purple-500 to-indigo-600' },
                    { id: '739102933', name: 'علي الهاشمي', username: '@ali_hashim', messages: 310, firstSeen: '2025-11-20', bannedFromAccount: false, handoffPaused: false, color: 'from-emerald-500 to-teal-600' },
                    { id: '849201924', name: 'حساب إعلاني مزعج', username: '@promo_spam99', messages: 15, firstSeen: '2026-03-01', bannedFromAccount: true, handoffPaused: false, color: 'from-rose-500 to-red-600' },
                    { id: '910293845', name: 'نور الهدى', username: '@noor_huda', messages: 64, firstSeen: '2026-03-15', bannedFromAccount: false, handoffPaused: false, color: 'from-amber-500 to-orange-600' },
                    { id: '102938476', name: 'حسين الجبوري', username: '@hussein_j', messages: 205, firstSeen: '2025-12-10', bannedFromAccount: false, handoffPaused: false, color: 'from-sky-500 to-indigo-600' },
                    { id: '293847567', name: 'مريم الساعدي', username: '@mariam_s', messages: 47, firstSeen: '2026-04-02', bannedFromAccount: false, handoffPaused: false, color: 'from-fuchsia-500 to-purple-600' },
                    { id: '384756198', name: 'يوسف الشمري', username: '@yousef_sh', messages: 118, firstSeen: '2026-01-28', bannedFromAccount: false, handoffPaused: false, color: 'from-teal-500 to-emerald-600' }
                ]
            },

            // [النظام الثاني]: البوت المستقل (DakiSchuleBot)
            bot: {
                active: true,
                botUsername: '@DakiSchuleBot',
                botDisplayName: 'DakiSchuleBot AI',
                botModel: 'Cloudflare Workers AI (Llama-3.3-70B)',
                maxTokens: 2048,
                botPersonality: 'بوت تعليمي وخدمي رسمي لمدرسة داكي، يجيب عن أسئلة الطلاب بدقة ويدير المجموعات بكفاءة.',
                // إعدادات عامة متقدمة للبوت
                antiSpam: true,
                floodLimitPerMin: 8,
                floodMuteMinutes: 60,
                forceSub: false,
                forceSubChannel: '@DakiSchuleChannel',
                maintenanceMode: false,
                maintenanceMessage: 'البوت في وضع الصيانة والتحديث حالياً، سنعود للعمل خلال دقائق معدودة.',
                logsChannelId: '-10099887766',
                logEventsEnabled: true,
                allowPrivateChat: true,
                allowGroupChat: true,
                groupResponseMode: 'mention_or_reply', // 'all', 'mention_or_reply', 'commands_only'
                welcomeText: 'أهلاً بك {name} في مجموعة {chat}! يرجى الالتزام بقوانين المدرسة.',
                autoDeleteServiceMsgs: true,
                // مستخدمو البوت فقط (الذين أرسلوا /start للبوت)
                botUsers: [
                    { id: '998123411', name: 'عبدالرحمن السالم', username: '@abdulrahman_s', messages: 54, startDate: '2026-02-10', bannedFromBot: false },
                    { id: '887234522', name: 'فاطمة الزهراء', username: '@fatima_z', messages: 120, startDate: '2026-01-18', bannedFromBot: false },
                    { id: '776345633', name: 'سبام بوت آلي', username: '@bot_flooder', messages: 400, startDate: '2026-08-01', bannedFromBot: true },
                    { id: '665456744', name: 'فيصل الحربي', username: '@faisal_h', messages: 33, startDate: '2026-04-14', bannedFromBot: false },
                    { id: '554567855', name: 'شهد المطيري', username: '@shahad_m', messages: 78, startDate: '2026-05-09', bannedFromBot: false },
                    { id: '443678966', name: 'بدر العلي', username: '@bader_ali', messages: 19, startDate: '2026-09-12', bannedFromBot: false },
                    { id: '332789077', name: 'سجاد الربيعي', username: '@sajjad_r', messages: 92, startDate: '2026-06-21', bannedFromBot: false }
                ],
                // أوامر البوت في المجموعات + قيود البوت الذكية (موسّعة بالكامل)
                botCommands: [
                    {
                        id: 'bc_g1',
                        cmd: 'نظام التحذيرات التلقائي (/warn • /unwarn • /warns)',
                        category: 'أوامر المجموعات • الرقابة',
                        scope: 'group',
                        desc: 'توجيه تحذير للعضو المخالف في المجموعة، وعند بلوغ 3 تحذيرات يتم كتمه أو حظره تلقائياً.',
                        minRank: 5,
                        enabled: true
                    },
                    {
                        id: 'bc_g2',
                        cmd: 'حظر وكتم وطرد الأعضاء (/ban • /mute • /kick)',
                        category: 'أوامر المجموعات • العقوبات',
                        scope: 'group',
                        desc: 'تقييد أو طرد أو حظر المخالفين مع دعم تحديد المدة الزمنية مثل (10m, 2h, 1d) بالرد على الرسالة.',
                        minRank: 4,
                        enabled: true
                    },
                    {
                        id: 'bc_g3',
                        cmd: 'تنظيف وحذف الرسائل الجماعي (/purge • /del)',
                        category: 'أوامر المجموعات • التنظيف',
                        scope: 'group',
                        desc: 'حذف عدد محدد من الرسائل دفعة واحدة أو مسح جميع الرسائل من الرسالة المُشار إليها حتى اللحظة.',
                        minRank: 4,
                        enabled: true
                    },
                    {
                        id: 'bc_g4',
                        cmd: 'قفل وفتح الدردشة والوسائط (/lock • /unlock)',
                        category: 'أوامر المجموعات • الحماية',
                        scope: 'group',
                        desc: 'قفل أو فتح الدردشة بالكامل، الصور، الفيديو، الملصقات، التوجيه، أو البوتات داخل المجموعة فوراً.',
                        minRank: 3,
                        enabled: true
                    },
                    {
                        id: 'bc_g5',
                        cmd: 'تقييد وحذف الروابط والمعرفات (/lock_links)',
                        category: 'أوامر المجموعات • الروابط',
                        scope: 'group',
                        desc: 'منع إرسال الروابط الخارجية والمعرفات (@) وحذفها فوراً مع إرسال تنبيه مختصر للعضو.',
                        minRank: 4,
                        enabled: true
                    },
                    {
                        id: 'bc_g6',
                        cmd: 'المنشن الجماعي للأعضاء (/tagall • @all)',
                        category: 'أوامر المجموعات • التفاعل',
                        scope: 'group',
                        desc: 'إرسال تنبيه جماعي منظم لأعضاء المجموعة عند الإعلانات الهامة أو بدء الدروس (للمشرفين فقط).',
                        minRank: 3,
                        enabled: true
                    },
                    {
                        id: 'bc_g7',
                        cmd: 'تثبيت وإلغاء تثبيت الرسائل (/pin • /unpin)',
                        category: 'أوامر المجموعات • الإدارة',
                        scope: 'group',
                        desc: 'تثبيت الرسائل الهامة في أعلى المجموعة مع خيار إرسال إشعار صامت أو صوتي للأعضاء.',
                        minRank: 5,
                        enabled: true
                    },
                    {
                        id: 'bc_g8',
                        cmd: 'قوانين المجموعة التفاعلية (/rules • /setrules)',
                        category: 'أوامر المجموعات • التنظيم',
                        scope: 'group',
                        desc: 'عرض قوانين المجموعة المعتمدة للأعضاء أو تحديثها مباشرة من داخل المجموعة أو لوحة التحكم.',
                        minRank: 3,
                        enabled: true
                    },
                    {
                        id: 'bc_g9',
                        cmd: 'كشف معلومات العضو والمجموعة (/id • /info)',
                        category: 'أوامر المجموعات • الاستعلام',
                        scope: 'group',
                        desc: 'عرض آيدي العضو، آيدي المجموعة، رتبته الإدارية، وعدد تحذيراته الحالية في المجموعة.',
                        minRank: 7,
                        enabled: true
                    },
                    {
                        id: 'bc_g10',
                        cmd: 'الوضع الليلي التلقائي للمجموعة (/nightmode)',
                        category: 'أوامر المجموعات • الجدولة',
                        scope: 'group',
                        desc: 'قفل إرسال الرسائل والوسائط تلقائياً في ساعات الليل المتأخرة وإعادة فتحها صباحاً.',
                        minRank: 3,
                        enabled: false
                    },
                    {
                        id: 'bc_g11',
                        cmd: 'منع البوتات المضافة عشوائياً (/antibots)',
                        category: 'أوامر المجموعات • الأمان',
                        scope: 'group',
                        desc: 'طرد أي بوت خارجي يتم إضافته للمجموعة من قبل الأعضاء غير المصرح لهم فوراً.',
                        minRank: 3,
                        enabled: true
                    },
                    {
                        id: 'bc_1',
                        cmd: 'منع البوت من قول مواضيع محظورة (/block_topic)',
                        category: 'قيود الذكاء الاصطناعي',
                        scope: 'ai',
                        desc: 'إجبار البوت على رفض الإجابة أو ذكر أي كلمات أو مواضيع سياسية أو منافسة أو خارج نطاق التعليم.',
                        minRank: 3,
                        enabled: true
                    },
                    {
                        id: 'bc_3',
                        cmd: 'منع البوت من إعطاء وعود مالية أو خصومات (/no_promises)',
                        category: 'قيود الذكاء الاصطناعي',
                        scope: 'ai',
                        desc: 'تقييد ذكاء البوت بحيث لا يلتزم بأي أسعار أو خصومات أو مواعيد غير معتمدة في قاعدة التعليمات.',
                        minRank: 2,
                        enabled: true
                    },
                    {
                        id: 'bc_4',
                        cmd: 'قفل التكرار والسبام المتتالي (/anti_flood)',
                        category: 'أمان البوت والمجموعات',
                        scope: 'group',
                        desc: 'كتم العضو تلقائياً لمدة ساعة إذا أرسل أكثر من 5 رسائل متتالية خلال 10 ثوانٍ لإغراق البوت.',
                        minRank: 5,
                        enabled: true
                    },
                    {
                        id: 'bc_5',
                        cmd: 'منع البوت من الخروج عن النص التعليمي (/strict_scope)',
                        category: 'قيود الذكاء الاصطناعي',
                        scope: 'ai',
                        desc: 'إلزام البوت بالإجابة في حدود اللغة الألمانية وخدمات المدرسة فقط ورفض الدردشة العشوائية.',
                        minRank: 3,
                        enabled: true
                    }
                ],
                botGroups: [
                    {
                        id: '-10022334455',
                        name: 'الدعم الفني الرسمي - DakiSchuleBot',
                        members: 5210,
                        behavior: 'متفاعل دائماً (All Messages)',
                        protectLinks: true,
                        welcomeMsg: true
                    },
                    {
                        id: '-10033445566',
                        name: 'تمارين وقواعد اللغة الألمانية',
                        members: 2890,
                        behavior: 'عند المنشن أو الرد فقط (@DakiSchuleBot)',
                        protectLinks: true,
                        welcomeMsg: false
                    },
                    {
                        id: '-10044556677',
                        name: 'مجموعة الاختبارات التجريبية Goethe',
                        members: 9400,
                        behavior: 'وضع الحماية فقط (بدون دردشة AI)',
                        protectLinks: true,
                        welcomeMsg: true
                    }
                ],
                instructions: [
                    {
                        id: 101,
                        trigger: 'الكورسات / الاشتراك / الرسوم',
                        response: 'أهلاً بك في Daki-Schule! تتوفر لدينا دورات A1 و A2 تفاعلية مع حقائب PDF شاملة. تواصل مع الإدارة عبر القائمة الرئيسية.',
                        type: 'إجابة إجبارية'
                    },
                    {
                        id: 102,
                        trigger: 'من هو مطورك / المالك؟',
                        response: 'أنا بوت DakiSchuleBot الرسمي التابع لمدرسة داكي بإدارة السيدة Daki (@Daakkiiii).',
                        type: 'توجيه هوية'
                    },
                    {
                        id: 103,
                        trigger: 'نشر روابط خارجية أو سبام',
                        response: 'يُمنع منعاً باتاً نشر الروابط الخارجية داخل مجموعات المدرسة. تم حذف الرسالة وتسجيل تنبيه.',
                        type: 'قاعدة حماية'
                    }
                ]
            },

            // نظام الرتب السبع (7 Ranks RBAC System)
            ranks: [
                {
                    id: 'rank_1',
                    level: 1,
                    name: 'المالك الأعلى (Owner)',
                    icon: 'fa-crown',
                    color: 'text-amber-400',
                    permissions: {
                        ban_users: true, mute_users: true, kick_users: true, delete_messages: true,
                        edit_bot_commands: true, edit_instructions: true, promote_lower: true,
                        broadcast_msg: true, view_stats: true, manage_groups: true, toggle_ai: true
                    }
                },
                {
                    id: 'rank_2',
                    level: 2,
                    name: 'نائب المالك (Co-Owner)',
                    icon: 'fa-shield-halved',
                    color: 'text-purple-400',
                    permissions: {
                        ban_users: true, mute_users: true, kick_users: true, delete_messages: true,
                        edit_bot_commands: true, edit_instructions: true, promote_lower: true,
                        broadcast_msg: true, view_stats: true, manage_groups: true, toggle_ai: true
                    }
                },
                {
                    id: 'rank_3',
                    level: 3,
                    name: 'مدير عام (Super Admin)',
                    icon: 'fa-star',
                    color: 'text-amoled-neon',
                    permissions: {
                        ban_users: true, mute_users: true, kick_users: true, delete_messages: true,
                        edit_bot_commands: false, edit_instructions: true, promote_lower: true,
                        broadcast_msg: false, view_stats: true, manage_groups: true, toggle_ai: true
                    }
                },
                {
                    id: 'rank_4',
                    level: 4,
                    name: 'مشرف متقدم (Senior Mod)',
                    icon: 'fa-bolt',
                    color: 'text-cyan-400',
                    permissions: {
                        ban_users: true, mute_users: true, kick_users: true, delete_messages: true,
                        edit_bot_commands: false, edit_instructions: true, promote_lower: false,
                        broadcast_msg: false, view_stats: true, manage_groups: false, toggle_ai: false
                    }
                },
                {
                    id: 'rank_5',
                    level: 5,
                    name: 'مشرف (Moderator)',
                    icon: 'fa-user-shield',
                    color: 'text-emerald-400',
                    permissions: {
                        ban_users: false, mute_users: true, kick_users: true, delete_messages: true,
                        edit_bot_commands: false, edit_instructions: false, promote_lower: false,
                        broadcast_msg: false, view_stats: true, manage_groups: false, toggle_ai: false
                    }
                },
                {
                    id: 'rank_6',
                    level: 6,
                    name: 'مساعد إداري (Helper)',
                    icon: 'fa-headset',
                    color: 'text-teal-400',
                    permissions: {
                        ban_users: false, mute_users: true, kick_users: false, delete_messages: false,
                        edit_bot_commands: false, edit_instructions: false, promote_lower: false,
                        broadcast_msg: false, view_stats: true, manage_groups: false, toggle_ai: false
                    }
                },
                {
                    id: 'rank_7',
                    level: 7,
                    name: 'مراقب / عضو مميز (Watcher)',
                    icon: 'fa-eye',
                    color: 'text-pink-400',
                    permissions: {
                        ban_users: false, mute_users: false, kick_users: false, delete_messages: false,
                        edit_bot_commands: false, edit_instructions: false, promote_lower: false,
                        broadcast_msg: false, view_stats: true, manage_groups: false, toggle_ai: false
                    }
                }
            ]
        };

        // ترجمة الصلاحيات للعربية
        const permissionLabels = {
            ban_users: { label: 'حظر المستخدمين', desc: 'حظر الأعضاء نهائياً من البوت أو المجموعات' },
            mute_users: { label: 'كتم الأعضاء', desc: 'تقييد ومنع العضو من الكتابة مؤقتاً' },
            kick_users: { label: 'طرد الأعضاء', desc: 'إخراج العضو من المجموعة فوراً' },
            delete_messages: { label: 'مسح الرسائل', desc: 'حذف الرسائل المخالفة في المجموعات' },
            edit_bot_commands: { label: 'إدارة أوامر وقيود البوت', desc: 'تفعيل أو تعطيل وإضافة أوامر البوت وتقييد الروابط' },
            edit_instructions: { label: 'تعديل تعليمات البوت', desc: 'إضافة وحذف قواعد الرد الإجباري' },
            promote_lower: { label: 'إضافة / تعديل الرتب', desc: 'تعديل صلاحيات الرتب الأدنى ومنحها للأعضاء' },
            broadcast_msg: { label: 'إذاعة الرسائل', desc: 'إرسال رسائل جماعية لجميع مشتركي البوت' },
            view_stats: { label: 'عرض الإحصائيات', desc: 'الاطلاع على تقارير الرسائل ونشاط البوت' },
            manage_groups: { label: 'التحكم بالمجموعات', desc: 'تغيير سلوك البوت وحماية المجموعات' },
            toggle_ai: { label: 'تشغيل / إيقاف AI البوت', desc: 'التحكم في حالة عمل محرك الذكاء الاصطناعي للبوت' }
        };

        // قاموس اللغات
        const i18n = {
            ar: {
                dir: 'rtl',
                app_title: 'مركز قيادة DAKI AI',
                status_online: 'نظام سحابي معزول فائق السرعة',
                welcome_title: 'بوابة التحكم الذكية في تيليجرام',
                welcome_desc: 'تحكم كامل ومنفصل بين الذكاء الاصطناعي المرتبط بحسابك الشخصي (Telegram Business) وبوت DakiSchuleBot بواجهة AMOLED داكنة.',
                owner_card_title: 'المالك (Owner AI)',
                owner_card_desc: 'الوصول الجذري لذكاء الحساب الشخصي، أوامر الخاص، المجموعات، وإعدادات البوت والرتب.',
                admin_card_title: 'المسؤولين (Admins)',
                admin_card_desc: 'لوحة إدارة بوت DakiSchuleBot والمشتركين والمجموعات مخصصة للمشرفين حسب صلاحيات كل رتبة.',
                choose_section: 'اختر بوابة الدخول للمتابعة:',
                owner_sub_title: 'بوابة المالك المركزية',
                owner_sub_desc: 'اختر النظام الذي تود إدارته الآن. يعمل كل نظام بقاعدة بيانات ومستخدمين وأوامر مستقلة تماماً.',
                userbot_title: 'AI المرتبط بحسابي (Business Account)',
                userbot_desc: 'الرد التلقائي في رسائلك الخاصة، إدارة مجموعات حسابك، التلقين الشخصي، وحظر المزعجين عن حسابك فقط.',
                bot_title: 'البوت وأوامره (DakiSchuleBot)',
                bot_desc: 'إدارة بوت تيليجرام المستقل، مشتركي /start، أوامر البوت، التعليمات الإجبارية، ونظام الرتب الـ 7.'
            },
            en: {
                dir: 'ltr',
                app_title: 'DAKI AI Command Center',
                status_online: 'Isolated Ultra-Fast Cloud Core',
                welcome_title: 'Smart Telegram AI Gateway',
                welcome_desc: 'Complete isolated control over your Telegram Business Account AI and DakiSchuleBot in an AMOLED ultra-dark interface.',
                owner_card_title: 'Owner (Owner AI)',
                owner_card_desc: 'Root access to personal account AI, private DMs, groups, and core bot & rank settings.',
                admin_card_title: 'Admins Panel (Staff)',
                admin_card_desc: 'Bot management, subscribers, and moderation tools dynamically restricted by rank.',
                choose_section: 'Select an entry gateway:',
                owner_sub_title: 'Owner Master Portal',
                owner_sub_desc: 'Select which AI system to manage. Each operates with completely isolated data, users, and commands.',
                userbot_title: 'Personal Account AI (Business)',
                userbot_desc: 'Auto-reply in private DMs, manage account groups, custom prompt, and isolated user bans.',
                bot_title: 'Official Bot & Commands (Bot AI)',
                bot_desc: 'Manage DakiSchuleBot, /start users, bot commands, forced instructions, and 7 ranks.'
            },
            ru: {
                dir: 'ltr',
                app_title: 'Центр управления DAKI AI',
                status_online: 'Облачное ядро активно',
                welcome_title: 'Умный шлюз Telegram AI',
                welcome_desc: 'Полный изолированный контроль над ИИ личного аккаунта и ботом DakiSchuleBot в стиле AMOLED Dark.',
                owner_card_title: 'Владелец (Owner AI)',
                owner_card_desc: 'Полный доступ к ИИ личного аккаунта, личным сообщениям, группам и настройкам бота.',
                admin_card_title: 'Администраторы (Admins)',
                admin_card_desc: 'Управление ботом и пользователями в соответствии с правами вашего ранга.',
                choose_section: 'Выберите раздел для входа:',
                owner_sub_title: 'Портал Владельца',
                owner_sub_desc: 'Выберите систему ИИ для настройки. Каждая система работает независимо.',
                userbot_title: 'ИИ личного аккаунта (Business)',
                userbot_desc: 'Автоответы в ЛС, управление группами аккаунта, системный промпт и блокировки.',
                bot_title: 'Бот и его команды (DakiSchuleBot)',
                bot_desc: 'Управление ботом, подписчиками /start, командами, инструкциями и 7 рангами.'
            }
        };

        // ==========================================
        // 2. دوال المساعدة والتنقل المستقر بدون قفزات
        // ==========================================
        function t(key) {
            return i18n[state.lang][key] || i18n['ar'][key] || key;
        }

        function showToast(message, type = 'success') {
            const toast = document.getElementById('tg-toast');
            const text = document.getElementById('toast-text');
            const icon = document.getElementById('toast-icon');
            
            text.textContent = message;
            if (type === 'danger') {
                icon.className = 'fa-solid fa-ban text-amoled-danger';
            } else if (type === 'info') {
                icon.className = 'fa-solid fa-circle-info text-amoled-neon';
            } else {
                icon.className = 'fa-solid fa-circle-check text-amoled-success';
            }

            toast.classList.remove('hidden');
            clearTimeout(window.toastTimer);
            window.toastTimer = setTimeout(() => toast.classList.add('hidden'), 2600);
        }

        function copyToClipboard(text, label = 'الأيدي') {
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(text).then(() => {
                    showToast(`تم نسخ ${label}: ${text}`, 'info');
                }).catch(() => fallbackCopy(text, label));
            } else {
                fallbackCopy(text, label);
            }
        }

        function fallbackCopy(text, label) {
            const tempInput = document.createElement('input');
            tempInput.value = text;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            showToast(`تم نسخ ${label}: ${text}`, 'info');
        }

        function changeLanguage(lang) {
            state.lang = lang;
            const html = document.documentElement;
            html.lang = lang;
            html.dir = i18n[lang].dir;
            
            const backIcon = document.getElementById('back-icon');
            if (backIcon) {
                backIcon.className = i18n[lang].dir === 'rtl' ? 'fa-solid fa-arrow-right text-base' : 'fa-solid fa-arrow-left text-base';
            }
            renderCurrentScreen(false);
        }

        function changeSimulatedRole(role) {
            if (DAKI_SESSION) { showToast('لا يمكن محاكاة الرتب؛ الصلاحية تؤخذ من حساب Telegram الموثق','danger'); return; }
            state.simulatedRole = role;
            const currentScreen = state.history[state.history.length - 1];
            
            if (role !== 'owner' && (currentScreen.startsWith('owner') || currentScreen.startsWith('userbot') || currentScreen.startsWith('bot_owner'))) {
                state.history = ['home'];
                showToast('تم التبديل لوضع المسؤول وإغلاق بوابة المالك تلقائياً', 'info');
            } else {
                showToast('تم تحديث رتبة المحاكاة بنجاح', 'info');
            }
            renderCurrentScreen(true);
        }

        function getCurrentUserRankObj() {
            if (state.simulatedRole === 'owner') return state.ranks[0];
            return state.ranks.find(r => r.id === state.simulatedRole) || state.ranks[4];
        }

        function navigateTo(screen, defaultTab = 'dashboard') {
            state.history.push(screen);
            state.currentTab = defaultTab;
            if (defaultTab === 'commands') {
                state.subTab = (screen === 'userbot_panel') ? 'private' : 'bot_cmds';
            } else if (defaultTab === 'settings') {
                state.subTab = (screen === 'userbot_panel') ? 'behavior' : 'ranks';
            }
            state.userSearchQuery = '';
            state.userFilterStatus = 'all';
            renderCurrentScreen(true);
        }

        function goBack() {
            if (state.history.length > 1) {
                state.history.pop();
                state.currentTab = 'dashboard';
                state.userSearchQuery = '';
                state.userFilterStatus = 'all';
                renderCurrentScreen(true);
            }
        }

        function handleOwnerEntry() {
            if (state.simulatedRole !== 'owner') {
                const rankObj = getCurrentUserRankObj();
                document.getElementById('modal-current-role-name').textContent = rankObj.name;
                document.getElementById('access-denied-modal').classList.remove('hidden');
                return;
            }
            navigateTo('owner_hub');
        }

        function closeDeniedModal() {
            document.getElementById('access-denied-modal').classList.add('hidden');
        }

        function goToAdminFromModal() {
            closeDeniedModal();
            navigateTo('admin_panel', 'dashboard');
        }

        function generateSparklineSVG(colorHex = '#2AABEE', gradientId = 'grad1') {
            return `
                <svg viewBox="0 0 240 55" class="w-full h-14 overflow-visible mt-2">
                    <defs>
                        <linearGradient id="${gradientId}" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="${colorHex}" stop-opacity="0.38"/>
                            <stop offset="100%" stop-color="${colorHex}" stop-opacity="0.0"/>
                        </linearGradient>
                    </defs>
                    <path d="M0,45 Q30,38 55,25 T110,28 T165,12 T240,6 L240,55 L0,55 Z" fill="url(#${gradientId})" />
                    <path d="M0,45 Q30,38 55,25 T110,28 T165,12 T240,6" fill="none" stroke="${colorHex}" stroke-width="2.5" stroke-linecap="round" />
                    <circle cx="240" cy="6" r="3.5" fill="#ffffff" stroke="${colorHex}" stroke-width="2" />
                </svg>
            `;
        }

        // ==========================================
        // 3. الموجه الرئيسي للشاشات (Stabilized Screen Router)
        // ==========================================
        function renderCurrentScreen(resetScroll = false) {
            const currentScreen = state.history[state.history.length - 1];
            const backBtn = document.getElementById('global-back-btn');
            const bottomNav = document.getElementById('bottom-nav');
            const headerTitle = document.getElementById('header-title');
            const headerSubtitle = document.getElementById('header-subtitle');
            const headerAvatar = document.getElementById('header-avatar');

            // تحديث شريط الحالة العلوي
            const ubStatusEl = document.getElementById('top-ub-status');
            const ubDotEl = document.getElementById('top-ub-dot');
            ubStatusEl.textContent = state.businessAccount.active ? 'متصل' : 'متوقف';
            ubStatusEl.className = state.businessAccount.active ? 'text-amoled-success font-bold' : 'text-amoled-danger font-bold';
            ubDotEl.className = `w-2 h-2 rounded-full ${state.businessAccount.active ? 'bg-amoled-success' : 'bg-amoled-danger'}`;

            const botStatusEl = document.getElementById('top-bot-status');
            const botDotEl = document.getElementById('top-bot-dot');
            botStatusEl.textContent = state.bot.active ? 'نشط' : 'متوقف';
            botStatusEl.className = state.bot.active ? 'text-amoled-neon font-bold' : 'text-amoled-danger font-bold';
            botDotEl.className = `w-2 h-2 rounded-full ${state.bot.active ? 'bg-amoled-neon' : 'bg-amoled-danger'}`;

            if (state.history.length > 1) {
                backBtn.classList.remove('hidden');
            } else {
                backBtn.classList.add('hidden');
            }

            bottomNav.classList.add('hidden');

            switch (currentScreen) {
                case 'home':
                    headerTitle.textContent = t('app_title');
                    headerSubtitle.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-amoled-success animate-ping"></span><span>${t('status_online')}</span>`;
                    headerAvatar.innerHTML = `<i class="fa-solid fa-paper-plane"></i>`;
                    renderHomeScreen();
                    break;

                case 'owner_hub':
                    headerTitle.textContent = t('owner_sub_title');
                    headerSubtitle.innerHTML = `<span class="text-amoled-gold font-bold">Owner AI • صلاحية جذرية</span>`;
                    headerAvatar.innerHTML = `<i class="fa-solid fa-crown text-amber-300"></i>`;
                    renderOwnerHubScreen();
                    break;

                case 'userbot_panel':
                    headerTitle.textContent = 'AI الحساب الشخصي (Business)';
                    headerSubtitle.innerHTML = `<span class="text-amoled-success font-bold">إدارة عمل AI داخل حسابك الشخصي</span>`;
                    headerAvatar.innerHTML = `<i class="fa-solid fa-user-astronaut"></i>`;
                    bottomNav.classList.remove('hidden');
                    renderUserbotBottomNav();
                    renderUserbotScreen();
                    break;

                case 'bot_owner_panel':
                    headerTitle.textContent = 'البوت وأوامره (DakiSchuleBot)';
                    headerSubtitle.innerHTML = `<span class="text-amoled-neon font-bold">Bot API • تحكم المالك</span>`;
                    headerAvatar.innerHTML = `<i class="fa-solid fa-robot"></i>`;
                    bottomNav.classList.remove('hidden');
                    renderBotBottomNav(true);
                    renderBotManagementScreen(true);
                    break;

                case 'admin_panel':
                    const rankObj = getCurrentUserRankObj();
                    headerTitle.textContent = 'لوحة المسؤولين (Admins)';
                    headerSubtitle.innerHTML = `<span class="${rankObj.color} font-bold"><i class="fa-solid ${rankObj.icon} ml-1"></i> ${rankObj.name}</span>`;
                    headerAvatar.innerHTML = `<i class="fa-solid fa-user-shield"></i>`;
                    bottomNav.classList.remove('hidden');
                    renderBotBottomNav(false);
                    renderBotManagementScreen(false);
                    break;
            }

            if (resetScroll) {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
        }

        // ==========================================
        // 4. الشاشة الأولى: شاشة البداية (Welcome Gateway)
        // ==========================================
        function renderHomeScreen() {
            const container = document.getElementById('main-container');
            const isOwner = state.simulatedRole === 'owner';
            const currentRank = getCurrentUserRankObj();

            container.innerHTML = `
                <div class="p-4 sm:p-6 space-y-6 screen-fade max-w-2xl mx-auto w-full my-auto">
                    
                    <div class="glass-card rounded-3xl p-5 sm:p-6 relative overflow-hidden">
                        <div class="absolute -top-12 -left-12 w-36 h-36 bg-amoled-neon/15 rounded-full blur-2xl"></div>
                        <div class="absolute -bottom-12 -right-12 w-36 h-36 bg-amoled-purple/15 rounded-full blur-2xl"></div>
                        
                        <div class="flex items-start gap-4 relative z-10">
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amoled-neon to-amoled-purple flex items-center justify-center text-white text-2xl shrink-0 shadow-lg neon-glow">
                                <i class="fa-solid fa-wand-magic-sparkles"></i>
                            </div>
                            <div class="space-y-1.5">
                                <div class="flex items-center gap-2 flex-wrap">
                                    <h2 class="text-lg sm:text-xl font-extrabold text-white">${t('welcome_title')}</h2>
                                    <span class="text-[10px] bg-amoled-neon/20 text-amoled-neon border border-amoled-neon/30 px-2.5 py-0.5 rounded-full font-mono font-bold">AMOLED PRO</span>
                                </div>
                                <p class="text-xs sm:text-sm text-amoled-muted leading-relaxed">
                                    ${t('welcome_desc')}
                                </p>
                            </div>
                        </div>

                        <div class="mt-5 pt-4 border-t border-white/[0.07] grid grid-cols-3 gap-2.5 text-center relative z-10">
                            <div class="bg-amoled-bg/80 border border-white/[0.05] rounded-2xl p-2.5">
                                <span class="block text-[10px] text-amoled-muted">ذكاء الحساب</span>
                                <span class="text-xs font-extrabold text-amoled-success flex items-center justify-center gap-1 mt-1">
                                    <i class="fa-solid fa-user-astronaut text-[10px]"></i> Business AI
                                </span>
                            </div>
                            <div class="bg-amoled-bg/80 border border-white/[0.05] rounded-2xl p-2.5">
                                <span class="block text-[10px] text-amoled-muted">البوت المستقل</span>
                                <span class="text-xs font-extrabold text-amoled-neon flex items-center justify-center gap-1 mt-1">
                                    <i class="fa-solid fa-robot text-[10px]"></i> DakiSchuleBot
                                </span>
                            </div>
                            <div class="bg-amoled-bg/80 border border-white/[0.05] rounded-2xl p-2.5">
                                <span class="block text-[10px] text-amoled-muted">هوية الجلسة</span>
                                <span class="text-xs font-extrabold ${isOwner ? 'text-amoled-gold' : 'text-purple-400'} truncate block mt-1">
                                    ${isOwner ? 'Owner AI' : currentRank.name.split('(')[0]}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="px-1 flex items-center justify-between">
                        <span class="text-xs font-extrabold text-amoled-neon uppercase tracking-wider">${t('choose_section')}</span>
                        <span class="text-[11px] text-amoled-muted">اضغط على البطاقة للدخول</span>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button onclick="handleOwnerEntry()" class="group text-start glass-card glass-card-hover rounded-3xl p-5 relative overflow-hidden ${isOwner ? 'gold-glow' : ''}">
                            <div class="absolute top-4 left-4">
                                ${isOwner 
                                    ? '<span class="bg-amber-500/15 text-amoled-gold text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-amber-500/30">مُصرح لك</span>' 
                                    : '<span class="bg-amoled-danger/15 text-amoled-danger text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-amoled-danger/30"><i class="fa-solid fa-lock ml-1"></i>للمالك فقط</span>'
                                }
                            </div>
                            
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/5 border border-amber-500/30 flex items-center justify-center text-amoled-gold text-2xl mb-4">
                                <i class="fa-solid fa-crown"></i>
                            </div>
                            
                            <h3 class="text-base font-extrabold text-white mb-1.5 group-hover:text-amoled-gold transition-colors">
                                ${t('owner_card_title')}
                            </h3>
                            <p class="text-xs text-amoled-muted leading-relaxed mb-5">
                                ${t('owner_card_desc')}
                            </p>
                            
                            <div class="flex items-center justify-between text-xs font-extrabold text-amoled-gold pt-3 border-t border-white/[0.06]">
                                <span>دخول بوابة المالك</span>
                                <i class="fa-solid fa-chevron-left"></i>
                            </div>
                        </button>

                        <button onclick="navigateTo('admin_panel', 'dashboard')" class="group text-start glass-card glass-card-hover rounded-3xl p-5 relative overflow-hidden">
                            <div class="absolute top-4 left-4">
                                <span class="bg-amoled-neon/15 text-amoled-neon text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-amoled-neon/30">
                                    7 رتب تفاعلية
                                </span>
                            </div>

                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amoled-neon/20 to-amoled-purple/10 border border-amoled-neon/30 flex items-center justify-center text-amoled-neon text-2xl mb-4">
                                <i class="fa-solid fa-user-shield"></i>
                            </div>
                            
                            <h3 class="text-base font-extrabold text-white mb-1.5 group-hover:text-amoled-neon transition-colors">
                                ${t('admin_card_title')}
                            </h3>
                            <p class="text-xs text-amoled-muted leading-relaxed mb-5">
                                ${t('admin_card_desc')}
                            </p>
                            
                            <div class="flex items-center justify-between text-xs font-extrabold text-amoled-neon pt-3 border-t border-white/[0.06]">
                                <span>دخول لوحة المسؤولين</span>
                                <i class="fa-solid fa-chevron-left"></i>
                            </div>
                        </button>
                    </div>
                </div>
            `;
        }

        // ==========================================
        // 5. الشاشة الثانية: بوابة المالك (Owner Hub)
        // ==========================================
        function renderOwnerHubScreen() {
            const container = document.getElementById('main-container');
            container.innerHTML = `
                <div class="p-4 sm:p-6 space-y-5 screen-fade max-w-2xl mx-auto w-full">
                    <div class="glass-card border-amber-500/25 rounded-3xl p-4 sm:p-5">
                        <div class="flex items-center gap-3 mb-2">
                            <span class="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amoled-gold flex items-center justify-center text-lg">
                                <i class="fa-solid fa-key"></i>
                            </span>
                            <div>
                                <h2 class="text-base font-extrabold text-white">${t('owner_sub_title')}</h2>
                                <p class="text-[11px] text-amoled-gold font-medium">منطقة محمية • العودة للشاشة الأولى عبر زر الرجوع العلوي حصراً</p>
                            </div>
                        </div>
                        <p class="text-xs text-amoled-muted leading-relaxed">
                            ${t('owner_sub_desc')}
                        </p>
                    </div>

                    <div class="space-y-4">
                        <div onclick="navigateTo('userbot_panel', 'dashboard')" class="cursor-pointer group glass-card glass-card-hover rounded-3xl p-5">
                            <div class="flex items-start justify-between gap-4">
                                <div class="flex items-start gap-4">
                                    <div class="w-14 h-14 rounded-2xl bg-amoled-success/15 border border-amoled-success/30 text-amoled-success flex items-center justify-center text-2xl shrink-0">
                                        <i class="fa-solid fa-user-astronaut"></i>
                                    </div>
                                    <div>
                                        <div class="flex items-center gap-2 flex-wrap mb-1.5">
                                            <h3 class="text-base font-extrabold text-white group-hover:text-amoled-success transition-colors">
                                                ${t('userbot_title')}
                                            </h3>
                                            <span class="text-[10px] bg-amoled-success/20 text-amoled-success px-2.5 py-0.5 rounded-full font-mono font-bold">BUSINESS AI</span>
                                        </div>
                                        <p class="text-xs text-amoled-muted leading-relaxed mb-3.5">
                                            ${t('userbot_desc')}
                                        </p>
                                        <div class="flex flex-wrap gap-2 text-[11px]">
                                            <span class="bg-amoled-bg/90 px-3 py-1 rounded-xl text-white border border-white/[0.06]">
                                                <i class="fa-solid fa-terminal text-amoled-success ml-1"></i> ${state.businessAccount.accountCommands.length} أمر حساب
                                            </span>
                                            <span class="bg-amoled-bg/90 px-3 py-1 rounded-xl text-white border border-white/[0.06]">
                                                <i class="fa-solid fa-users text-amoled-neon ml-1"></i> ${state.businessAccount.accountUsers.length} مستخدم في حسابك
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <i class="fa-solid fa-chevron-left text-amoled-muted group-hover:text-white mt-2"></i>
                            </div>
                        </div>

                        <div onclick="navigateTo('bot_owner_panel', 'dashboard')" class="cursor-pointer group glass-card glass-card-hover rounded-3xl p-5">
                            <div class="flex items-start justify-between gap-4">
                                <div class="flex items-start gap-4">
                                    <div class="w-14 h-14 rounded-2xl bg-amoled-neon/15 border border-amoled-neon/30 text-amoled-neon flex items-center justify-center text-2xl shrink-0">
                                        <i class="fa-solid fa-robot"></i>
                                    </div>
                                    <div>
                                        <div class="flex items-center gap-2 flex-wrap mb-1.5">
                                            <h3 class="text-base font-extrabold text-white group-hover:text-amoled-neon transition-colors">
                                                ${t('bot_title')}
                                            </h3>
                                            <span class="text-[10px] bg-amoled-neon/20 text-amoled-neon px-2.5 py-0.5 rounded-full font-mono font-bold">BOT API</span>
                                        </div>
                                        <p class="text-xs text-amoled-muted leading-relaxed mb-3.5">
                                            ${t('bot_desc')}
                                        </p>
                                        <div class="flex flex-wrap gap-2 text-[11px]">
                                            <span class="bg-amoled-bg/90 px-3 py-1 rounded-xl text-white border border-white/[0.06]">
                                                <i class="fa-solid fa-users-gear text-amoled-neon ml-1"></i> ${state.bot.botCommands.length} أمر مجموعة وبوت
                                            </span>
                                            <span class="bg-amoled-bg/90 px-3 py-1 rounded-xl text-white border border-white/[0.06]">
                                                <i class="fa-solid fa-layer-group text-amoled-gold ml-1"></i> نظام 7 رتب
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <i class="fa-solid fa-chevron-left text-amoled-muted group-hover:text-white mt-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // ==========================================
        // 6. قسم AI الحساب الشخصي (Telegram Business Account AI)
        // ==========================================
        function renderUserbotBottomNav() {
            const nav = document.getElementById('bottom-nav-items');
            nav.className = 'grid grid-cols-4 gap-1';
            const tabs = [
                { id: 'dashboard', icon: 'fa-chart-pie', label: 'الرئيسية' },
                { id: 'commands', icon: 'fa-sliders', label: 'أوامر الحساب' },
                { id: 'users', icon: 'fa-users', label: 'المستخدمون' },
                { id: 'settings', icon: 'fa-gear', label: 'الإعدادات' }
            ];

            nav.innerHTML = tabs.map(tab => {
                const active = state.currentTab === tab.id;
                return `
                    <button onclick="switchUserbotTab('${tab.id}')" class="flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-colors ${active ? 'text-white bg-gradient-to-tr from-amoled-neonDark to-amoled-neon font-extrabold shadow-lg' : 'text-amoled-muted hover:text-white'}">
                        <i class="fa-solid ${tab.icon} text-sm mb-1"></i>
                        <span class="text-[11px]">${tab.label}</span>
                    </button>
                `;
            }).join('');
        }

        function switchUserbotTab(tabId) {
            if (state.currentTab === tabId) return;
            state.currentTab = tabId;
            if (tabId === 'commands') state.subTab = 'private';
            if (tabId === 'settings') state.subTab = 'behavior';
            renderUserbotBottomNav();
            renderUserbotScreen(true);
        }

        function switchUserbotSubTab(subId) {
            if (state.subTab === subId) return;
            state.subTab = subId;
            renderUserbotScreen(false);
        }

        function renderUserbotScreen(scrollTop = false) {
            const container = document.getElementById('main-container');
            
            if (state.currentTab === 'dashboard') {
                const totalPrivateMsgs = state.businessAccount.accountUsers.reduce((acc, u) => acc + u.messages, 0);
                const bannedCount = state.businessAccount.accountUsers.filter(u => u.bannedFromAccount).length;

                container.innerHTML = `
                    <div class="p-4 space-y-4 screen-fade">
                        <div class="glass-card rounded-3xl p-4 flex items-center justify-between">
                            <div class="flex items-center gap-3.5">
                                <div class="w-12 h-12 rounded-2xl ${state.businessAccount.active ? 'bg-amoled-success/20 text-amoled-success border border-amoled-success/30' : 'bg-amoled-danger/20 text-amoled-danger border border-amoled-danger/30'} flex items-center justify-center text-xl">
                                    <i class="fa-solid fa-brain"></i>
                                </div>
                                <div>
                                    <h3 class="text-sm font-extrabold text-white">محرك AI الحساب الشخصي (Business)</h3>
                                    <p class="text-xs text-amoled-muted">${state.businessAccount.active ? 'يعمل الآن ويرد تلقائياً على رسائلك الخاصة' : 'متوقف مؤقتاً عن الرد في حسابك'}</p>
                                </div>
                            </div>
                            <label class="tg-switch">
                                <input type="checkbox" ${state.businessAccount.active ? 'checked' : ''} onchange="toggleUserbotMaster(this.checked)">
                                <span class="tg-slider"></span>
                            </label>
                        </div>

                        <div class="glass-card rounded-3xl p-4">
                            <div class="flex items-center justify-between mb-1">
                                <div>
                                    <span class="text-xs text-amoled-muted block">رسائل AI حسابك الشخصي حصراً</span>
                                    <span class="text-2xl font-extrabold text-white">${totalPrivateMsgs.toLocaleString()} <span class="text-xs font-normal text-amoled-success">+24.5%</span></span>
                                </div>
                                <span class="text-[11px] bg-amoled-success/15 text-amoled-success px-2.5 py-1 rounded-xl font-bold">معزول عن البوت</span>
                            </div>
                            ${generateSparklineSVG('#10b981', 'ubSpark')}
                        </div>

                        <div class="grid grid-cols-3 gap-2.5">
                            <div class="glass-card rounded-2xl p-3 text-center">
                                <span class="text-[11px] text-amoled-muted block">مستخدمو الخاص</span>
                                <span class="text-lg font-extrabold text-amoled-neon mt-0.5 block">${state.businessAccount.accountUsers.length}</span>
                            </div>
                            <div class="glass-card rounded-2xl p-3 text-center">
                                <span class="text-[11px] text-amoled-muted block">مجموعات الحساب</span>
                                <span class="text-lg font-extrabold text-amoled-gold mt-0.5 block">${state.businessAccount.groups.length}</span>
                            </div>
                            <div class="glass-card rounded-2xl p-3 text-center">
                                <span class="text-[11px] text-amoled-muted block">محظورو الحساب</span>
                                <span class="text-lg font-extrabold text-amoled-danger mt-0.5 block">${bannedCount}</span>
                            </div>
                        </div>

                        <div class="glass-card rounded-3xl p-4 space-y-3">
                            <div class="flex items-center justify-between">
                                <h4 class="text-xs font-extrabold text-white flex items-center gap-2">
                                    <span class="w-2 h-2 rounded-full bg-amoled-success animate-pulse"></span>
                                    سجل الردود الحية في حسابك الخاص (Business Feed)
                                </h4>
                                <span class="text-[10px] text-amoled-muted">تحديث تلقائي</span>
                            </div>
                            <div class="space-y-2.5">
                                ${state.businessAccount.liveActivity.map(act => `
                                    <div class="bg-amoled-bg/85 border border-white/[0.06] rounded-2xl p-3 space-y-1.5 text-xs">
                                        <div class="flex items-center justify-between">
                                            <span class="font-bold text-amoled-neon">${act.user}</span>
                                            <span class="text-[10px] text-amoled-muted">${act.time}</span>
                                        </div>
                                        <p class="text-amoled-muted"><strong class="text-white/80">الرسالة:</strong> ${act.msg}</p>
                                        <p class="text-amoled-success bg-amoled-success/10 px-2.5 py-1.5 rounded-xl border border-amoled-success/20">
                                            <i class="fa-solid fa-robot ml-1"></i> ${act.reply}
                                        </p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
            } 
            else if (state.currentTab === 'commands') {
                renderUserbotCommandsTab(container);
            } 
            else if (state.currentTab === 'users') {
                renderUserbotUsersTab(container);
            } 
            else if (state.currentTab === 'settings') {
                renderUserbotSettingsTab(container);
            }

            if (scrollTop) {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
        }

        async function toggleUserbotMaster(val) {
            const old=state.businessAccount.active; state.businessAccount.active=val; renderCurrentScreen(false);
            try { await DAKI_API.setConfig('business','enabled',!!val); showToast(val?'تم تفعيل AI الحساب الشخصي وحفظه':'تم إيقاف AI الحساب الشخصي وحفظه',val?'success':'info'); }
            catch(e) { state.businessAccount.active=old; renderCurrentScreen(false); showToast(e.message,'danger'); }
        }

        function renderUserbotCommandsTab(container) {
            const isPrivate = state.subTab === 'private';
            const filteredUbCmds = state.businessAccount.accountCommands.filter(c => {
                if (state.ubCmdFilter === 'all') return true;
                return c.scope === state.ubCmdFilter;
            });

            container.innerHTML = `
                <div class="p-4 space-y-4 screen-fade">
                    <div class="glass-card p-1.5 rounded-2xl grid grid-cols-2 gap-1.5">
                        <button onclick="switchUserbotSubTab('private')" class="py-2.5 px-3 rounded-xl text-xs font-extrabold transition-colors ${isPrivate ? 'bg-amoled-neon text-black shadow-lg' : 'text-amoled-muted hover:text-white'}">
                            <i class="fa-solid fa-user-astronaut ml-1"></i> أوامر الحساب (${state.businessAccount.accountCommands.length})
                        </button>
                        <button onclick="switchUserbotSubTab('groups')" class="py-2.5 px-3 rounded-xl text-xs font-extrabold transition-colors ${!isPrivate ? 'bg-amoled-neon text-black shadow-lg' : 'text-amoled-muted hover:text-white'}">
                            <i class="fa-solid fa-users-rectangle ml-1"></i> مجموعات الحساب (${state.businessAccount.groups.length})
                        </button>
                    </div>

                    ${isPrivate ? `
                        <div class="glass-card border-amoled-success/30 rounded-2xl p-3.5 text-xs text-amoled-text flex items-start gap-2.5">
                            <i class="fa-solid fa-wand-magic-sparkles text-amoled-success text-base mt-0.5"></i>
                            <p>
                                <strong>أوامر وقواعد الحساب الشخصي (Owner Account):</strong> مجموعة متكاملة لإدارة رسائلك الخاصة، الهوية، الأرشفة، التلخيص، والتشخيص المباشر على Cloudflare Workers.
                            </p>
                        </div>

                        <!-- فلتر تصنيف أوامر الحساب -->
                        <div class="flex items-center justify-between gap-2 flex-wrap">
                            <div class="flex gap-1.5">
                                ${[
                                    { id: 'all', label: `الكل (${state.businessAccount.accountCommands.length})` },
                                    { id: 'dm', label: 'الرد والخاص' },
                                    { id: 'tools', label: 'أدوات المالك' }
                                ].map(f => `
                                    <button onclick="state.ubCmdFilter='${f.id}'; renderUserbotScreen(false)" class="px-2.5 py-1.5 rounded-xl text-[11px] font-extrabold border transition-colors ${state.ubCmdFilter === f.id ? 'bg-amoled-success text-black border-amoled-success' : 'glass-card text-amoled-muted hover:text-white'}">
                                        ${f.label}
                                    </button>
                                `).join('')}
                            </div>
                            <button onclick="openAddUserbotCmdModal()" class="bg-amoled-neon hover:opacity-90 text-black text-xs font-extrabold px-3 py-1.5 rounded-xl flex items-center gap-1 shadow">
                                <i class="fa-solid fa-plus"></i> إضافة أمر
                            </button>
                        </div>

                        <div class="space-y-2.5">
                            ${filteredUbCmds.map(c => `
                                <div class="glass-card rounded-2xl p-3.5 flex items-center justify-between gap-3">
                                    <div class="space-y-1">
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <span class="text-xs font-extrabold text-white">${c.cmd}</span>
                                            <span class="text-[10px] bg-amoled-success/15 text-amoled-success border border-amoled-success/30 px-2 py-0.5 rounded-lg font-bold">${c.category || 'حساب شخصي'}</span>
                                        </div>
                                        <p class="text-xs text-amoled-muted leading-relaxed">${c.desc}</p>
                                    </div>
                                    <label class="tg-switch">
                                        <input type="checkbox" ${c.active ? 'checked' : ''} onchange="toggleUserbotCmd('${c.id}', this.checked)">
                                        <span class="tg-slider"></span>
                                    </label>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <div class="glass-card rounded-2xl p-4 flex items-center justify-between">
                            <div>
                                <h4 class="text-sm font-bold text-white">تفعيل AI الحساب في المجموعات</h4>
                                <p class="text-xs text-amoled-muted">السماح لحسابك الشخصي بالتحدث داخل المجموعات المحددة</p>
                            </div>
                            <label class="tg-switch">
                                <input type="checkbox" ${state.businessAccount.groupsAutoReply ? 'checked' : ''} onchange="state.businessAccount.groupsAutoReply=this.checked; showToast('تم تحديث وضع المجموعات للحساب')">
                                <span class="tg-slider"></span>
                            </label>
                        </div>

                        <div class="space-y-3">
                            ${state.businessAccount.groups.map(g => `
                                <div class="glass-card rounded-3xl p-4 space-y-3">
                                    <div class="flex items-start justify-between gap-2">
                                        <div>
                                            <h4 class="text-sm font-extrabold text-white">${g.name}</h4>
                                            <div class="flex items-center gap-2 mt-1 text-[11px] text-amoled-muted">
                                                <span class="font-mono bg-amoled-bg px-2.5 py-0.5 rounded-lg border border-white/[0.06] text-amoled-neon cursor-pointer" onclick="copyToClipboard('${g.id}', 'أيدي المجموعة')">${g.id} <i class="fa-regular fa-copy mr-1"></i></span>
                                                <span><i class="fa-solid fa-users ml-1"></i> ${g.members.toLocaleString()} عضو</span>
                                            </div>
                                        </div>
                                        <label class="tg-switch">
                                            <input type="checkbox" ${g.aiEnabled ? 'checked' : ''} onchange="toggleUserbotGroup('${g.id}', this.checked)">
                                            <span class="tg-slider"></span>
                                        </label>
                                    </div>

                                    <div class="bg-amoled-bg/85 rounded-2xl p-3 border border-white/[0.06] space-y-2.5 text-xs">
                                        <div class="flex items-center justify-between gap-2">
                                            <span class="text-amoled-muted">أسلوب الرد في المجموعة:</span>
                                            <select onchange="changeUserbotGroupBehavior('${g.id}', this.value)" class="bg-amoled-elevated text-white border border-white/[0.1] rounded-xl px-2.5 py-1 text-xs outline-none">
                                                <option ${g.behavior === 'عند الذكر أو الرد فقط' ? 'selected' : ''}>عند الذكر أو الرد فقط</option>
                                                <option ${g.behavior === 'تفاعل ذكي كامل' ? 'selected' : ''}>تفاعل ذكي كامل</option>
                                                <option ${g.behavior === 'وضع المراقبة الصامتة' ? 'selected' : ''}>وضع المراقبة الصامتة</option>
                                            </select>
                                        </div>
                                        <div>
                                            <span class="text-amoled-muted block mb-1.5">مشرفو المجموعة المرصودون:</span>
                                            <div class="flex flex-wrap gap-1.5">
                                                ${g.admins.map(adm => `<span class="bg-amoled-elevated text-amoled-neon border border-white/[0.06] px-2.5 py-0.5 rounded-lg text-[11px] font-mono">${adm}</span>`).join('')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `}
                </div>
            `;
        }

        function toggleUserbotCmd(id, val) {
            const cmd = state.businessAccount.accountCommands.find(c => c.id === id);
            if (cmd) cmd.active = val;
            showToast('تم تحديث إعداد عمل AI في حسابك');
        }

        function toggleUserbotGroup(id, val) {
            const grp = state.businessAccount.groups.find(g => g.id === id);
            if (grp) grp.aiEnabled = val;
            showToast(val ? `تم تفعيل AI حسابك في ${grp.name}` : `تم إيقاف AI حسابك في ${grp.name}`);
        }

        function changeUserbotGroupBehavior(id, val) {
            const grp = state.businessAccount.groups.find(g => g.id === id);
            if (grp) grp.behavior = val;
            showToast('تم حفظ أسلوب المجموعة');
        }

        function openAddUserbotCmdModal() {
            const modal = document.getElementById('custom-form-modal');
            document.getElementById('form-modal-title').textContent = 'إضافة أمر أو قاعدة جديدة لحسابك';
            document.getElementById('form-modal-body').innerHTML = `
                <div>
                    <label class="block text-xs text-amoled-muted mb-1">اسم القاعدة أو الأمر الخاص بالحساب</label>
                    <input id="new-ub-cmd" type="text" placeholder="مثال: الرد الصوتي التلقائي (.voice)" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2.5 text-sm text-white outline-none focus:border-amoled-neon">
                </div>
                <div>
                    <label class="block text-xs text-amoled-muted mb-1">النطاق</label>
                    <select id="new-ub-scope" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white outline-none">
                        <option value="dm">الرد والخاص</option>
                        <option value="tools">أدوات المالك</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs text-amoled-muted mb-1">آلية العمل داخل حسابك الشخصي</label>
                    <input id="new-ub-desc" type="text" placeholder="شرح كيف يتصرف AI في رسائلك الخاصة" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2.5 text-sm text-white outline-none focus:border-amoled-neon">
                </div>
                <button onclick="saveNewUserbotCmd()" class="w-full bg-amoled-neon text-black font-extrabold py-2.5 rounded-xl text-sm mt-2">
                    حفظ وتفعيل في الحساب
                </button>
            `;
            modal.classList.remove('hidden');
        }

        function saveNewUserbotCmd() {
            const cmd = document.getElementById('new-ub-cmd').value.trim();
            const scope = document.getElementById('new-ub-scope').value;
            const desc = document.getElementById('new-ub-desc').value.trim();
            if (!cmd || !desc) return showToast('يرجى ملء جميع الحقول', 'danger');
            state.businessAccount.accountCommands.unshift({ id: 'ub_' + Date.now(), cmd, category: scope === 'tools' ? 'أدوات المالك' : 'حساب شخصي', scope, desc, active: true });
            closeFormModal();
            showToast('تمت إضافة الأمر لحسابك الشخصي بنجاح');
            renderUserbotScreen(false);
        }

        function renderUserbotUsersTab(container) {
            const q = state.userSearchQuery.toLowerCase();
            const filtered = state.businessAccount.accountUsers.filter(u => {
                const matchText = u.name.toLowerCase().includes(q) || u.username.toLowerCase().includes(q) || u.id.includes(q);
                if (state.userFilterStatus === 'active') return matchText && !u.bannedFromAccount;
                if (state.userFilterStatus === 'banned') return matchText && u.bannedFromAccount;
                return matchText;
            });

            container.innerHTML = `
                <div class="p-4 space-y-4 screen-fade">
                    <div class="glass-card border-amoled-neon/30 rounded-2xl p-3.5 text-xs text-amoled-text flex items-start gap-2.5">
                        <i class="fa-solid fa-user-shield text-amoled-neon text-base mt-0.5"></i>
                        <p>
                            <strong>مستخدمو حسابك الشخصي فقط (${filtered.length} مستخدم • بدون حد أقصى):</strong> حظر أي شخص هنا يمنعه من التحدث مع AI في <u>حسابك الشخصي فقط</u> ولا يؤثر إطلاقاً على بوت DakiSchuleBot.
                        </p>
                    </div>

                    <div class="space-y-2">
                        <div class="relative">
                            <i class="fa-solid fa-magnifying-glass absolute right-3.5 top-1/2 -translate-y-1/2 text-amoled-muted text-sm"></i>
                            <input type="text" value="${state.userSearchQuery}" oninput="state.userSearchQuery=this.value; renderUserbotScreen(false)" placeholder="ابحث في مستخدمي حسابك بالاسم أو الأيدي..." class="w-full glass-card rounded-2xl pr-10 pl-4 py-2.5 text-sm text-white outline-none focus:border-amoled-neon">
                        </div>
                        <div class="flex gap-1.5">
                            ${['all:الكل', 'active:نشط', 'banned:محظور'].map(f => {
                                const [val, lbl] = f.split(':');
                                const active = state.userFilterStatus === val;
                                return `<button onclick="state.userFilterStatus='${val}'; renderUserbotScreen(false)" class="px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors ${active ? 'bg-amoled-neon text-black border-amoled-neon' : 'glass-card text-amoled-muted'}">${lbl}</button>`;
                            }).join('')}
                        </div>
                    </div>

                    <div class="space-y-2.5">
                        ${filtered.map(u => `
                            <div class="glass-card ${u.bannedFromAccount ? 'border-amoled-danger/50' : ''} rounded-2xl p-3.5">
                                <div class="flex items-start justify-between gap-2">
                                    <div class="flex items-center gap-3">
                                        <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr ${u.color} flex items-center justify-center text-white font-extrabold text-base shrink-0 shadow">
                                            ${u.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div class="flex items-center gap-2 flex-wrap">
                                                <h4 class="text-sm font-extrabold text-white">${u.name}</h4>
                                                ${u.bannedFromAccount ? '<span class="text-[10px] bg-amoled-danger/20 text-amoled-danger px-2 py-0.5 rounded-full font-bold">محظور من حسابك</span>' : ''}
                                                ${u.handoffPaused ? '<span class="text-[10px] bg-amber-500/20 text-amoled-gold px-2 py-0.5 rounded-full font-bold"><i class="fa-solid fa-clock ml-1"></i>بانتظار السيدة Daki (10س)</span>' : ''}
                                            </div>
                                            <p class="text-xs text-amoled-neon font-mono">${u.username}</p>
                                        </div>
                                    </div>
                                    <button onclick="copyToClipboard('${u.id}', 'ID مستخدم الحساب')" class="bg-amoled-bg hover:bg-amoled-elevated text-amoled-muted hover:text-white border border-white/[0.08] px-2.5 py-1 rounded-xl text-[11px] font-mono flex items-center gap-1.5 transition-colors">
                                        <span>${u.id}</span>
                                        <i class="fa-regular fa-copy text-amoled-neon"></i>
                                    </button>
                                </div>

                                <div class="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-amoled-muted">
                                    <div class="flex items-center gap-3">
                                        <span><i class="fa-solid fa-message text-amoled-neon ml-1"></i> الرسائل: <strong class="text-white">${u.messages}</strong></span>
                                        <span><i class="fa-regular fa-calendar ml-1"></i> أول رسالة: ${u.firstSeen}</span>
                                    </div>
                                    <button onclick="toggleBanUserbotUser('${u.id}')" class="px-3 py-1 rounded-xl font-extrabold transition-colors ${u.bannedFromAccount ? 'bg-amoled-success/20 text-amoled-success hover:bg-amoled-success hover:text-black' : 'bg-amoled-danger/15 text-amoled-danger hover:bg-amoled-danger hover:text-white'}">
                                        ${u.bannedFromAccount ? '<i class="fa-solid fa-unlock ml-1"></i> إلغاء الحظر' : '<i class="fa-solid fa-ban ml-1"></i> حظر'}
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        function toggleBanUserbotUser(id) {
            const u = state.businessAccount.accountUsers.find(x => x.id === id);
            if (!u) return;
            u.bannedFromAccount = !u.bannedFromAccount;
            showToast(u.bannedFromAccount ? `تم حظر ${u.name} من AI حسابك الشخصي فقط` : `تم رفع الحظر عن ${u.name}`, u.bannedFromAccount ? 'danger' : 'success');
            renderUserbotScreen(false);
        }

        function renderUserbotSettingsTab(container) {
            const subTabs = [
                { id: 'behavior', label: 'السلوك وطريقة التحدث', icon: 'fa-masks-theater' },
                { id: 'forbidden', label: 'الأشياء الممنوعة', icon: 'fa-ban' },
                { id: 'prompt', label: 'التلقين (Prompt)', icon: 'fa-brain' },
                { id: 'persona', label: 'الاسم والشخصية', icon: 'fa-id-card' },
                { id: 'general', label: 'إعدادات عامة متقدمة', icon: 'fa-sliders' }
            ];

            let contentHtml = '';
            if (state.subTab === 'behavior') {
                contentHtml = `
                    <div class="glass-card rounded-3xl p-4 space-y-4">
                        <div>
                            <label class="block text-xs font-extrabold text-white mb-2">اختيار اللهجة وأسلوب التحدث</label>
                            <select onchange="state.businessAccount.tone=this.value; showToast('تم تحديث اللهجة')" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2.5 text-sm text-white outline-none">
                                <option value="friendly" ${state.businessAccount.tone==='friendly'?'selected':''}>ودودة ولبقة (طبيعية)</option>
                                <option value="formal" ${state.businessAccount.tone==='formal'?'selected':''}>رسمية واحترافية</option>
                                <option value="slang" ${state.businessAccount.tone==='slang'?'selected':''}>عامية ذكية ومرنة</option>
                                <option value="concise" ${state.businessAccount.tone==='concise'?'selected':''}>مختصرة ومباشرة جداً</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-extrabold text-white mb-2">طول الرد المفضل</label>
                            <div class="grid grid-cols-3 gap-2">
                                ${['short:قصير', 'medium:متوسط', 'detailed:مفصل'].map(item => {
                                    const [val, lbl] = item.split(':');
                                    const active = state.businessAccount.replyLength === val;
                                    return `<button onclick="state.businessAccount.replyLength='${val}'; renderUserbotScreen(false)" class="py-2 rounded-xl text-xs font-extrabold border ${active ? 'bg-amoled-neon border-amoled-neon text-black' : 'bg-amoled-bg border-white/[0.08] text-amoled-muted'}">${lbl}</button>`;
                                }).join('')}
                            </div>
                        </div>
                        <div class="flex items-center justify-between pt-3 border-t border-white/[0.07]">
                            <div>
                                <span class="text-xs font-extrabold text-white block">نظام التحويل الذكي للمالك (Human Handoff)</span>
                                <span class="text-[11px] text-amoled-muted">إشعار السيدة Daki وإيقاف الرد الآلي 10 ساعات عند طلبها</span>
                            </div>
                            <label class="tg-switch">
                                <input type="checkbox" ${state.businessAccount.handoffEnabled ? 'checked' : ''} onchange="state.businessAccount.handoffEnabled=this.checked; showToast('تم تحديث نظام التحويل للمالك')">
                                <span class="tg-slider"></span>
                            </label>
                        </div>
                    </div>
                `;
            } else if (state.subTab === 'forbidden') {
                contentHtml = `
                    <div class="glass-card rounded-3xl p-4 space-y-4">
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="text-xs font-extrabold text-white block">منع الروابط الخارجية والإعلانات</span>
                                <span class="text-[11px] text-amoled-muted">تجاهل الرسائل التي تحتوي روابط ترويجية</span>
                            </div>
                            <label class="tg-switch">
                                <input type="checkbox" ${state.businessAccount.blockLinks ? 'checked' : ''} onchange="state.businessAccount.blockLinks=this.checked; showToast('تم التحديث')">
                                <span class="tg-slider"></span>
                            </label>
                        </div>
                        <div class="flex items-center justify-between pt-3 border-t border-white/[0.07]">
                            <div>
                                <span class="text-xs font-extrabold text-white block">تجاهل الملصقات والأسئلة الحساسة</span>
                                <span class="text-[11px] text-amoled-muted">عدم الرد على الملصقات أو المواضيع المحظورة</span>
                            </div>
                            <label class="tg-switch">
                                <input type="checkbox" ${state.businessAccount.ignoreStickers ? 'checked' : ''} onchange="state.businessAccount.ignoreStickers=this.checked; showToast('تم التحديث')">
                                <span class="tg-slider"></span>
                            </label>
                        </div>
                        <div class="pt-3 border-t border-white/[0.07]">
                            <label class="block text-xs font-extrabold text-white mb-2">قائمة الكلمات والمواضيع المحظورة في الحساب</label>
                            <div class="flex gap-2 mb-3">
                                <input id="new-banned-word" type="text" placeholder="اكتب كلمة أو موضوعاً لمنعه..." class="flex-1 bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white outline-none">
                                <button onclick="addBannedWord()" class="bg-amoled-danger text-white text-xs font-extrabold px-3.5 py-2 rounded-xl">إضافة</button>
                            </div>
                            <div class="flex flex-wrap gap-1.5">
                                ${state.businessAccount.bannedWords.map((w, idx) => `
                                    <span class="bg-amoled-danger/15 border border-amoled-danger/30 text-amoled-danger text-xs font-bold px-2.5 py-1 rounded-xl flex items-center gap-1.5">
                                        ${w}
                                        <i onclick="removeBannedWord(${idx})" class="fa-solid fa-xmark cursor-pointer hover:text-white"></i>
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
            } else if (state.subTab === 'prompt') {
                contentHtml = `
                    <div class="glass-card rounded-3xl p-4 space-y-3">
                        <div class="flex items-center justify-between">
                            <label class="text-xs font-extrabold text-white">محرر التلقين الأساسي لحسابك (System Prompt)</label>
                            <div class="flex gap-1">
                                <button onclick="applyPromptTemplate('business')" class="text-[10px] bg-amoled-neon/15 text-amoled-neon px-2 py-1 rounded-lg font-bold">قالب أكاديمي</button>
                                <button onclick="applyPromptTemplate('friendly')" class="text-[10px] bg-amoled-purple/20 text-purple-300 px-2 py-1 rounded-lg font-bold">قالب ودود</button>
                            </div>
                        </div>
                        <textarea id="ub-prompt-input" rows="6" class="w-full bg-amoled-bg border border-white/[0.1] rounded-2xl p-3 text-xs text-white leading-relaxed outline-none focus:border-amoled-neon">${state.businessAccount.systemPrompt}</textarea>
                        <button onclick="state.businessAccount.systemPrompt=document.getElementById('ub-prompt-input').value; showToast('تم حفظ تلقين الحساب الشخصي بنجاح')" class="w-full bg-gradient-to-r from-amoled-neonDark to-amoled-neon text-white font-extrabold py-2.5 rounded-xl text-xs shadow-lg">
                            <i class="fa-solid fa-floppy-disk ml-1"></i> حفظ التلقين وتطبيقه فوراً
                        </button>
                    </div>
                `;
            } else if (state.subTab === 'persona') {
                contentHtml = `
                    <div class="glass-card rounded-3xl p-4 space-y-4">
                        <div>
                            <label class="block text-xs text-amoled-muted mb-1">اسم المساعد التعريفي</label>
                            <input type="text" value="${state.businessAccount.botName}" onchange="state.businessAccount.botName=this.value" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2 text-sm text-white">
                        </div>
                        <div>
                            <label class="block text-xs text-amoled-muted mb-1">نمط التفكير والنبذة</label>
                            <input type="text" value="${state.businessAccount.thinkingStyle}" onchange="state.businessAccount.thinkingStyle=this.value" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2 text-sm text-white">
                        </div>
                        <div>
                            <div class="flex justify-between text-xs mb-1.5">
                                <span class="font-bold text-white">مستوى الإبداع (Temperature)</span>
                                <span id="ub-temp-val" class="text-amoled-neon font-mono font-bold">${state.businessAccount.temperature}</span>
                            </div>
                            <input type="range" min="0.1" max="1.0" step="0.1" value="${state.businessAccount.temperature}" oninput="state.businessAccount.temperature=this.value; document.getElementById('ub-temp-val').textContent=this.value" class="w-full accent-amoled-neon">
                        </div>
                        <button onclick="showToast('تم حفظ إعدادات الشخصية')" class="w-full bg-amoled-neon text-black font-extrabold py-2.5 rounded-xl text-xs">حفظ الشخصية</button>
                    </div>
                `;
            } else if (state.subTab === 'general') {
                contentHtml = `
                    <div class="space-y-3">
                        <div class="glass-card rounded-3xl p-4 space-y-4">
                            <h4 class="text-xs font-extrabold text-amoled-neon flex items-center gap-1.5">
                                <i class="fa-solid fa-clock"></i> التوقيت ومحاكاة التفاعل البشري
                            </h4>
                            <div>
                                <div class="flex justify-between text-xs mb-1.5">
                                    <span class="font-bold text-white">محاكاة الكتابة ("يكتب الآن...") والتأخير الذكي</span>
                                    <span id="ub-delay-val" class="text-amoled-neon font-bold">${state.businessAccount.typingDelay} ثواني</span>
                                </div>
                                <input type="range" min="0" max="15" value="${state.businessAccount.typingDelay}" oninput="state.businessAccount.typingDelay=this.value; document.getElementById('ub-delay-val').textContent=this.value + ' ثواني'" class="w-full accent-amoled-neon">
                            </div>
                            <div class="grid grid-cols-2 gap-2.5">
                                <div>
                                    <label class="block text-[11px] text-amoled-muted mb-1">بداية الدوام الذكي</label>
                                    <input type="time" value="${state.businessAccount.scheduleStart}" onchange="state.businessAccount.scheduleStart=this.value" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-2.5 py-2 text-xs text-white font-mono">
                                </div>
                                <div>
                                    <label class="block text-[11px] text-amoled-muted mb-1">نهاية الدوام الذكي</label>
                                    <input type="time" value="${state.businessAccount.scheduleEnd}" onchange="state.businessAccount.scheduleEnd=this.value" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-2.5 py-2 text-xs text-white font-mono">
                                </div>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-white mb-1.5">وضع جدول عمل AI الحساب</label>
                                <select onchange="state.businessAccount.workingHours=this.value; showToast('تم تحديث ساعات العمل')" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white">
                                    <option value="24/7" ${state.businessAccount.workingHours==='24/7'?'selected':''}>طوال اليوم (24/7)</option>
                                    <option value="sleep" ${state.businessAccount.workingHours==='sleep'?'selected':''}>أثناء النوم والانشغال فقط (خارج الدوام)</option>
                                    <option value="work" ${state.businessAccount.workingHours==='work'?'selected':''}>أثناء ساعات العمل الرسمية فقط</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-white mb-1">رسالة عدم التفرغ التلقائية</label>
                                <textarea rows="2" onchange="state.businessAccount.awayAutoMessage=this.value" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl p-2.5 text-xs text-white">${state.businessAccount.awayAutoMessage}</textarea>
                            </div>
                        </div>

                        <div class="glass-card rounded-3xl p-4 space-y-3.5">
                            <h4 class="text-xs font-extrabold text-amoled-success flex items-center gap-1.5">
                                <i class="fa-solid fa-shield-halved"></i> قيود التحكم والأمان للحساب
                            </h4>
                            <div class="flex items-center justify-between">
                                <div>
                                    <span class="text-xs font-bold text-white block">الإيقاف التلقائي عند تدخلك اليدوي</span>
                                    <span class="text-[11px] text-amoled-muted">يتوقف الـ AI مؤقتاً إذا قمت أنت بالكتابة في المحادثة</span>
                                </div>
                                <label class="tg-switch">
                                    <input type="checkbox" ${state.businessAccount.stopOnManualReply ? 'checked' : ''} onchange="state.businessAccount.stopOnManualReply=this.checked; showToast('تم التحديث')">
                                    <span class="tg-slider"></span>
                                </label>
                            </div>
                            <div class="flex items-center justify-between pt-2.5 border-t border-white/[0.06]">
                                <div>
                                    <span class="text-xs font-bold text-white block">تجاهل البوتات والقنوات تلقائياً</span>
                                    <span class="text-[11px] text-amoled-muted">عدم الرد على الرسائل الآلية أو القنوات الإعلانية</span>
                                </div>
                                <label class="tg-switch">
                                    <input type="checkbox" ${state.businessAccount.ignoreBotsAndChannels ? 'checked' : ''} onchange="state.businessAccount.ignoreBotsAndChannels=this.checked; showToast('تم التحديث')">
                                    <span class="tg-slider"></span>
                                </label>
                            </div>
                            <div class="flex items-center justify-between pt-2.5 border-t border-white/[0.06]">
                                <div>
                                    <span class="text-xs font-bold text-white block">قراءة الرسائل تلقائياً (Read Receipts)</span>
                                    <span class="text-[11px] text-amoled-muted">وضع علامتي صح زرقاء فور معالجة الرسالة</span>
                                </div>
                                <label class="tg-switch">
                                    <input type="checkbox" ${state.businessAccount.autoReadMessages ? 'checked' : ''} onchange="state.businessAccount.autoReadMessages=this.checked; showToast('تم التحديث')">
                                    <span class="tg-slider"></span>
                                </label>
                            </div>
                            <div class="pt-2.5 border-t border-white/[0.06] flex items-center justify-between gap-3">
                                <div>
                                    <span class="text-xs font-bold text-white block">الحد الأقصى للردود لكل شخص / ساعة</span>
                                    <span class="text-[11px] text-amoled-muted">لحماية رصيد Workers AI من الاستهلاك المفرط</span>
                                </div>
                                <input type="number" value="${state.businessAccount.rateLimitPerUser}" onchange="state.businessAccount.rateLimitPerUser=this.value" class="w-20 bg-amoled-bg border border-white/[0.1] rounded-xl px-2.5 py-1.5 text-xs text-center text-amoled-neon font-mono font-bold">
                            </div>
                            <button onclick="showToast('تم حفظ جميع الإعدادات العامة المتقدمة للحساب')" class="w-full bg-amoled-neon text-black font-extrabold py-2.5 rounded-xl text-xs mt-1">
                                حفظ جميع الإعدادات
                            </button>
                        </div>
                    </div>
                `;
            }

            container.innerHTML = `
                <div class="p-4 space-y-4 screen-fade">
                    <div class="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                        ${subTabs.map(st => `
                            <button onclick="switchUserbotSubTab('${st.id}')" class="shrink-0 px-3 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-colors ${state.subTab === st.id ? 'bg-amoled-neon text-black shadow-lg' : 'glass-card text-amoled-muted hover:text-white'}">
                                <i class="fa-solid ${st.icon}"></i>
                                <span>${st.label}</span>
                            </button>
                        `).join('')}
                    </div>
                    ${contentHtml}
                </div>
            `;
        }

        function applyPromptTemplate(type) {
            if (type === 'business') {
                state.businessAccount.systemPrompt = 'أنت مساعدي الرسمي في مدرسة داكي (Daki-Schule) على تيليجرام. رحب بالطلاب واستقبل استفساراتهم حول الدورات والمناهج باحترافية، وإذا طلب أحد التحدث مع السيدة Daki أبلغه أنه تم إشعارها وسترد شخصياً قريباً.';
            } else {
                state.businessAccount.systemPrompt = 'أنت مساعدي الشخصي الذكي. رد على المتواصلين بأسلوب ودود ولطيف، وأخبرهم أنني مشغولة قليلاً الآن وسأعود للرد عليهم قريباً.';
            }
            showToast('تم تحميل القالب الجاهز');
            renderUserbotScreen(false);
        }

        function addBannedWord() {
            const input = document.getElementById('new-banned-word');
            const val = input.value.trim();
            if (!val) return;
            state.businessAccount.bannedWords.push(val);
            showToast('تمت إضافة الكلمة لقائمة المنع');
            renderUserbotScreen(false);
        }

        function removeBannedWord(idx) {
            state.businessAccount.bannedWords.splice(idx, 1);
            showToast('تمت إزالة الكلمة');
            renderUserbotScreen(false);
        }

        // ==========================================
        // 7. قسم البوت المستقل (DakiSchuleBot) + قسم المسؤولين (Admins & 7 Ranks)
        // ==========================================
        function renderBotBottomNav(isOwnerMode) {
            const nav = document.getElementById('bottom-nav-items');
            nav.className = 'grid grid-cols-5 gap-1';
            const tabs = [
                { id: 'dashboard', icon: 'fa-chart-line', label: 'الرئيسية' },
                { id: 'users', icon: 'fa-users', label: 'المستخدمون' },
                { id: 'commands', icon: 'fa-terminal', label: 'أوامر البوت' },
                { id: 'instructions', icon: 'fa-book-open', label: 'التعليمات' },
                { id: 'settings', icon: 'fa-shield-halved', label: 'الإعدادات والرتب' }
            ];

            nav.innerHTML = tabs.map(tab => {
                const active = state.currentTab === tab.id;
                return `
                    <button onclick="switchBotTab('${tab.id}', ${isOwnerMode})" class="flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-colors ${active ? 'text-white bg-gradient-to-tr from-amoled-neonDark to-amoled-neon font-extrabold shadow-lg' : 'text-amoled-muted hover:text-white'}">
                        <i class="fa-solid ${tab.icon} text-xs sm:text-sm mb-1"></i>
                        <span class="text-[10px] sm:text-[11px] truncate w-full text-center">${tab.label}</span>
                    </button>
                `;
            }).join('');
        }

        function switchBotTab(tabId, isOwnerMode) {
            if (state.currentTab === tabId) return;
            state.currentTab = tabId;
            if (tabId === 'commands') state.subTab = 'bot_cmds';
            if (tabId === 'settings') state.subTab = 'ranks';
            renderBotBottomNav(isOwnerMode);
            renderBotManagementScreen(isOwnerMode, true);
        }

        function switchBotSubTab(subId, isOwnerMode) {
            if (state.subTab === subId) return;
            state.subTab = subId;
            renderBotManagementScreen(isOwnerMode, false);
        }

        function renderBotManagementScreen(isOwnerMode, scrollTop = false) {
            const container = document.getElementById('main-container');
            const currentRank = isOwnerMode ? state.ranks[0] : getCurrentUserRankObj();
            const perms = currentRank.permissions;

            if (state.currentTab === 'dashboard') {
                const totalBotMsgs = state.bot.botUsers.reduce((acc, u) => acc + u.messages, 0);
                container.innerHTML = `
                    <div class="p-4 space-y-4 screen-fade">
                        <div class="glass-card ${isOwnerMode ? 'border-amber-500/30' : 'border-amoled-neon/30'} rounded-3xl p-4 flex items-center justify-between">
                            <div>
                                <div class="flex items-center gap-2">
                                    <span class="w-8 h-8 rounded-xl bg-white/[0.06] flex items-center justify-center ${currentRank.color}">
                                        <i class="fa-solid ${currentRank.icon}"></i>
                                    </span>
                                    <h3 class="text-sm font-extrabold text-white">${isOwnerMode ? 'إدارة DakiSchuleBot الكاملة (Owner AI)' : `لوحة المسؤول: ${currentRank.name}`}</h3>
                                </div>
                                <p class="text-xs text-amoled-muted mt-1">
                                    ${isOwnerMode ? 'صلاحية مطلقة على البوت المستقل، أوامره، ونظام الرتب الـ 7.' : 'جميع الأزرار والرتب مقيدة تلقائياً بصلاحيات رتبتك.'}
                                </p>
                            </div>
                            ${perms.toggle_ai ? `
                                <label class="tg-switch">
                                    <input type="checkbox" ${state.bot.active ? 'checked' : ''} onchange="toggleBotMaster(this.checked)">
                                    <span class="tg-slider"></span>
                                </label>
                            ` : `<span class="text-[10px] bg-white/[0.06] text-amoled-muted px-2.5 py-1 rounded-xl font-bold"><i class="fa-solid fa-lock ml-1"></i>مقفل</span>`}
                        </div>

                        <div class="glass-card rounded-3xl p-4">
                            <div class="flex items-center justify-between mb-1">
                                <div>
                                    <span class="text-xs text-amoled-muted block">رسائل بوت DakiSchuleBot حصراً</span>
                                    <span class="text-2xl font-extrabold text-white">${totalBotMsgs.toLocaleString()} <span class="text-xs font-normal text-amoled-neon">معزول عن حسابك</span></span>
                                </div>
                                <span class="text-[11px] bg-amoled-neon/15 text-amoled-neon px-2.5 py-1 rounded-xl font-bold">Bot API</span>
                            </div>
                            ${generateSparklineSVG('#2AABEE', 'botSpark')}
                        </div>

                        <div class="grid grid-cols-3 gap-2.5">
                            <div class="glass-card rounded-2xl p-3 text-center">
                                <span class="text-[11px] text-amoled-muted block">مشتركو /start</span>
                                <span class="text-lg font-extrabold text-amoled-success mt-0.5 block">${state.bot.botUsers.length}</span>
                            </div>
                            <div class="glass-card rounded-2xl p-3 text-center">
                                <span class="text-[11px] text-amoled-muted block">مجموعات البوت</span>
                                <span class="text-lg font-extrabold text-purple-400 mt-0.5 block">${state.bot.botGroups.length}</span>
                            </div>
                            <div class="glass-card rounded-2xl p-3 text-center">
                                <span class="text-[11px] text-amoled-muted block">أوامر المجموعات</span>
                                <span class="text-lg font-extrabold text-amoled-gold mt-0.5 block">${state.bot.botCommands.length}</span>
                            </div>
                        </div>

                        <div class="glass-card rounded-3xl p-4 space-y-2.5">
                            <h4 class="text-xs font-extrabold text-amoled-neon uppercase">صلاحياتك الفعلية (${currentRank.name})</h4>
                            <div class="flex flex-wrap gap-1.5">
                                ${Object.entries(perms).map(([key, allowed]) => `
                                    <span class="text-[11px] px-2.5 py-1 rounded-xl border font-medium ${allowed ? 'bg-amoled-success/10 border-amoled-success/30 text-amoled-success' : 'bg-amoled-bg border-white/[0.05] text-amoled-muted opacity-45'}">
                                        <i class="fa-solid ${allowed ? 'fa-check' : 'fa-lock'} ml-1"></i>
                                        ${permissionLabels[key].label}
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
            } 
            else if (state.currentTab === 'users') {
                renderBotUsersTab(container, perms);
            } 
            else if (state.currentTab === 'commands') {
                renderBotCommandsTab(container, perms, isOwnerMode);
            } 
            else if (state.currentTab === 'instructions') {
                renderBotInstructionsTab(container, perms, isOwnerMode);
            } 
            else if (state.currentTab === 'settings') {
                renderBotSettingsAndRanksTab(container, currentRank, isOwnerMode);
            }

            if (scrollTop) {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
        }

        async function toggleBotMaster(val) {
            const old=state.bot.active; state.bot.active=val; renderCurrentScreen(false);
            try { await DAKI_API.setConfig('bot','enabled',!!val); showToast(val?'تم تشغيل البوت وحفظ الحالة':'تم إيقاف البوت وحفظ الحالة'); }
            catch(e) { state.bot.active=old; renderCurrentScreen(false); showToast(e.message,'danger'); }
        }

        function renderBotUsersTab(container, perms) {
            const q = state.userSearchQuery.toLowerCase();
            const filtered = state.bot.botUsers.filter(u => 
                u.name.toLowerCase().includes(q) || 
                u.username.toLowerCase().includes(q) || 
                u.id.includes(q)
            );

            container.innerHTML = `
                <div class="p-4 space-y-4 screen-fade">
                    <div class="glass-card rounded-2xl p-3.5 text-xs text-amoled-muted flex items-center justify-between gap-2">
                        <span><i class="fa-solid fa-robot text-amoled-neon ml-1"></i> مشتركو بوت DakiSchuleBot (/start): <strong class="text-white">${filtered.length}</strong> (بدون حد أقصى • معزولون عن حسابك)</span>
                        ${!perms.ban_users ? '<span class="text-amoled-danger font-bold shrink-0"><i class="fa-solid fa-lock ml-1"></i> الحظر مقفل</span>' : ''}
                    </div>

                    <div class="relative">
                        <i class="fa-solid fa-magnifying-glass absolute right-3.5 top-1/2 -translate-y-1/2 text-amoled-muted text-sm"></i>
                        <input type="text" value="${state.userSearchQuery}" oninput="state.userSearchQuery=this.value; renderBotManagementScreen(${state.simulatedRole==='owner'}, false)" placeholder="ابحث في مشتركي البوت بالاسم أو ID..." class="w-full glass-card rounded-2xl pr-10 pl-4 py-2.5 text-sm text-white outline-none focus:border-amoled-neon">
                    </div>

                    <div class="space-y-2.5">
                        ${filtered.map(u => `
                            <div class="glass-card ${u.bannedFromBot ? 'border-amoled-danger/50' : ''} rounded-2xl p-3.5">
                                <div class="flex items-start justify-between gap-2">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-2xl bg-amoled-elevated border border-amoled-neon/30 flex items-center justify-center text-amoled-neon font-extrabold text-sm">
                                            ${u.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div class="flex items-center gap-2">
                                                <h4 class="text-sm font-extrabold text-white">${u.name}</h4>
                                                ${u.bannedFromBot ? '<span class="text-[10px] bg-amoled-danger/20 text-amoled-danger px-2 py-0.5 rounded-full font-bold">محظور من البوت</span>' : ''}
                                            </div>
                                            <p class="text-xs text-amoled-muted font-mono">${u.username}</p>
                                        </div>
                                    </div>
                                    <button onclick="copyToClipboard('${u.id}', 'ID مستخدم البوت')" class="bg-amoled-bg hover:bg-amoled-elevated text-amoled-muted hover:text-white border border-white/[0.08] px-2.5 py-1 rounded-xl text-[11px] font-mono flex items-center gap-1.5">
                                        <span>${u.id}</span>
                                        <i class="fa-regular fa-copy text-amoled-neon"></i>
                                    </button>
                                </div>

                                <div class="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-amoled-muted">
                                    <div class="flex items-center gap-3">
                                        <span>الرسائل: <strong class="text-white">${u.messages}</strong></span>
                                        <span>تاريخ /start: ${u.startDate}</span>
                                    </div>
                                    ${perms.ban_users ? `
                                        <button onclick="toggleBanBotUser('${u.id}')" class="px-3 py-1 rounded-xl font-extrabold transition-colors ${u.bannedFromBot ? 'bg-amoled-success/20 text-amoled-success hover:bg-amoled-success hover:text-black' : 'bg-amoled-danger/15 text-amoled-danger hover:bg-amoled-danger hover:text-white'}">
                                            ${u.bannedFromBot ? 'رفع الحظر من البوت' : 'حظر من البوت'}
                                        </button>
                                    ` : `
                                        <span class="text-amoled-muted italic"><i class="fa-solid fa-lock ml-1"></i> غير مصرح</span>
                                    `}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        function toggleBanBotUser(id) {
            const u = state.bot.botUsers.find(x => x.id === id);
            if (!u) return;
            u.bannedFromBot = !u.bannedFromBot;
            showToast(u.bannedFromBot ? `تم حظر ${u.name} من البوت نهائياً` : `تم رفع الحظر عن ${u.name}`, u.bannedFromBot ? 'danger' : 'success');
            renderBotManagementScreen(state.simulatedRole === 'owner', false);
        }

        // أوامر البوت في المجموعات + قيود البوت الذكية
        function renderBotCommandsTab(container, perms, isOwnerMode) {
            const isBotCmds = state.subTab === 'bot_cmds';
            const filteredCommands = state.bot.botCommands.filter(c => {
                if (state.botCmdFilter === 'all') return true;
                return c.scope === state.botCmdFilter;
            });

            container.innerHTML = `
                <div class="p-4 space-y-4 screen-fade">
                    <div class="glass-card p-1.5 rounded-2xl grid grid-cols-2 gap-1.5">
                        <button onclick="switchBotSubTab('bot_cmds', ${isOwnerMode})" class="py-2.5 px-3 rounded-xl text-xs font-extrabold transition-colors ${isBotCmds ? 'bg-amoled-neon text-black shadow-lg' : 'text-amoled-muted hover:text-white'}">
                            <i class="fa-solid fa-terminal ml-1"></i> أوامر البوت في المجموعات (${state.bot.botCommands.length})
                        </button>
                        <button onclick="switchBotSubTab('bot_groups', ${isOwnerMode})" class="py-2.5 px-3 rounded-xl text-xs font-extrabold transition-colors ${!isBotCmds ? 'bg-amoled-neon text-black shadow-lg' : 'text-amoled-muted hover:text-white'}">
                            <i class="fa-solid fa-people-group ml-1"></i> المجموعات المربوطة (${state.bot.botGroups.length})
                        </button>
                    </div>

                    ${isBotCmds ? `
                        <div class="glass-card border-amoled-neon/30 rounded-2xl p-3.5 text-xs text-amoled-text flex items-start gap-2.5">
                            <i class="fa-solid fa-robot text-amoled-neon text-base mt-0.5"></i>
                            <p>
                                <strong>أوامر البوت في المجموعات والقيود الذكية (DakiSchuleBot):</strong> تحكم كامل في إدارة الأعضاء، التحذيرات، الحذف الجماعي، قفل الوسائط والروابط، وقيود الذكاء الاصطناعي داخل المجموعات.
                            </p>
                        </div>

                        <!-- شريط تصفية أوامر البوت -->
                        <div class="flex items-center justify-between gap-2 flex-wrap">
                            <div class="flex gap-1.5">
                                ${[
                                    { id: 'all', label: `الكل (${state.bot.botCommands.length})` },
                                    { id: 'group', label: 'أوامر المجموعات' },
                                    { id: 'ai', label: 'قيود AI' }
                                ].map(f => `
                                    <button onclick="state.botCmdFilter='${f.id}'; renderBotManagementScreen(${isOwnerMode}, false)" class="px-2.5 py-1.5 rounded-xl text-[11px] font-extrabold border transition-colors ${state.botCmdFilter === f.id ? 'bg-amoled-neon text-black border-amoled-neon' : 'glass-card text-amoled-muted hover:text-white'}">
                                        ${f.label}
                                    </button>
                                `).join('')}
                            </div>
                            ${perms.edit_bot_commands ? `
                                <button onclick="openAddBotCmdModal(${isOwnerMode})" class="bg-amoled-neon text-black text-xs font-extrabold px-3 py-1.5 rounded-xl flex items-center gap-1 shadow">
                                    <i class="fa-solid fa-plus"></i> إضافة أمر/قيد
                                </button>
                            ` : ''}
                        </div>

                        <div class="space-y-2.5">
                            ${filteredCommands.map(cmd => `
                                <div class="glass-card rounded-2xl p-3.5 flex items-center justify-between gap-3">
                                    <div class="space-y-1">
                                        <div class="flex items-center gap-2 flex-wrap">
                                            <span class="text-xs font-extrabold text-white">${cmd.cmd}</span>
                                            <span class="text-[10px] ${cmd.scope === 'group' ? 'bg-amoled-purple/20 border-amoled-purple/40 text-purple-300' : 'bg-amoled-neon/15 border-amoled-neon/30 text-amoled-neon'} border px-2 py-0.5 rounded-lg font-bold">${cmd.category || 'أمر بوت'}</span>
                                            <span class="text-[10px] text-amoled-gold bg-amber-500/10 px-2 py-0.5 rounded-lg">رتبة ${cmd.minRank}+</span>
                                        </div>
                                        <p class="text-xs text-amoled-muted leading-relaxed">${cmd.desc}</p>
                                    </div>
                                    <label class="tg-switch">
                                        <input type="checkbox" ${cmd.enabled ? 'checked' : ''} ${!perms.edit_bot_commands ? 'disabled' : ''} onchange="cmdToggle('${cmd.id}', this.checked)">
                                        <span class="tg-slider"></span>
                                    </label>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <div class="space-y-3">
                            ${state.bot.botGroups.map(g => `
                                <div class="glass-card rounded-3xl p-4 space-y-3">
                                    <div class="flex items-start justify-between">
                                        <div>
                                            <h4 class="text-sm font-extrabold text-white">${g.name}</h4>
                                            <span class="text-[11px] text-amoled-muted font-mono">${g.id} • ${g.members.toLocaleString()} عضو</span>
                                        </div>
                                        <span class="text-[10px] bg-amoled-success/15 text-amoled-success px-2.5 py-1 rounded-full font-bold">البوت مشرف</span>
                                    </div>

                                    <div class="bg-amoled-bg/85 rounded-2xl p-3 border border-white/[0.06] space-y-2.5 text-xs">
                                        <div>
                                            <label class="block text-amoled-muted mb-1">سلوك البوت في هذه المجموعة:</label>
                                            <select ${!perms.manage_groups ? 'disabled' : ''} onchange="showToast('تم تحديث سلوك البوت في المجموعة')" class="w-full bg-amoled-elevated text-white border border-white/[0.1] rounded-xl px-2.5 py-1.5 outline-none">
                                                <option ${g.behavior.includes('متفاعل')?'selected':''}>متفاعل دائماً (All Messages)</option>
                                                <option ${g.behavior.includes('المنشن')?'selected':''}>عند المنشن أو الرد فقط (@DakiSchuleBot)</option>
                                                <option ${g.behavior.includes('الحماية')?'selected':''}>وضع الحماية فقط (بدون دردشة AI)</option>
                                            </select>
                                        </div>
                                        <div class="flex items-center justify-between pt-1">
                                            <span class="text-amoled-muted">تقييد وحذف الروابط والتكرار التلقائي</span>
                                            <input type="checkbox" ${g.protectLinks ? 'checked' : ''} ${!perms.manage_groups ? 'disabled' : ''} class="accent-amoled-neon w-4 h-4">
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-amoled-muted">رسالة الترحيب الذكية بالأعضاء الجدد</span>
                                            <input type="checkbox" ${g.welcomeMsg ? 'checked' : ''} ${!perms.manage_groups ? 'disabled' : ''} class="accent-amoled-neon w-4 h-4">
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `}
                </div>
            `;
        }

        function openAddBotCmdModal(isOwnerMode) {
            const modal = document.getElementById('custom-form-modal');
            document.getElementById('form-modal-title').textContent = 'إضافة أمر مجموعة أو قيد جديد للبوت';
            document.getElementById('form-modal-body').innerHTML = `
                <div>
                    <label class="block text-xs text-amoled-muted mb-1">اسم الأمر وصيغته (مثال: /slowmode تفعيل الوضع البطيء)</label>
                    <input id="new-bot-cmd" type="text" placeholder="مثال: الوضع البطيء للمجموعة (/slowmode)" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2 text-sm text-white outline-none">
                </div>
                <div>
                    <label class="block text-xs text-amoled-muted mb-1">التصنيف والنطاق</label>
                    <select id="new-bot-cat" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white outline-none">
                        <option value="أوامر المجموعات • الإدارة">أوامر المجموعات • الإدارة والحماية</option>
                        <option value="أوامر المجموعات • التفاعل">أوامر المجموعات • التفاعل والتنظيم</option>
                        <option value="قيود الذكاء الاصطناعي">قيود الذكاء الاصطناعي (منع قول شيء)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs text-amoled-muted mb-1">الحد الأدنى للرتبة المسموح لها بالتنفيذ</label>
                    <select id="new-bot-rank" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white outline-none">
                        <option value="1">رتبة 1 (المالك فقط)</option>
                        <option value="3" selected>رتبة 3+ (المدير العام فأعلى)</option>
                        <option value="4">رتبة 4+ (المشرف المتقدم فأعلى)</option>
                        <option value="5">رتبة 5+ (المشرف فأعلى)</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs text-amoled-muted mb-1">وصف عمل الأمر</label>
                    <input id="new-bot-desc" type="text" placeholder="اشرح وظيفة الأمر داخل المجموعة أو البوت..." class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2 text-sm text-white outline-none">
                </div>
                <button onclick="saveNewBotCmd(${isOwnerMode})" class="w-full bg-amoled-neon text-black font-extrabold py-2.5 rounded-xl text-sm">
                    حفظ وتفعيل في البوت
                </button>
            `;
            modal.classList.remove('hidden');
        }

        function saveNewBotCmd(isOwnerMode) {
            const cmd = document.getElementById('new-bot-cmd').value.trim();
            const cat = document.getElementById('new-bot-cat').value;
            const minRank = Number(document.getElementById('new-bot-rank').value) || 3;
            const desc = document.getElementById('new-bot-desc').value.trim();
            if (!cmd || !desc) return showToast('يرجى إكمال الحقول', 'danger');
            const scope = cat.includes('المجموعات') ? 'group' : 'ai';
            state.bot.botCommands.unshift({ id: 'bc_' + Date.now(), cmd, category: cat, scope, desc, minRank, enabled: true });
            closeFormModal();
            showToast('تمت إضافة الأمر للبوت بنجاح');
            renderBotManagementScreen(isOwnerMode, false);
        }

        function cmdToggle(id, val) {
            const c = state.bot.botCommands.find(x => x.id === id);
            if (c) c.enabled = val;
            showToast('تم تحديث حالة أمر/قيد البوت');
        }

        function renderBotInstructionsTab(container, perms, isOwnerMode) {
            container.innerHTML = `
                <div class="p-4 space-y-4 screen-fade">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-sm font-extrabold text-white">تعليمات البوت والردود الإجبارية</h3>
                            <p class="text-xs text-amoled-muted">قواعد صارمة يلتزم بها DakiSchuleBot عند الإجابة</p>
                        </div>
                        ${perms.edit_instructions ? `
                            <button onclick="openAddInstructionModal(${isOwnerMode})" class="bg-amoled-neon text-black text-xs font-extrabold px-3 py-2 rounded-xl flex items-center gap-1.5 shadow">
                                <i class="fa-solid fa-plus"></i> إضافة قاعدة
                            </button>
                        ` : '<span class="text-[11px] text-amoled-danger font-bold"><i class="fa-solid fa-lock"></i> للقراءة فقط</span>'}
                    </div>

                    <div class="space-y-3">
                        ${state.bot.instructions.map(inst => `
                            <div class="glass-card rounded-3xl p-4 space-y-2.5">
                                <div class="flex items-center justify-between">
                                    <span class="text-[10px] bg-amoled-neon/20 text-amoled-neon font-extrabold px-2.5 py-0.5 rounded-full">${inst.type}</span>
                                    ${perms.edit_instructions ? `
                                        <button onclick="deleteBotInstruction(${inst.id}, ${isOwnerMode})" class="text-amoled-muted hover:text-amoled-danger text-xs">
                                            <i class="fa-solid fa-trash-can"></i>
                                        </button>
                                    ` : ''}
                                </div>
                                <div class="text-xs">
                                    <span class="text-amoled-muted block">عند السؤال عن:</span>
                                    <strong class="text-white">${inst.trigger}</strong>
                                </div>
                                <div class="bg-amoled-bg/90 rounded-2xl p-3 border border-white/[0.06] text-xs text-amoled-text">
                                    <span class="text-amoled-success font-extrabold block mb-1">الإجابة الإجبارية للبوت:</span>
                                    ${inst.response}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        function openAddInstructionModal(isOwnerMode) {
            const modal = document.getElementById('custom-form-modal');
            document.getElementById('form-modal-title').textContent = 'إضافة تعليمة إجبارية للبوت';
            document.getElementById('form-modal-body').innerHTML = `
                <div>
                    <label class="block text-xs text-amoled-muted mb-1">الكلمات المفتاحية أو نوع السؤال</label>
                    <input id="inst-trigger" type="text" placeholder="مثال: رقم التواصل / طريقة التسجيل" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2 text-sm text-white outline-none">
                </div>
                <div>
                    <label class="block text-xs text-amoled-muted mb-1">الإجابة الإجبارية التي سيلتزم بها البوت</label>
                    <textarea id="inst-response" rows="3" placeholder="اكتب النص الدقيق الذي سيجيب به البوت..." class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2 text-sm text-white outline-none"></textarea>
                </div>
                <button onclick="saveNewInstruction(${isOwnerMode})" class="w-full bg-amoled-neon text-black font-extrabold py-2.5 rounded-xl text-sm">
                    حفظ القاعدة في ذاكرة البوت
                </button>
            `;
            modal.classList.remove('hidden');
        }

        function saveNewInstruction(isOwnerMode) {
            const trigger = document.getElementById('inst-trigger').value.trim();
            const response = document.getElementById('inst-response').value.trim();
            if (!trigger || !response) return showToast('يرجى إكمال الحقول', 'danger');
            state.bot.instructions.unshift({ id: Date.now(), trigger, response, type: 'إجابة إجبارية مخصصة' });
            closeFormModal();
            showToast('تمت إضافة التعليمة للبوت');
            renderBotManagementScreen(isOwnerMode, false);
        }

        function deleteBotInstruction(id, isOwnerMode) {
            state.bot.instructions = state.bot.instructions.filter(i => i.id !== id);
            showToast('تم حذف القاعدة');
            renderBotManagementScreen(isOwnerMode, false);
        }

        // ==========================================
        // نظام الرتب الـ 7 + الإعدادات العامة المتقدمة للبوت
        // ==========================================
        function selectRankKeepScroll(rankId, isOwnerMode) {
            const bar = document.getElementById('ranks-horizontal-bar');
            const savedScrollLeft = bar ? bar.scrollLeft : 0;

            state.selectedRankId = rankId;
            renderBotManagementScreen(isOwnerMode, false);

            const newBar = document.getElementById('ranks-horizontal-bar');
            if (newBar) {
                newBar.scrollLeft = savedScrollLeft;
            }
        }

        function renderBotSettingsAndRanksTab(container, currentUserRank, isOwnerMode) {
            const selectedRank = state.ranks.find(r => r.id === state.selectedRankId) || state.ranks[0];
            
            const canEditThisRank = isOwnerMode 
                ? (selectedRank.level > 1) 
                : (selectedRank.level > currentUserRank.level && currentUserRank.permissions.promote_lower);

            container.innerHTML = `
                <div class="p-4 space-y-4 screen-fade">
                    <!-- التبويبات الثلاثة للإعدادات العامة -->
                    <div class="glass-card p-1.5 rounded-2xl grid grid-cols-3 gap-1">
                        <button onclick="switchBotSubTab('ranks', ${isOwnerMode})" class="py-2 px-2 rounded-xl text-[11px] sm:text-xs font-extrabold transition-colors ${state.subTab==='ranks' ? 'bg-amoled-neon text-black shadow' : 'text-amoled-muted hover:text-white'}">
                            <i class="fa-solid fa-layer-group ml-1"></i> الرتب (7)
                        </button>
                        <button onclick="switchBotSubTab('bot_persona', ${isOwnerMode})" class="py-2 px-2 rounded-xl text-[11px] sm:text-xs font-extrabold transition-colors ${state.subTab==='bot_persona' ? 'bg-amoled-neon text-black shadow' : 'text-amoled-muted hover:text-white'}">
                            <i class="fa-solid fa-robot ml-1"></i> شخصية البوت
                        </button>
                        <button onclick="switchBotSubTab('bot_adv', ${isOwnerMode})" class="py-2 px-2 rounded-xl text-[11px] sm:text-xs font-extrabold transition-colors ${state.subTab==='bot_adv' ? 'bg-amoled-neon text-black shadow' : 'text-amoled-muted hover:text-white'}">
                            <i class="fa-solid fa-sliders ml-1"></i> الإعدادات العامة
                        </button>
                    </div>

                    ${state.subTab === 'ranks' ? `
                        <div class="space-y-2">
                            <div class="flex items-center justify-between px-1">
                                <span class="text-xs font-extrabold text-white">اسحب واختر الرتبة (شريط ثابت):</span>
                                <span class="text-[11px] text-amoled-neon font-bold">رتبتك: ${currentUserRank.name.split('(')[0]}</span>
                            </div>
                            <div id="ranks-horizontal-bar" class="flex gap-2 overflow-x-auto pb-2.5 rank-scroll-bar">
                                ${state.ranks.map(r => {
                                    const active = r.id === selectedRank.id;
                                    const lockedForMe = !isOwnerMode && r.level <= currentUserRank.level;
                                    return `
                                        <button type="button" onclick="selectRankKeepScroll('${r.id}', ${isOwnerMode})" class="shrink-0 px-3.5 py-2.5 rounded-2xl border text-xs font-extrabold flex items-center gap-2 transition-colors ${active ? 'bg-amoled-elevated border-amoled-neon text-white shadow-lg ring-1 ring-amoled-neon/50' : 'glass-card text-amoled-muted hover:text-white'}">
                                            <span class="w-6 h-6 rounded-lg bg-white/[0.06] flex items-center justify-center ${r.color}">
                                                <i class="fa-solid ${r.icon}"></i>
                                            </span>
                                            <div class="text-start">
                                                <span class="block text-[10px] opacity-75">مستوى ${r.level} ${lockedForMe ? '<i class="fa-solid fa-lock text-amoled-danger mr-1"></i>' : ''}</span>
                                                <span>${r.name.split('(')[0]}</span>
                                            </div>
                                        </button>
                                    `;
                                }).join('')}
                            </div>
                        </div>

                        <div class="glass-card rounded-3xl p-4 space-y-3">
                            <div class="flex items-center justify-between border-b border-white/[0.08] pb-3 gap-2">
                                <div class="flex items-center gap-2.5">
                                    <span class="w-10 h-10 rounded-2xl bg-white/[0.06] flex items-center justify-center text-lg ${selectedRank.color}">
                                        <i class="fa-solid ${selectedRank.icon}"></i>
                                    </span>
                                    <div>
                                        <h4 class="text-sm font-extrabold ${selectedRank.color}">${selectedRank.name}</h4>
                                        <p class="text-[11px] text-amoled-muted">
                                            ${selectedRank.level === 1 
                                                ? 'رتبة المالك الأعلى تمتلك كافة الصلاحيات بشكل دائم.' 
                                                : canEditThisRank 
                                                    ? 'صلاحياتك تسمح بتعديل هذه الرتبة ومنحها للأعضاء.' 
                                                    : 'مقفلة • لا تملك صلاحية تعديل رتبة أعلى أو مساوية لرتبتك.'}
                                        </p>
                                    </div>
                                </div>
                                ${canEditThisRank ? `
                                    <button onclick="openAssignUserToRankModal('${selectedRank.id}')" class="bg-amoled-neon text-black text-[11px] font-extrabold px-3 py-1.5 rounded-xl shrink-0 shadow">
                                        + منح الرتبة
                                    </button>
                                ` : ''}
                            </div>

                            <div class="space-y-2 max-h-[400px] overflow-y-auto pl-1">
                                ${Object.entries(permissionLabels).map(([permKey, info]) => {
                                    const isChecked = selectedRank.permissions[permKey];
                                    return `
                                        <div class="bg-amoled-bg/85 border border-white/[0.06] rounded-2xl p-3 flex items-center justify-between gap-3">
                                            <div>
                                                <span class="text-xs font-extrabold text-white block">${info.label}</span>
                                                <span class="text-[11px] text-amoled-muted">${info.desc}</span>
                                            </div>
                                            <label class="tg-switch">
                                                <input type="checkbox" ${isChecked ? 'checked' : ''} ${!canEditThisRank ? 'disabled' : ''} onchange="toggleRankPermission('${selectedRank.id}', '${permKey}', this.checked, ${isOwnerMode})">
                                                <span class="tg-slider"></span>
                                            </label>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    ` : state.subTab === 'bot_persona' ? `
                        <div class="glass-card rounded-3xl p-4 space-y-4">
                            <div>
                                <label class="block text-xs text-amoled-muted mb-1">اسم البوت الظاهر</label>
                                <input type="text" value="${state.bot.botDisplayName}" onchange="state.bot.botDisplayName=this.value" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2 text-sm text-white">
                            </div>
                            <div class="grid grid-cols-2 gap-3">
                                <div>
                                    <label class="block text-xs text-amoled-muted mb-1">نموذج الذكاء الاصطناعي (Workers AI)</label>
                                    <select onchange="state.bot.botModel=this.value" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-2.5 py-2 text-xs text-white">
                                        <option>Cloudflare Workers AI (Llama-3.3-70B)</option>
                                        <option>Cloudflare Workers AI (Qwen-2.5-72B)</option>
                                        <option>Cloudflare Workers AI (Mistral-Small)</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs text-amoled-muted mb-1">حد التوكنز للرد</label>
                                    <input type="number" value="${state.bot.maxTokens}" onchange="state.bot.maxTokens=this.value" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white font-mono">
                                </div>
                            </div>
                            <div>
                                <label class="block text-xs text-amoled-muted mb-1">وصف ونبرة صوت البوت</label>
                                <textarea rows="3" onchange="state.bot.botPersonality=this.value" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl p-3 text-xs text-white">${state.bot.botPersonality}</textarea>
                            </div>
                            <button onclick="showToast('تم حفظ شخصية وإعدادات البوت')" class="w-full bg-amoled-neon text-black font-extrabold py-2.5 rounded-xl text-xs">حفظ التغييرات</button>
                        </div>
                    ` : `
                        <!-- الإعدادات العامة المتقدمة للبوت -->
                        <div class="space-y-3">
                            <!-- 1. وضع الصيانة ونطاق التشغيل -->
                            <div class="glass-card rounded-3xl p-4 space-y-3.5">
                                <h4 class="text-xs font-extrabold text-amoled-gold flex items-center gap-1.5">
                                    <i class="fa-solid fa-power-off"></i> وضع الصيانة ونطاقات التشغيل
                                </h4>
                                <div class="flex items-center justify-between">
                                    <div>
                                        <span class="text-xs font-extrabold text-white block">وضع الصيانة العام (Maintenance Mode)</span>
                                        <span class="text-[11px] text-amoled-muted">إيقاف استجابة البوت للجميع ما عدا المالك والرتب العليا</span>
                                    </div>
                                    <label class="tg-switch">
                                        <input type="checkbox" ${state.bot.maintenanceMode ? 'checked' : ''} onchange="state.bot.maintenanceMode=this.checked; showToast(this.checked?'تم تفعيل وضع الصيانة':'تم إنهاء وضع الصيانة', this.checked?'danger':'success')">
                                        <span class="tg-slider"></span>
                                    </label>
                                </div>
                                <div>
                                    <label class="block text-[11px] text-amoled-muted mb-1">رسالة الصيانة للمستخدمين:</label>
                                    <input type="text" value="${state.bot.maintenanceMessage}" onchange="state.bot.maintenanceMessage=this.value" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white">
                                </div>
                                <div class="grid grid-cols-2 gap-2.5 pt-2 border-t border-white/[0.06]">
                                    <div class="bg-amoled-bg/85 rounded-2xl p-3 border border-white/[0.06] flex items-center justify-between">
                                        <span class="text-xs font-bold text-white">العمل في الخاص</span>
                                        <input type="checkbox" ${state.bot.allowPrivateChat ? 'checked' : ''} onchange="state.bot.allowPrivateChat=this.checked; showToast('تم التحديث')" class="accent-amoled-neon w-4 h-4">
                                    </div>
                                    <div class="bg-amoled-bg/85 rounded-2xl p-3 border border-white/[0.06] flex items-center justify-between">
                                        <span class="text-xs font-bold text-white">العمل في المجموعات</span>
                                        <input type="checkbox" ${state.bot.allowGroupChat ? 'checked' : ''} onchange="state.bot.allowGroupChat=this.checked; showToast('تم التحديث')" class="accent-amoled-neon w-4 h-4">
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-[11px] text-amoled-muted mb-1">نمط استجابة البوت الافتراضي في المجموعات:</label>
                                    <select onchange="state.bot.groupResponseMode=this.value; showToast('تم تحديث نمط الاستجابة')" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white">
                                        <option value="mention_or_reply" ${state.bot.groupResponseMode==='mention_or_reply'?'selected':''}>عند المنشن أو الرد على رسالة البوت فقط</option>
                                        <option value="all" ${state.bot.groupResponseMode==='all'?'selected':''}>التفاعل الذكي مع جميع رسائل المجموعة</option>
                                        <option value="commands_only" ${state.bot.groupResponseMode==='commands_only'?'selected':''}>تنفيذ الأوامر الإدارية فقط (بدون دردشة AI)</option>
                                    </select>
                                </div>
                            </div>

                            <!-- 2. الحماية، السبام، والاشتراك الإجباري -->
                            <div class="glass-card rounded-3xl p-4 space-y-3.5">
                                <h4 class="text-xs font-extrabold text-amoled-neon flex items-center gap-1.5">
                                    <i class="fa-solid fa-shield-virus"></i> الحماية، مكافحة السبام، والاشتراك الإجباري
                                </h4>
                                <div class="flex items-center justify-between">
                                    <div>
                                        <span class="text-xs font-extrabold text-white block">حماية السبام والتكرار (Anti-Flood)</span>
                                        <span class="text-[11px] text-amoled-muted">كتم تلقائي عند تجاوز حد الرسائل بالدقيقة</span>
                                    </div>
                                    <label class="tg-switch">
                                        <input type="checkbox" ${state.bot.antiSpam ? 'checked' : ''} onchange="state.bot.antiSpam=this.checked; showToast('تم التحديث')">
                                        <span class="tg-slider"></span>
                                    </label>
                                </div>
                                <div class="grid grid-cols-2 gap-2.5">
                                    <div>
                                        <label class="block text-[11px] text-amoled-muted mb-1">حد الرسائل / دقيقة</label>
                                        <input type="number" value="${state.bot.floodLimitPerMin}" onchange="state.bot.floodLimitPerMin=this.value" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-1.5 text-xs text-amoled-neon font-mono font-bold">
                                    </div>
                                    <div>
                                        <label class="block text-[11px] text-amoled-muted mb-1">مدة الكتم التلقائي (دقيقة)</label>
                                        <input type="number" value="${state.bot.floodMuteMinutes}" onchange="state.bot.floodMuteMinutes=this.value" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-1.5 text-xs text-amoled-danger font-mono font-bold">
                                    </div>
                                </div>

                                <div class="flex items-center justify-between pt-3 border-t border-white/[0.07]">
                                    <div>
                                        <span class="text-xs font-extrabold text-white block">الاشتراك الإجباري في القناة</span>
                                        <span class="text-[11px] text-amoled-muted">إلزام المستخدم بالاشتراك قبل استخدام البوت</span>
                                    </div>
                                    <label class="tg-switch">
                                        <input type="checkbox" ${state.bot.forceSub ? 'checked' : ''} onchange="state.bot.forceSub=this.checked; showToast('تم تحديث الاشتراك الإجباري')">
                                        <span class="tg-slider"></span>
                                    </label>
                                </div>
                                <div>
                                    <label class="block text-[11px] text-amoled-muted mb-1">معرفات قنوات الاشتراك الإجباري (مفصولة بفاصلة):</label>
                                    <input type="text" value="${state.bot.forceSubChannel}" onchange="state.bot.forceSubChannel=this.value" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-amoled-neon font-mono">
                                </div>
                            </div>

                            <!-- 3. قناة السجلات (Logs)، الترحيب، وتنظيف رسائل الخدمة -->
                            <div class="glass-card rounded-3xl p-4 space-y-3.5">
                                <h4 class="text-xs font-extrabold text-amoled-success flex items-center gap-1.5">
                                    <i class="fa-solid fa-satellite-dish"></i> السجلات (Logs Channel) والرسائل التلقائية
                                </h4>
                                <div class="flex items-center justify-between">
                                    <div>
                                        <span class="text-xs font-extrabold text-white block">إرسال تقارير الأحداث لقناة السجل</span>
                                        <span class="text-[11px] text-amoled-muted">تسجيل الحظر، المشتركين الجدد، وتغييرات الرتب</span>
                                    </div>
                                    <label class="tg-switch">
                                        <input type="checkbox" ${state.bot.logEventsEnabled ? 'checked' : ''} onchange="state.bot.logEventsEnabled=this.checked; showToast('تم التحديث')">
                                        <span class="tg-slider"></span>
                                    </label>
                                </div>
                                <div>
                                    <label class="block text-[11px] text-amoled-muted mb-1">آيدي قناة السجلات (Logs Channel ID):</label>
                                    <input type="text" value="${state.bot.logsChannelId}" onchange="state.bot.logsChannelId=this.value" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2 text-xs text-white font-mono">
                                </div>
                                <div class="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                                    <div>
                                        <span class="text-xs font-bold text-white block">حذف إشعارات الدخول والمغادرة تلقائياً</span>
                                        <span class="text-[11px] text-amoled-muted">تنظيف رسائل (انضم فلان / غادر فلان) في المجموعات</span>
                                    </div>
                                    <label class="tg-switch">
                                        <input type="checkbox" ${state.bot.autoDeleteServiceMsgs ? 'checked' : ''} onchange="state.bot.autoDeleteServiceMsgs=this.checked; showToast('تم التحديث')">
                                        <span class="tg-slider"></span>
                                    </label>
                                </div>
                                <div>
                                    <label class="block text-[11px] text-amoled-muted mb-1">قالب رسالة الترحيب العامة ({name} و {chat}):</label>
                                    <textarea rows="2" onchange="state.bot.welcomeText=this.value" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl p-2.5 text-xs text-white">${state.bot.welcomeText}</textarea>
                                </div>

                                <button onclick="showToast('تم حفظ جميع الإعدادات العامة للبوت بنجاح')" class="w-full bg-gradient-to-r from-amoled-neonDark to-amoled-neon text-white font-extrabold py-2.5 rounded-xl text-xs shadow-lg">
                                    <i class="fa-solid fa-floppy-disk ml-1"></i> حفظ كافة الإعدادات العامة
                                </button>

                                <div class="pt-2 border-t border-white/[0.07]">
                                    <span class="text-xs font-extrabold text-amoled-neon block mb-2">سجل التغييرات الأخيرة (Audit Log)</span>
                                    <div class="bg-amoled-bg/90 rounded-2xl p-3 border border-white/[0.06] space-y-1.5 text-[11px] text-amoled-muted font-mono">
                                        <div>[20:41] Owner AI updated Rank_3 permissions</div>
                                        <div>[19:15] Anti-Flood blocked bot user #776345633</div>
                                        <div>[18:02] D1 isolated schemas verified</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `}
                </div>
            `;
        }

        function toggleRankPermission(rankId, permKey, val, isOwnerMode) {
            const bar = document.getElementById('ranks-horizontal-bar');
            const savedScrollLeft = bar ? bar.scrollLeft : 0;

            const rank = state.ranks.find(r => r.id === rankId);
            if (!rank) return;
            rank.permissions[permKey] = val;
            showToast(`تم ${val ? 'تفعيل' : 'إلغاء'} صلاحية "${permissionLabels[permKey].label}"`);
            renderBotManagementScreen(isOwnerMode, false);

            const newBar = document.getElementById('ranks-horizontal-bar');
            if (newBar) {
                newBar.scrollLeft = savedScrollLeft;
            }
        }

        function openAssignUserToRankModal(rankId) {
            const rank = state.ranks.find(r => r.id === rankId);
            const modal = document.getElementById('custom-form-modal');
            document.getElementById('form-modal-title').textContent = `منح رتبة: ${rank.name}`;
            document.getElementById('form-modal-body').innerHTML = `
                <p class="text-xs text-amoled-muted">أدخل أيدي المستخدم (Telegram ID) لترقيته إلى هذه الرتبة فوراً:</p>
                <input id="promote-user-id" type="text" placeholder="مثال: 998123411" class="w-full bg-amoled-bg border border-white/[0.1] rounded-xl px-3 py-2.5 text-sm text-white font-mono outline-none">
                <button onclick="confirmPromoteUser('${rank.name}')" class="w-full bg-amoled-neon text-black font-extrabold py-2.5 rounded-xl text-sm">
                    تأكيد منح الرتبة
                </button>
            `;
            modal.classList.remove('hidden');
        }

        function confirmPromoteUser(rankName) {
            const uid = document.getElementById('promote-user-id').value.trim();
            if (!uid) return showToast('يرجى إدخال ID صحيح', 'danger');
            closeFormModal();
            showToast(`تم منح المستخدم (${uid}) رتبة ${rankName}`);
        }

        function closeFormModal() {
            document.getElementById('custom-form-modal').classList.add('hidden');
        }

        // ==========================================
        // 8. تهيئة التطبيق وتحديث البينج الحي
        // ==========================================
        window.onload = function() {
            if (window.Telegram?.WebApp) window.Telegram.WebApp.ready();
            renderCurrentScreen(true);
            dakiLoadSession();
            // No fabricated ping value: show a measured API round-trip only.
            (async()=>{ const el=document.getElementById('live-ping'); if(!el) return; const t0=performance.now(); try { await DAKI_API.call('sessionInfo'); el.textContent=Math.round(performance.now()-t0)+'ms'; } catch(_) { el.textContent='—'; } })();
        };
    </script>
</body>
</html>
