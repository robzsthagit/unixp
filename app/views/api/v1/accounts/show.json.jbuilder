json.partial! 'api/v1/models/account', formats: [:json], resource: @account
json.latest_unixp_version @latest_unixp_version
json.partial! 'enterprise/api/v1/accounts/partials/account', account: @account if UniXPApp.enterprise?
