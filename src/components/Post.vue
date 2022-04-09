<template>
  <div class="item">
    <ul class = "card border-light">
      <img class=" mt-4" :src ="image"/> <!-- image que l'on passe ici-->
      <li class ="h1 mt-2 mb-3 pb-3 px-2 border-bottom-secondary mx-2"> {{title}}</li>
      <li class ="my-3 description rounded"> {{description}}</li>
      <li class ="longtext text-dark mb-4 rounded"> {{text}}</li>
    </ul>
 </div> 
</template>
<script setup>
import {useRoute} from 'vue-router';
const route =useRoute()
const post = route.query;
console.log(route.query);

console.log(post.img)

const{id, title, description, text,img}=route.query;// assignation par decomposition

const image= '../assets/'+ post.img; // construction de l'image



</script>

<style scoped>
.description {
    border: 1px solid #000;
    padding: 1rem;

}


.item{
    margin: 0 3rem;
}


li {
    list-style: none;   
}
ul{
    margin: 0 auto;
    padding: 2rem;
}

.longtext{
    color:black;
    border: 1px solid #000;
    padding: 1rem;


}


    


</style>