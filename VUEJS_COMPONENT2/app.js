// Define a new component called button-counter
const app = Vue.createApp({});

app.component('button-counter', {
    data(){
        return {
             message:"This is header component"
        }
    },
    template:'<h3> <slot> </slot> </h3>'
});

app.mount("#app");