import { createStore } from "vuex";
import { v4 as uuid4 } from "uuid";

const store = createStore({
  state: {
    comments: [
      {
        text: "Looks great Julianne!",
        author: "Robin Rendle",
        authorImg:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-coffee.jpg",
        key: uuid4(),
      },
      {
        text: "I love the Sea",
        author: "Miriam Suzanne",
        authorImg:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-miriam.jpg",
        key: uuid4(),
      },
      {
        text: "Where are you?",
        author: "Geoff Graham",
        authorImg:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-geoff.jpg",
        key: uuid4(),
      },
    ],
  },
  mutations: {
    addComment(state, comment) {
      const newCommentObj = {
        text: comment,
        author: "Magoo",
        authorImg:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-skull.jpg",
        key: uuid4(),
      };
      state.comments.push(newCommentObj);
    },
  },
  actions: {},
});

export default store;
