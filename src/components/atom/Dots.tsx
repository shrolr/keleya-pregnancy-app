import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppTheme} from '~constants';

export const Dots: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dotStyleActive} />
      <View style={styles.dotStyle} />
      <View style={styles.dotStyle} />
    </View>
  );
};
const dotSize = 10;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: AppTheme.spacing.xs,
    paddingBottom: AppTheme.spacing.s,
    flexDirection: 'row',
  },
  dotStyle: {
    backgroundColor: AppTheme.colors.LIGHT_TEAL,
    height: dotSize,
    marginHorizontal: AppTheme.spacing.xs,
    width: dotSize,
    borderRadius: dotSize / 2,
  },
  dotStyleActive: {
    backgroundColor: AppTheme.colors.PALE_TEAL,
    height: dotSize,
    marginHorizontal: AppTheme.spacing.xs,
    width: dotSize,
    borderRadius: dotSize / 2,
  },
});
