import axios from "axios";

const api = {
    login(data) {
        return axios.post('forumAPI/login.php', data).then(res => res)
    },
    register(data) {
        return axios.post('forumAPI/register.php', data).then(res => res)
    },
    getUserInfo(data) {
        return axios.post('forumAPI/getUserInfo.php', data).then(res => res)
    },
    editUserInfo(data) {
        return axios.post('forumAPI/editUserInfo.php', data).then(res => res)
    },
    getUserLoginStatus(data) {
        return axios.post('forumAPI/getUserLoginStatus.php', data).then(res => res)
    },
    getPostInfo(data) {
        return axios.post('forumAPI/getPostInfo.php', data).then(res => res)
    },
    getPostCount() {
        return axios.post('forumAPI/getPostCount.php',).then(res => res)
    }
}

export default api;