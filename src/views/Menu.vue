<template>
    <div class="content">
        <h1>{{title}}</h1>
        <router-view/>
    </div>
</template>

<script>
    export default {
    data: () =>({
        title: "Главное меню",
}),
};
</script>