let arr = [{
    path: '/cardBag',
    component: resolve => require(['@/views/my/cardBag'], resolve)
  },{
    path: '/forMain',
    component: resolve => require(['@/views/my/forMain'], resolve)
  },{
    path: '/reservation',
    component: resolve => require(['@/views/my/reservation'], resolve)
  },{
    path: '/alreadyBuy',
    component: resolve => require(['@/views/my/alreadyBuy'], resolve)
  },{
    path: '/settingUp',
    component: resolve => require(['@/views/my/settingUp'], resolve)
  },{
    path: '/myAddress',
    component: resolve => require(['@/views/my/myAddress'], resolve)
  },
  {
    path:'/addAddress',
    component:resolve => require(['@/views/my/addAddress'],resolve)
  }
];
export default arr;
