/**
 *  安全设置页面
 */
import React, { PureComponent } from 'react';
import { List, Button, Icon } from 'antd';
import styles from '../style.less';

const ListItem = List.Item;

const data = [
  { title: '账号密码', icon: 'user', content: '更新当前账号密码' },
  { title: '绑定手机', icon: 'phone', content: '设置您的手机号码' },
  { title: '绑定邮箱', icon: 'mail', content: '设置您的绑定邮箱' },
];

class Secerity extends PureComponent {

  renderItem = item => (
    <ListItem className={styles.listItem}>
      <div>
        <h3 className={styles.title}>
          <Icon type={item.icon} className={styles.icon} />
          {item.title}
        </h3>
        <p>{item.content}</p>
      </div>
      <Button>修改</Button>
    </ListItem>
  );

  render() {
    return (
      <List
        size="large"
        header={<h1>安全设置</h1>}
        footer={false}
        dataSource={data}
        renderItem={item => this.renderItem(item)}
      />
    );
  }
}

export default Secerity;