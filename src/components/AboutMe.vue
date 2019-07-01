<template>
    <div class="about-me-wrapper">
        <div class="text-wrapper">
            <h1 id="about-me-header">About Me</h1>
            <div id="about-me-text">
                &nbsp; &nbsp; &nbsp; &nbsp; Hello, my name is Emanuel Pituch and I am a junior majoring in Computer Science
                at Purdue University with a passion for programming. I have experience with many different languages, but
                the bulk of it is in C++ and web development.
                Outside of programming I like to snowboard, play soccer, build
                computers, and play video games. Spreading knowledge and helping others learn is important to me which
                is why I became a undergraduate teaching assistant for the Computer Architecture class at Purdue.
                I also was a mentor for LaunchPad, for which I am currently an organizer. LaunchPad is a
                club that pairs an upperclassmen with a freshman to create a project throughout the semester.
                I am actively looking for a full time job where I can apply
                my knowledge of software development and Computer Science in general. Check out my stuff at the top!
            </div>
        </div>
        <div class="img-wrapper">
            <img
                src="../assets/images/snowboard-pic.png"
                alt="Snowboard Picture"
                class="responsive-img"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutMe"
};
</script>

<style scoped>
@import "../assets/style/about-me.scss";
</style>