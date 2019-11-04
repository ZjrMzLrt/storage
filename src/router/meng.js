let arr = [
    {
        path: '/newsDetails',
        component: resolve => require(['@/views/news/newsDetails'], resolve)
    },
    {
        path: '/imgDetails',
        component: resolve => require(['@/views/style/imgDetails'], resolve)
    },
    {
        path: '/tasteOf',
        component: resolve => require(['@/views/home/tasteOf'], resolve)
    },
    {
        path: '/audios',
        component: resolve => require(['@/views/home/audios'], resolve)
    }
];
export default arr;
