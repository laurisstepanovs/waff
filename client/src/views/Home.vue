<template>
  <div class="home">
    <router-link to="/new_post" class="add-new-post-button">Add new post</router-link>
    <router-link to="/posts" class="menu-item">Cars</router-link>
    <router-link to="/posts" class="menu-item">Phones</router-link>


    <h3>Latests posts</h3>
    <template v-if="posts">
      <template v-if="posts.length !== 0">
        <div class="menu-item" v-for="(item, i) in posts" :key="i">
          <h3 class="title">{{item.title}}</h3>
          <p class="desc">{{item.desc}}</p>
          <p class="desc">{{item.created_at}}</p>
        </div>
      </template>
      <template v-else>
        There is no posts at the moment
      </template>
    </template>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import Posts from "@/apis/Posts";

export default defineComponent({
  name: "Home",
  setup(){
    const posts = ref(null);

    onMounted(()=>{
      Posts.getAllPosts().then(data =>{
        posts.value = data.data;
      }).catch(error => {
        console.log(error);
      });
    })

    return {
      posts
    }
  }
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
    }

    .add-new-post-button {
        background: #a4d3fc;
        display: block;
        margin-bottom: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        width: 100%;
    }

    .title {
      color: #0b2e13;
    }

    .desc {
      color: #1e7e34;
    }
</style>
