/**
 *  操作日志页面
 */
import React, { PureComponent, Fragment } from 'react';
import { Card } from 'antd';
import CreateForm from '@/components/CreateForm';
import StandardTable from '@/components/StandardTable'

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

class OperationLog extends PureComponent {

  render() {

    const formItem = [
      {
        label: '查询时间',
        id: 'time',
        type: 'rangePicker',
      },
      {
        label: '账号',
        id: 'user',
      },
      {
        label: '状态',
        id: 'status',
        type: 'select',
        options: [
          { name: '正常', value: '1' },
          { name: '异常', value: '2' },
          { name: '停用', value: '3' },
        ],
      },
    ];

    const columns = [
      { title: '操作日期', dataIndex: 'orderName1' },
      { title: '操作人', dataIndex: 'orderName2' },
      { title: '操作内容', dataIndex: 'orderName3' },
      { title: '操作权限', dataIndex: 'orderName4' },
    ];

    return (
      <Fragment>
        <Card>
          <CreateForm
            layout="inline"
            formItemConfig={formItem}
            formItemLayout={formItemLayout}
          />
        </Card>
        <Card>
          <StandardTable
            showSelectedColumns
            columns={columns}
            dataSource={[]}
            pagination
          />
        </Card>
      </Fragment>
    );
  }
}

export default OperationLog;