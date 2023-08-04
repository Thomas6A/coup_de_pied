import axios from "axios";

function fetchStreams() {
  return axios.get("https://api.twitch.tv/helix/streams");
}

function fetchAfterStreams(page) {
  return axios.get("https://api.twitch.tv/helix/streams?after=" + page);
}

function fetchBeforeStreams(page) {
  return axios.get("https://api.twitch.tv/helix/streams?before=" + page);
}

function fetchStreamsGames(id) {
  return axios.get("https://api.twitch.tv/helix/streams?game_id=" + id);
}

function fetchAfterStreamsGames(page, id) {
  return axios.get(
    "https://api.twitch.tv/helix/streams?game_id=" + id + "&after=" + page
  );
}

function fetchBeforeStreamsGames(page, id) {
  return axios.get(
    "https://api.twitch.tv/helix/streams?game_id=" + id + "&before=" + page
  );
}

export default {
  fetchStreams,
  fetchStreamsGames,
  fetchAfterStreams,
  fetchBeforeStreams,
  fetchAfterStreamsGames,
  fetchBeforeStreamsGames,
};
