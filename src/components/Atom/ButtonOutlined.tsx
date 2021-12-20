import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppColors} from '~constants';

interface IButtonOutlined {
  text: string;
  testID: string;
}

export const ButtonOutlined: React.FC<IButtonOutlined> = ({testID, text}) => {
  return (
    <View testID={testID} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    color: AppColors.WARM_GREY,
    textAlign: 'center',
  },
});
