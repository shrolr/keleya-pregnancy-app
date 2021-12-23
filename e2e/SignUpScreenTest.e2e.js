/* eslint-env detox/detox, jest */

describe('Signup Screen Test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  afterAll(async () => {
    await device.takeScreenshot('Sign up Screen');
  });

  it('should have Header Image', async () => {
    await element(by.id('getStartedButton')).tap();
    await waitFor(element(by.id('headerImage')))
      .toBeVisible()
      .withTimeout(2000);
  });
  it('should have title', async () => {
    await expect(element(by.id('getStartedTitle'))).toBeVisible();
  });
  it('should have email input', async () => {
    await expect(element(by.id('getStartedTitle'))).toBeVisible();
    await element(by.id('emailInput')).typeText('123456');
  });
});
