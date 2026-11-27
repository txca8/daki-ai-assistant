-- DAKI 2.9.11: safe declarative custom Bot commands (static response, no executable code).
CREATE TABLE IF NOT EXISTS system_custom_commands (
  system_scope TEXT NOT NULL CHECK(system_scope IN ('business','bot')),
  command_name TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  response_text TEXT NOT NULL,
  min_rank INTEGER NOT NULL DEFAULT 5 CHECK(min_rank IN (0,1,3,4,5)),
  enabled INTEGER NOT NULL DEFAULT 1,
  created_by TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(system_scope,command_name)
);
