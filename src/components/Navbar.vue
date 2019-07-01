<template>
    <div>
        <b-navbar toggleable="md" type="dark">
            <b-navbar-brand to="home" class="website-title">Emanuel</b-navbar-brand>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="about-me">About Me</b-nav-item>
                    <b-nav-item to="projects">Projects</b-nav-item>
                    <b-nav-item to="resume">Resume</b-nav-item>
                    <b-nav-item href="https://github.com/epituch" target="_blank">
                        <img src="../assets/images/github-icon.png" alt="Github Link">
                    </b-nav-item>
                    <b-nav-item href="https://www.linkedin.com/in/epituch/" target="_blank">
                        <img src="../assets/images/linked-in-icon.png" alt="LinkedIn Link">
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style lang="scss" scoped>
    @import "../assets/style/navbar";
</style>