// Validated Telegram group moderation actions used by the admin API.
export const GROUP_MODERATION_ACTIONS = Object.freeze({
  kick: Object.freeze({ permission: "groups.kick" }),
  ban: Object.freeze({ permission: "groups.ban" }),
  unban: Object.freeze({ permission: "groups.ban" }),
  mute: Object.freeze({ permission: "groups.mute" }),
  unmute: Object.freeze({ permission: "groups.mute" }),
  delete_message: Object.freeze({ permission: "groups.messages.delete" })
});

export function validateGroupModerationInput(input = {}) {
  const action = String(input.action || "");
  if (!Object.prototype.hasOwnProperty.call(GROUP_MODERATION_ACTIONS, action)) {
    return { ok: false, error: "إجراء الإشراف غير معروف." };
  }
  const chatId = String(input.chat_id || input.chatId || "").trim();
  if (!/^-\d{5,20}$/.test(chatId)) {
    return { ok: false, error: "معرّف المجموعة غير صالح." };
  }
  const userId = String(input.user_id || input.userId || "").trim();
  const messageId = String(input.message_id || input.messageId || "").trim();
  if (["kick", "ban", "unban", "mute", "unmute"].includes(action)) {
    if (!/^\d{1,20}$/.test(userId)) return { ok: false, error: "معرّف المستخدم غير صالح." };
    if (input.ownerId && userId === String(input.ownerId)) return { ok: false, error: "لا يمكن تنفيذ الإجراء على المالك الرئيسي." };
  }
  if (action === "delete_message" && !/^\d{1,20}$/.test(messageId)) {
    return { ok: false, error: "معرّف الرسالة غير صالح." };
  }
  let duration = 0;
  if (action === "mute") {
    duration = Number(input.duration_seconds ?? input.duration ?? 0);
    if (!Number.isSafeInteger(duration) || duration < 60 || duration > 2592000) {
      return { ok: false, error: "مدة الكتم يجب أن تكون بين دقيقة و30 يوماً." };
    }
  }
  return { ok: true, action, chatId, userId, messageId, duration };
}
