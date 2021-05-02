<template>
  <div class="section1"></div>
  <div class="header">
    <div class="logo">
      <img class="logo-img" src="media/landing2/Logo.png" alt="Logo">
      <h1 class="logo-text">CaliHeals</h1>
    </div>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Products</li>
      <li>SF Equity Program</li>
      <li>Resources</li>
    </ul>
    <button>Contact Us</button>
  </div>
</template>

<style lang="scss" scoped>
* {
 box-sizing: border-box;
}

.section1 {
  position: absolute;
  top: 0;
  width: 100%;
  height: 606px;
  background-color: #000000;
  z-index: -1;
}

.header {
  color: white;
  display: flex;

  .logo{
    display: flex;
  }

  .logo-text {
    font-style: normal;
    font-weight: 900;
    font-size: 22.6667px;
    line-height: 33px;
    margin: 0;
  }

  ul {
    display: flex;
    list-style: none;
  }

  ul li {
    margin: 0;
  }

  button {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name:"",
  components: {}
})
</script>