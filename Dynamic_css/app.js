// Define a new component called button-counter
const app = Vue.createApp({
    data(){
        return {
            loading:true
        }   
    },
    methods:{
        toggleClass(){
            this.loading = !this.loading;
        }
    }
});
app.mount("#app");