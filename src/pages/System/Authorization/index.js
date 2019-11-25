import React, { Component } from 'react';
import { Card, Button, Icon, Divider, Tag, Modal } from 'antd';
import StandardTable from '@/components/StandardTable';
import AddModal from './AddModal';


class Authorization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      hideModal: false,
    }
  }

  addAccount = () => {
    this.setState({ showModal: true });
  };

  handleCancel = () => {
    this.setState({ showModal: false });
  };

  handleOk = () => {
    console.log('新增账号···');
  };

  render() {
    const { showModal } = this.state;

    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: '部门',
        dataIndex: 'department',
        key: 'department',
      },
      {
        title: '职位',
        dataIndex: 'position',
        key: 'position',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 2 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: '邮箱',
        dataIndex: 'mail',
        key: 'mail',
        render: (text, record) => text,
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
      },
      {
        title: '最后登录时间',
        dataIndex: 'lastLoginTime',
        key: 'lastLoginTime',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a>修改</a>
          </span>
        ),
      },
    ];

    const data = [
      {
        name: 'John Brown',
        department: '研发部',
        position: ['工程师'],
        mail: 'hermine@qq.com',
        createTime: '2019-10-01 12:29:29',
        lastLoginTime: '2019-10-30 15:15:15',
      },
      {
        name: 'John Brown',
        department: '市场部',
        position: ['经理'],
        mail: 'hermine@qq.com',
        createTime: '2019-10-01 23:59:59',
        lastLoginTime: '2019-10-30 13:32:22',
      },
      {
        name: 'John Brown',
        department: '人力资源',
        position: ['职员'],
        mail: 'hermine@qq.com',
        createTime: '2019-10-01 11:59:59',
        lastLoginTime: '2019-10-30 20:34:44',
      },
    ]

    const extraButton = (
      <Button type="primary" onClick={this.addAccount}>
        <Icon type="plus" />
        增加账号
      </Button>
    );

    const MODAL = {
      ADD_MODAL: (<Modal
        title="新增账号"
        visible={showModal}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <AddModal />
      </Modal>)
    }

    return (
      <Card title='权限管理' extra={extraButton}>
        <StandardTable 
          columns={columns} 
          dataSource={data}
          bordered
        />
        {showModal && MODAL.ADD_MODAL}
      </Card>
    );
  }
}

export default Authorization;