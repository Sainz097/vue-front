<template>

<!-- LIST -->
<div class=col-md-12>
    
    <form v-on:submit.prevent  id="form-list-client">
            <legend>List of user</legend>
    
    <div class="pull-right">
        <a class="btn btn-default-btn-xs btn-success" v-on:click="newUser" ><i class="glyphicon glyphicon-plus"></i> New user </a>
    </div>
    <table class="table table-bordered table-condensed table-hover">
        <thead>
            <tr>
                <td>Name</td>
                <th>Email</th>
                <th>phone</th>
                <th>Actions</th>
            </tr>
                
        </thead>
        <tbody id="form-list-client-body">
            <tr v-for="(item,index) in usuarios" v-bind:key="index">
                <td>{{item.name}}</td>
                <td>{{item.email}}</td>
                <td>{{item.phone}}</td>
                <td>  
                    <button type="button" class="btn btn-danger"  v-on:click="deleteUser(item,index)" >delete</button>
                    <button type="button" class="btn btn-primary" v-on:click="updateUser(item)" >update</button>
                </td>
            </tr>
        </tbody>
    </table>
    </form>

        
    </div>
    



</template>

<script>
import axios from 'axios'

export default{
   name: 'list',
   data(){
       return{
           usuarios:[],
           url:'http://127.0.0.1:3000/api/',
       }
   },
   mounted(){
    this.start();
    //console.log("hola mundo");
   },
   methods:{
        start:function(){
           console.log("hola haciendo el get mundo ");
           axios.get(this.url+"users")
           .then(reponse=>{
               console.log(reponse.data);
               this.usuarios=reponse.data.data
            })
            .catch(e=>{
                console.log("error "+e.reponse); 
            })
        },
        deleteUser:function(item,index){
            console.log("hola borrame "+item.id);
            axios.delete(this.url+"users/"+item.id)
            .then(reponse=>{
                console.log("respuesta a borrar "+index);
                console.log(reponse);
                this.usuarios.splice(index,1);
            }).catch(e =>{
                console.log("erro "+e);
            })
        },
        updateUser:function(item){
            console.log("hola actualizame "+item.id);
            localStorage.setItem('id', JSON.stringify(item.id));
            this.$router.push('/update');
        },
        newUser:function(){
            this.$router.push('/register');
        }

   }
  

}

</script>




<style>



</style>