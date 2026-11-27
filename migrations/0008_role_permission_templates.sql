-- DAKI 2.9.10: editable RBAC role templates.
-- Existing administrator permission snapshots are intentionally preserved.
CREATE TABLE IF NOT EXISTS role_permission_templates (
  role TEXT PRIMARY KEY,
  permissions_json TEXT NOT NULL,
  updated_by TEXT,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
