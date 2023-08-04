import axios from "axios";

function fetchUsers(){
    return axios.get("https://api.twitch.tv/helix/users")
}

export default{
    fetchUsers
}