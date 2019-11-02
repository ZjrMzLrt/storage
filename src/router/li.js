let arr = [
  {
   path: '/',
   name: 'app',
   component: resolve => require(['@/views/index/index'],resolve),
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
   }
];
export default arr;
