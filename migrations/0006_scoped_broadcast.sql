-- DAKI 2.9.2: resumable, auditable broadcast queues, isolated per runtime.
-- Recipients are snapshotted from private conversations belonging to the selected system.
CREATE TABLE IF NOT EXISTS system_broadcast_jobs (
  id TEXT PRIMARY KEY,
  system_scope TEXT NOT NULL CHECK(system_scope IN ('business','bot')),
  message_text TEXT NOT NULL,
  created_by TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'preparing' CHECK(status IN ('preparing','running','completed','cancelled')),
  total INTEGER NOT NULL DEFAULT 0,
  sent INTEGER NOT NULL DEFAULT 0,
  failed INTEGER NOT NULL DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS system_broadcast_recipients (
  job_id TEXT NOT NULL,
  chat_id TEXT NOT NULL,
  connection_id TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','sending','sent','failed')),
  error_text TEXT NOT NULL DEFAULT '',
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(job_id,chat_id,connection_id)
);
CREATE INDEX IF NOT EXISTS idx_broadcast_recipients_pending
  ON system_broadcast_recipients(job_id,status,chat_id);
