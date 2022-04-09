<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<header>
    
  <div class="wrapper">
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid">
      <a class="navbar-brand " href=# >DEVel'Upper</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <RouterLink class="mx-3" to="/">Home</RouterLink>
            <span class="visually-hidden">(current)</span>
        </li>
        <li class="nav-item">
          <RouterLink  class="mx-3 border-bottom-1px" to="/posts">Posts</RouterLink>
        </li>
        <li class="nav-item ">
          <RouterLink class="mx-3" to="/user">User</RouterLink>
        </li>
         <li class="nav-item ">
          <RouterLink class="mx-3" to="/bitcoin">Bitcoin</RouterLink>
        </li>
        </ul>
    </div>
  </div>
</nav> 
    </div>
  </header>

  <RouterView/>
</template>



<style>
@import '@/assets/bootstrap.min.css';
img{
  width: 400px;
}
body{
  background-color: purple;

}
  



a{
  color:white;
  text-decoration: none;

}


</style>
