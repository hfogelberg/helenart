import Vue from "vue";
import { API_ROOT_URL } from "../../../config";
import axios from "axios";

const state = {
  artwork: {},
  artworks: []
};

const getters = {
  artworks: state => {
    return state.artworks;
  },

  artwork: state => {
    return state.artwork;
  }
};

const mutations = {
  artworks: (state, artworks) => {
    state.artworks = artworks;
  },

  artwork: (state, artwork) => {
    console.log("Mutation called", artwork);
    state.artwork = artwork;
  }
};

const actions = {
  getArtworks({ commit }) {
    let url = "http://localhost:3000/api/artworks";

    axios
      .get(url)
      .then(res => {
        commit("artworks", res.data.artworks);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
