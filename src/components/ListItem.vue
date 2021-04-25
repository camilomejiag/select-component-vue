<template>
    <li class="list-item" v-if="item.selected">
        <img v-bind:src="item.image" alt="">
        <p class="list-item__name">Name: {{item.label}}</p>
        <p class="list-item__status">Status: {{item.status}}</p>
    </li>
</template>

<script>
    export default {
        name: "listItem",
        props: ['item']
    }
</script>

<style scoped lang="scss">
    .list-item {
        list-style: none;
        width: 150px;
        margin-right: 20px;
        border: 1px solid lightgray;
        border-radius: 10px;
        padding: 10px;
        box-shadow: 2px 2px grey;

        img {
            width: 100%;
        }
    }
</style>