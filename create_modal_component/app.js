// Define a new component called button-counter
const app = Vue.createApp({
    data(){
        return{
            showModal:false
        }
    }
});

app.component('message', {

data(){
    return {
    
    }
},

template:`<div class="alert alert-success" role="alert"> Hewloo<button @click="$emit('close')" > X </button>  </div>`

});

app.mount("#app");