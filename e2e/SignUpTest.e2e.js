/* eslint-env detox/detox, jest */

describe('Signup Test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  it('should have Header Image', async () => {
    await device.takeScreenshot('Initial Screen');
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
  it('should have disabled create account button', async () => {
    await expect(element(by.id('createAccountButton'))).toBeVisible();
    await device.takeScreenshot('Sign up Screen');
  });
  it('should navigate to name screen', async () => {
    await element(by.id('emailInput')).typeText('example@gmail.com');
    await element(by.id('passwordInput')).typeText('secretpassword\n');
    await element(by.id('privacyPolicyCheckbox')).tap();
    await element(by.id('termsAndConditionsCheckbox')).tap();
    await device.takeScreenshot('Sign up Screen after all fields entered');
    await element(by.id('createAccountButton')).tap();
    await expect(element(by.id('nameScreenHeaderImage'))).toBeVisible();
  });
  // Name Screen
  it('should have disabled continue button', async () => {
    await element(by.id('continueButton')).tap();
    await expect(element(by.id('nameScreenHeaderImage'))).toBeVisible();
    await device.takeScreenshot('Name screen disabled continue button');
  });
  it('should navigate to date screen after name input filled', async () => {
    await element(by.id('nameInput')).typeText('Elena\n');
    await device.takeScreenshot('Name screen enabled continue button');
    await element(by.id('continueButton')).tap();
    await expect(element(by.id('nameInput'))).not.toBeVisible();
  });
  // Due Date Screen
  it('should have disabled continue button if user did not select an date', async () => {
    await device.takeScreenshot('Date screen disabled continue button');
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
    await device.takeScreenshot('Date screen enabled continue button');
    await element(by.id('continueButton')).tap();
    await expect(element(by.id('workoutScreen'))).toBeVisible();
  });
  it('should navigate to success screen ', async () => {
    await device.takeScreenshot('Workout screen enabled continue button');
    await element(by.id('continueButton')).tap();
    await expect(element(by.id('successScreen'))).toBeVisible();
    await device.takeScreenshot('Success screen enabled continue button');
  });
});
