  Vue.createApp({
    data() {
      return {
        goals:[],
        enteredValue:""
      };
    },
    methods:{
        addGoals(){
            this.goals.push(this.enteredValue);
            this.enteredValue = "";
        }
    }
  }).mount('#app')
 