<template>
  <div class="container main">
    <h1>Главное Меню</h1>
    <div class="row section flex">
      <div class="column-33 menu-tab">
        <h2 class="text-center ">ПУ-2а</h2>
        <router-link to="/createform"
          ><p class="text-center">создать запись</p></router-link
        >
      </div>
      <div class="column-33 menu-tab">
        <h2 class="text-center">ПУ-2б</h2>
        <router-link to="/menuform"
          ><p class="text-center">создать запись</p></router-link
        >
      </div>
      <div class="column-33 menu-tab">
        <h2 class="text-center">ПУ-27</h2>
        <router-link to="/menuform"
          ><p class="text-center">создать запись</p></router-link
        >
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style></style>
