<template>
  <h3>Latests posts</h3>
  <template v-if="posts">
    <template v-if="posts.length !== 0">
      <div class="menu-item" v-for="(item, i) in posts.data" :key="i">
        <router-link :to="getLink(item.id)" class="title">{{item.title}}</router-link>
        <p class="desc">{{item.desc}}</p>
        <p class="desc">{{item.created_at}}</p>
      </div>
      <el-pagination
          background
          hide-on-single-page="true"
          layout="prev, pager, next"
          @current-change="getData"
          :total="posts.last_page*10">
      </el-pagination>
      <br>
      <br>
    </template>
    <template v-else>
      There is no posts at the moment
    </template>
  </template>
</template>

<script>
import {defineComponent, onMounted, ref} from "vue";
import { useRoute } from "vue-router";
import Posts from "@/apis/Posts";

export default defineComponent({
    name: "posts-page",
    setup(){
      const route = useRoute();

      const posts = ref(null);

      onMounted(()=>{
        Posts.getPostsBySection(route.params.section).then(data =>{
          posts.value = data.data;
        }).catch(error => {
          console.log(error);
        });
      });

      const getData = (pageId) => {
        Posts.getCurrentPagePostsByName(route.params.section, pageId).then(data =>{
          posts.value = data.data;
        }).catch(error => {
          console.log(error);
        });
      }

      const getLink = (postId) => {
        return "/post_page/"+postId;
      }

      return {
        posts,
        getData,
        getLink
      }
    }
});
</script>

<style lang="scss">
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
