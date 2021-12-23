import React from 'react';
import {AuthParamList} from './AuthParamList';
import WelcomeScreen from './screens/WelcomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from './screens/SignupScreen';

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="WelcomeScreen">
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};
