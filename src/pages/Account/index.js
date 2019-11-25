import React, { PureComponent, Fragment } from 'react';
import {
  Card,
  Button,
  Icon,
  Divider,
  Modal,
  Popconfirm,
  Alert,
} from 'antd';
import CreateForm from '@/components/CreateForm';
import StandardTable from '@/components/StandardTable';
import AddModal from './AddModal';
import ModifyModal from './ModifyModal';


class AccountManagement extends PureComponent {
  formRef = React.createRef;

  state = {
    showModal: false,
    modalAction: null,
  }

  handleAdd = action => {
    this.setState({
      modalAction: action,
    }, () => this.handleShow()
    );
  };

  handleModify = action => {
    this.setState({
      modalAction: action,
    }, () => this.handleShow()
    );
  }

  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleCancel = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal, modalAction } = this.state;

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
        label: '创建时间',
        id: 'createtime',
        type: 'rangePicker',
      },
      {
        label: '状态',
        id: 'state',
        type: 'select',
        options: [
          { name: '可用', value: 1 },
          { name: '停用', value: 2 },
        ],
      },
    ];

    const columns = [
      {
        title: '账户ID',
        dataIndex: 'userID',
        key: 'userID',
      },
      {
        title: '用户名',
        dataIndex: 'user',
        key: 'user',
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '电话',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: '角色',
        dataIndex: 'role',
        key: 'role',
      },
      {
        title: '创建人',
        dataIndex: 'createPerson',
        key: 'createPerson',
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
      },
      {
        title: '操作',
        dataIndex: 'operat',
        key: 'operat',
        render: (text, record) => {
          return (
            <div>
              <a href="#" onClick={() => this.handleModify('MODIFY_MODAL')}>修改</a>
              <Divider type="vertical" />
              <Popconfirm
                title="确定要删除吗？"
                // onConfirm={confirm}
                // onCancel={cancel}
                okText="确认"
                cancelText="取消"
              >
                <a href="#" style={{ color: '#ff4d4f' }}>删除</a>
              </Popconfirm>,
            </div>
          )
        }
      },
    ];

    const data = [
      {
        userID: 12,
        user: 'hermine',
        name: 'hermine',
        phone: '12345678900',
        role: '工程师',
        createPerson: '王经理',
        createTime: '2019-11-11 12:59:59',
        state: '可用',
      }
    ]

    const extraButton = (
      <Button type="primary" onClick={() => this.handleAdd('ADD_MODAL')}>
        <Icon type="plus" />
        新建
      </Button>
    );

    const MOADL = {
      ADD_MODAL: {
        title: '新建',
        onOk: this.handleOk,
        onCancel: this.handleCancel,
        content: <AddModal />,
      },
      MODIFY_MODAL: {
        title: '修改',
        onOk: this.handleOk,
        onCancel: this.handleCancel,
        content: <ModifyModal />,
      },
    }

    return (
      <Fragment>
        <Card>
          <CreateForm
            layout="inline"
            wrappedComponentRef={this.formRef}
            formItemConfig={formItem}
            extra={extraButton}
          />
        </Card>
        <Card>
          <Alert message="成功查询到 1 条数据" type="success" showIcon />
          <StandardTable
            rowKey="userID"
            columns={columns}
            dataSource={data || []}
          />
        </Card>
        {showModal &&
          <Modal
            title={MOADL[modalAction].title}
            visible={showModal}
            onOk={MOADL[modalAction].onOk}
            onCancel={MOADL[modalAction].onCancel}
          >
            {MOADL[modalAction].content}
          </Modal>
        }
      </Fragment>
    );
  }
}

export default AccountManagement;