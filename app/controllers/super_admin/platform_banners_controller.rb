class SuperAdmin::PlatformBannersController < SuperAdmin::ApplicationController
  before_action :ensure_unixp_cloud

  private

  def ensure_unixp_cloud
    raise ActionController::RoutingError, 'Not Found' unless UniXPApp.unixp_cloud?
  end
end
