import React, { PureComponent, Fragment } from 'react';
import { } from 'antd';
import CreateForm from '@/components/CreateForm';

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}

class ModifyModal extends PureComponent {
  formRef = React.createRef;

  render() {

    const formItem = [
      {
        label: '用户名',
        id: 'user',
      },
      {
        label: '姓名',
        id: 'name',
      },
      {
        label: '手机号',
        id: 'phone',
      },
      {
        label: '角色',
        id: 'role',
        type: 'select',
        options: [
          { name: '管理员', value: 1 },
          { name: '职员', value: 2 },
        ],
      },
      {
        label: '备注',
        id: 'remarks',
        type: 'textArea',
      },
    ];


    return (
      <Fragment>
        <CreateForm
          wrappedComponentRef={this.formRef}
          formItemConfig={formItem}
          formItemLayout={formItemLayout}
          searchButton={false}
        />
      </Fragment>
    );
  }
}

export default ModifyModal;