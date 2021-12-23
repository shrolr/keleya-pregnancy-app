import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {AppTheme} from '~constants';

interface IInput {
  testID?: string;
  placeholder?: string;
}

export const Input: React.FC<IInput> = ({placeholder, testID}) => (
  <TextInput
    testID={testID}
    placeholder={placeholder}
    style={styles.textInput}
  />
);

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 0.5,
    borderBottomColor: AppTheme.colors.GREYISH_BROWN,
    height: 40,
    paddingHorizontal: AppTheme.spacing.l,
    width: '80%',
    alignSelf: 'center',
    color: AppTheme.colors.GREYISH_BROWN,
    ...AppTheme.textVariants.body,
  },
});
