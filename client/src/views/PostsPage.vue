<template>
  <h3>Latests posts</h3>
    <template v-if="posts">
      <template v-if="posts.length !== 0">
        <div class="post-parent">
        <div class="items-list">
          <div class="menu-item" v-for="(item, i) in posts.data" :key="i">
            <div class="img-el">
              <el-image
                  style="width: 100px; height: 100px"
                  :src="getPath(item.path)"
                  fit="cover"></el-image>
            </div>
            <div class="other-el">
              <router-link :to="getLink( item.section, item.id)" class="title">{{item.title}}</router-link>
              <p class="desc">{{item.desc}}</p>
              <p class="desc">{{item.created_at}}</p>
            </div>
          </div>
        </div>
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

      const getLink = (section, postId) => {
        return "/posts/" + section.toLowerCase() + "/"+postId;
      }

      const getPath = (path) => {
        return "media/" + path;
      }

      return {
        posts,
        getData,
        getLink,
        getPath
      }
    }
});
</script>

<style lang="scss" scoped>
.menu-item {
  background: #cbd5e0;
  display: inline-block;
  text-align: left;
  margin-bottom: 20px;
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
  text-decoration: underline;
  white-space: nowrap;
}

.desc {
  color: #1e7e34;
}

.img-el{
  display: inline-block;
  margin: 20px 20px 20px 20px;
}

.other-el{
  display: inline-block;
  margin: 10px 10px 10px 10px;
  width: 266px;
  overflow: hidden;
}

.items-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.post-parent{
  display: block;
  margin-right: auto;
  margin-left: auto;
}


@media only screen and (max-width: 768px) {
  .menu-item {
    width: 100%;
  }
}
</style>
