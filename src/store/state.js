var my_store = JSON.parse(localStorage.getItem("my_store"));

export default {
      component: my_store ? my_store.component : null,
      rating: ['liked', 'disliked', 'loved', 'hseen'],
      ratingStatus: false
}