/**
 *  可选列组件
 */
import React, { PureComponent } from 'react';
import {
  Card,
  Menu,
  Dropdown,
  Button,
  Icon,
  Checkbox,
} from 'antd';
import store from 'store2';
import { getHashCode } from '@/utils/utils';
import styles from './style.less';


function transferToCheckboxData(columns = []) {
  if (!Array.isArray(columns)) return false;
  const cols = columns
    .filter(Boolean)
    .filter(item => item.title)
    .map(item => ({ label: item.title, value: item.dataIndex }));

  return cols;
}

const STORE_KEY = 'selectTableColumns';

class SelectTableColumns extends PureComponent {
  constructor(props) {
    super(props);
    const data = store.get(STORE_KEY);
    const hashCode = getHashCode();
    const allKeys = this.getAllKeys();
    this.state = {
      checkedAllState: true,
      selectValue: [],
      indeterminate: false,
      dropdownVisible: false,
    }
  }

  componentDidMount() {
    const { columns } = this.props;
    const data = transferToCheckboxData(columns);
    this.setState({ selectValue: data });
  }

  handleDropdownVisibleChange = visible => {
    this.setState({ dropdownVisible: visible });
  };

  getAllKeys = () => {
    const { columns } = this.props;
    return columns.map(item => {
      if (item.dataIndex !== undefined) {
        return item.dataIndex;
      }

      return item;
    })
  };

  setcheckedKeys = value => {
    this.setSelectedKeysToStorage(value)
    this.setState({ selectValue: value }, () => {
      this.changeCheckAllState();
    });
  };

  changeCheckAllState = () => {
    const allKeys = this.getAllKeys() || [];
    const { selectValue = [] } = this.state;
    const isSelectedAll = allKeys.length === selectValue.length;

    if (isSelectedAll) {
      this.setState({ indeterminate: false, checkedAllState: true });
    } else if (!isSelectedAll && selectValue.length > 0) {
      this.setState({ indeterminate: true, checkedAllState: false });
    } else {
      this.setState({ indeterminate: false, checkedAllState: false });
    }
  }

  setSelectedKeysToStorage = value => {
    const hashCode = getHashCode(value);
    const selectTabeleColumns = store.get(STORE_KEY) || {};
    store.setAll({ SelectTableColumns: { ...selectTabeleColumns, [hashCode]: value } }, true);
  };

  handleCheckAll = e => {
    const { checked } = this.e.target;
    if (checked) {
      const allKeys = this.getAllKeys;
      this.setcheckedKeys(allKeys);
    } else {
      this.setcheckedKeys([]);
    }
  } 

  render() {
    const { checkedAllState, selectValue, indeterminate, dropdownVisible } = this.state;
    const { columns } = this.props;
    const data = transferToCheckboxData(columns);

    return (
      <div>
        <Dropdown.Button
          visible={dropdownVisible}
          onVisibleChange={this.handleDropdownVisibleChange}
          trigger={['click']}
          overlay={
            <div className={styles.selectBox}>
              <Card style={{ padding: '20px' }}>
                <Checkbox
                  checked={checkedAllState}
                  indeterminate={indeterminate}
                  onChange={this.handleCheckAll}
                >
                  全部
              </Checkbox>
                <div className={styles.container}>
                  <Checkbox.Group
                    options={data}
                    value={selectValue}
                    onChange={this.setcheckedKeys}
                  />
                </div>
              </Card>
            </div>
          }
        >
          选择展示列
        </Dropdown.Button>
      </div>
    );
  }
}

export default SelectTableColumns;