export default {
    name: 'sms',
    component: () => import (/* webpackChunkName: "smsSend" */ '@/modules/sms/layouts/SmsLayout.vue' ),
    children:[
        {
            path:'',
            name: 'send-sms',
            component: () => import(/* webpackChunkName: 'send-sms' */ '@/modules/sms/views/SmsSendView.vue')
        }
    ]
}