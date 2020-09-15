<template>
  <div class="suggestions">
    <div
      class="container"
      v-bind:key="index"
      v-for="(item, index) in searchData"
    >
      <img :src="`${item.image}`" height="50" width="50" class="rounded" />
      <div class="textcontent">
        <div class="subject">{{ item.subject }}</div>
        <div class="subjectType">{{ item.subject_type }}</div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  name: "TagSuggestions",
  data() {
    return {
      searchData: [
        {
          image:
            "https://image.tmdb.org/t/p/w500/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg",
          live_search_id: 1460668,
          subject: "The Shawshank Redemption",
          subject_id: 122099,
          subject_type: "content"
        },
        {
          image:
            "https://image.tmdb.org/t/p/w500/wYJEYCaoXTcAGYWVlPKm90P5HwG.jpg",
          live_search_id: 639345,
          subject: "Ali Astin",
          subject_id: 726033,
          subject_type: "artist"
        },
        {
          image:
            "https://image.tmdb.org/t/p/w500/btnl50ZDJDSCal2NLQIYWw0XxvH.jpg",
          live_search_id: 1460695,
          subject: "Avatar",
          subject_id: 121324,
          subject_type: "content"
        },
        {
          image:
            "https://image.tmdb.org/t/p/w500/t7hF4WRqEDMksYPSNRx3fxEN6GY.jpg",
          live_search_id: 639968,
          subject: "Marija Juliette Abney",
          subject_id: 39089,
          subject_type: "artist"
        }
      ]
    };
  },
  //   props: {
  //     text: {
  //       type: String,
  //       required: true
  //     },
  //     searchType: {
  //       type: String,
  //       required: true
  //     }
  //   },
  methods: {
    // suggestions() {
    //   var self = this;
    //   axios
    //     .post("https://yzal-dev-app.flibo.ai/live_search", {
    //       session_id: "1599211356d4w3ZodTtsPUt3E5",
    //       string: "a",
    //       search_type: "all"
    //     })
    //     .then(function(response) {
    //       if (response.status == 200) {
    //         self.searchData = response.data.result;
    //         console.log(typeof JSON.parse(response.data));
    //       }
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // }
  }
};
</script>

<style scoped>
.suggestions {
  background-color: #ffffff;
}
.container {
  display: grid;
  grid-template-columns: 80px 1fr;
  padding: 5px;
}
.textcontent {
  display: grid;
  grid-template-rows: 1fr 1fr;
}
img {
  border-radius: 50%;
}
.subject {
  color: #454545;
  font-weight: bold;
  font-family: sans-serif;
}
.subjectType {
  color: #b7b7b7;
  font-family: sans-serif;
}
</style>
