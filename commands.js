/* DAKI command control plane — extracted from verified v2.5.10. */

export const ADMIN_CATEGORIES = [
  ["control", "التحكم بالبوت"],
  ["users", "المستخدمون"],
  ["moderation", "الحماية والإشراف"],
  ["ai", "الذكاء الاصطناعي والتعليم"],
  ["admins", "المالكون والمشرفون"],
  ["groups", "المجموعات"],
  ["stats", "الإحصائيات"],
  ["maintenance", "الصيانة والنسخ الاحتياطي"]
];


export const ADMIN_COMMANDS = [
  { name: 'admin', category: 'control', labels: { ar: 'لوحة الإدارة', en: 'Admin panel', de: 'Administrationsbereich', zh: '管理面板' } },
  { name: 'adminhelp', category: 'control', labels: { ar: 'مساعدة الإدارة', en: 'Admin help', de: 'Admin-Hilfe', zh: '管理帮助' } },
  { name: 'commandlist', category: 'control', labels: { ar: 'فهرس الأوامر', en: 'Command catalogue', de: 'Befehlsverzeichnis', zh: '命令目录' } },
  { name: 'commandinfo', category: 'control', labels: { ar: 'تفاصيل أمر', en: 'Command details', de: 'Befehlsdetails', zh: '命令详情' } },
  { name: 'dakistatus', category: 'control', labels: { ar: 'حالة DAKI', en: 'DAKI status', de: 'DAKI-Status', zh: 'DAKI状态' } },
  { name: 'dakion', category: 'control', labels: { ar: 'تشغيل الردود', en: 'Enable replies', de: 'Antworten aktivieren', zh: '启用回复' } },
  { name: 'dakioff', category: 'control', labels: { ar: 'إيقاف الردود', en: 'Disable replies', de: 'Antworten deaktivieren', zh: '停用回复' } },
  { name: 'restartinfo', category: 'control', labels: { ar: 'معلومات إعادة التشغيل', en: 'Restart information', de: 'Neustartinformationen', zh: '重启信息' } },
  { name: 'users', category: 'users', labels: { ar: 'المستخدمون', en: 'Users', de: 'Benutzer', zh: '用户' } },
  { name: 'userinfo', category: 'users', labels: { ar: 'معلومات المستخدم', en: 'User information', de: 'Benutzerinformationen', zh: '用户信息' } },
  { name: 'userhistory', category: 'users', labels: { ar: 'سجل المحادثة', en: 'Conversation history', de: 'Chatverlauf', zh: '聊天记录' } },
  { name: 'searchuser', category: 'users', labels: { ar: 'البحث عن مستخدم', en: 'Search user', de: 'Benutzer suchen', zh: '搜索用户' } },
  { name: 'forgetuser', category: 'users', labels: { ar: 'حذف ذاكرة مستخدم', en: 'Delete user memory', de: 'Benutzerspeicher löschen', zh: '删除用户记忆' } },
  { name: 'userstats', category: 'users', labels: { ar: 'إحصائيات المستخدم', en: 'User statistics', de: 'Benutzerstatistik', zh: '用户统计' } },
  { name: 'blocked', category: 'moderation', labels: { ar: 'المحظورون', en: 'Blocked users', de: 'Gesperrte Benutzer', zh: '已屏蔽用户' } },
  { name: 'ban', category: 'moderation', labels: { ar: 'حظر المستخدم', en: 'Ban user', de: 'Benutzer sperren', zh: '封禁用户' } },
  { name: 'unban', category: 'moderation', labels: { ar: 'إلغاء الحظر', en: 'Unban user', de: 'Sperre aufheben', zh: '解除封禁' } },
  { name: 'warn', category: 'moderation', labels: { ar: 'تحذير مستخدم', en: 'Warn user', de: 'Benutzer verwarnen', zh: '警告用户' } },
  { name: 'warnings', category: 'moderation', labels: { ar: 'سجل التحذيرات', en: 'Warnings', de: 'Verwarnungen', zh: '警告记录' } },
  { name: 'reason', category: 'moderation', labels: { ar: 'سبب الإجراء', en: 'Action reason', de: 'Aktionsgrund', zh: '操作原因' } },
  { name: 'mute', category: 'moderation', labels: { ar: 'كتم المستخدم', en: 'Mute user', de: 'Benutzer stummschalten', zh: '禁言用户' } },
  { name: 'aiinfo', category: 'ai', labels: { ar: 'معلومات الذكاء الاصطناعي', en: 'AI information', de: 'KI-Informationen', zh: 'AI信息' } },
  { name: 'memory', category: 'ai', labels: { ar: 'الذاكرة', en: 'Memory', de: 'Speicher', zh: '记忆' } },
  { name: 'clearmemory', category: 'ai', labels: { ar: 'مسح الذاكرة', en: 'Clear memory', de: 'Speicher löschen', zh: '清除记忆' } },
  { name: 'instructions', category: 'ai', labels: { ar: 'التعليمات', en: 'Instructions', de: 'Anweisungen', zh: '指令' } },
  { name: 'addinstruction', category: 'ai', labels: { ar: 'إضافة تعليمة', en: 'Add instruction', de: 'Anweisung hinzufügen', zh: '添加指令' } },
  { name: 'editinstruction', category: 'ai', labels: { ar: 'تعديل تعليمة', en: 'Edit instruction', de: 'Anweisung bearbeiten', zh: '编辑指令' } },
  { name: 'delinstruction', category: 'ai', labels: { ar: 'حذف تعليمة', en: 'Delete instruction', de: 'Anweisung löschen', zh: '删除指令' } },
  { name: 'reloadprompt', category: 'ai', labels: { ar: 'إعادة تحميل التعليمات', en: 'Reload instructions', de: 'Anweisungen neu laden', zh: '重新加载指令' } },
  { name: 'admins', category: 'admins', labels: { ar: 'المشرفون', en: 'Administrators', de: 'Administratoren', zh: '管理员' } },
  { name: 'addadmin', category: 'admins', labels: { ar: 'إضافة مشرف', en: 'Add administrator', de: 'Administrator hinzufügen', zh: '添加管理员' } },
  { name: 'removeadmin', category: 'admins', labels: { ar: 'إزالة مشرف', en: 'Remove administrator', de: 'Administrator entfernen', zh: '移除管理员' } },
  { name: 'addowner', category: 'admins', labels: { ar: 'إضافة مالك', en: 'Add owner', de: 'Eigentümer hinzufügen', zh: '添加所有者' } },
  { name: 'removeowner', category: 'admins', labels: { ar: 'إزالة مالك', en: 'Remove owner', de: 'Eigentümer entfernen', zh: '移除所有者' } },
  { name: 'permissions', category: 'admins', labels: { ar: 'الصلاحيات', en: 'Permissions', de: 'Berechtigungen', zh: '权限' } },
  { name: 'setpermissions', category: 'admins', labels: { ar: 'ضبط الصلاحيات', en: 'Set permissions', de: 'Berechtigungen festlegen', zh: '设置权限' } },
  { name: 'groups', category: 'groups', labels: { ar: 'المجموعات', en: 'Groups', de: 'Gruppen', zh: '群组' } },
  { name: 'groupinfo', category: 'groups', labels: { ar: 'معلومات المجموعة', en: 'Group information', de: 'Gruppeninformationen', zh: '群组信息' } },
  { name: 'groupmode', category: 'groups', labels: { ar: 'نمط المجموعة', en: 'Group mode', de: 'Gruppenmodus', zh: '群组模式' } },
  { name: 'groupenable', category: 'groups', labels: { ar: 'تفعيل المجموعة', en: 'Enable group', de: 'Gruppe aktivieren', zh: '启用群组' } },
  { name: 'groupdisable', category: 'groups', labels: { ar: 'تعطيل المجموعة', en: 'Disable group', de: 'Gruppe deaktivieren', zh: '禁用群组' } },
  { name: 'stats', category: 'stats', labels: { ar: 'الإحصائيات', en: 'Statistics', de: 'Statistiken', zh: '统计' } },
  { name: 'today', category: 'stats', labels: { ar: 'إحصائيات اليوم', en: 'Today statistics', de: 'Tagesstatistik', zh: '今日统计' } },
  { name: 'weekly', category: 'stats', labels: { ar: 'إحصائيات أسبوعية', en: 'Weekly statistics', de: 'Wochenstatistik', zh: '每周统计' } },
  { name: 'monthly', category: 'stats', labels: { ar: 'إحصائيات شهرية', en: 'Monthly statistics', de: 'Monatsstatistik', zh: '每月统计' } },
  { name: 'topusers', category: 'stats', labels: { ar: 'الأكثر نشاطاً', en: 'Top users', de: 'Aktivste Benutzer', zh: '活跃用户' } },
  { name: 'aistats', category: 'stats', labels: { ar: 'إحصائيات الذكاء الاصطناعي', en: 'AI statistics', de: 'KI-Statistik', zh: 'AI统计' } },
  { name: 'errors', category: 'maintenance', labels: { ar: 'الأخطاء', en: 'Errors', de: 'Fehler', zh: '错误' } },
  { name: 'health', category: 'maintenance', labels: { ar: 'فحص النظام', en: 'System health', de: 'Systemprüfung', zh: '系统检查' } },
  { name: 'backup', category: 'maintenance', labels: { ar: 'نسخة احتياطية', en: 'Backup', de: 'Sicherung', zh: '备份' } },
  { name: 'restore', category: 'maintenance', labels: { ar: 'استعادة نسخة', en: 'Restore backup', de: 'Sicherung wiederherstellen', zh: '恢复备份' } },
  { name: 'maintenance', category: 'maintenance', labels: { ar: 'وضع الصيانة', en: 'Maintenance mode', de: 'Wartungsmodus', zh: '维护模式' } },
  { name: 'version', category: 'maintenance', labels: { ar: 'الإصدار', en: 'Version', de: 'Version', zh: '版本' } },
  { name: 'logs', category: 'maintenance', labels: { ar: 'سجل العمليات', en: 'Activity logs', de: 'Aktivitätsprotokoll', zh: '操作日志' } }
];

