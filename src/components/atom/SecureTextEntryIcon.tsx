import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
import {AppTheme} from '~constants';

interface ISecureTextEntryIcon {
  testID?: string;
  checked: boolean;
  onPress?: () => void;
}
const securedIcon = require('../../assets/icons/visibility-on.png');
const visibleIcon = require('../../assets/icons/visibility-off.png');

export const SecureTextEntryIcon: React.FC<ISecureTextEntryIcon> = ({
  onPress,
  testID,
  checked,
}) => (
  <Pressable onPress={onPress} testID={testID} style={styles.container}>
    <Image
      style={styles.SecureTextEntryIcon}
      source={checked ? securedIcon : visibleIcon}
    />
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    padding: AppTheme.spacing.xs,
    marginVertical: AppTheme.spacing.s,
  },
  SecureTextEntryIcon: {
    width: 20,
    height: 20,
  },
});
