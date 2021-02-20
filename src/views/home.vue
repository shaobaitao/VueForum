<template>
  <div class="homePage">
    <Navigation></Navigation>
    <MainForum></MainForum>
    <forumFooter></forumFooter>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import MainForum from "@/components/MainForum";
import forumFooter from "@/components/forumFooter";

export default {
  name: "home",
  components: {
    Navigation,
    MainForum,
    forumFooter
  },
  data() {
    return {};
  },
  methods: {}
}
</script>

<style scoped>
.homePage {
  background-color: rgba(240, 240, 240, 1);
}
</style>