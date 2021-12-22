/* eslint-env detox/detox, jest */

describe('Initial Screen Test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  afterAll(async () => {
    await device.takeScreenshot('Initial Screen');
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
