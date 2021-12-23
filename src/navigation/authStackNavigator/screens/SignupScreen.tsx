import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {Heading, Input} from '~components/atom';
import {AppTheme} from '~constants';
import {AuthNavProps} from '../AuthParamList';

export default function SignUpScreen({}: AuthNavProps<'SignUpScreen'>) {
  const backgroundImage = require('src/assets/keleya-challenge-assets/authentication-background-image.jpg');

  return (
    <View style={styles.container}>
      <Image
        testID="headerImage"
        source={backgroundImage}
        style={styles.headerImage}
      />
      <Heading
        testID="getStartedTitle"
        text="Add your details below to set up an account"
      />
      <Input testID="emailInput" placeholder="example@gmail.com" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppTheme.colors.WHITE,
  },
  headerImage: {
    marginBottom: -AppTheme.spacing.xl,
    width: Dimensions.get('screen').width,
  },
});
