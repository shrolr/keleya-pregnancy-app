import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {
  ArrowBackButton,
  ButtonStyled,
  Container,
  DatePickerLabel,
  Heading,
} from '~components/atom';
import {AppTheme} from '~constants';
import {UserAction} from '~redux/actionTypes';
import {RedusxAppState} from '~redux/reducers';
import {AuthNavProps} from '../AuthParamList';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {formatToDatePickerLabel} from '~utils';

const headerImage = require('../../../assets/keleya-challenge-assets/due-date-background-image.jpg');
export default function DateScreen({navigation}: AuthNavProps<'DateScreen'>) {
  const dispatch = useDispatch<Dispatch<UserAction>>();
  const {user} = useSelector((state: RedusxAppState) => state.user);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    user?.dueDate,
  );
  const [selectedDateWithFormat, setselectedDateWithFormat] = useState(
    user?.dueDate
      ? formatToDatePickerLabel(user.dueDate)
      : 'Click here to select a date',
  );

  const [isDatePickerVisible, setisDatePickerVisible] = useState(false);
  const onArrowBackButtonPressed = () => {
    navigation.goBack();
  };
  const onContinueButtonPressed = () => {
    if (user && selectedDate) {
      dispatch({
        type: 'UPDATE_USER_INFO',
        user: {...user, dueDate: selectedDate},
      });
      navigation.navigate('WorkoutScreen');
    }
  };
  const onShowDatePickerPressed = () => {
    setisDatePickerVisible(true);
  };

  const onChange = (_: Event, _selectedDate?: Date) => {
    if (_selectedDate) {
      setisDatePickerVisible(false);
      setSelectedDate(_selectedDate);
      setselectedDateWithFormat(formatToDatePickerLabel(_selectedDate));
    }
  };

  return (
    <View testID="dateScreen" style={styles.wrapper}>
      <ArrowBackButton onPress={onArrowBackButtonPressed} />
      <Image
        resizeMode="cover"
        source={headerImage}
        style={styles.headerImage}
      />
      {isDatePickerVisible && (
        <RNDateTimePicker
          testID="dateTimePicker"
          value={selectedDate ? selectedDate : new Date()}
          mode={'date'}
          display="default"
          onChange={onChange}
        />
      )}
      <Container style={styles.container}>
        <Heading text={`When is your baby due, ${user?.name}?`} />
        <DatePickerLabel
          testID="datePickerLabel"
          onPress={onShowDatePickerPressed}
          text={selectedDateWithFormat}
        />

        <View style={styles.buttonContainer}>
          <ButtonStyled
            onPress={onContinueButtonPressed}
            disabled={selectedDate === undefined ? true : false}
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