export const CHAT_ONLY_COMMANDS = new Set(["ban","unban","warn","mute","userinfo","searchuser","userhistory","forgetuser","reason","groupinfo","restore"]);
export const WEB_COMMANDS = new Set(ADMIN_COMMANDS.map(c => c.name).filter(name =>
  !CHAT_ONLY_COMMANDS.has(name) && !["admin","adminhelp","addinstruction","editinstruction","delinstruction","addadmin","removeadmin","addowner","removeowner","permissions","setpermissions","groupmode","groupenable","groupdisable"].includes(name)
));


export function parseCommand(input, botUsername = "DakiSchuleBot") {
  const s = String(input || "").trim();
  const m = s.match(/^\/([a-zA-Z0-9_]+)(?:@([a-zA-Z0-9_]+))?(?:\s+([\s\S]*))?$/);
  if (!m) return null;
  if (m[2] && m[2].toLowerCase() !== botUsername.toLowerCase()) return null;
  return { name: m[1].toLowerCase(), args: (m[3] || "").trim() };
}

export async function ensureTelegramCommands(env, { VERSION, tg, safeString }) {
  // Install localized command descriptions for the bot's default, private and group menus.
  // Telegram command tokens themselves must remain lowercase Latin names; only descriptions localize.
  const stateKey = `telegram_commands_${VERSION}_scopes_v3`;
  const existing = await env.DB.prepare(
    "SELECT state_value FROM daki_state WHERE state_key=?"
  ).bind(stateKey).first();
  if (existing?.state_value === "1") return;

  const languages = ["ar", "en", "de", "zh"];
  const scopes = [
    { type: "default" },
    { type: "all_private_chats" },
    { type: "all_group_chats" }
  ];
  const buildCommands = language => [
    { command: "start", description: language === "ar" ? "بدء المحادثة" : language === "de" ? "Gespräch starten" : language === "zh" ? "开始对话" : "Start the conversation" },
    { command: "bot", description: language === "ar" ? "استئناف المساعد" : language === "de" ? "Assistent fortsetzen" : language === "zh" ? "恢复助手" : "Resume the assistant" },
    ...ADMIN_COMMANDS.map(command => ({
      command: command.name,
      description: safeString(command.labels[language] || command.labels.ar, 240)
    }))
  ];

  for (const scope of scopes) {
    for (const language of languages) {
      const commands = buildCommands(language);
      if (commands.length > 100) throw new Error("Telegram command limit exceeded");
      for (const item of commands) {
        if (!/^[a-z0-9_]{1,32}$/.test(item.command) || !item.description || item.description.length > 256) {
          throw new Error(`Invalid Telegram command definition: ${item.command}`);
        }
      }
      const payload = { commands, scope };
      if (language !== "ar") payload.language_code = language;
      await tg(env, "setMyCommands", payload);
    }
  }

  await env.DB.prepare(`INSERT INTO daki_state(state_key,state_value,updated_at)
    VALUES(?, '1',CURRENT_TIMESTAMP)
    ON CONFLICT(state_key) DO UPDATE SET state_value='1',updated_at=CURRENT_TIMESTAMP`)
    .bind(stateKey).run();
}

export function createCommandSystem(deps) {
  const required = ["replyOptions","isOwner","hasPermission","sendMessage","isPrivate","getSetting","setSetting","audit","tg","sendBackup","logError"];
  for (const key of required) if (typeof deps?.[key] !== "function") throw new TypeError(`Missing command dependency: ${key}`);
  return {
    execute: (env, msg, business, actorId, command) => executeCommand(env, msg, business, actorId, command, deps),
    list: ({ category, query, permission } = {}) => listCommands({ category, query, permission }),
    describe: name => describeCommand(name),
    authorize: (commandName, permissions = {}, isOwner = false) => authorizeCommand(commandName, permissions, isOwner)
  };
}

