import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {AppTheme} from '~constants';

interface IButtonStyled {
  text: string;
  testID?: string;
  variant: 'outlined' | 'solid';
  disabled?: boolean;
  onPress?: () => void;
}

export const ButtonStyled: React.FC<IButtonStyled> = ({
  text,
  variant,
  testID,
  onPress,
  disabled,
}) => (
  <Pressable
    disabled={disabled}
    onPress={onPress}
    testID={testID}
    style={
      disabled
        ? [containerStyles[variant], containerStyles.disabled]
        : containerStyles[variant]
    }>
    <Text style={textStyles[variant]}>{text}</Text>
  </Pressable>
);

const containerStyles = StyleSheet.create({
  disabled: {
    backgroundColor: AppTheme.colors.WARM_GREY,
  },
  outlined: {
    marginVertical: AppTheme.spacing.xs,
    paddingVertical: AppTheme.spacing.xs,
    paddingHorizontal: AppTheme.spacing.m,
    alignSelf: 'center',
  },
  solid: {
    marginVertical: AppTheme.spacing.xs,
    borderRadius: 6,
    width: '100%',
    alignSelf: 'center',
    paddingVertical: AppTheme.spacing.s,
    justifyContent: 'center',
    backgroundColor: AppTheme.colors.PALE_TEAL,
  },
});

const textStyles = StyleSheet.create({
  outlined: {
    color: AppTheme.colors.GREYISH_BROWN,
    textAlign: 'center',
    fontWeight: '300',
    paddingVertical: AppTheme.spacing.s,
    paddingHorizontal: AppTheme.spacing.s,
    ...AppTheme.textVariants.body,
  },
  solid: {
    fontWeight: '700',
    color: AppTheme.colors.WHITE,
    textAlign: 'center',
    ...AppTheme.textVariants.header,
  },
});
