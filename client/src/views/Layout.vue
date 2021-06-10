<template>
  <el-container>
    <el-header>
      <el-row :gutter="10">
        <el-col :xs="11" :sm="8" :md="6" :lg="5" :xl="3" class="last-block">
          <router-link to="/home" class="text-color">
            <h1 class="reset">Waff</h1>
            <span>BETA</span>
          </router-link>
        </el-col>
        <el-col :xs="1" :sm="4" :md="6" :lg="7" :xl="9"></el-col>
        <el-col :xs="1" :sm="4" :md="6" :lg="7" :xl="9"></el-col>
        <el-col :xs="11" :sm="8" :md="6" :lg="5" :xl="3">
          <div class="grid-content bg-purple">
            <el-dropdown v-if="isAuth">
              <el-button type="primary" class="header-button">
                Profile<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Profile</el-dropdown-item>
                  <el-dropdown-item>My advertisement</el-dropdown-item>
                  <el-dropdown-item>Settings</el-dropdown-item>
                  <el-dropdown-item @click="toAdvertisement()"
                    >New advertisement</el-dropdown-item
                  >
                  <el-dropdown-item @click="logout()">Logout</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-page-header
      v-if="getSectionTitle"
      @back="goBack()"
      :content="getSectionTitle"
    >
    </el-page-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import { defineComponent, computed } from "vue";
import User from "@/apis/User";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "Layout",
  setup() {
    const router = useRouter();
    const route = useRoute();

    if (!window.localStorage.getItem("token")) {
      router.push({ name: "login" });
    }

    const isAuth = computed(() => {
      return !!window.localStorage.getItem("token");
    });

    const logout = () => {
      User.logout()
        .then(data => {
          window.localStorage.removeItem("token");
          console.log(data);
          router.push({ name: "login" });
        })
        .catch(response => {
          alert(response);
        });
    };

    const toAdvertisement = () => {
      router.push({ name: "new_post" });
    };

    const goBack = () => {
      router.go(-1);
    };

    const getSectionTitle = computed(() => {
      if (route.params.section) {
        return (
          route.params.section.charAt(0).toUpperCase() +
          route.params.section.slice(1)
        );
      } else {
        if (route.params.sec4) {
          return (
            route.params.sec4.charAt(0).toUpperCase() +
            route.params.sec4.slice(1)
          );
        } else {
          if (route.params.sec3) {
            return (
              route.params.sec3.charAt(0).toUpperCase() +
              route.params.sec3.slice(1)
            );
          } else {
            if (route.params.sec2) {
              return (
                route.params.sec2.charAt(0).toUpperCase() +
                route.params.sec2.slice(1)
              );
            } else {
              if (route.params.sec1) {
                return (
                  route.params.sec1.charAt(0).toUpperCase() +
                  route.params.sec1.slice(1)
                );
              }
            }
          }
        }
      }
    });

    return {
      logout,
      isAuth,
      toAdvertisement,
      goBack,
      getSectionTitle
    };
  }
});
</script>

<style lang="scss">
.el-header {
  background-color: #409eff;
}

.el-footer {
  background-color: #cbd5e0;
}

.reset {
  margin: 0;
}

.header-button {
  margin-top: 7px;
  margin-left: 5px;
}

.text-color {
  color: rgb(217, 236, 255);
}

a {
  text-decoration: none;
}

.el-page-header {
  padding: 20px 5px 20px 5px;
  border: 1px solid #d7dae2;
  border-radius: 4px;
}

@media only screen and (max-width: 425px) {
  .el-card__body,
  .el-main {
    padding: 0;
  }
}
</style>
