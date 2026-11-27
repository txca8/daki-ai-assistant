-- DAKI 2.7.0 runtime controls. Additive only.
CREATE TABLE IF NOT EXISTS system_rate_limits (
  system_scope TEXT NOT NULL CHECK(system_scope IN ('business','bot')),
  user_id TEXT NOT NULL,
  window_started INTEGER NOT NULL,
  request_count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY(system_scope,user_id)
);
