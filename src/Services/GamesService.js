import axios from "axios";

function fetchGames(){
    return axios.get("https://api.twitch.tv/helix/games/top?first=50")
}

function fetchAfterGames(page){
    return axios.get("https://api.twitch.tv/helix/games/top?first=50&after="+page)
}

function fetchBeforeGames(page){
    return axios.get("https://api.twitch.tv/helix/games/top?first=50&before="+page)
}

function searchGames(search){
    return axios.get("https://api.twitch.tv/helix/search/categories?query="+search+"&first=100")
}

export default{
    fetchGames,fetchAfterGames,fetchBeforeGames,searchGames
}