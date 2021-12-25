import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {AppTheme} from '~constants';

interface IDatePickerLabel {
  text: string;
  testID?: string;
  onPress?: () => void;
}

export const DatePickerLabel: React.FC<IDatePickerLabel> = ({
  onPress,
  text,
  testID,
}) => (
  <Pressable onPress={onPress} testID={testID} style={styles.container}>
    <Text ellipsizeMode="tail" numberOfLines={0} style={styles.text}>
      {text}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: AppTheme.colors.LIGHT_GRAY,
    paddingHorizontal: AppTheme.spacing.m,
    paddingVertical: AppTheme.spacing.xs,
    borderRadius: AppTheme.spacing.s,
    marginVertical: AppTheme.spacing.m,
  },
  text: {
    fontWeight: '500',
    color: AppTheme.colors.PALE_TEAL,
    ...AppTheme.textVariants.body,
  },
});
