import React, { PureComponent, Fragment } from 'react';
import {} from 'antd';
import List from './OrderList';
import Details from './OrderDetails';

class Order extends PureComponent {

  render() {
    return (
      <Fragment>
        <List />
        <Details />
      </Fragment>
    );
  }
}

export default Order;