/**
 *  銷售額排名
 */
import React, { PureComponent } from 'react';
import { List } from 'antd';

const data = [
  { name: '长江路122号店', sales: 2343 },
  { name: '长江路32号店', sales: 2423 },
  { name: '长江路155号店', sales: 3442 },
  { name: '长江路31号店', sales: 34234 },
  { name: '长江路122号店', sales: 242 },
  { name: '长江路21号店', sales: 2424 },
];

const ListItem = List.Item;
const ListItemMeta = List.Item.Meta;

class SalesRank extends PureComponent {

  renderItem = item => (
    <ListItem>
      <ListItemMeta
        title={<span>{item.name}</span>}
      />
      <span>{item.sales}</span>
    </ListItem>
  )

  render() {
    return (
      <React.Fragment>
        <List
          header={<h3>门店销售额排名</h3>}
          dataSource={data}
          renderItem={this.renderItem}
          pagination
          // style={{ width: 400, marginLeft: '20px' }}
        />
      </React.Fragment>
    );
  }
}

export default SalesRank;