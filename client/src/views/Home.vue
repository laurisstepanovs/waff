<template>
  <div class="home">
    <template v-for="(item, i) in preview" :key="i">
      <router-link :to="getRotes(item.sec)" class="menu-item">
        {{ item.sec }}
      </router-link>
    </template>

    <!--    <h3>Latests posts</h3>-->
    <!--    <template v-if="posts">-->
    <!--      <template v-if="posts.length !== 0">-->
    <!--        <div class="menu-item" v-for="(item, i) in posts.data" :key="i">-->
    <!--          <router-link :to="getLink(item.id)" class="title">{{item.title}}</router-link>-->
    <!--          <p class="desc">{{item.desc}}</p>-->
    <!--          <p class="desc">{{item.created_at}}</p>-->
    <!--        </div>-->
    <!--        <el-pagination-->
    <!--            background-->
    <!--            hide-on-single-page="true"-->
    <!--            layout="prev, pager, next"-->
    <!--            @current-change="getData"-->
    <!--            :total="posts.last_page*10">-->
    <!--        </el-pagination>-->
    <!--        <br>-->
    <!--        <br>-->
    <!--      </template>-->
    <!--      <template v-else>-->
    <!--        There is no posts at the moment-->
    <!--      </template>-->
    <!--    </template>-->
  </div>
</template>

<script>
import { defineComponent, onMounted, watch, ref } from "vue";
import { useRoute } from "vue-router";
import Menu from "@/apis/Menu.js";

export default defineComponent({
  name: "Home",
  setup() {
    const route = useRoute();
    const preview = ref(null);
    const section  = ref(null);
    const count = ref(0);

    onMounted(()=>{
      if(route.params.sec1){
        section.value = route.params.sec1
        count.value = 2;
      }

      Menu.getSec(section.value, count.value).then((res) => {
        preview.value = res.data;
      }).catch((err) => {
        console.log(err);
      })
    });

    watch(()=>route.path, (to, from)=>{
      alert(to);
      alert(to.indexOf('/home')=== 0);
      if(to.indexOf('/home')=== 0){
        alert("aSD");
      }
    })

    const getRotes = (sec) => {
      return route.path + "/" + sec;
    }

    return {
      preview,
      getRotes
    };
  }
});
</script>

<style scoped>
.menu-item {
  background: #cbd5e0;
  display: block;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
}
</style>
