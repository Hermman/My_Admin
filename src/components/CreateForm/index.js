/**
 *  表单封装
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  Radio,
  Cascader,
  Button,
  Divider,
} from 'antd';
import { get } from 'lodash';
import Upload from './Upload';
import { RangeDate, DateComponent } from '@/components/DateControl';


const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const { TextArea } = Input;
const { Option } = Select;


const defaultFormItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

class StandardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleSubmit = e => {
    const { onSubmit } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onSubmit(values)
      }
    });
  }

  render() {
    const {
      extra,
      form,
      layout,
      formConfig,
      formItemLayout,
      formItemConfig = [],
      searchButton,
      submitButton,
      children,
    } = this.props;
    const { getFieldDecorator } = form;

    const formItem = formItemConfig
      .filter(Boolean)
      .map(item => {
        const {
          id,
          label,
          type,
          component,
          required,
          requiredMessage,
          initiaValue,
          inputConfig,
          options = [],
        } = item;
        let { fileConfig = {} } = item;
        const rules = [];

        if (required) {
          fileConfig = {
            ...fileConfig,
            rules: [
              { required: true, message: requiredMessage || `${label}不能为空` },
              ...get(fileConfig, 'rules', []),
            ],
          }

          rules.push({
            required,
            message: requiredMessage || label + '不能为空',
          });
        }

        if (component && id === 'undefined') {
          return component;
        }

        if (initiaValue !== 'undefined') {
          fileConfig = { ...fileConfig, initiaValue };
        }

        const decorator = getFieldDecorator(id, { ...fileConfig });
        const formItemProps = { key: id, ...formItemLayout }


        if (type && type === 'upload') {
          return (
            <FormItem key={id} label={label} {...formItemProps}>
              {decorator(<Upload />)}
            </FormItem>
          );
        }

        if (type && type === 'select') {
          return (
            <FormItem key={id} label={label} {...formItemProps}>
              {decorator(<Select
                {...inputConfig}
                style={{ minWidth: 200 }}
              >
                {options.map(option => (
                  <Option key={option.value} value={option.value}>
                    {option.name}
                  </Option>
                ))}

              </Select>)}
            </FormItem>
          );
        }

        if (type && type === 'switch') {
          return (
            <FormItem key={id} label={label} {...formItemProps}>
              {decorator(<Switch {...inputConfig} />)}
            </FormItem>
          );
        }

        if (type && type === 'radio') {
          return (
            <FormItem key={id} label={label} {...formItemProps}>
              {decorator(<RadioGroup {...inputConfig} >
                {options.map(option => (
                  <Radio value={option.value}>{option.name}</Radio>
                ))}
              </RadioGroup>)}
            </FormItem>
          );
        }

        if (type && type === 'radioButton') {
          return (
            <FormItem key={id} label={label} {...formItemProps}>
              {decorator(<RadioGroup {...inputConfig} >
                {options.map(option => (
                  <RadioButton value={option.value}>{option.name}</RadioButton>
                ))}
              </RadioGroup>)}
            </FormItem>
          );
        }

        if (type && type === 'datePicker') {
          return (
            <FormItem key={id} label={label} {...formItemProps}>
              {decorator(<DateComponent {...inputConfig} />)}
            </FormItem>
          );
        }

        if (type && type === 'rangePicker') {
          return (
            <FormItem key={id} label={label} {...formItemProps}>
              {decorator(<RangeDate {...inputConfig} />)}
            </FormItem>
          );
        }

        if (type && type === 'cascader ') {
          return (
            <FormItem key={id} label={label} {...formItemProps}>
              {decorator(<Cascader {...inputConfig} />)}
            </FormItem>
          );
        }

        if (type && type === 'textArea') {
          return (
            <FormItem key={id} label={label} {...formItemProps}>
              {decorator(<TextArea {...inputConfig} />)}
            </FormItem>
          );
        }

        if (type && type === 'inputNumber') {
          return (
            <FormItem key={id} label={label} {...formItemProps}>
              {decorator(<InputNumber {...inputConfig} />)}
            </FormItem>
          );
        }

        if (type && type === 'password') {
          return (
            <FormItem key={id} label={label} {...formItemProps}>
              {decorator(<Input type="password" {...inputConfig} />)}
            </FormItem>
          );
        }

        return (
          <FormItem label={label} {...formItemProps}>
            {decorator(<Input {...inputConfig} />)}
          </FormItem>
        );

      });

    const searchBtn = (
      <FormItem style={{ marginLeft: 20 }}>
        <Button type="primary" htmlType="submit">查询</Button>
        <Divider type="vertical" />
        <Button>清空</Button>
      </FormItem>
    );

    const submitBtn = (
      <FormItem style={{ display: 'flex', justifyContent: 'center' }}>
        <Button type="primary" htmlType="submit">提交</Button>
        <Divider type="vertical" />
        <Button>重置</Button>
      </FormItem>
    )

    const saveBtn = (
      <FormItem>
        <Button type="primary" htmlType="submit">保存</Button>
        <Divider type="vertical" />
        <Button>重置</Button>
      </FormItem>
    )

    return (
      <Form layout={layout} onSubmit={this.handleSubmit} {...formConfig}>
        {formItem}

        {searchButton && searchBtn}

        {submitButton && submitBtn}

        {extra && extra}

        {children && children}
      </Form>
    );
  }
}

StandardForm.defaultProps = {
  layout: 'horizontal',
  formItemLayout: defaultFormItemLayout,
  searchButton: true,
  submitButton: false,
  required: false,
  messageInfo: '',
};

StandardForm.PropTypes = {
  layout: PropTypes.oneOf(['horizontal', 'vertical', 'inline']),
  formItemLayout: PropTypes.object,
  label: PropTypes.string,
  id: PropTypes.string,
  key: PropTypes.string,
  formItemConfig: PropTypes.array,
  searchButton: PropTypes.boolean,
  submitButton: PropTypes.boolean,
  required: PropTypes.boolean,
  messageInfo: PropTypes.string,

};

const EnhancedForm = Form.create()(StandardForm);

export default EnhancedForm;