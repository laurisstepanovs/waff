<template>
    <div class="login">
        <form @submit.prevent="login()">
            <h1>Login</h1>
            <span v-if="errors" class="error-text">{{errors}}</span><br>
            <label for="username">Username</label>
            <input v-model="form.email" id="username" type="text">
            <label for="password">Password</label>
            <input v-model="form.password" id="password" type="password">
            <button type="submit">Login</button>
            <p class="info-text">Do not have an account? <b><router-link to="/register">Create it!</router-link></b></p>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    .login {
        width: 40%;
        margin: auto;
        height: auto;
        background-color: #cbd5e0;
        padding: 20px;

        h1{
            margin-top: 10px;
            margin-bottom: 10px;
        }

        input {
            box-sizing: border-box;
            display: block;
            width: 100%;
            margin-top: 10px;
            margin-bottom: 10px;
            padding: 5px;
        }

        button {
            display: block;
            align-items: center;
            margin-top: 10px;
            width: 100%;
            padding: 5px;
        }

        .error-text {
            display: block;
            background-color: #ffb8b8;
            height: 20px;
            color: red;
            padding: 5px;
        }

        .info-text {
            display: block;
            background-color: #a4d3fc;
            height: 20px;
            color: #148ffa;
            padding: 5px;
        }
    }
</style>

<script>
    import { defineComponent, ref } from "vue";
    import User from "../apis/User";
    import {useRouter} from "vue-router";

    export default defineComponent({
        name: "Login",
        setup(){
            const form = {
                email: "",
                password: ""
            }

            const errors = ref(null);

            const router = useRouter();

            if(window.localStorage.getItem("token")){
                router.push({ path: 'home' });
            }

            const login = () => {
                User.login(form).then(data =>{
                    window.localStorage.setItem("token", data.data);
                    router.push({ path: 'home' });
                }).catch(error => {
                    errors.value = error.response.data.errors[Object.keys(error.response.data.errors)[0]][0];
                });
            }

            return {
                form,
                login,
                errors
            }
        }
    })
</script>
