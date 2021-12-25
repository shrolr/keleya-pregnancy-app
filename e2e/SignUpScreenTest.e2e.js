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
    await expect(element(by.id('emailInput'))).toBeVisible();
  });
  it('should have password input', async () => {
    await expect(element(by.id('passwordInput'))).toBeVisible();
  });
  it('should have privacy policy checkbox', async () => {
    await expect(element(by.id('privacyPolicyCheckbox'))).toBeVisible();
  });
  it('should have terms & conditions checkbox', async () => {
    await expect(element(by.id('termsAndConditionsCheckbox'))).toBeVisible();
  });
  it('should have create account button', async () => {
    await expect(element(by.id('createAccountButton'))).toBeVisible();
  });
  it('should navigate to name screen', async () => {
    await element(by.id('emailInput')).typeText('example@gmail.com');
    await element(by.id('passwordInput')).typeText('secretpassword');
    await element(by.id('privacyPolicyCheckbox')).tap();
    await element(by.id('termsAndConditionsCheckbox')).tap();
    await element(by.id('createAccountButton')).tap();
    await expect(element(by.id('nameScreen'))).toBeVisible();
  });
});
