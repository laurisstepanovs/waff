import Api from "./Api";

export default {
    async addNew(form) {
        return Api().post("/add_post", form);
    },

    async getAllPosts() {
        return Api().get("/posts");
    },

    async getCurrentPagePosts(index) {
        const url = "/posts?page="+index;
        return Api().get(url);
    },

    async getClickedPost(id) {
        const url = "/current_post/"+id;
        return Api().post(url);
    },

    async getPostsBySection(section) {
        const url = "/post_by_section/"+section;
        return Api().post(url);
    },

    async getCurrentPagePostsByName(section, index) {
        const url = "post_by_section/"+ section +"?page="+index;
        return Api().post(url);
    },
};