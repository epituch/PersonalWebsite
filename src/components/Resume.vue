<template>
    <div class="resume-wrapper">
        <div  :class="{ 'top-padding': !isWiderThan800 }">
            <b-button class="btn btn-primary btn-lg"
                      href="https://drive.google.com/uc?export=download&id=1DhuybcURoWk9f0v6CDgNJjr4cEby109r">
                Download Resume
            </b-button>
        </div>
        <div v-if="isWiderThan800">
            <iframe src="https://drive.google.com/file/d/1DhuybcURoWk9f0v6CDgNJjr4cEby109r/preview" height="1030"
                    width="800"></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Resume",
        data() {
            return {
                isWiderThan800: true
            }
        },
        mounted: function () {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
        beforeDestroy: function () {
            window.removeEventListener('resize', this.handleResize);
        },
        methods: {
            handleResize() {
                this.isWiderThan800 = (window.innerWidth >= 800);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/style/resume";
</style>