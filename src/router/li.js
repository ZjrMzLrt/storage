let arr = [
  {
   path: '/',
   name: 'app',
   component: resolve => require(['@/views/index/index'],resolve),
   redirect: '/home',
   children: [
     {
       path: 'home',
       component: resolve => require(['@/views/home/home'],resolve)
     },
     {
       path: '/news',
       component: resolve => require(['@/views/news/news'],resolve)
     },
     {
       path: '/style',
       component: resolve => require(['@/views/style/style'],resolve)
     },
     {
       path: '/my',
       component: resolve => require(['@/views/my/my'],resolve)
     }
   ]
  },
   {
     path: '/course',
     component: resolve => require(['@/views/course/course'],resolve)
   },{
     path: '/cosDetails',
     component: resolve => require(['@/views/cosDetails/cosDetails'],resolve)
   },{
     path: '/cosDetails2',
     component: resolve => require(['@/views/cosDetails2/cosDetails2'],resolve)
   },{
     path: '/days',
     component: resolve => require(['@/views/days/days'],resolve)
   },{
     path: '/sing',
     component: resolve => require(['@/views/sing/sing'],resolve)
   },{
     path: '/teaDetails',
     component: resolve => require(['@/views/teaDetails/teaDetails'],resolve)
   },{
     path: '/teachers',
     component: resolve => require(['@/views/teachers/teachers'],resolve)
   }
];
export default arr;
