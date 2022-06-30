Vue.createApp({
    data() {
      return {
        goals:[],
        enteredValue:"",
        newValue:""
      };
    },
    methods:{
        addGoals(){
            this.goals.push(this.enteredValue);
            this.enteredValue = "";
        },
        removeGoals(index){
            this.goals.splice(index,1);
            
        },
        updateGoals(keyValue, newKey)
        {   
                alert(keyValue + " " + newKey);
                keyValue.Key = newKey;
                keyValue.Value = this.newValue; 
        }
    }
  }).mount('#app')