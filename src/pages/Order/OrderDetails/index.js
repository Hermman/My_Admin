import React, { PureComponent, Fragment } from 'react';
import { Card, Descriptions, Divider } from 'antd';
import StandardTable from '@/components/StandardTable';

const DescriptionsItem = Descriptions.Item;

const data = [
  { label: '取货单号', content: '1000000000' },
  { label: '状态', content: '已取货' },
  { label: '销售单号', content: '浙江，杭州' },
  { label: '子订单', content: '3214321432' },
  { label: '详细地址', content: '深圳市南山区' },
  { label: '备注', content: '正在处理···' },
];

const data2 = [
  { label: '用户姓名', content: '付小小' },
  { label: '联系电话', content: '18100000000' },
  { label: '常用快递', content: '菜鸟仓储' },
  { label: '取货地址', content: '浙江省杭州市西湖区万塘路18号' },
  { label: '备注', content: '无' },
];

const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    productNumber: `12345${i}`,
    productName: '乐事薯片',
    barcode: 423093029334,
    price: '8.00',
    number: `2${i}`,
    amount: `16${i}`,
  });
}

const dataSource2 = [];
for (let i = 0; i < 6; i++) {
  dataSource2.push({
    time: `2019-11-1${i}`,
    currentProgress: '联系客户',
    status: '成功',
    operatorId: `取货员ID 11${i}`,
    timeConsuming: `2${i}mins`,
  });
}

class OrderDetails extends PureComponent {

  handleUserDetails = list => {
    if (!Array.isArray(list)) return [];
    return list.map(item => (
      <DescriptionsItem label={item.label}>{item.content}</DescriptionsItem>
    ))
  }

  render() {
    const columns = [
      {
        title: '商品编号',
        dataIndex: 'productNumber',
        render: text => <a>{text}</a>,
      },
      {
        title: '商品名称',
        dataIndex: 'productName',
      },
      {
        title: '商品条码',
        dataIndex: 'barcode',
      },
      {
        title: '单价',
        dataIndex: 'price',
      },
      {
        title: '数量（件）',
        dataIndex: 'number',
        align: 'right',
      },
      {
        title: '金额',
        dataIndex: 'amount',
      },
    ];

    const progressRate = [
      {
        title: '时间',
        dataIndex: 'time',
        render: text => <a>{text}</a>,
      },
      {
        title: '当前进度',
        dataIndex: 'currentProgress',
      },
      {
        title: '状态',
        dataIndex: 'status',
      },
      {
        title: '操作员ID',
        dataIndex: 'operatorId',
      },
      {
        title: '耗时',
        dataIndex: 'timeConsuming',
      },
    ];

    return (
      <Fragment>
        <Card>
          <Descriptions title="退款申请">
            {data && this.handleUserDetails(data)}
          </Descriptions>
          <Divider />
          <Descriptions title="用户信息">
            {data && this.handleUserDetails(data2)}
          </Descriptions>
          <Divider />
          <StandardTable
            columns={columns}
            dataSource={dataSource}
            title={() => '退货商品'}
            footer={() => '总计'}
          />
          <StandardTable
            columns={progressRate}
            dataSource={dataSource2}
            title={() => '退货进度'}
          />
        </Card>
      </Fragment>
    );
  }
}

export default OrderDetails;