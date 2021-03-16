import Api from "./Api";

export default {
    addNew(form) {
        return Api().post("/add_post", form);
    },

    getAllPosts() {
        return Api().get("/posts");
    }
};