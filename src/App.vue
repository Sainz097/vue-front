<template>
    <div id="app">
        <router-link to="/list">lista usuarios</router-link>
        |<router-view/>
      </div>
    
  </template>
  
  <style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }
 
  </style>