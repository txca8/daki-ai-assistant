// DAKI v3.0.0 — Central command catalogue and command visibility policy.
// Command execution remains in worker.js during this safe first extraction phase.

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

