import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {AppTheme} from '~constants';

interface ICheckbox {
  testID?: string;
  checked: boolean;
  onPress?: () => void;
}
const checkedImage = require('../../assets/icons/tick.png');
export const Checkbox: React.FC<ICheckbox> = ({onPress, testID, checked}) => (
  <Pressable onPress={onPress} testID={testID} style={styles.container}>
    <View style={checked ? styles.checkboxChecked : styles.checkbox}>
      {checked && <Image style={styles.checkedImage} source={checkedImage} />}
    </View>
  </Pressable>
);

const checkboxSize = 20;
const styles = StyleSheet.create({
  container: {
    marginVertical: AppTheme.spacing.s,
    alignSelf: 'flex-start',
  },
  checkbox: {
    borderWidth: 1.2,
    borderRadius: 3,
    height: checkboxSize,
    width: checkboxSize,
    backgroundColor: AppTheme.colors.TRANSPARENT,
    borderColor: AppTheme.colors.PALE_TEAL,
  },
  checkboxChecked: {
    borderRadius: 3,
    height: checkboxSize,
    width: checkboxSize,
    backgroundColor: AppTheme.colors.PALE_TEAL,
  },
  checkedImage: {
    width: checkboxSize,
    height: checkboxSize,
  },
});
