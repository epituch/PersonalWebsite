<template>
    <div class="element-grid-wrapper">
        <div class="element-flex-wrapper">
            <div v-for="project in projects">
                <project-element :projectname=project  class="element"></project-element>
            </div>
        </div>
    </div>
</template>

<script>
    import ProjectElement from './ProjectElement'

    export default {
        name: "Projects",
        data() {
            return {
                projects: ['Boiler Faves', 'HulaLoop', 'Personal Website', 'Purdue Orbital Ground Station GUI', 'Translate Game']
            }
        },
        components: {
            ProjectElement
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/style/projects";
</style>