var my_store = JSON.parse(localStorage.getItem("my_store"));

export default {
  component: my_store ? my_store.component : null,
  // For preview purpose. Declaring an array of ratings for SwipeTest component
  rating: ["liked", "disliked", "loved", "haventSeen"],
  //For Rate and ProgressBar components
  api_host: "https://yzal-dev-app.flibo.ai/",
  session_id: "1599211356d4w3ZodTtsPUt3E5"
};
