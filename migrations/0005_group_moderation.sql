-- DAKI 2.9.1: retain group-level bans separately from global per-system AI bans.
CREATE TABLE IF NOT EXISTS system_group_bans (
  system_scope TEXT NOT NULL CHECK(system_scope = 'bot'),
  chat_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  reason TEXT NOT NULL DEFAULT '',
  banned_by TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(system_scope, chat_id, user_id)
);
CREATE INDEX IF NOT EXISTS idx_system_group_bans_user
  ON system_group_bans(system_scope, user_id);
