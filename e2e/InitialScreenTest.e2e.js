/* eslint-env detox/detox, jest */

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcomeBg'))).toBeVisible();
  });

  it('should have Get started button', async () => {
    await expect(element(by.id('getStartedButton'))).toBeVisible();
  });

  it('should have Login button', async () => {
    await expect(element(by.id('loginButton'))).toBeVisible();
  });
});
