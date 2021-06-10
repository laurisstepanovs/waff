<template>
  <div class="home">
    <template v-for="(item, i) in preview" :key="i">
      <router-link :to="getRotes(item.sec, item.next)" class="menu-item">
        {{ item.sec }}
      </router-link>
    </template>
  </div>
</template>

<script>
import { defineComponent, onMounted, watch, ref, computed } from "vue";
import { useRoute } from "vue-router";
import Menu from "@/apis/Menu.js";

export default defineComponent({
  name: "Home",
  setup() {
    const route = useRoute();
    const preview = ref(null);
    const section = ref(null);
    const count = ref(0);

    const getMenuItems = () => {
      if (route.params.sec3) {
        section.value = route.params.sec3;
        count.value = 4;
      } else {
        if (route.params.sec2) {
          section.value = route.params.sec2;
          count.value = 3;
        } else {
          if (route.params.sec1) {
            section.value = route.params.sec1;
            count.value = 2;
          } else {
            section.value = "home";
            count.value = 0;
          }
        }
      }

      Menu.getSec(section.value, count.value)
        .then(res => {
          preview.value = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    };

    onMounted(() => {
      getMenuItems();
    });

    watch(
      () => route.path,
      (to, from) => {
        console.log(from);
        if (to.indexOf("/home") === 0) {
          getMenuItems();
        }
      }
    );

    const getRotes = (sec, next) => {
      if (next) {
        return route.path + "/" + sec;
      } else {
        return `/posts/${sec}`;
      }
    };

    const isLast = computed(() => {
      return route.params.sec3;
    });

    return {
      preview,
      getRotes,
      isLast
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
