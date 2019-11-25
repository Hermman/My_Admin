/**
 * 銷售額
 */
import React, { PureComponent, Fragment } from 'react';
import { Row, Col } from 'antd';
import BarCharts from './BarChart';
import SalesRank from './SalesRank';

class Sales extends PureComponent {
  render() {
    return (
      <Row type="flex">
        <Col span={16} pull={1}>
          <BarCharts />
        </Col>
        <Col span={8}>
          <SalesRank />
        </Col>
      </Row>
    );
  }
}

export default Sales;