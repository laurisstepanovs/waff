<template>
  <div class="add_post">
    <form @submit.prevent="addRequest()">
      <h1>Add new post</h1>
      <label for="title">Post title</label>
      <input v-model="form.title" id="title" type="text">
      <label for="section">Section</label>
      <select name="section" id="section" v-model="form.section">
        <option value="Cars">Cars</option>
        <option value="Phones">Phones</option>
      </select>
      <label for="desc">Description</label>
      <textarea v-model="form.desc" id="desc" type="password" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.add_post {
  width: 40%;
  margin: auto;
  height: auto;
  background-color: #cbd5e0;
  padding: 20px;

  h1{
    margin-top: 10px;
    margin-bottom: 10px;
  }

  textarea {
    box-sizing: border-box;
    display: block;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
  }

  select {
    box-sizing: border-box;
    display: block;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
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
import Posts from "@/apis/Posts";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "NewPost",
  setup(){
    const form = ref({
      title: "",
      section: "Cars",
      desc: ""
    })

    const errors = ref(null);

    const router = useRouter();

    const addRequest = () => {
      Posts.addNew(form.value).then(data =>{
        console.log(data);
        router.push({ path: 'home' });
      }).catch(error => {
        console.log(error);
      });
    }

    return {
      form,
      addRequest,
      errors
    }
  }
})
</script>
