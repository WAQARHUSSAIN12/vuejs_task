  Vue.createApp({
    data() {
      return {
        message:"VUE JS AMAZING",
        linkData:"https://getbootstrap.com/docs/5.0/components/list-group/",
        name:"<h3> Hello vue <h3>"
      };
    },
    methods:{
      calculateNumber(){
        const randNumber = Math.random();
        if(randNumber <0.5){
          return "Hi";
        }else{
          return "Hello";
        }
      }     
    }
  }).mount('#app')
 
  
 