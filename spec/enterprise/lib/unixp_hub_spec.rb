require 'rails_helper'

RSpec.describe UniXPHub do
  describe '.base_url' do
    it 'uses the static hub url outside development for enterprise edition' do
      with_modified_env UNIXP_HUB_URL: 'https://custom.example.com' do
        allow(Rails).to receive(:env).and_return(ActiveSupport::StringInquirer.new('production'))

        expect(described_class.base_url).to eq('https://hub.2.chatwoot.com')
      end
    end

    it 'uses UNIXP_HUB_URL in development for enterprise edition' do
      with_modified_env UNIXP_HUB_URL: 'https://custom.example.com' do
        allow(Rails).to receive(:env).and_return(ActiveSupport::StringInquirer.new('development'))

        expect(described_class.base_url).to eq('https://custom.example.com')
      end
    end
  end
end
