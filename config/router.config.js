export default [
  {
    path: '/login',
    component: './Login',
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/dashboard',
      },
      {
        path: '/dashboard',
        name: '首页面板',
        icon: 'dashboard',
        component: './Dashboard',
      },
      {
        path: '/account',
        name: '账户管理',
        icon: 'team',
        routes: [
          {
            path: '/account/',
            name: '子账号管理',
            component: './Account',
          },
        ],
      },
      {
        path: '/order',
        name: '订单管理',
        icon: 'profile',
        routes: [
          {
            path: '/order/order-list',
            name: '订单列表',
            component: './Order/OrderList',
          },
          {
            path: '/order/order-details',
            name: '订单详情',
            component: './Order/OrderDetails',
          },
        ],
      },
      {
        path: '/statistical-report',
        name: '统计报表',
        icon: 'area-chart',
        routes: [
          {
            path: '/StatisticalReport/basic-info',
            name: '公司报表',
            component: './StatisticalReport',
          },
        ],
      },
      {
        path: '/system',
        name: '系统设置',
        icon: 'setting',
        routes: [
          {
            path: '/system/basic-info',
            name: '个人中心',
            component: './System/BasicInfo',
          },
          {
            path: '/system/security-setting',
            name: '安全设置',
            component: './System/SecuritySetting',
          },
          {
            path: '/system/authorization',
            name: '权限设置',
            component: './System/Authorization',
          },
        ],
      },
      {
        path: '/log-management',
        name: '日志管理',
        icon: 'tag',
        routes: [
          {
            path: '/log-management/operation-log',
            name: '操作日志',
            component: './LogManagement',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
  {
    component: './404',
  },
];