import axios from "axios";

export default {
    generate: function () {
        return axios.get("https://randomuser.me/api/?inc=name,email,phone,id,picture&nat=us&results=25");
    }
};