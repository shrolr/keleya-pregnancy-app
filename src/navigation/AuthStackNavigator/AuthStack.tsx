import React from 'react';
import {AuthParamList} from './AuthParamList';
import WelcomeScreen from './Screens/WelcomeScreen';
import {createStackNavigator} from '@react-navigation/stack';

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
    </Stack.Navigator>
  );
};
