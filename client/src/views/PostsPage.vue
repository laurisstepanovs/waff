<template>
    <div class="no-posts-found">
        There is no posts found in this section. <router-link to="home">Check out another section!</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "posts-page"
});
</script>

<style lang="scss">
.no-posts-found {
    background-color: #cbd5e0;
    padding: 20px;
}
</style>
