<template>
    <div class="signup-form">
       <form v-on:submit.prevent="updateUser">
           <h2>update User </h2>
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
                   
            <!--<div class="form-group" >
                <button type="submit" @:click="cambiar" class="btn btn-success btn-lg btn-block">update user</button>
            </div>-->

            <div class="form-group">
                <input type="submit"  class="btn btn-success btn-lg btn-block" value="update user ">   
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
            id:'',
            url:'http://127.0.0.1:3000/api/',
        }
    },
    mounted(){
        this.start();
    },
    methods:{
        start:function(){
            this.id=localStorage.getItem("id");
            console.log("el id es "+this.id);
        },
        updateUser:function(){
            axios.patch(this.url+"users/"+this.id,this.user)
            .then(response=>{
                console.log("update"),
                this.$router.push('/list');
            })
			.catch(e=>{
                console.log(e.reponse);
            })

        },
    }

}
</script>

<style>
.form-control{
    height: 40px;
    box-shadow: none;
    color: #969fa4;
}
.form-control:focus{
    border-color: #5cb85c;
}
.form-control, .btn{        
    border-radius: 3px;
}
.signup-form{
    width: 400px;
    margin: 0 auto;
    padding: 30px 0;
}
.signup-form h2{
    color: #636363;
    margin: 0 0 30px;
    position: relative;
    text-align: center;
}
.signup-form h2:before, .signup-form h2:after{
    content: "";
    height: 2px;
    width: 20%;
    background: #d4d4d4;
    position: absolute;
    top: 50%;
    z-index: 2;
}	
.signup-form h2:before{
    left: 0;
}
.signup-form h2:after{
    right: 0;
}
.signup-form .hint-text{
    color: #999;
    margin-bottom: 30px;
    text-align: center;
}
.signup-form form{
    color: #999;
    border-radius: 3px;
    margin-bottom: 15px;
    background: #f2f3f7;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 30px;
}
.signup-form .form-group{
    margin-bottom: 20px;
}
.signup-form input[type="checkbox"]{
    margin-top: 3px;
}
.signup-form .btn{        
    font-size: 16px;
    font-weight: bold;		
    min-width: 140px;
    outline: none !important;
}
.signup-form .row div:first-child{
    padding-right: 10px;
}
.signup-form .row div:last-child{
    padding-left: 10px;
}    	
.signup-form a{
    color: #fff;
    text-decoration: underline;
}
.signup-form a:hover{
    text-decoration: none;
}
.signup-form form a{
    color: #5cb85c;
    text-decoration: none;
}	
.signup-form form a:hover{
    text-decoration: underline;
} 
</style>