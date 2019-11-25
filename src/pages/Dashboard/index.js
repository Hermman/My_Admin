import React, { PureComponent } from 'react';
import { } from 'antd';
import CardData from './CardData';
import SelectCard from './SelectCard';
import OnlineHot from './OnlineHot';
import LineChart from './LineChart';

class Dashboard extends PureComponent {

  render() {

    return (
      <React.Fragment>
      <CardData />
      <SelectCard />
      <OnlineHot />
      <LineChart />
      </React.Fragment>
    );
  }
}

export default Dashboard;

/**
 <CardData />
 <SelectCard />
 <OnlineHot />
 <LineChart />
 */