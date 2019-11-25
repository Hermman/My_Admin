import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import SelectTableColumns from '@/components/SelectTableColumns';


class StandardTable extends PureComponent {

  render() {
    const {
      rowKey,
      columns = [],
      dataSource = [],
      bordered,
      loading,
      size,
      rowSelection,
      onChange,
      pagination,
      showSelectedColumns,
      ...rest
    } = this.props;

    const total = dataSource.length;

    const paginationProps = pagination && {
      showQuickJumper: true,
      showSizeChanger: true,
      ...pagination,
    }

    return (
      <Fragment>
      {showSelectedColumns && <SelectTableColumns columns={columns} />}
        <Table
          rowKey={rowKey || 'rowKey'}
          bordered={bordered}
          columns={columns}
          dataSource={dataSource}
          size={size}
          loading={loading}
          rowSelection={rowSelection}
          pagination={paginationProps}
          {...rest}
        />
      </Fragment>
    );
  }
}

StandardTable.defaultProps = {
  columns: [],
  data: [],
  bordered: false,
  size: 'defailt',
  showSelectedColumns: false,
};

StandardTable.PropTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array,
  bordered: PropTypes.boolean,
  size: PropTypes.string,
  loading: PropTypes.object,
  showSelectedColumns: PropTypes.boolean,
};

export default StandardTable;