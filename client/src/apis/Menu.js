import Api from "./Api";

export default {
    async getSec(sec, count) {
        const url = "menus/"+sec+"/"+count

        return Api().get(url);
    }
};
