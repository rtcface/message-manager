export default {
    name: 'email',
    component: () => import(/* webpackChunkName: "email-sms" */ '@/modules/email/layouts/MessageLayout.vue'),
    children:[
        {
            path: '',
            name: 'send-email',
            component: () => import(/* webpackChunkName: "send-email" */ '@/modules/email/views/SendView.vue')
        },
        
    ]
}