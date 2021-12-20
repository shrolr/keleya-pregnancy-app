import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppColors} from '~constants';

interface IButtonSolid {
  text: string;
  testID: string;
}

export const ButtonSolid: React.FC<IButtonSolid> = ({text, testID}) => {
  return (
    <View testID={testID} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginHorizontal: 24,
    marginVertical: 4,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: AppColors.PALE_TEAL,
  },
  text: {
    fontSize: 24,
    color: AppColors.WHITE,
    textAlign: 'center',
  },
});
