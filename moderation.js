export const GROUP_MODERATION_ACTIONS = Object.freeze({
  kick: { permission: "users.kick", method: "kick" },
  ban: { permission: "users.kick", method: "ban" },
  unban: { permission: "users.kick", method: "unban" },
  mute: { permission: "users.mute", method: "mute" },
  unmute: { permission: "users.mute", method: "unmute" },
  delete_message: { permission: "messages.delete", method: "delete" }
});

export function validateGroupModerationInput(input = {}) {
  const action = String(input.action || "");
  if (!GROUP_MODERATION_ACTIONS[action]) return { ok: false, error: "Unsupported moderation action" };
  const chatId = String(input.chat_id || "");
  if (!/^-\d{5,20}$/.test(chatId)) return { ok: false, error: "Invalid group chat id" };
  if (action === "delete_message") {
    const messageId = Number(input.message_id);
    if (!Number.isSafeInteger(messageId) || messageId < 1) return { ok: false, error: "Invalid message id" };
    return { ok: true, action, chatId, messageId };
  }
  const userId = String(input.user_id || "");
  if (!/^\d{1,20}$/.test(userId)) return { ok: false, error: "Invalid Telegram user id" };
  if (input.ownerId && userId === String(input.ownerId)) return { ok: false, error: "Protected owner cannot be moderated" };
  if (action === "mute") {
    const duration = Number(input.duration_seconds ?? 3600);
    if (!Number.isInteger(duration) || duration < 60 || duration > 366 * 86400) return { ok: false, error: "Mute duration must be 60 seconds to 366 days" };
    return { ok: true, action, chatId, userId, duration };
  }
  return { ok: true, action, chatId, userId };
}
