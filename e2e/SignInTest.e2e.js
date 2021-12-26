/* eslint-env detox/detox, jest */

describe('Sign in Test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcomeBg'))).toBeVisible();
  });

  it('should have Get started button', async () => {
    await expect(element(by.id('getStartedButton'))).toBeVisible();
  });

  it('should have Login button', async () => {
    await expect(element(by.id('loginButton'))).toBeVisible();
    await device.takeScreenshot('Initial Screen');
  });
  it('should navigate to sign in screen', async () => {
    await element(by.id('loginButton')).tap();
    await waitFor(element(by.id('signInHeaderImage')))
      .toBeVisible()
      .withTimeout(2000);
    await device.takeScreenshot('Login Screen with disabled continue button');
  });
  it('should navigate to success screen', async () => {
    await element(by.id('emailInput')).typeText('example@gmail.com');
    await element(by.id('passwordInput')).typeText('secretpassword\n');
    await device.takeScreenshot('Login Screen all fields are entered');
    await element(by.id('loginButton')).tap();
    await expect(element(by.id('successScreen'))).toBeVisible();
    await device.takeScreenshot('Success Screen');
  });
});
