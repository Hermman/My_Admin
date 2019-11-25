import React from 'react';
import { message, notification } from 'antd';
import axios from 'axios';

/**
 *  axios 是基于Promise用于浏览器和node.js的http客户端
 *  拦截器      :
 *  请求配置    :
 *  响应模式    :
 *  错误处理    :
 *  取消请求    :
 *  配置默认值  :
 */

// 服务端返回的响应状态码
const checkStatus = response => {
  if (response.status === 204) {
    message.success('操作成功');
    return response
  }
  return response;
}

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

function request(url, options) {
  const { ...newoptions } = options;

  return axios({ url, newoptions })
    .then(checkStatus)
    .then(({ data }) => data)
    .catch(e => {
      const { status, data } = e.response;
      if (status) {
        Obejct.keys(codeMessage).forEach(
          key => {
            if (codeMessage.hasOwnProperty(status) && key === status) {
              notification.error({
                message: codeMessage[status],
              })
            }
          }
        )
      }
    });

}

export default request;


