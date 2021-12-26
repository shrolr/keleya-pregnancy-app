import React, {useState} from 'react';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {
  ArrowBackButton,
  ButtonStyled,
  Container,
  Heading,
} from '~components/atom';
import {AppTheme, TimePickerData} from '~constants';
import {UserAction} from '~redux/actionTypes';
import {RedusxAppState} from '~redux/reducers';
import {AuthNavProps} from '../AuthParamList';
import {Picker} from '@react-native-picker/picker';

const headerImage = require('../../../assets/keleya-challenge-assets/workout-goal-background-image.jpg');
export default function WorkoutScreen({
  navigation,
}: AuthNavProps<'WorkoutScreen'>) {
  const dispatch = useDispatch<Dispatch<UserAction>>();
  const {user} = useSelector((state: RedusxAppState) => state.user);
  const [TimesAWeek, setTimesAWeek] = useState(TimePickerData[2].value);

  const onArrowBackButtonPressed = () => {
    navigation.goBack();
  };
  const onContinueButtonPressed = () => {
    if (user && TimesAWeek) {
      dispatch({
        type: 'UPDATE_USER_INFO',
        user: {...user, TimesAWeek: TimesAWeek},
      });
      navigation.navigate('SuccessScreen');
    }
  };
  const onTimeSelected = (itemValue: string) => {
    setTimesAWeek(itemValue);
  };

  return (
    <View testID="workoutScreen" style={styles.wrapper}>
      <ArrowBackButton onPress={onArrowBackButtonPressed} />
      <ImageBackground
        resizeMode="cover"
        source={headerImage}
        style={styles.headerImage}>
        <Container style={styles.headerContainer}>
          <Heading text="How many times a week do you want to be active?" />
        </Container>
      </ImageBackground>

      <Container style={styles.container}>
        <Picker
          testID="timePicker"
          style={styles.picker}
          selectedValue={TimesAWeek}
          onValueChange={onTimeSelected}>
          {TimePickerData.map(time => (
            <Picker.Item
              testID={'label'}
              key={time.value}
              label={time.label}
              value={time.value}
            />
          ))}
        </Picker>
        <View style={styles.buttonContainer}>
          <ButtonStyled
            onPress={onContinueButtonPressed}
            testID="continueButton"
            variant="solid"
            text="Continue"
          />
        </View>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: AppTheme.spacing.l,
    flex: 1,
    backgroundColor: AppTheme.colors.WHITE,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: AppTheme.spacing.xl,
  },
  picker: {
    marginTop: AppTheme.spacing.l,
  },
  headerImage: {
    flex: 1.7,
    width: Dimensions.get('window').width,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: AppTheme.spacing.l,
  },
});
