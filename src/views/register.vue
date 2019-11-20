<template>
        <div class="signup-form">
                <form v-on:submit.prevent="addUser">
                    <h2> new User </h2>
                    <div class="form-group">
                        <label class="text-dark" >name</label>
                        <input type="text" v-model="user.name" class="form-control" name="name" placeholder="your name" required>         	
                     </div>
         
                     <div class="form-group">
                         <label class="text-dark" >email</label>
                         <input type="email" v-model="user.email" class="form-control" name="email" placeholder="Your Email" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}">        	
                     </div>
         
                     <div class="form-group" >
                         <label class="text-dark" >phone(961-209-5431)</label>
                         <input type="tel" v-model="user.phone" class="form-control" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>       	
                     </div>
                            
                     <div class="form-group">
                         <input type="submit"  class="btn btn-success btn-lg btn-block" value=" add user ">   
                     </div>
         
                     <div class="text-left">
                         <a href="/list" class="text-info">go back</a>
                     </div>
         
                        </form>                        
                    </div>
  

</template>


<script>
    import axios from 'axios';
export default{

    data(){
        return{
            user:{
                name:'',
                email:'',
                phone:'',
            },
            url:'http://127.0.0.1:3000/api/users/',
        }
    },
    methods:{
        
        addUser:function(){
            console.log("user name "+this.user.name);
            console.log("email "+this.user.email);
            console.log("phone "+this.user.phone);
            axios.post(this.url+"register",this.user)
            .then(reponse =>{
                console.log("enviando");
                console.log(reponse);
                this.$router.push('/list');
            })
            .catch(e=>{
                console.log(e.reponse);
            })

        }
    }
}

</script>   


