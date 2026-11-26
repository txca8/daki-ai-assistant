# DAKI AI Assistant

DAKI Schule Telegram assistant and Telegram Business assistant, deployed as a Cloudflare Worker.

## Daki Admin Mini App

The `/admin` Mini App now provides separate Owner and Administrator workspaces.

- Owner workspace: users, groups, group command controls, administrator roles and permissions, Owner Telegram Business instructions, bot-only profile and instructions, command catalogue, statistics, logs, backups, and system settings.
- Administrator workspace: sections and commands are filtered by server-verified permissions.
- Telegram Web App `initData` is validated on the Worker before every administrative API action.
- Administrator management enforces role hierarchy and prevents delegated administrators from modifying the primary owner or administrators at an equal/higher rank.

## Bot / Telegram Business separation

- Normal bot `/start` and first-contact welcome use a bot-specific message with `Daki Admin` and `Daki-Schule` buttons.
- Normal bot AI replies do not include the Owner AI pause/resume keyboard.
- Normal bot personality settings and instructions are stored separately in `bot_profile_settings` and `bot_instructions`.
- Group-specific command toggles are stored in `group_command_settings`.
- Telegram Business retains its existing welcome, `SYSTEM_PROMPT`, owner instruction table, conversation routing, and pause/resume keyboard. The `SYSTEM_PROMPT` text is unchanged.

## Database

The Worker creates the additional tables with `CREATE TABLE IF NOT EXISTS` through its existing schema initialization. No existing application tables are renamed or dropped.

## Validation

The edited Worker, command module, and embedded Mini App JavaScript were syntax-checked. Basic Worker route smoke tests and new-table SQL syntax checks passed. No Cloudflare deployment or Telegram configuration change was performed.
Preview build trigger
