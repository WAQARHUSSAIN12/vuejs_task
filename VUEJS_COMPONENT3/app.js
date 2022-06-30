// Define a new component called button-counter
const app = Vue.createApp({});

app.component('message', {

    props:["msg"],
    
    data(){
        return {
             message:true
        }
    },
    template:' <div class="alert alert-success" role="alert" v-show="message" >  {{msg}}  <button @click="message=false" > X </button>  </div>'
});

app.mount("#app");