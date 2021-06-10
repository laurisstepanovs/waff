<template>
  <div class="add_post">
    <form>
      <h1>Add new post</h1>
      <label for="title">Post title</label>
      <el-input
        placeholder="Please input advertisement name"
        id="title"
        type="text"
        v-model="form.title"
      ></el-input>
      <label for="section">Section</label><br />
      <el-cascader
        id="section"
        style="width: 100%"
        v-model="form.section"
        :options="options"
        @change="handleChange"
      ></el-cascader
      ><br />
      <label for="desc">Description</label>
      <el-input
        type="textarea"
        v-model="form.desc"
        id="desc"
        :rows="2"
        placeholder="Please input advertisement description"
      >
      </el-input>
      <label for="desc">Upload advertisement photos</label>
      <el-upload
        action="#"
        list-type="picture-card"
        :limit="1"
        :auto-upload="false"
        :on-change="getLocalImg"
      >
        <div class="logo_upload_xuan">
          <span>Select Image</span>
        </div>
      </el-upload>
      <el-button type="primary" @click="addRequest()">Add new post</el-button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.add_post {
  background-color: #cbd5e0;
  padding: 20px;

  h1 {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  textarea {
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: 5px;
  }

  label {
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  input {
    box-sizing: border-box;
    display: block;
    width: 100%;
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
import { useRouter } from "vue-router";

export default defineComponent({
  name: "NewPost",
  data() {
    return {
      value: [],
      options: [
        {
          value: "transport",
          label: "Transports",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "audi",
                  label: "Audi"
                },
                {
                  value: "bmw",
                  label: "BMW"
                },
                {
                  value: "porsche",
                  label: "Porsche"
                },
                {
                  value: "volkswagen",
                  label: "Volkswagen"
                }
              ]
            },
            {
              value: "advanced",
              label: "Advanced",
              children: [
                {
                  value: "audi",
                  label: "Audi"
                },
                {
                  value: "bmw",
                  label: "BMW"
                },
                {
                  value: "porsche",
                  label: "Porsche"
                },
                {
                  value: "volkswagen",
                  label: "Volkswagen"
                }
              ]
            }
          ]
        },
        {
          value: "electronics",
          label: "Electronics",
          children: [
            {
              value: "phones",
              label: "Phones",
              children: [
                {
                  value: "apple",
                  label: "Apple"
                },
                {
                  value: "samsung",
                  label: "Samsung"
                },
                {
                  value: "huawei",
                  label: "Huawei"
                },
                {
                  value: "honor",
                  label: "Honor"
                },
                {
                  value: "xiaomi",
                  label: "Xiaomi"
                }
              ]
            },
            {
              value: "computers",
              label: "Computers",
              children: [
                {
                  value: "apple",
                  label: "Apple"
                },
                {
                  value: "samsung",
                  label: "Samsung"
                },
                {
                  value: "huawei",
                  label: "Huawei"
                },
                {
                  value: "honor",
                  label: "Honor"
                },
                {
                  value: "xiaomi",
                  label: "Xiaomi"
                }
              ]
            },
            {
              value: "tv",
              label: "TV",
              children: [
                {
                  value: "apple",
                  label: "Apple"
                },
                {
                  value: "samsung",
                  label: "Samsung"
                },
                {
                  value: "huawei",
                  label: "Huawei"
                },
                {
                  value: "honor",
                  label: "Honor"
                },
                {
                  value: "xiaomi",
                  label: "Xiaomi"
                }
              ]
            },
            {
              value: "gps",
              label: "GPS",
              children: [
                {
                  value: "apple",
                  label: "Apple"
                },
                {
                  value: "samsung",
                  label: "Samsung"
                },
                {
                  value: "huawei",
                  label: "Huawei"
                },
                {
                  value: "honor",
                  label: "Honor"
                },
                {
                  value: "xiaomi",
                  label: "Xiaomi"
                }
              ]
            }
          ]
        },
        {
          value: "real_estate",
          label: "Real Estate",
          children: [
            {
              value: "flats",
              label: "Flats"
            },
            {
              value: "houses",
              label: "Houses"
            },
            {
              value: "offices",
              label: "Offices"
            }
          ]
        }
      ]
    };
  },
  setup() {
    const form = ref({
      title: "",
      section: "Cars",
      image: [],
      desc: ""
    });

    const dialogVisible = ref(false);

    const errors = ref(null);

    const router = useRouter();

    const addRequest = () => {
      alert("add");

      const formData = new FormData();

      const sections = form.value.section.toString().split(",");

      formData.append("title", form.value.title);
      formData.append("section", sections[sections.length - 1]);
      formData.append("image", form.value.image[0]);
      formData.append("desc", form.value.desc);

      console.log(formData.get("title"));
      console.log(sections);
      console.log(formData.get("image"));
      console.log(formData.get("desc"));

      Posts.addNew(formData)
        .then(data => {
          console.log(data);
          router.push({ path: "home" });
        })
        .catch(error => {
          console.log(error);
        });
    };

    const filesCounter = ref(0);

    const handlePictureCardPreview = file => {
      filesCounter.value++;
      form.value.image[0] = file;
      dialogVisible.value = true;
    };

    const getLocalImg = file => {
      form.value.image[0] = file.raw;
    };

    const handleChange = () => {
      console.log("changed");
    };

    return {
      form,
      addRequest,
      errors,
      handleChange,
      handlePictureCardPreview,
      dialogVisible,
      getLocalImg
    };
  }
});
</script>
