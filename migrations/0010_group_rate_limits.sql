-- DAKI 2.9.12: isolated per-group flood counters for Telegram Bot groups.
CREATE TABLE IF NOT EXISTS system_group_rate_limits (
  system_scope TEXT NOT NULL CHECK(system_scope IN ('business','bot')),
  chat_id TEXT NOT NULL,
  user_id TEXT NOT NULL,
  window_started INTEGER NOT NULL,
  request_count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY(system_scope,chat_id,user_id)
);
