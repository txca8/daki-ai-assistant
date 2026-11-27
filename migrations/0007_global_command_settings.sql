-- DAKI 2.9.9: global per-runtime command switches.
-- Additive; existing commands remain enabled unless explicitly disabled.
CREATE TABLE IF NOT EXISTS system_command_settings (
  system_scope TEXT NOT NULL CHECK(system_scope IN ('business','bot')),
  command_name TEXT NOT NULL,
  enabled INTEGER NOT NULL DEFAULT 1,
  updated_by TEXT,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(system_scope,command_name)
);
