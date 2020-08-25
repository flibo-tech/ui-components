<template>
  <div>{{artistData}}</div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    artistId: {
      type: Number
    },
    skipContentId: {
      type: Number
    }
  },
  data() {
    return {
      artistData: null,
      movieTitle: []
    };
  },
  mounted() {
    axios
      .post("https://app.flibo.ai/more_by_artist", {
        session_id: "1591181440dfmMXlLBw1NhObTx",
        artist_id: this.artistId,
        credit_category: "cast",
        country: "India",
        guest_id: null
      })
      .then(
        response => (
          (this.artistData = response.data.contents.map(el => {
            if (this.skipContentId != el.content_id) {
              return [el.title, el.content_id];
            }
          })),
          (self.fetching_more = false)
        )
      );
  }
};
</script>
