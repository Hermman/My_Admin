import React, { PureComponent } from 'react';
import { Card, Tabs, DatePicker, Radio } from 'antd';
import Sales from './Sales';
import SalesVolume from './SalesVolume';

const { RangePicker } = DatePicker;
const { TabPane } = Tabs;
const RadioButton = Radio.Button;

class SelectCard extends PureComponent {

  render() {

    const operations = (
      <div>
        <Radio.Group defaultValue="today" style={{ marginRight: "15px" }} buttonStyle="solid">
          <RadioButton value="today">今日</RadioButton>
          <RadioButton value="week">本周</RadioButton>
          <RadioButton value="month">本月</RadioButton>
          <RadioButton value="year">全年</RadioButton>
        </Radio.Group>
        <RangePicker />
      </div>
    )

    return (
      <Card>
        <Tabs defaultActiveKey="1" tabBarExtraContent={operations}>
          <TabPane tab="销售额" key="1">
            <Sales />
          </TabPane>
          
          <TabPane tab="访问量" key="2">
            <SalesVolume />
          </TabPane>
        </Tabs>
      </Card>
    );
  }
}

export default SelectCard;