/**
 * @format
 */

import {EmailValidator} from '~utils';

it('returns false for wrong email input', () => {
  expect(EmailValidator('wrong email')).toBeFalsy();
});

it('returns true for valid email', () => {
  expect(EmailValidator('example@gmail.com')).toBeTruthy();
});
