import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppColors} from '~constants';

interface IButtonStyled {
  text: string;
  testID: string;
  variant: 'outlined' | 'solid';
}

export const ButtonStyled: React.FC<IButtonStyled> = ({
  text,
  variant,
  testID,
}) => {
  return (
    <View testID={testID} style={containerStyles[variant]}>
      <Text style={textStyles[variant]}>{text}</Text>
    </View>
  );
};

const containerStyles = StyleSheet.create({
  outlined: {
    marginVertical: 4,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf: 'center',
  },
  solid: {
    height: 50,
    marginHorizontal: 24,
    marginVertical: 4,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: AppColors.PALE_TEAL,
  },
});

const textStyles = StyleSheet.create({
  outlined: {
    fontSize: 16,
    color: AppColors.WARM_GREY,
    textAlign: 'center',
  },
  solid: {
    fontSize: 24,
    color: AppColors.WHITE,
    textAlign: 'center',
  },
});
