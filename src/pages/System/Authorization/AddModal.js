/**
 *  增加账号功能
 */
import React, { PureComponent } from 'react';
import {} from 'antd';
import CreateForm from '@/components/CreateForm';

class AddModal extends PureComponent {
  formRef = React.createRef;

  render() {

    const formItemConfig = [
      {
        label: '姓名',
        id: 'name',
        required: true,
      },
      {
        label: '部门',
        id: 'department',
        required: true,
        type: 'select',
        options: [
          { name: '前端', value: '1'},
          { name: '后端', value: '2'},
        ],
      },
      {
        label: '职位',
        id: 'position',
        required: true,
      },
      {
        label: '邮箱',
        id: 'mail',
        required: true,
      },
    ];

    return (
      <CreateForm
        formItemConfig={formItemConfig}
        wrappedComponentRef={this.formRef}
        onSubmit={this.handleSubmit}
        searchButton={false}
        submitButton={false}
      />
    );
  }
}

export default AddModal;