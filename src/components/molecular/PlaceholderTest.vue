<template>
  <div>
    <h1 style="color: white">FeedCard</h1>
    <FeedCard />
    <h1 style="color: white">SearchContent</h1>
    <SearchContent />
    <h1 style="color: white">SearchUser</h1>
    <SearchUser />
    <h1 style="color: white">MovieInfo</h1>
    <MovieInfo />
    <h1 style="color: white">MoviePage</h1>
    <MoviePage />
    <h1 style="color: white">ProfilePage</h1>
    <ProfilePage />
  </div>
</template>

<script>
import FeedCard from "./placeholders/FeedCard";
import SearchContent from "./placeholders/SearchContent";
import SearchUser from "./placeholders/SearchUser";
import MovieInfo from "./placeholders/MovieInfo";
import MoviePage from "./placeholders/MoviePage";
import ProfilePage from "./placeholders/ProfilePage";
export default {
  name: "PlaceholderTest",
  components: {
    FeedCard,
    SearchContent,
    SearchUser,
    MovieInfo,
    MoviePage,
    ProfilePage
  }
};
</script>

<style lang="scss" scoped></style>
