<template>
  <div>
    <h1>{{postData.title}}</h1>
    <p>{{postData.desc}}</p>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router"
import Posts from "@/apis/Posts";

export default defineComponent({
  name: "PostPage",
  setup(){
    const route = useRoute();

    const postData = ref({
      title:"",
      desc: ""
    });

    Posts.getClickedPost(route.params.post_id).then(data =>{
      console.log(data);
      postData.value = data.data
    }).catch(error => {
      console.log(error);
    });

    return {
      postData
    }
  }
});
</script>

<style lang="scss">
</style>