export function listCommands({ category, query, permission } = {}) {
  const q = String(query || "").trim().toLowerCase();
  return ADMIN_COMMANDS.filter(c => (!category || c.category === category) && (!permission || c.permission === permission || permission === "owner" && c.ownerOnly) && (!q || [c.name,c.category,c.description,c.usage,...Object.values(c.labels || {})].join(" ").toLowerCase().includes(q)))
    .map(c => ({ ...c, web_enabled: WEB_COMMANDS.has(c.name), chat_only: CHAT_ONLY_COMMANDS.has(c.name) }));
}
export function describeCommand(name) { return listCommands({ query: name }).find(c => c.name === String(name || "").replace(/^\//, "").toLowerCase()) || null; }
export function authorizeCommand(name, permissions = {}, isOwner = false) {
  const command = ADMIN_COMMANDS.find(c => c.name === name);
  if (!command) return { allowed: false, reason: "unknown_command" };
  if (isOwner) return { allowed: true, reason: "owner" };
  if (command.ownerOnly) return { allowed: false, reason: "owner_only" };
  const required = command.permission || "admin";
  return permissions.all === true || permissions[required] === true || permissions.admin === true && required !== "owner"
    ? { allowed: true, reason: "permission_granted" }
    : { allowed: false, reason: "missing_permission", required };
}

async function deleteUserPersonalData(env, userId, ownerId) {
  const id = String(userId || "").trim();
  if (!/^\d+$/.test(id) || id === String(ownerId)) {
    throw new Error("معرّف المستخدم غير صالح أو محمي.");
  }

  const suffix = `:${id}`;
  const stateRows = await env.DB.prepare(`
    SELECT state_key FROM daki_state
    WHERE (
      state_key LIKE 'handoff:%'
      OR state_key LIKE 'continuation:%'
      OR state_key LIKE 'assistant_pause:%'
    )
    AND substr(state_key, -?) = ?
  `).bind(suffix.length, suffix).all();

  const statements = [
    env.DB.prepare("DELETE FROM messages WHERE conversation_id IN (SELECT id FROM conversations WHERE user_id=?)").bind(id),
    env.DB.prepare("DELETE FROM conversations WHERE user_id=?").bind(id),
    env.DB.prepare("DELETE FROM learning_profiles WHERE user_id=?").bind(id),
    env.DB.prepare("DELETE FROM recurring_mistakes WHERE user_id=?").bind(id),
    env.DB.prepare("DELETE FROM usage_stats WHERE user_id=?").bind(id),
    env.DB.prepare("DELETE FROM callback_sessions WHERE user_id=?").bind(id),
    env.DB.prepare("DELETE FROM chat_pauses WHERE user_id=?").bind(id),
    env.DB.prepare("DELETE FROM welcome_events WHERE user_id=?").bind(id),
    env.DB.prepare("DELETE FROM users WHERE user_id=?").bind(id),
    ...(stateRows.results || []).map(row =>
      env.DB.prepare("DELETE FROM daki_state WHERE state_key=?").bind(row.state_key)
    )
  ];

  await env.DB.batch(statements);
}

async function executeCommand(env, msg, business, actorId, command, deps) {
  const { VERSION, OWNER_ID, ADMIN_URL, replyOptions, isOwner, hasPermission, sendMessage, isPrivate, getSetting, setSetting, audit, tg, sendBackup, logError } = deps;
  const chatId = msg.chat.id;
  const opts = replyOptions(msg, business);
  const args = command.args;
  const name = command.name;
  const owner = await isOwner(env, actorId);
  const adminCommands = new Set(ADMIN_COMMANDS.map(item => item.name));
  if (!adminCommands.has(name)) return false;
  if (!(await hasPermission(env, actorId, "admin"))) {
    await sendMessage(env, chatId, "هذا الأمر مخصص لإدارة DAKI.", opts);
    return true;
  }
  const requirePerm = async (perm) => hasPermission(env, actorId, perm);
  const denied = async () => sendMessage(env, chatId, "ليست لديك صلاحية تنفيذ هذا الإجراء.", opts);
  const requiredPermission = ADMIN_COMMANDS.find(item => item.name === name)?.permission;
  if (requiredPermission && !(await requirePerm(requiredPermission))) {
    await denied();
    return true;
  }
  const replyTarget = msg.reply_to_message?.from;
  // A reply always identifies the target; arguments then become the reason.
  // Without a reply, the first argument is the numeric Telegram ID.
  const argParts = args.split(/\s+/).filter(Boolean);
  const targetId = replyTarget?.id ? String(replyTarget.id) : (argParts[0] || "");
  const reason = replyTarget ? args : argParts.slice(1).join(" ");
  let out = "";
  try {
    switch (name) {
      case "admin":
        if (!owner) return denied(), true;
        if (business || !isPrivate(msg.chat)) {
          await sendMessage(env, chatId,
            "لفتح لوحة الإدارة بأمان، افتح المحادثة الخاصة مع @DakiSchuleBot ثم أرسل /admin.\nلا تفتح رابط اللوحة في متصفح خارجي لأن Telegram لن يرسل بيانات التحقق اللازمة.", opts);
          return true;
        }
        await sendMessage(env, chatId, "مركز تحكم DAKI\nاضغط الزر أدناه لفتح لوحة الإدارة داخل Telegram:", {
          ...opts,
          reply_markup: { inline_keyboard: [[{ text: "فتح لوحة الإدارة", web_app: { url: ADMIN_URL } }]] }
        });
        return true;
      case "adminhelp":
        out = "أوامر الإدارة الأساسية:\n/admin لوحة الأزرار\n/dakistatus الحالة\n/dakion تشغيل\n/dakioff إيقاف\n/users المستخدمون\n/ban أو /unban بالرد على رسالة المستخدم\n/warn بالرد على المستخدم\n/stats الإحصائيات\n/backup نسخة احتياطية\n/health فحص النظام\n\nبعض الأوامر تتطلب صلاحية المالك الرئيسي.";
        break;
      case "commandlist": {
        const category = String(args || "").trim();
        const categories = ADMIN_CATEGORIES.map(([key,label]) => `${key} — ${label}: ${ADMIN_COMMANDS.filter(c => c.category === key).length}`).join("\n");
        if (!category) out = `فهرس أوامر DAKI (${ADMIN_COMMANDS.length} أمراً)\n\n${categories}\n\nاستخدم /commandlist users لعرض أوامر فئة، أو /commandinfo ban للتفاصيل.`;
        else {
          const commands = listCommands({ category });
          out = commands.length ? `أوامر فئة ${category}:\n\n` + commands.map(c => `/${c.name} — ${c.description}`).join("\n") : "الفئة غير معروفة أو لا تحتوي أوامر.";
        }
        break;
      }
      case "commandinfo": {
        const item = describeCommand(args.split(/\s+/)[0]);
        out = item ? `/${item.name}\n${item.description}\nالاستخدام: ${item.usage}\nالفئة: ${item.category}\nالصلاحية: ${item.permission}\nمستوى الحساسية: ${item.risk === "high" ? "مرتفع" : "عادي"}\n${item.notes || ""}` : "لم أجد هذا الأمر. استخدم /commandlist لعرض الفهرس.";
        break;
      }
      case "dakistatus":
        out = `DAKI ${VERSION}\nالحالة: ${await getSetting(env,"bot_enabled","1")==="1" ? "يعمل" : "متوقف"}\nقاعدة البيانات: متصلة\nالمالك الرئيسي: ${OWNER_ID}`;
        break;
      case "dakion":
      case "dakioff":
        if (!(await requirePerm("control"))) return denied(), true;
        await setSetting(env, "bot_enabled", name === "dakion" ? "1" : "0", actorId);
        await audit(env, actorId, name, "", "", "bot_enabled changed");
        out = name === "dakion" ? "تم تشغيل ردود DAKI." : "تم إيقاف ردود DAKI مؤقتاً.";
        break;
      case "restartinfo":
        out = `إصدار DAKI: ${VERSION}\nCloudflare Worker يعيد التشغيل تلقائياً عند نشر إصدار جديد.`;
        break;
      case "users": {
        const row = await env.DB.prepare("SELECT COUNT(*) AS n FROM users").first();
        out = `عدد المستخدمين المسجلين: ${row?.n ?? 0}`; break;
      }
      case "userinfo":
      case "searchuser": {
        if (!(await requirePerm("users"))) return denied(), true;
        if (!targetId) { out = "استخدم الأمر بالرد على المستخدم أو اكتب رقمه بعد الأمر."; break; }
        const u = await env.DB.prepare("SELECT * FROM users WHERE user_id=?").bind(targetId).first();
        out = u ? `المستخدم: ${u.first_name || "—"}\nID: ${u.user_id}\nUsername: @${u.username || "—"}\nاللغة: ${u.language || "—"}\nآخر نشاط: ${u.last_seen}` : "لم أعثر على هذا المستخدم.";
        break;
      }
      case "userhistory": {
        if (!(await requirePerm("users"))) return denied(), true;
        if (!targetId) { out = "رد على رسالة المستخدم بالأمر /userhistory."; break; }
        const c = await env.DB.prepare("SELECT id FROM conversations WHERE user_id=? ORDER BY updated_at DESC LIMIT 1").bind(targetId).first();
        if (!c) { out = "لا يوجد سجل محادثة."; break; }
        const rows = await env.DB.prepare("SELECT sender,message_text,created_at FROM messages WHERE conversation_id=? ORDER BY id DESC LIMIT 10").bind(c.id).all();
        out = (rows.results || []).reverse().map(r => `${r.sender === "assistant" ? "DAKI" : "المستخدم"}: ${r.message_text}`).join("\n\n") || "السجل فارغ.";
        break;
      }
      case "forgetuser":
      case "clearmemory": {
        const id = name === "clearmemory" ? actorId : targetId;
        if (!id) { out = "رد على رسالة المستخدم بالأمر /forgetuser."; break; }
        if (!/^\d+$/.test(String(id)) || String(id) === String(OWNER_ID)) {
          out = "معرّف المستخدم غير صالح أو محمي؛ لا يمكن حذف بيانات المالك الرئيسي.";
          break;
        }
        if (id !== actorId && !owner && !(await requirePerm("users"))) return denied(), true;
        await deleteUserPersonalData(env, id, OWNER_ID);
        await audit(env, actorId, "forget_user", id, "", "حُذفت البيانات الشخصية والتعليمية والإحصائية والمؤقتة؛ أُبقيت سجلات الإشراف والأمان والتدقيق.");
        out = "تم حذف البيانات الشخصية والتعليمية والإحصائية والمؤقتة من D1. أُبقيت سجلات التحذيرات والحظر والكتم والتدقيق لأسباب أمنية وإشرافية.";
        break;
      }
      case "blocked": {
        if (!(await requirePerm("moderation"))) return denied(), true;
        const rows = await env.DB.prepare("SELECT user_id,reason FROM blocked_users ORDER BY created_at DESC LIMIT 30").all();
        out = (rows.results || []).map(r => `${r.user_id}${r.reason ? " — " + r.reason : ""}`).join("\n") || "لا يوجد مستخدمون محظورون.";
        break;
      }
      case "ban":
      case "unban":
      case "warn":
      case "mute": {
        if (!(await requirePerm("moderation"))) return denied(), true;
        if (!targetId) { out = "رد على رسالة الشخص بالأمر، أو اكتب ID بعد الأمر."; break; }
        if (targetId === OWNER_ID) { out = "لا يمكن حظر أو تعديل صلاحيات المالك الرئيسي."; break; }
        if (name === "warn") {
          await env.DB.prepare("INSERT INTO warnings(user_id,reason,issued_by) VALUES(?,?,?)").bind(targetId, reason || "بدون سبب", actorId).run();
          await audit(env, actorId, "warn", targetId, reason);
          out = `تم تسجيل تحذير للمستخدم ${targetId}.`;
        } else if (name === "mute") {
          const until = nowTs() + 3600;
          await env.DB.prepare(`INSERT INTO mutes(user_id,chat_id,until_ts,reason,muted_by) VALUES(?,?,?,?,?)
            ON CONFLICT(user_id,chat_id) DO UPDATE SET until_ts=excluded.until_ts,reason=excluded.reason,muted_by=excluded.muted_by`)
            .bind(targetId, String(chatId), until, reason || "ساعة واحدة", actorId).run();
          if (!business && msg.chat.type !== "private") {
            try { await tg(env, "restrictChatMember", { chat_id: chatId, user_id: Number(targetId), permissions: { can_send_messages: false }, until_date: until }); }
            catch (e) { out = `تم حفظ الكتم محلياً، لكن Telegram رفض تقييد العضو: ${e.message}`; break; }
          }
          await audit(env, actorId, "mute", targetId, reason);
          out = `تم كتم المستخدم ${targetId} لمدة ساعة في هذه المحادثة.`;
        } else if (name === "ban") {
          await env.DB.prepare("INSERT OR REPLACE INTO blocked_users(user_id,reason,blocked_by) VALUES(?,?,?)").bind(targetId, reason || "بدون سبب", actorId).run();
          await env.DB.prepare("UPDATE users SET is_blocked=1 WHERE user_id=?").bind(targetId).run();
          if (!business && msg.chat.type !== "private") {
            try { await tg(env, "banChatMember", { chat_id: chatId, user_id: Number(targetId) }); }
            catch (e) { out = `حُظر من DAKI، لكن Telegram لم يسمح بحظره في المجموعة: ${e.message}`; }
          }
          await audit(env, actorId, "ban", targetId, reason);
          if (!out) out = business ? `تم حظر المستخدم من DAKI فقط. لا يمكن لهذا الأمر حظره من حسابك الشخصي في Telegram.` : `تم حظر المستخدم من DAKI.`;
        } else {
          await env.DB.prepare("DELETE FROM blocked_users WHERE user_id=?").bind(targetId).run();
          await env.DB.prepare("UPDATE users SET is_blocked=0 WHERE user_id=?").bind(targetId).run();
          if (!business && msg.chat.type !== "private") {
            try { await tg(env, "unbanChatMember", { chat_id: chatId, user_id: Number(targetId), only_if_banned: true }); } catch (_) {}
          }
          await audit(env, actorId, "unban", targetId, reason);
          out = `تم رفع حظر DAKI عن المستخدم ${targetId}.`;
        }
        break;
      }
      case "warnings": {
        if (!(await requirePerm("moderation"))) return denied(), true;
        const id = targetId || actorId;
        const rows = await env.DB.prepare("SELECT reason,issued_by,created_at FROM warnings WHERE user_id=? ORDER BY id DESC LIMIT 10").bind(id).all();
        out = (rows.results || []).map(r => `${r.created_at}: ${r.reason} (بواسطة ${r.issued_by})`).join("\n") || "لا توجد تحذيرات.";
        break;
      }
      case "reason": out = "اكتب السبب بعد الأمر، مثال: /ban مخالفة القواعد، ثم أعد الأمر بالرد على رسالة الشخص."; break;
      case "aiinfo":
        out = `DAKI مساعد عام ومتخصص في تعليم الألمانية A1–C2.\nالنموذج: ${MODEL}\nالذاكرة: آخر ${HISTORY_LIMIT} رسالة لكل محادثة محفوظة في D1.`; break;
      case "memory":
        out = `تُحفظ آخر ${HISTORY_LIMIT} رسالة لكل محادثة في D1، مع فصل محادثات Telegram Business عن المجموعات والمستخدمين.`; break;
      case "instructions": {
        const rows = await env.DB.prepare("SELECT id,instruction FROM instructions WHERE active=1 ORDER BY id DESC LIMIT 15").all();
        out = (rows.results || []).map(r => `${r.id}. ${r.instruction}`).join("\n") || "لا توجد تعليمات إضافية."; break;
      }
      case "addinstruction": {
        if (!(await requirePerm("ai"))) return denied(), true;
        if (!args) { out = "استخدم: /addinstruction ثم نص التعليمة."; break; }
        const r = await env.DB.prepare("INSERT INTO instructions(instruction,created_by) VALUES(?,?)").bind(args, actorId).run();
        await audit(env, actorId, "add_instruction", r.meta?.last_row_id || "", "", args);
        out = "تمت إضافة التعليمة. ستُستخدم في طلبات الذكاء الاصطناعي القادمة."; break;
      }
      case "editinstruction":
      case "delinstruction": {
        if (!(await requirePerm("ai"))) return denied(), true;
        const [id, ...rest] = args.split(/\s+/);
        if (!/^\d+$/.test(id || "")) { out = `استخدم: /${name} رقم_التعليمة${name === "editinstruction" ? " النص الجديد" : ""}`; break; }
        if (name === "delinstruction") await env.DB.prepare("UPDATE instructions SET active=0 WHERE id=?").bind(id).run();
        else await env.DB.prepare("UPDATE instructions SET instruction=?,updated_at=CURRENT_TIMESTAMP WHERE id=?").bind(rest.join(" "), id).run();
        await audit(env, actorId, name, id);
        out = "تم تنفيذ العملية."; break;
      }
      case "reloadprompt": out = "التعليمات تُقرأ من D1 عند كل طلب جديد؛ لا تحتاج إلى إعادة تشغيل."; break;
      case "admins": {
        if (!(await requirePerm("admins")) && !owner) return denied(), true;
        const rows = await env.DB.prepare("SELECT user_id,role FROM admins ORDER BY created_at").all();
        out = (rows.results || []).map(r => `${r.user_id} — ${r.role}`).join("\n") || "لا يوجد مشرفون."; break;
      }
      case "addadmin":
      case "addowner": {
        if (!owner) return denied(), true;
        if (!targetId || !/^\d+$/.test(targetId)) { out = `استخدم /${name} Telegram_ID`; break; }
        const role = name === "addowner" ? "owner" : "admin";
        const perms = role === "owner" ? '{"all":true}' : '{"admin":true,"users":true,"moderation":true}';
        await env.DB.prepare("INSERT OR REPLACE INTO admins(user_id,role,permissions_json,added_by) VALUES(?,?,?,?)")
          .bind(targetId, role, perms, actorId).run();
        await audit(env, actorId, name, targetId);
        out = `تمت إضافة ${targetId} بدور ${role}.`; break;
      }
      case "removeadmin":
      case "removeowner": {
        if (!owner) return denied(), true;
        if (!targetId) { out = `استخدم /${name} Telegram_ID`; break; }
        if (targetId === OWNER_ID) { out = "المالك الرئيسي محمي ولا يمكن حذفه."; break; }
        await env.DB.prepare("DELETE FROM admins WHERE user_id=?").bind(targetId).run();
        await audit(env, actorId, name, targetId);
        out = `تمت إزالة صلاحيات ${targetId}.`; break;
      }
      case "permissions": {
        if (!owner && !(await requirePerm("admins"))) return denied(), true;
        const id = targetId || actorId;
        const a = await getAdmin(env, id);
        out = a ? `صلاحيات ${id}\nالدور: ${a.role}\nJSON: ${a.permissions_json}` : "هذا المستخدم ليس مشرفاً.";
        break;
      }
      case "setpermissions": {
        if (!owner) return denied(), true;
        const parts = args.split(/\s+/).filter(Boolean);
        const id = parts.shift();
        const allowed = new Set(["admin","control","users","moderation","ai","groups","stats","maintenance"]);
        if (!id || !/^\d+$/.test(id) || id === OWNER_ID || !parts.length || parts.some(p => !allowed.has(p))) {
          out = "استخدم: /setpermissions Telegram_ID admin users moderation ai groups stats maintenance control";
          break;
        }
        const perms = Object.fromEntries(parts.map(p => [p, true]));
        await env.DB.prepare("UPDATE admins SET permissions_json=? WHERE user_id=?")
          .bind(JSON.stringify(perms), id).run();
        await audit(env, actorId, "set_permissions", id, "", JSON.stringify(perms));
        out = `تم تحديث صلاحيات ${id}: ${parts.join(", ")}`;
        break;
      }
      case "groups": {
        if (!(await requirePerm("groups"))) return denied(), true;
        const rows = await env.DB.prepare("SELECT chat_id,title,enabled,mode FROM groups ORDER BY title LIMIT 30").all();
        out = (rows.results || []).map(r => `${r.title || r.chat_id} (${r.chat_id}) — ${r.enabled ? "مفعلة" : "معطلة"} — ${r.mode}`).join("\n") || "لم تُسجل مجموعات بعد."; break;
      }
      case "groupinfo":
      case "groupmode":
      case "groupenable":
      case "groupdisable": {
        if (!(await requirePerm("groups"))) return denied(), true;
        const gid = args.split(/\s+/)[0] || (msg.chat.type !== "private" ? String(chatId) : "");
        if (!gid) { out = "استخدم الأمر داخل المجموعة أو اكتب chat_id."; break; }
        if (name === "groupenable") await env.DB.prepare("UPDATE groups SET enabled=1 WHERE chat_id=?").bind(gid).run();
        else if (name === "groupdisable") await env.DB.prepare("UPDATE groups SET enabled=0 WHERE chat_id=?").bind(gid).run();
        else if (name === "groupmode") {
          const mode = args.split(/\s+/)[1];
          if (!["mention","all"].includes(mode)) { out = "استخدم /groupmode chat_id mention أو all"; break; }
          await env.DB.prepare("UPDATE groups SET mode=? WHERE chat_id=?").bind(mode, gid).run();
        }
        const g = await env.DB.prepare("SELECT * FROM groups WHERE chat_id=?").bind(gid).first();
        out = g ? `المجموعة: ${g.title}\nالحالة: ${g.enabled ? "مفعلة" : "معطلة"}\nالنمط: ${g.mode}` : "المجموعة غير مسجلة بعد."; break;
      }
      case "stats":
      case "today":
      case "weekly":
      case "monthly":
      case "topusers": {
        if (name === "topusers") {
          const rows = await env.DB.prepare("SELECT user_id,SUM(quantity) n FROM usage_stats GROUP BY user_id ORDER BY n DESC LIMIT 10").all();
          out = (rows.results || []).map((r,i) => `${i+1}. ${r.user_id}: ${r.n}`).join("\n") || "لا توجد بيانات.";
        } else {
          const interval = name === "weekly" ? "-7 days" : name === "monthly" ? "-30 days" : "0 days";
          const row = await env.DB.prepare(`SELECT COUNT(*) messages,COUNT(DISTINCT user_id) users FROM usage_stats WHERE event_date >= date('now',?)`).bind(interval).first();
          const total = await env.DB.prepare("SELECT COUNT(*) n FROM users").first();
          out = `إحصائيات ${name}:\nالرسائل المسجلة: ${row?.messages || 0}\nالمستخدمون النشطون: ${row?.users || 0}\nإجمالي المستخدمين: ${total?.n || 0}`;
        }
        break;
      }
      case "userstats": {
        if (!(await requirePerm("users"))) return denied(), true;
        const id = targetId || actorId;
        const user = await env.DB.prepare("SELECT user_id,username,first_name,last_seen FROM users WHERE user_id=?").bind(id).first();
        const count = await env.DB.prepare("SELECT COALESCE(SUM(quantity),0) n FROM usage_stats WHERE user_id=?").bind(id).first();
        const profile = await env.DB.prepare("SELECT total_exercises,progress_notes,updated_at FROM learning_profiles WHERE user_id=?").bind(id).first();
        out = user ? `إحصائيات المستخدم ${id}
الاسم: ${user.first_name || "—"}
Username: ${user.username ? "@"+user.username : "—"}
آخر نشاط: ${user.last_seen || "—"}
عدد الأنشطة: ${count?.n || 0}
تمارين مسجلة: ${profile?.total_exercises || 0}
ملاحظات التعلم: ${profile?.progress_notes || "—"}` : "المستخدم غير مسجل.";
        break;
      }
      case "aistats": {
        const row = await env.DB.prepare("SELECT COUNT(*) n FROM usage_stats WHERE event_type='message'").first();
        out = `طلبات المحادثة المسجلة: ${row?.n || 0}`; break;
      }
      case "errors": {
        const rows = await env.DB.prepare("SELECT error_type,error_message,created_at FROM error_logs ORDER BY id DESC LIMIT 10").all();
        out = (rows.results || []).map(r => `${r.created_at} ${r.error_type}: ${r.error_message}`).join("\n") || "لا توجد أخطاء مسجلة."; break;
      }
      case "health":
        await env.DB.prepare("SELECT 1 AS ok").first();
        out = `فحص DAKI:\nD1: متصل\nAI binding: ${env.AI?.run ? "موجود" : "غير موجود"}\nTelegram token: ${env.TELEGRAM_BOT_TOKEN ? "موجود" : "غير موجود"}\nالإصدار: ${VERSION}\nهذا فحص إعدادات، وليس اختباراً كاملاً لاستدعاء النموذج.`; break;
      case "backup":
        if (!owner) return denied(), true;
        await sendBackup(env, chatId);
        await audit(env, actorId, "backup_export");
        return true;
      case "restore":
        if (!owner) return denied(), true;
        out = "للاستعادة: أرسل ملف JSON الاحتياطي إلى البوت مع كتابة /restore في تعليق الملف. الاستعادة دمجية ولا تحذف السجلات الحالية، ولا تستعيد صلاحيات المشرفين.";
        break;
      case "maintenance": {
        if (!(await requirePerm("maintenance"))) return denied(), true;
        const mode = args.toLowerCase();
        if (mode === "on" || mode === "تشغيل") await setSetting(env, "maintenance", "1", actorId);
        else if (mode === "off" || mode === "إيقاف") await setSetting(env, "maintenance", "0", actorId);
        const active = await getSetting(env, "maintenance", "0") === "1";
        await audit(env, actorId, "maintenance", "", "", active ? "on" : "off");
        out = `وضع الصيانة: ${active ? "مفعل" : "غير مفعل"}.\nللتغيير: /maintenance on أو /maintenance off`;
        break;
      }
      case "version": out = `DAKI ${VERSION}`; break;
      case "logs": {
        const rows = await env.DB.prepare("SELECT action,actor_id,target_id,created_at FROM audit_logs ORDER BY id DESC LIMIT 10").all();
        out = (rows.results || []).map(r => `${r.created_at}: ${r.action} by ${r.actor_id} -> ${r.target_id || "-"}`).join("\n") || "لا توجد سجلات."; break;
      }
      default: return false;
    }
  } catch (e) {
    await logError(env, "ADMIN_COMMAND", e, `command=${name}, actor=${actorId}`);
    out = `تعذر تنفيذ الأمر: ${e.message}`;
  }
  await sendMessage(env, chatId, out || "تم.", opts);
  return true;
}


const LEGACY_COMMAND_PERMISSIONS = {
  dakistatus: "control", dakion: "owner", dakioff: "owner", restartinfo: "control",
  users: "users", userinfo: "users", userhistory: "users", searchuser: "users",
  forgetuser: "users.erase", userstats: "users",
  blocked: "moderation", ban: "moderation", unban: "moderation", warn: "moderation",
  warnings: "moderation", reason: "moderation", mute: "moderation",
  aiinfo: "ai", memory: "ai", clearmemory: "ai",
  instructions: "owner", addinstruction: "owner", editinstruction: "owner", delinstruction: "owner", reloadprompt: "owner",
  admins: "admins", addadmin: "admins", removeadmin: "admins", addowner: "admins",
  removeowner: "admins", permissions: "admins", setpermissions: "admins",
  groups: "groups", groupinfo: "groups", groupmode: "groups.manage", groupenable: "groups.manage", groupdisable: "groups.manage",
  stats: "stats", today: "stats", weekly: "stats", monthly: "stats", topusers: "stats", aistats: "stats",
  errors: "maintenance", health: "maintenance", backup: "maintenance", restore: "maintenance", maintenance: "owner", logs: "maintenance"
};

const COMMAND_DETAILS = {
  admin:["فتح مركز التحكم الآمن داخل Telegram","/admin","يفتح لوحة الإدارة للمالك من المحادثة الخاصة"],
  adminhelp:["عرض دليل الأوامر والصلاحيات","/adminhelp","يعرض مساعدة الإدارة"],
  commandlist:["استعراض فهرس الأوامر حسب الفئة","/commandlist [category]","يعرض الفئات أو أوامر فئة محددة"],
  commandinfo:["عرض وصف الأمر وطريقة استخدامه وصلاحيته","/commandinfo command","يعرض تفاصيل الأمر ومستوى حساسيته"],
  dakistatus:["عرض حالة البوت وإعداداته الأساسية","/dakistatus","للتأكد من حالة تشغيل الردود"],
  dakion:["تشغيل ردود DAKI","/dakion","يعيد تفعيل الردود"], dakioff:["إيقاف ردود DAKI مؤقتاً","/dakioff","يوقف الردود دون حذف البيانات"],
  restartinfo:["عرض معلومات دورة تشغيل Worker","/restartinfo","يعرض معلومات النشر وإعادة التشغيل"],
  users:["عرض عدد المستخدمين المسجلين","/users","ملخص قاعدة المستخدمين"],
  userinfo:["عرض ملف مستخدم مسجل","/userinfo 123456 أو بالرد على رسالته","يعرض بيانات المستخدم الأساسية"],
  userhistory:["عرض آخر رسائل محادثة مستخدم","بالرد على رسالة المستخدم: /userhistory","يتطلب تحديد المستخدم بالرد"],
  searchuser:["البحث عن مستخدم","/searchuser كلمة أو ID","بحث في بيانات المستخدمين"],
  forgetuser:["حذف سجل محادثة وملف تعلم مستخدم","/forgetuser 123456","عملية حساسة تسجل في سجل التدقيق"],
  userstats:["عرض نشاط المستخدم وتقدمه التعليمي","/userstats 123456","إحصاءات المستخدم"],
  blocked:["عرض قائمة المستخدمين المحظورين","/blocked","قائمة الحظر الحالية"],
  ban:["حظر مستخدم من DAKI وقد يحظره من المجموعة","بالرد: /ban السبب أو /ban ID السبب","حدد السبب لتوثيق الإجراء"],
  unban:["رفع حظر DAKI والحظر الجماعي إن وجد","/unban ID","يرفع الحظر عن المستخدم"],
  warn:["تسجيل تحذير بحق مستخدم","بالرد: /warn السبب","يحفظ التحذير وسجل التدقيق"],
  warnings:["عرض سجل تحذيرات مستخدم","/warnings ID","يعرض أحدث التحذيرات"],
  reason:["عرض سبب الإجراء الإداري","/reason ID","معلومات الإجراء بحسب السجل"],
  mute:["كتم مستخدم لمدة ساعة في المجموعة","بالرد: /mute السبب أو /mute ID السبب","يتطلب صلاحيات تقييد الأعضاء من Telegram"],
  aiinfo:["عرض معلومات إعداد الذكاء الاصطناعي","/aiinfo","يعرض إعدادات AI المتاحة"], memory:["عرض معلومات ذاكرة المحادثة","/memory","يعرض حالة الذاكرة"],
  clearmemory:["حذف ذاكرة المحادثة الخاصة بك","/clearmemory","يتطلب تأكيداً/صلاحية مناسبة"],
  instructions:["عرض تعليمات DAKI النشطة","/instructions","يعرض التعليمات المضافة"],
  addinstruction:["إضافة تعليمة جديدة","/addinstruction نص التعليمة","تؤثر على سلوك الردود اللاحقة"],
  editinstruction:["تعديل تعليمة موجودة","/editinstruction ID النص الجديد","يحدّث التعليمة المحددة"],
  delinstruction:["تعطيل تعليمة","/delinstruction ID","يعطل التعليمة دون حذفها نهائياً"],
  reloadprompt:["تحديث معلومات التعليمات","/reloadprompt","التعليمات تقرأ من قاعدة البيانات لكل طلب"],
  admins:["عرض المشرفين وأدوارهم","/admins","بيانات المشرفين"],
  addadmin:["إضافة مشرف","/addadmin Telegram_ID","المالك فقط"], removeadmin:["إزالة مشرف","/removeadmin Telegram_ID","المالك فقط"],
  addowner:["إضافة مالك إضافي","/addowner Telegram_ID","عملية فائقة الحساسية؛ المالك فقط"], removeowner:["إزالة مالك","/removeowner Telegram_ID","المالك الرئيسي محمي"],
  permissions:["عرض صلاحيات مشرف","/permissions [Telegram_ID]","يعرض صلاحيات الحساب"],
  setpermissions:["ضبط صلاحيات مشرف","/setpermissions ID users moderation ai groups stats maintenance control","المالك فقط"],
  groups:["عرض المجموعات المسجلة","/groups","يعرض حالة المجموعات"],
  groupinfo:["عرض تفاصيل مجموعة","داخل المجموعة: /groupinfo أو /groupinfo CHAT_ID","يعرض وضع المجموعة"],
  groupmode:["تغيير نمط استجابة المجموعة","/groupmode CHAT_ID mention أو all","يحدد متى يرد DAKI"],
  groupenable:["تفعيل DAKI في مجموعة","/groupenable CHAT_ID","يعيد استقبال الطلبات في المجموعة"],
  groupdisable:["تعطيل DAKI في مجموعة","/groupdisable CHAT_ID","يوقف ردود DAKI في المجموعة"],
  stats:["عرض الإحصاءات العامة","/stats","ملخص النشاط المسجل"], today:["إحصاءات اليوم","/today","نشاط اليوم"], weekly:["إحصاءات آخر سبعة أيام","/weekly","ملخص أسبوعي"], monthly:["إحصاءات آخر ثلاثين يوماً","/monthly","ملخص شهري"],
  topusers:["عرض أكثر المستخدمين نشاطاً","/topusers","ترتيب حسب النشاط المسجل"], aistats:["إحصاءات طلبات الذكاء الاصطناعي","/aistats","ملخص استخدام AI"],
  errors:["عرض أحدث أخطاء النظام","/errors","آخر الأخطاء المسجلة"], health:["فحص اتصالات وإعدادات النظام","/health","لا ينفذ اختباراً كاملاً للنموذج"],
  backup:["تصدير نسخة احتياطية","/backup","المالك فقط؛ يرسل ملف النسخة"], restore:["إرشادات استعادة نسخة احتياطية","أرفق JSON واكتب /restore","المالك فقط؛ الاستعادة دمجية"],
  maintenance:["تشغيل أو إيقاف وضع الصيانة","/maintenance on أو /maintenance off","يقيّد الخدمة وفق منطق الصيانة"], version:["عرض إصدار DAKI","/version","يعرض الإصدار المنشور"], logs:["عرض سجل العمليات الإدارية","/logs","يعرض أحدث أحداث التدقيق"]
};
for (const command of ADMIN_COMMANDS) {
  const [description, usage, notes] = COMMAND_DETAILS[command.name] || [command.labels.ar, `/${command.name}`, ""];
  command.description = description;
  command.usage = usage;
  command.notes = notes;
  command.permission = LEGACY_COMMAND_PERMISSIONS[command.name] || "admin";
  command.ownerOnly = ["admin","addadmin","removeadmin","addowner","removeowner","setpermissions","backup","restore","dakion","dakioff","maintenance","instructions","addinstruction","editinstruction","delinstruction","reloadprompt"].includes(command.name);
  command.risk = ["forgetuser","ban","unban","mute","clearmemory","addadmin","removeadmin","addowner","removeowner","setpermissions","backup","restore","maintenance","dakioff"].includes(command.name) ? "high" : "normal";
}
export const COMMAND_PERMISSIONS = Object.freeze(Object.fromEntries(ADMIN_COMMANDS.map(c => [c.name, c.permission])));
export const COMMAND_VERSION = "2.5.11-rbac1";

// DAKI RBAC v1 — stable permission IDs; UI labels are localized separately.
export const RBAC_ROLES = Object.freeze({
  owner: { label: { ar: "مالك مفوّض", en: "Delegated owner", de: "Beauftragter Eigentümer", fr: "Propriétaire délégué" }, permissions: ["dashboard.access", "dashboard.overview", "users.read", "users.moderate", "users.erase", "groups.read", "groups.manage", "ai.read", "ai.manage", "stats.read", "logs.read", "backup.create", "backup.restore", "admins.read", "admins.manage", "roles.manage", "translations.manage", "security.manage"] },
  super_admin: { label: { ar: "مشرف عام", en: "Super admin", de: "Superadministrator", fr: "Super administrateur" }, permissions: ["dashboard.access", "dashboard.overview", "users.read", "users.moderate", "groups.read", "groups.manage", "ai.read", "ai.manage", "stats.read", "logs.read"] },
  admin: { label: { ar: "مشرف", en: "Administrator", de: "Administrator", fr: "Administrateur" }, permissions: ["dashboard.access", "dashboard.overview", "users.read", "users.moderate", "groups.read", "ai.read", "stats.read"] },
  moderator: { label: { ar: "مشرف مجموعات", en: "Moderator", de: "Moderator", fr: "Modérateur" }, permissions: ["dashboard.access", "dashboard.overview", "groups.read", "groups.moderate"] },
  support: { label: { ar: "الدعم الفني", en: "Support", de: "Support", fr: "Assistance" }, permissions: ["dashboard.access", "dashboard.overview", "users.read"] },
  translator: { label: { ar: "مترجم", en: "Translator", de: "Übersetzer", fr: "Traducteur" }, permissions: ["dashboard.access", "dashboard.overview", "translations.manage"] },
  member: { label: { ar: "عضو", en: "Member", de: "Mitglied", fr: "Membre" }, permissions: [] },
  restricted: { label: { ar: "مقيّد", en: "Restricted", de: "Eingeschränkt", fr: "Restreint" }, permissions: [] }
});
export const RBAC_PERMISSION_LABELS = Object.freeze({
  "dashboard.access": { ar: "دخول لوحة التحكم", en: "Dashboard access", de: "Dashboard-Zugriff", fr: "Accès au tableau de bord" },
  "dashboard.overview": { ar: "عرض النظرة العامة", en: "View overview", de: "Übersicht anzeigen", fr: "Voir l’aperçu" },
  "users.read": { ar: "عرض المستخدمين", en: "View users", de: "Benutzer anzeigen", fr: "Voir les utilisateurs" },
  "users.moderate": { ar: "إشراف المستخدمين", en: "Moderate users", de: "Benutzer moderieren", fr: "Modérer les utilisateurs" },
  "users.erase": { ar: "حذف بيانات المستخدم", en: "Erase user data", de: "Benutzerdaten löschen", fr: "Effacer les données utilisateur" },
  "groups.read": { ar: "عرض المجموعات", en: "View groups", de: "Gruppen anzeigen", fr: "Voir les groupes" },
  "groups.manage": { ar: "إدارة المجموعات", en: "Manage groups", de: "Gruppen verwalten", fr: "Gérer les groupes" },
  "groups.moderate": { ar: "الإشراف على المجموعات", en: "Moderate groups", de: "Gruppen moderieren", fr: "Modérer les groupes" },
  "ai.read": { ar: "عرض إعدادات الذكاء الاصطناعي", en: "View AI settings", de: "KI-Einstellungen anzeigen", fr: "Voir les paramètres IA" },
  "ai.manage": { ar: "إدارة الذكاء الاصطناعي", en: "Manage AI", de: "KI verwalten", fr: "Gérer l’IA" },
  "stats.read": { ar: "عرض الإحصاءات", en: "View statistics", de: "Statistiken anzeigen", fr: "Voir les statistiques" },
  "logs.read": { ar: "عرض السجلات", en: "View logs", de: "Protokolle anzeigen", fr: "Voir les journaux" },
  "backup.create": { ar: "إنشاء نسخة احتياطية", en: "Create backup", de: "Backup erstellen", fr: "Créer une sauvegarde" },
  "backup.restore": { ar: "استعادة نسخة احتياطية", en: "Restore backup", de: "Backup wiederherstellen", fr: "Restaurer une sauvegarde" },
  "admins.read": { ar: "عرض المشرفين", en: "View administrators", de: "Administratoren anzeigen", fr: "Voir les administrateurs" },
  "admins.manage": { ar: "إدارة المشرفين", en: "Manage administrators", de: "Administratoren verwalten", fr: "Gérer les administrateurs" },
  "roles.manage": { ar: "إدارة الرتب", en: "Manage roles", de: "Rollen verwalten", fr: "Gérer les rôles" },
  "translations.manage": { ar: "إدارة الترجمات", en: "Manage translations", de: "Übersetzungen verwalten", fr: "Gérer les traductions" },
  "security.manage": { ar: "إدارة الأمان", en: "Manage security", de: "Sicherheit verwalten", fr: "Gérer la sécurité" }
});
export const RBAC_PERMISSION_IDS = Object.freeze(Object.keys(RBAC_PERMISSION_LABELS));
export function rolePermissions(role) { return [...(RBAC_ROLES[role]?.permissions || [])]; }
export function permissionLabel(permission, language = "ar") { return RBAC_PERMISSION_LABELS[permission]?.[language] || RBAC_PERMISSION_LABELS[permission]?.en || permission; }
export function normalizePermissionSet(value) {
  const list = Array.isArray(value) ? value : Object.entries(value || {}).filter(([, enabled]) => enabled === true).map(([key]) => key);
  return [...new Set(list.filter(key => RBAC_PERMISSION_IDS.includes(key)))];
}
export function hasRbacPermission({ role = "member", permissions = {}, permission, isPrimaryOwner = false } = {}) {
  if (isPrimaryOwner) return true;
  if (!RBAC_PERMISSION_IDS.includes(permission)) return false;
  const explicit = normalizePermissionSet(permissions);
  // Explicit lists override role defaults, allowing deliberate restrictions.
  const hasExplicitList = Array.isArray(permissions) || Object.keys(permissions || {}).some(k => RBAC_PERMISSION_IDS.includes(k));
  const granted = hasExplicitList ? explicit : rolePermissions(role);
  return granted.includes(permission);
}

