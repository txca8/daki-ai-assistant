-- DAKI 2.9.13: per-group feature settings.
CREATE TABLE IF NOT EXISTS system_group_settings (
  system_scope TEXT NOT NULL CHECK(system_scope IN ('business','bot')),
  chat_id TEXT NOT NULL,
  setting_key TEXT NOT NULL,
  setting_value TEXT NOT NULL,
  updated_by TEXT,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(system_scope,chat_id,setting_key)
);
