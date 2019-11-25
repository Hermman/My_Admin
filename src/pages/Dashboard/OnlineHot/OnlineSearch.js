import React, { PureComponent } from 'react';
import { Card } from 'antd';
import StandardTable from '@/components/StandardTable';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import DataSet from "@antv/data-set";

const data = [
  {
    key: 1,
    sort: 1,
    keyWords: '双十一',
    userNumber: 423,
    weekGain: '34%',
  },
  {
    key: 2,
    sort: 2,
    keyWords: '暴乱',
    userNumber: 232,
    weekGain: '34%',
  },
  {
    key: 3,
    sort: 3,
    keyWords: '搜索',
    userNumber: 3,
    weekGain: '34%',
  },
  {
    key: 4,
    sort: 4,
    keyWords: '玛丽',
    userNumber: 13,
    weekGain: '34%',
  },
];

class OnlineSearch extends PureComponent {

  render() {
    
    const cols = [
      {
        title: '排名',
        dataIndex: 'sort',
        key: 'sort',         
      },
      {
        title: '搜索关键词',
        dataIndex: 'keyWords',
        key: 'keyWords',         
      },
      {
        title: '用户数',
        dataIndex: 'userNumber',
        key: 'userNumber',
        sorter: (a, b) => a.userNumber - b.userNumber,       
      },
      {
        title: '周涨幅',
        dataIndex: 'weekGain',
        key: 'weekGain',
        sorter: (a, b) => a.weekGain - b.weekGain,    
      },
    ];

    return (
      <Card title="线上热门搜索">
        <StandardTable
          size="small"
          columns={cols}
          dataSource={data}
        />
      </Card>
    );
  }
}

export default OnlineSearch;