import React,{ PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianAxis,
  Tooltip,
  Legend,
} from 'reCharts';

const data = [
  { name: '一月', "销售额": 3324 },
  { name: '二月', "销售额": 2224 },
  { name: '三月', "销售额": 1903 },
  { name: '四月', "销售额": 6345 },
  { name: '五月', "销售额": 4666 },
  { name: '六月', "销售额": 8728 },
  { name: '七月', "销售额": 5464 },
  { name: '八月', "销售额": 5133 },
  { name: '九月', "销售额": 7345 },
  { name: '十月', "销售额": 3565 },
  { name: '十一月', "销售额": 4354 },
  { name: '十二月', "销售额": 6294 },
];

class BarCharts extends PureComponent {

  render() {
    return (
      <BarChart
        width={780}
        height={400}
        data={data}
      >
        <CartesianAxis />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="销售额" fill="#8884d8" />
      </BarChart>
    );
  }
}

export default BarCharts;