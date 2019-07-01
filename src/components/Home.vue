<template>
  <div class="home-wrapper">
    <div class="img-wrapper">
      <img src="../assets/images/my-picture.png" alt="My picture" class="responsive-img">
    </div>
    <div class="heading-wrapper">
      <p>Hello, I'm Emanuel Pituch</p>
    </div>
    <div class="text-wrapper">
      <p>I am a&nbsp;</p>
      <vue-typer
        :text="descriptiveWords"
        :repeat="Infinity"
        :shuffle="false"
        initial-action="typing"
        :pre-type-delay="70"
        :type-delay="70"
        :pre-erase-delay="2000"
        :erase-delay="250"
        erase-style="select-all"
        :erase-on-complete="false"
        caret-animation="phase"
      ></vue-typer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      descriptiveWords: [
        "developer",
        "software engineer",
        "programmer",
        "coder",
        "nerd",
        "techie",
        "computer scientist"
      ],
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/home";
</style>
