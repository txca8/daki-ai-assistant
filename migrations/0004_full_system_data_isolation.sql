-- DAKI 2.8.0: isolate moderation, learning and usage data by runtime.
-- Additive migration; existing legacy tables and rows are preserved untouched.
CREATE TABLE IF NOT EXISTS system_mutes (
  system_scope TEXT NOT NULL CHECK(system_scope IN ('business','bot')),
  user_id TEXT NOT NULL,
  chat_id TEXT NOT NULL,
  until_ts INTEGER NOT NULL,
  reason TEXT,
  muted_by TEXT,
  PRIMARY KEY(system_scope,user_id,chat_id)
);
CREATE TABLE IF NOT EXISTS system_usage_stats (
  system_scope TEXT NOT NULL CHECK(system_scope IN ('business','bot')),
  user_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_date TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY(system_scope,user_id,event_type,event_date)
);
CREATE TABLE IF NOT EXISTS system_learning_profiles (
  system_scope TEXT NOT NULL CHECK(system_scope IN ('business','bot')),
  user_id TEXT NOT NULL,
  total_exercises INTEGER NOT NULL DEFAULT 0,
  progress_notes TEXT NOT NULL DEFAULT '',
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(system_scope,user_id)
);

CREATE TABLE IF NOT EXISTS system_warnings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  system_scope TEXT NOT NULL CHECK(system_scope IN ('business','bot')),
  user_id TEXT NOT NULL,
  reason TEXT NOT NULL DEFAULT '',
  issued_by TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS system_group_command_settings (
  system_scope TEXT NOT NULL CHECK(system_scope IN ('business','bot')),
  chat_id TEXT NOT NULL,
  command_name TEXT NOT NULL,
  enabled INTEGER NOT NULL DEFAULT 1,
  updated_by TEXT,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(system_scope,chat_id,command_name)
);
