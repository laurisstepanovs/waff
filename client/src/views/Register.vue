<template>
  <div class="login">
    <form @submit.prevent="register()">
      <h1>Register</h1>
      <span v-if="errors" class="error-text">{{ errors }}</span
      ><br />
      <label for="username">Username</label>
      <input v-model="form.name" id="username" autocomplete="off" type="text" />
      <label for="email">Email</label>
      <input v-model="form.email" id="email" autocomplete="off" type="text" />
      <label for="password">Password</label>
      <input
        v-model="form.password"
        id="password"
        autocomplete="off"
        type="password"
      />
      <label for="passwordConfirmation">Password Confirmation</label>
      <input
        v-model="form.passwordConfirmation"
        id="passwordConfirmation"
        autocomplete="off"
        type="password"
      />
      <button type="submit">Register</button>
    </form>
    <p class="info-text">
      Already have an account?
      <b><router-link to="/login">Login</router-link></b>
    </p>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import User from "@/apis/User";

export default defineComponent({
  name: "Register",
  setup() {
    const router = useRouter();

    const form = ref({
      name: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    });

    const errors = ref(null);

    if (window.localStorage.getItem("token")) {
      router.push({ path: "home" });
    }

    const register = () => {
      User.register(form.value)
        .then(data => {
          window.localStorage.setItem("token", data.data);
          router.push({ path: "home" });
        })
        .catch(error => {
          errors.value =
            error.response.data.errors[
              Object.keys(error.response.data.errors)[0]
            ][0];
        });
    };

    return {
      register,
      form,
      errors
    };
  }
});
</script>

<style lang="scss" scoped>
.login {
  width: 40%;
  margin: auto;
  height: auto;
  background-color: #cbd5e0;
  padding: 20px;

  h1 {
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
