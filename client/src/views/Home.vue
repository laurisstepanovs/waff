<template>
  <div class="home">
    <template v-for="(item, i) in preview" :key="i">
      <div v-if="!final" @click="next(item)"  class="menu-item">{{item.name}}</div>
      <router-link v-if="final" :to="`/posts/${item}`" class="menu-item">{{item}}</router-link>
<!--      <router-link :to="`/posts/${item.name}`" class="menu-item">{{item.name}}</router-link>-->
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

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import {useRoute, useRouter} from "vue-router";
import config, { AdMenu } from "@/config/SectionConfig";
import {useStore} from "vuex";

export default defineComponent({
  name: "Home",
  setup(){
    const preview = ref<Array<AdMenu>|Array<string>>([]);
    const final = ref(false);
    const routs = ref<Array<string>>(["home"]);
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    onMounted(()=>{
      preview.value = config;
    });

    const resetPreview = (child: AdMenu) => {
      if(typeof child.child[0] === 'string'){
        final.value = true;
      } else {
        routs.value.push(child.name);
      }
      preview.value = child.child;
    }

    const next = (new_config) => {
      store.dispatch(Actions.SET_CURRENT_CONFIG_ACTION, new_config);
      router.push(route.path + new_config.name);

    };

    return {
      preview,
      resetPreview,
      final,
      routs,
      next
    }
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
