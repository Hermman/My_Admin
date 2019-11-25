import React, { PureComponent, Fragment } from 'react';
import { Card, Row, Col, Statistic, Icon, Tooltip, Divider } from 'antd';
import Charts from './charts';

class CardData extends PureComponent {

  render() {

    const extra = (
      <Tooltip title="指示说明">
        <Icon type="exclamation-circle" />
      </Tooltip>
    )

    return (
      <Fragment>
        <Row gutter={24} type={'flex'}>
          <Col span={6}>
            <Card
              bordered={false}
              hoverable
              title="总销售额"
              extra={extra}
              type="inner"
            >
              <Statistic
                value={112893}
                prefix={'￥'}
              />
              <span>周同比12%日同比11%</span>
              <Divider style={{margin: '5px 0px'}}/>
              <span>日销售额￥12,423</span>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              bordered={false}
              hoverable
              title="访问量"
              extra={extra}
              type="inner"
            >
              <Statistic value={8848} />
              <Divider style={{margin: '5px 0px'}}/>
              <span>日访问量1,234</span>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              bordered={false}
              hoverable
              title="支付笔数"
              extra={extra}
              type="inner"
            >
              <Statistic value={6550} />
              <Divider style={{margin: '5px 0px'}}/>
              <span>转化率60%</span>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              bordered={false}
              hoverable
              title="运营活动效果"
              extra={extra}
              type="inner"
            >
              <Statistic value={'78%'} />
              <Divider style={{margin: '5px 0px'}}/>
              <span>周同比12%日同比11%</span>
            </Card>
          </Col>

        </Row>
      </Fragment>
    );
  }
}

export default CardData;