/**
 *  日期控件
 */
import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const ranges = {
  今天: [moment(), moment()],
  昨天: [moment().subtract(1, 'day'), moment().subtract(1, 'day')],
  上周: [moment().weekday(-6), moment().weekday(0)],
  本周: [moment().weekday(0), moment()],
  本月: [moment().startOf('month'), moment().endOf('month')],
  过去7天: [moment().add(-7, 'days'), moment()],
  未来7天: [moment(), moment().add(7, 'days')],
  过去30天: [moment().subtract(30, 'days'), moment()],
  过去2月: [moment().subtract(2, 'month'), moment()],
  过去3月: [moment().subtract(3, 'month'), moment()],
};

export const RangeDate = props => {
  const { ...rest } = props;
  return (
    <RangePicker
      showTime
      format="YYYY-MM-DD HH:mm:ss"
      ranges={ranges}
      {...rest}
    />
  )
}

export const DateComponent = props => {
  const { ...rest } = props;
  return (
    <DatePicker
    format="YYYY-MM-DD HH:mm:ss"
    showTime
    {...rest}
    />
  );
}

export default { RangeDate, DateComponent };