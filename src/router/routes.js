import apply from "@/pages/apply";
import reading from "@/pages/apply/reading";
import postInfo from "@/pages/apply/postInfo";
import inquire from "@/pages/inquire";

export default [
    {
        name:"apply",
        path: '/apply',
        component: apply,
        redirect: '/apply/reading',
        meta:{title:'报名'},
        children:[
            {
                name: 'reading',
                path: 'reading',
                component:reading,
                meta: { title: '阅读参赛通知' },
            },
            {
                name: 'postInfo',
                path: 'postInfo',
                component:postInfo,
                meta: { title: '提交信息' },
            }

        ]
    },
    {
        name:"inquire",
        path: '/inquire',
        component: inquire,
        meta:{title:'查询'}
    },
    {
        path: "*",
        redirect:'/apply'
    }
]
