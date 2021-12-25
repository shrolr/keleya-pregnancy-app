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
    await expect(element(by.id('nameScreenHeaderImage'))).toBeVisible();
  });
  // Name Screen
  it('should have disabled continue button', async () => {
    await element(by.id('continueButton')).tap();
    await expect(element(by.id('continueButton'))).toBeVisible();
  });
  it('should navigate to date screen after name input filled', async () => {
    await element(by.id('nameInput')).typeText('Elena');
    await element(by.id('keyboardDismisser')).tap();
    await element(by.id('continueButton')).tap();
    await expect(element(by.id('nameInput'))).not.toBeVisible();
  });
  // Due Date Screen
  it('should have disabled continue button if user did not select an date', async () => {
    await element(by.id('continueButton')).tap();
    await expect(element(by.id('dateScreen'))).toBeVisible();
  });
  it('should navigate to workout screen', async () => {
    await element(by.id('datePickerLabel')).tap();
    const picker = element(
      by
        .type('android.widget.ScrollView')
        .withAncestor(by.type('android.widget.DatePicker')),
    );
    await picker.swipe('left', 'fast', 1);
    await picker.tapAtPoint({x: 50, y: 200});
    const okButton = element(by.text('OK'));
    await okButton.tap();
    await element(by.id('continueButton')).tap();
    await expect(element(by.id('workoutScreen'))).toBeVisible();
  });
});
