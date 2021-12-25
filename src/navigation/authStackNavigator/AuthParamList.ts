import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type AuthParamList = {
  WelcomeScreen: undefined;
  SignUpScreen: undefined;
  NameScreen: undefined;
  DateScreen: undefined;
  WorkoutScreen: undefined;
};

export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
};
