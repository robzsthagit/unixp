import { useBranding } from '../useBranding';
import { useMapGetter } from 'dashboard/composables/store.js';

// Mock the store composable
vi.mock('dashboard/composables/store.js', () => ({
  useMapGetter: vi.fn(),
}));

describe('useBranding', () => {
  let mockGlobalConfig;

  beforeEach(() => {
    mockGlobalConfig = {
      value: {
        installationName: 'MyCompany',
      },
    };

    useMapGetter.mockReturnValue(mockGlobalConfig);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('replaceInstallationName', () => {
    it('should replace "UniXP" with installation name when both text and installation name are provided', () => {
      const { replaceInstallationName } = useBranding();
      const result = replaceInstallationName('Welcome to UniXP');

      expect(result).toBe('Welcome to MyCompany');
    });

    it('should replace multiple occurrences of "UniXP"', () => {
      const { replaceInstallationName } = useBranding();
      const result = replaceInstallationName(
        'UniXP is great! Use UniXP today.'
      );

      expect(result).toBe('MyCompany is great! Use MyCompany today.');
    });

    it('should return original text when installation name is not provided', () => {
      mockGlobalConfig.value = {};

      const { replaceInstallationName } = useBranding();
      const result = replaceInstallationName('Welcome to UniXP');

      expect(result).toBe('Welcome to UniXP');
    });

    it('should return original text when globalConfig is not available', () => {
      mockGlobalConfig.value = undefined;

      const { replaceInstallationName } = useBranding();
      const result = replaceInstallationName('Welcome to UniXP');

      expect(result).toBe('Welcome to UniXP');
    });

    it('should return original text when text is empty or null', () => {
      const { replaceInstallationName } = useBranding();

      expect(replaceInstallationName('')).toBe('');
      expect(replaceInstallationName(null)).toBe(null);
      expect(replaceInstallationName(undefined)).toBe(undefined);
    });

    it('should handle text without "UniXP" gracefully', () => {
      const { replaceInstallationName } = useBranding();
      const result = replaceInstallationName('Welcome to our platform');

      expect(result).toBe('Welcome to our platform');
    });

    it('should be case-sensitive for "UniXP"', () => {
      const { replaceInstallationName } = useBranding();
      const result = replaceInstallationName(
        'Welcome to unixp and UNIXP'
      );

      expect(result).toBe('Welcome to unixp and UNIXP');
    });

    it('should handle special characters in installation name', () => {
      mockGlobalConfig.value = {
        installationName: 'My-Company & Co.',
      };

      const { replaceInstallationName } = useBranding();
      const result = replaceInstallationName('Welcome to UniXP');

      expect(result).toBe('Welcome to My-Company & Co.');
    });
  });
});
