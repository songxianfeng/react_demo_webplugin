// 导入路由组件
import Home from '../view/Home'
import About from '../view/About'
import Contact from '../view/Contact'
import ShowAIDetail from "../AIPages/ShowAIDetail"
// 导入路由管理工具
import {RouteConfig} from 'react-router-config'

const routes:RouteConfig = [
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path:'/about',
        exact:true,
        component:About
    },
    {
        path:'/contact',
        exact:true,
        component:Contact
    },
    {
        path:'/showai',
        exact:true,
        component:ShowAIDetail
    }
]

export default routes;
