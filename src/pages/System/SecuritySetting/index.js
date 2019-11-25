import React, { PureComponent } from 'react';
import { Card, Tabs } from 'antd';
import Secerity from './Secerity';
import Notice from './Notice';

const { TabPane } = Tabs;


class SecuritySetting extends PureComponent {
  render() {
    return (
      <>
        <Card>
          <Tabs tabPosition={'left'} animated>
            <TabPane tab="安全设置" key="1">
              <Secerity />
            </TabPane>
            <TabPane tab="通知设置" key="2">
              <Notice />
            </TabPane>
          </Tabs>
        </Card>
      </>
    );
  }
}

export default SecuritySetting;