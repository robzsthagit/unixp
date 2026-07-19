json.feature_available UniXP.mfa_enabled?
json.enabled @user.mfa_enabled?
json.backup_codes_generated @user.mfa_service.backup_codes_generated? if UniXP.mfa_enabled?
