import dayjs from 'dayjs';
import {AppTheme} from '~constants';

export const formatToDatePickerLabel = (date: Date) => {
  return dayjs(date).format(AppTheme.timeFormats.localeTimeFormat);
};
