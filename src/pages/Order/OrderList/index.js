import React, { PureComponent } from 'react';
import { Card, Row, Col, Button, Icon, Alert, Divider } from 'antd';
import CreateForm from '@/components/CreateForm';
import StandardTable from '@/components/StandardTable'

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    orderName: `Edward King ${i}`,
    orderState: '已完成',
    frequency: 45,
    createTime: `2019-11-${i}`,
    remarks: `London, Park Lane no. ${i}`,
  });
}

class OrderList extends PureComponent {
  formRef = React.createRef;

  state = {
    checkedRow: null
  }

  handleCheckedRow = record => {
    const { frequency } = record;
    this.setState({ checkedRow: frequency });
  }

  handleChange = change => {
    console.log(change)
  }

  render() {
    const { checkedRow } = this.state;

    const formItem = [
      { label: '订单名称', id: 'orderName' },
      {
        label: '订单状态',
        id: 'orderState',
        type: 'select',
        options: [
          { name: '进行中', value: 'processing' },
          { name: '已发货', value: 'Shipped' },
          { name: '已完成', value: 'completed' },
          { name: '异常', value: 'abnormal' },
          { name: '关闭', value: 'closed' },
        ],
      },
      { label: '调用次数', id: 'frequency' },
      { label: '创建日期', id: 'createTime', type: 'datePicker' },
    ];

    const columns = [
      { title: '订单名称', dataIndex: 'orderName', key: 'orderName' },
      {
        title: '订单状态',
        dataIndex: 'orderState',
         key: 'orderState',
         filters: [
          {
            text: '为完成',
            value: '1',
          },
          {
            text: '进行中',
            value: '2',
          },
          {
            text: '已完成',
            value: '0',
          },
        ],
        onFilter: (value, record) => record.orderState.indexOf(value) === 0,
      },
      {
        title: '调用次数',
        dataIndex: 'frequency',
        key: 'frequency',
        sorter: (a, b) => a.frequency - b.frequency,
      },
      { title: '创建日期', dataIndex: 'createTime', key: 'createTime' },
      { title: '备注', dataIndex: 'remarks', key: 'remarks' },
      {
        title: '操作',
        dataIndex: 'operating',
        key: 'operating',
        render: () => (
          <div>
            <a>配置</a>
            <Divider type="vertical" />
            <a>订阅警报</a>
          </div>
        ),
      },
    ];

    return (
      <Card>
        <CreateForm
          layout="inline"
          wrappedComponentRef={this.formRef}
          formItemConfig={formItem}
        />
        <Row style={{ marginTop: 30 }}>
          <Col>
            <Button type="primary" style={{ marginRight: 10 }}>
              <Icon type="plus" />新建
            </Button>
            <Button style={{ marginRight: 10 }}>
              批量操作
            </Button>
            <Button style={{ marginRight: 10 }}>
              更多操作
            </Button>
          </Col>
        </Row>
        <Alert
          message={`已选择 0 项  服务调用次数总计 ${checkedRow || 0}次`}
          type="info"
          showIcon
          description={<a style={{ marginLeft: 20 }}>清空</a>}
          style={{ display: 'flex', margin: '20px 0px' }}
        />
        <StandardTable
          columns={columns}
          dataSource={data}
          onChange={this.handleChange}
          pagination
          rowSelection={{
            onSelectAll: e => this.handleCheckedRow(e),
            onSelect: this.handleCheckedRow,
          }}

        />
      </Card>
    );
  }
}

export default OrderList;