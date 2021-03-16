<template>
  <div class="home">
    <router-link to="/new_post" class="add-new-post-button">Add new post</router-link>
    <router-link to="/posts" class="menu-item">Cars</router-link>
    <router-link to="/posts" class="menu-item">Phones</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home"
});
</script>

<style>
    .menu-item {
        background: #cbd5e0;
        display: block;
        margin-bottom: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        width: 100%;
        height: 20px;
    }

    .add-new-post-button {
        background: #a4d3fc;
        display: block;
        margin-bottom: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        width: 100%;
        height: 20px;
    }
</style>
