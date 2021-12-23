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

const styles = StyleSheet.create({
  container: {
    padding: AppTheme.spacing.s,
    margin: -AppTheme.spacing.s,
    marginVertical: AppTheme.spacing.s,
    alignSelf: 'flex-start',
  },
  checkbox: {
    borderWidth: 1.2,
    height: 15,
    width: 15,
    backgroundColor: AppTheme.colors.WHITE,
    borderColor: AppTheme.colors.PALE_TEAL,
  },
  checkboxChecked: {
    height: 15,
    width: 15,
    backgroundColor: AppTheme.colors.PALE_TEAL,
  },
  checkedImage: {
    width: 15,
    height: 15,
  },
});
