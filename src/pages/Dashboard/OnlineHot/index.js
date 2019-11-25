/**
 *  线上热门
 */
import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import OnlineChart from './OnlineChart';
import OnlineSearch from './OnlineSearch';


class OnlineHot extends PureComponent {

  render() {
    return (
      <Row type="flex">
        <Col span={12}>
          <OnlineSearch />
        </Col>
        <Col span={12}>
          <OnlineChart />
        </Col>
      </Row>
    );
  }
}

export default OnlineHot;