<template>
  <div class="container">
    <div class="d-flex justify-content-center aling-items-center" >
       <img 
        src="@/assets/logosaet.png" 
        alt="logo" 
        width="500" 
        height="auto" 
        class="img-fluid d-block mx-auto">
    </div>      
  </div>   
  <hr class="hr hr-blurry" />
   <div class="d-flex justify-content-center">
    <button class="btn btn-primary m-3" @click="goToSendEmail">Enviar correo <i class="fa-solid fa-envelopes-bulk"></i> </button>
    <button class="btn btn-secondary m-3" @click="goToSendWhatsApp">Enviar WhatsApp <i class="fa-brands fa-whatsapp"></i></button>
    <button class="btn btn-success m-3" @click="goToSendSms">Enviar SMS <i class="fa-solid fa-comment-sms"></i></button>
   </div>
</template>

<script>
// @ is an alias to /src


export default {
  methods: {
    goToSendEmail() {
      this.$router.push({name:'send-email'})
    },
    goToSendSms() {
      this.$router.push({name:'send-sms'})
    },
    goToSendWhatsApp() {
      this.$router.push({name:'send-whatsapp'})
    },

  }
}
</script>
