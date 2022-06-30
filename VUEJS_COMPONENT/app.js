// Define a new component called button-counter

const app = Vue.createApp({});

app.component('button-counter', {
    data(){
        return {
            counter:0
        }
    },
    template:'<div> <h1> Hello World </h1>  </div>'
});

app.mount("#app");
