import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import ReqMsgSend from './views/msg/ReqMsgSend.vue'
import SuccessMsg from './views/msg/SuccessMsg.vue'
import ErrorMsg from './views/msg/ErrorMsg.vue'
import index from './views/msg/indexPage.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '监控管理',
        iconCls: 'el-icon-menu',//图标样式class
        children: [
            { path: '/index', component: index, name: '首页123' },
            // { path: '/table', component: Table, name: 'table' },
            // { path: '/form', component: Form, name: 'form' },
            // { path: '/user', component: user, name: '列表' },
            { path: '/reqMsgSend', component: ReqMsgSend, name: '消息发送监控' },
            { path: '/successMsg', component: SuccessMsg, name: '发送成功' },
            { path: '/errorMsg', component: ErrorMsg, name: '发送错误' }
        ]
    },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '导航二',
    //     iconCls: 'fa fa-id-card-o',
    //     children: [
    //         { path: '/page4', component: Page4, name: '页面4' },
    //         { path: '/page5', component: Page5, name: '页面5' }
    //     ]
    // },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '',
    //     iconCls: 'fa fa-address-card',
    //     leaf: true,//只有一个节点
    //     children: [
    //         { path: '/page6', component: Page6, name: '导航三' }
    //     ]
    // },
    // {
    //     path: '/',
    //     component: Home,
    //     name: 'Charts',
    //     iconCls: 'fa fa-bar-chart',
    //     children: [
    //         { path: '/echarts', component: echarts, name: 'echarts' }
    //     ]
    // },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;