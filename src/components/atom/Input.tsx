import React from 'react';
import {KeyboardTypeOptions, StyleSheet, TextInput, View} from 'react-native';
import {AppTheme} from '~constants';

interface IInput {
  testID?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  rightIcon?: React.ReactNode;
  onChangeText?: (text: string) => void;
}

export const Input: React.FC<IInput> = ({
  keyboardType,
  placeholder,
  testID,
  secureTextEntry,
  rightIcon,
  onChangeText,
  autoCapitalize,
}) => (
  <View style={styles.container}>
    <TextInput
      onChangeText={onChangeText}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
      testID={testID}
      placeholder={placeholder}
      keyboardType={keyboardType}
      style={styles.textInput}
    />
    {rightIcon}
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    height: 50,
    borderBottomColor: AppTheme.colors.GREYISH_BROWN,
  },
  textInput: {
    fontWeight: '700',
    height: 40,
    flex: 1,
    paddingHorizontal: AppTheme.spacing.l,
    color: AppTheme.colors.GREYISH_BROWN,
    ...AppTheme.textVariants.body,
  },
});
