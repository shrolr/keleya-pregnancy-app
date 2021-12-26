import React from 'react';
import {AuthParamList} from './AuthParamList';
import WelcomeScreen from './screens/WelcomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from './screens/SignupScreen';
import NameScreen from './screens/NameScreen';
import DateScreen from './screens/DateScreen';
import WorkoutScreen from './screens/WorukoutScreen';
import SuccessScreen from './screens/SuccessScreen';
import SignInScreen from './screens/SignInScreen';

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
      <Stack.Screen name="NameScreen" component={NameScreen} />
      <Stack.Screen name="DateScreen" component={DateScreen} />
      <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
};
