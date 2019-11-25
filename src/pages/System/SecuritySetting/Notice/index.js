/**
 *  通知设置页面
 */
import React, { PureComponent } from 'react';
import { List, Switch } from 'antd';
import styles from '../style.less'

const ListItem = List.Item;

const data = [
  { title: '系统消息', content: '系统性的通知或者更新消息' },
  { title: '账号消息', content: '帐号变更的通知消息' },
];

class Notice extends PureComponent {

  renderItem = item => (
    <ListItem className={styles.listItem}>
      <div>
        <h3 className={styles.title}>
          {item.title}
        </h3>
        <p>{item.content}</p>
      </div>
      <Switch defaultChecked />
    </ListItem>
  );

  render() {
    return (
      <List
        size="large"
        header={<h1>通知设置</h1>}
        footer={false}
        dataSource={data}
        renderItem={item => this.renderItem(item)}
      />
    );
  }
}

export default Notice;