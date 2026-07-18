module Enterprise::UniXPHub
  ENTERPRISE_BASE_URL = 'https://hub.2.chatwoot.com'.freeze

  def base_url
    return ENV.fetch('UNIXP_HUB_URL', ENTERPRISE_BASE_URL) if Rails.env.development?

    ENTERPRISE_BASE_URL
  end
end
