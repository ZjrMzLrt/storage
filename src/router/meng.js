let arr = [
    {
        path: '/newsDetails',
        component: resolve => require(['@/views/news/newsDetails'], resolve)
    },
    {
        path: '/imgDetails',
        component: resolve => require(['@/views/style/imgDetails'], resolve)
    }
];
export default arr;
