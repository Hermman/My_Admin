import React, { Component } from 'react';
import { Card, Avatar, Icon, Divider, Tag } from 'antd';
import CreateForm from '@/components/CreateForm';

const styles = {
  icon: {
    marginRight: '10px',
  }
}

const data = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

class BasicInfo extends Component {
  formRef = React.createRef();
  state = {
    user: 'HH'
  }

  handleSubmit = values => {
    console.log('表单数据：', values)
  }

  render() {
    const { user } = this.state;

    const formItemConfig = [
      {
        label: '头像',
        id: 'headPortrait',
        type: 'upload',
      },
      {
        label: '姓名',
        id: 'name',
        required: true,
      },
      {
        label: '描述',
        id: 'bewrite',
        type: 'textArea',
      },
      {
        label: '邮箱',
        id: 'email',
        required: true,
      },
      {
        label: '公司',
        id: 'company',
        required: true,
      },
      {
        label: '部门',
        id: 'department',
        type: 'select',
        options: [
          { name: '产品', value: 1 },
          { name: '美术', value: 2 },
          { name: '前端', value: 3 },
          { name: '后端', value: 4 },
          { name: '运维', value: 5 },
        ],
      },
      {
        label: '职位',
        id: 'position',
        type: 'select',
        options: [
          { name: '经理', value: 1 },
          { name: '负责人', value: 2 },
          { name: '职员', value: 3 },
        ],
      },
      {
        label: '地址',
        id: 'address',
        type: 'cascader',
        inputConfig: {
          options: data,
          placeholder: 'Please select',
        },
      },
      {
        label: '标签',
        id: 'tag',
        type: 'textArea',
        required: true,
      },

      {
        label: '自动更新',
        id: 'autoUpdate',
        type: 'switch',
        inputConfig: {
          checkedChildren: '开',
          unCheckedChildren: '关',
        },
      },
      {
        label: '性别',
        id: 'gender',
        type: 'radio',
        required: true,
        inputConfig: {
          defaultValue: 'woman',
        },
        options: [
          { name: '男', value: 'man' },
          { name: '女', value: 'woman' },
          { name: '保密', value: 'other' },
        ],
      },
      {
        label: '性别',
        id: 'gender',
        type: 'radioButton',
        required: true,
        inputConfig: {
          defaultValue: 'man',
        },
        options: [
          { name: '男', value: 'man' },
          { name: '女', value: 'woman' },
          { name: '保密', value: 'other' },
        ],
      },
      {
        label: '月薪',
        id: 'momey',
        type: 'inputNumber',
        initiaValue: 88,
        inputConfig: {
          min: 1,
          max: 10,
          defaultValue: 6,
        },
      },
      {
        label: '日期',
        id: 'datePicker',
        type: 'datePicker',
      },
      {
        label: '日期范围',
        id: 'rangePicker',
        type: 'rangePicker',
      },
    ];

    return (
      <section style={{ display: 'flex' }}>
        <Card style={{ width: '30%', height: 'min-content', marginRight: '30px' }}>
          <div style={{ height: '120px', textAlign: 'center' }}>
            <Avatar style={{ backgroundColor: 'f56a00', verticalAlign: 'middle' }} size="large">
              {user}
            </Avatar>
            <h3>hermine</h3>
            <p>执着于理想，纯粹于当下</p>
          </div>
          <div>
            <p>
              <Icon type="mail" style={styles.icon} />
              hermine9229@gmail
            </p>
            <p>
              <Icon type="contacts" style={styles.icon} />
              前端工程师
            </p>
            <p>
              <Icon type="appstore" style={styles.icon} />
              中国
            </p>
          </div>
          <Divider />
          <div>
            <p>标签</p>
            <Tag color="magenta">打江山</Tag>
            <Tag color="red">奋斗</Tag>
            <Tag color="volcano">奋斗1</Tag>
            <Tag color="orange">奋斗2</Tag>
            <Tag color="gold">奋斗3</Tag>
            <Tag color="lime">奋斗4</Tag>
            <Tag color="green">奋斗5</Tag>
            <Tag color="cyan">奋斗6</Tag>
            <Tag color="blue">奋斗7</Tag>
            <Tag color="geekblue">奋斗8</Tag>
            <Tag color="purple">奋斗9</Tag>
            <Tag color="magenta">打江山</Tag>
            <Tag color="red">奋斗</Tag>
            <Tag color="volcano">奋斗1</Tag>
            <Tag color="orange">奋斗2</Tag>
            <Tag color="gold">奋斗3</Tag>
            <Tag color="lime">奋斗4</Tag>
            <Tag color="green">奋斗5</Tag>
            <Tag color="cyan">奋斗6</Tag>
            <Tag color="blue">奋斗7</Tag>
            <Tag color="geekblue">奋斗8</Tag>
            <Tag color="purple">奋斗9</Tag>
          </div>
        </Card>

        <Card title="基本设置" style={{ width: '65%' }}>
          <CreateForm
            formItemConfig={formItemConfig}
            wrappedComponentRef={this.formRef}
            onSubmit={this.handleSubmit}
            searchButton={false}
            submitButton
          />
        </Card>
      </section>
    );
  }
}

export default BasicInfo;