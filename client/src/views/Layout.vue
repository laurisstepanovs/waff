<template>
    <div class="header">
        <router-link to="/home" class="logo">
            <h1 class="reset">Waff</h1>
            <span class="badget">BETA</span>
        </router-link>
        <div class="toolbar">
            <button v-if="isAuth" @click="logout()" class="header-button reset">Logout</button>
        </div>
    </div>
    <div class="content-wrapper">
        <router-view />
    </div>
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
            router.push({ path: 'login' });
        }

        const isAuth = computed(() => {
            return !!window.localStorage.getItem("token")
        });

        const logout = () => {
            User.logout().then(data =>{
                window.localStorage.removeItem("token");
                console.log(data);
                router.push({ path: 'login' });
            }).catch(response => {
                alert(response);
            });
        }

        return {
            logout,
            isAuth
        }
    }
});
</script>

<style lang="scss">
    .header {
        top:0;
        left:0;
        right:0;
        background-color: #cbd5e0;
        margin: 0;
        height: 50px;
        display: flex;
        justify-content: space-between;
        padding: 20px;

        .reset {
            margin: 0;
        }

        .toolbar {
            flex-direction: row;
            flex-wrap: wrap;
        }

        .header-button {
            height: 100%;
        }

        .logo {
            display: inline-block;
        }

        .badget {
            display: block;
            color: red;
            background: lightcoral;
        }
    }

    .content-wrapper {
        margin-top: 20px;
    }
</style>
