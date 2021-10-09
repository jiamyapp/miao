export default {
    path: '/dianying',
    component: () => import('@/views/dianying'),
    children:[
        {
            path: 'city',
            component: () => import('@/components/City')
        },
        {
            path: 'hot',
            component: () => import('@/components/Hot')
        },
        {
            path: 'jijiang',
            component: () => import('@/components/Jijiang')
        },
        {
            path: 'sousuo',
            component: () => import('@/components/Sousuo')
        },
        {
            path:"/dianying",
            redirect:"/dianying/hot"
        }
    ]
}