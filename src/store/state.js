var my_store = JSON.parse(localStorage.getItem("my_store"));

export default {
      component: my_store ? my_store.component : null,
// For preview purpose. Declaring an array of ratings for SwipeTest component
      rating: ['liked', 'disliked', 'loved', 'haventSeen'],
//For Rate and ProgressBar components
}