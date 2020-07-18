<template>
<div class="container">
        <h1 >Главное Меню</h1>
   <div class="row"> 
     
      <div class="col">
           <h2 class="text-center ">ПУ-2а</h2>
    <router-link  to="/createform"><p class="text-center">создать запись</p></router-link> 
      </div>
      <div class="col">
           <h2 class="text-center">ПУ-2б</h2>
    <router-link to="/menuform"><p class="text-center">создать запись</p></router-link> 
      </div>
      <div class="col">
           <h2 class="text-center">ПУ-27</h2>
    <router-link to="/menuform"><p class="text-center">создать запись</p></router-link> </div> 
    <router-view/>
   </div> 
</div>

</template>
<script>
export default {
    

}
</script>

<style>
 .row>div{
      background-color: #ffeeee;
      background-clip: content-box;
      min-height: 100px;
}
.col, h1{
   margin-top: 10rem;
    
}


</style>