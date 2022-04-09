<template>
<div v-if="error">Failed! Error occured: {{ error.message}}</div> <!-- s'il n'y a pas de data , le message d'erreur apparait-->
    <div v-else-if="data">  <!--si il y'a des data, elles seront affichées entierement avec la balise "pre" et sera inscrit loading pour le delai de chargement-->
        Data loaded:
        <pre>{{ data }}</pre> 
    </div>
    <div v-else>Loading...</div> 
</template>

<script setup>
import {ref} from 'vue'

const data = ref(null) 
const error = ref(null)
const { VUE_APP_API : url_api }  = process.env

fetch(url_api)
.then((res) => res.json())
.then((json) => (data.value = json))
.catch((err) => (error.value= err))

</script>

<style scoped>
body{
  background-color: purple;
  }



</style>