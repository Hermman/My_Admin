/**
 *  登录页面
 */
import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Button, Icon } from 'antd';
import CrateForm from '@/components/CreateForm';
import styles from './style.less';


const formItemLayout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
}

@connect(({ login, loading }) => ({
  login,
  loading: loading.effects['login/login'],
}))
class Login extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef;
  }

  handleLogin = values => {
    const { dispatch } = this.props;
    dispatch({
      type: 'login/login',
      payload: {
        ...values,
      },
    })
  }

  render() {
    const { loading } = this.props;
    const formItem = [
      {
        label: '',
        id: 'username',
        required: true,
        requiredMessage: '请输入用户名',
        inputConfig: {
          addonBefore: <Icon type="user" />,
          placeholder: '用户名: admin',
        },
      },
      {
        label: '',
        id: 'password',
        type: 'password',
        required: true,
        requiredMessage: '请输入密码',
        inputConfig: {
          addonBefore: <Icon type="lock" />,
          placeholder: '密码: 123456',
        },
      },
    ];

    const loginButton = (
      <Button
        style={{ width: '100%' }}
        type="primary"
        htmlType="submit"
        loading={loading}
        onSubmit={this.handleLogin}
      >
        登录
      </Button>
    )

    return (
      <div className={styles.bg}>
        <section className={styles.loginWrapper}>
          <Card className={styles.loginBg}>
            <CrateForm
              wrappedComponentRef={this.formRef}
              formItemConfig={formItem}
              searchButton={false}
              extra={loginButton}
              formItemLayout={formItemLayout}
              onSubmit={this.handleLogin}
            />
          </Card>
        </section>
      </div>
    );
  }
}

export default Login;