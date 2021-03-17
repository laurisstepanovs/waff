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
                  <el-dropdown-item @click="toAdvertisement()">New advertisement</el-dropdown-item>
                  <el-dropdown-item @click="logout()">Logout</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import { defineComponent, computed } from "vue";
import User from "@/apis/User";
import { useRouter } from "vue-router";

export default defineComponent({
    name: "Layout",
    setup(){
        const router = useRouter();

        if(!window.localStorage.getItem("token")){
            router.push({ name: 'login' });
        }

        const isAuth = computed(() => {
            return !!window.localStorage.getItem("token")
        });

        const logout = () => {
            User.logout().then(data =>{
                window.localStorage.removeItem("token");
                console.log(data);
                router.push({ name: 'login' });
            }).catch(response => {
                alert(response);
            });
        }

        const toAdvertisement = () => {
          router.push({name: 'new_post'});
        }

        return {
            logout,
            isAuth,
            toAdvertisement
        }
    }
});
</script>

<style lang="scss">
    .el-header {
      background-color: #409EFF;
    }

    .el-footer {
      background-color: #cbd5e0;
    }

    .reset {
      margin:0;
    }

    .header-button {
      margin-top: 7px;
      margin-left: 5px;
    }

    .text-color{
      color:rgb(217, 236, 255);
    }

    a {
      text-decoration: none;
    }
</style>
