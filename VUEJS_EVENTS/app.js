  Vue.createApp({
    data() {
      return {
        counter:0
      };
    },
    methods:{
         add(){
           this.counter++;
         },
         sub(){
            this.counter--;
         }
    }
  }).mount('#app')