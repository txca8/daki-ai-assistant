-- DAKI migration 0001: independent AI reply switches
-- Safe/additive: preserves all existing settings and defaults Business AI to ON
-- so deploying this migration cannot silently pause the existing Business assistant.
INSERT OR IGNORE INTO bot_settings (setting_key, setting_value, updated_by, updated_at)
VALUES ('business_enabled', '1', 'migration', CURRENT_TIMESTAMP);

INSERT OR IGNORE INTO bot_settings (setting_key, setting_value, updated_by, updated_at)
VALUES ('bot_enabled', '1', 'migration', CURRENT_TIMESTAMP);
