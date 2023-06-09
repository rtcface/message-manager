export default {
    name: 'whatsapp',
    component: () => import(/* webpackChunkName: 'WhatsAppSend' */ '@/modules/whatsapp/layouts/WhatsAppLayout.vue'),
    children:[
        {
            path:'',
            name: 'send-whatsapp',
            component: () => import(/* webpackChunkName: 'send-whatsapp' */ '@/modules/whatsapp/views/WhatsAppSendView.vue')
        }
    ]
}