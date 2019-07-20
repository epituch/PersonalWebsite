<template>
    <div
        :class="{ boilerfaves: projectName === 'Boiler Faves', hulaloop: projectName === 'HulaLoop', personalwebsite: projectName === 'Personal Website',
    groundstation: projectName === 'Purdue Orbital Ground Station GUI', translategame: projectName === 'Translate Game'}"
    >
        <h1 class="project-header">{{ projectName }}</h1>
        <b-button
            :class="{googleplaybtn: linkText === 'Google Play'}"
            class="btn btn-primary btn-lg"
            :href="websiteLink"
            v-if="websiteLink !== null"
            target="_blank"
        >{{ linkText }}</b-button>
        <b-button
            class="btn btn-primary btn-lg github-btn"
            :href="githubLink"
            target="_blank"
        >GitHub</b-button>
    </div>
</template>

<script>
export default {
    name: "ProjectElement",
    props: ["projectname"],
    computed: {
        projectName() {
            return this.projectname;
        },
        githubLink() {
            switch (this.projectname) {
                case "Boiler Faves":
                    return "https://github.com/Purdue-ACM-SIGApp/BoilerFaves";
                case "HulaLoop":
                    return "https://github.com/symboxtra/HulaLoop";
                case "Personal Website":
                    return "https://github.com/epituch/Website";
                case "Purdue Orbital Ground Station GUI":
                    return "https://github.com/purdue-orbital/ground-station-GUI";
                case "Translate Game":
                    return "https://github.com/epituch/Translate-Game";
                default:
                    return null;
            }
        },
        linkText() {
            switch (this.projectname) {
                case "Boiler Faves":
                    return "Google Play";
                default:
                    return null;
            }
        },
        websiteLink() {
            switch (this.projectname) {
                case "Boiler Faves":
                    return "https://play.google.com/store/apps/details?id=com.lshan.boilerfaves&hl=en_US";
                default:
                    return null;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
$hulaloop-grey: #202020;
$hulaloop-orange: #fd5f00;
$purdue-gold: #c28e0e;
.boilerfaves {
    background: $purdue-gold;
}

.groundstation {
    background: $purdue-gold;
}

.hulaloop {
    background: $hulaloop-grey;
    .project-header {
        color: $hulaloop-orange;
    }
}

.translategame {
    background: teal;
    .project-header {
        color: white;
    }
}

.personalwebsite {
    background: dodgerblue;
    .project-header {
        color: white;
    }
}

.project-header {
    padding: 10px 5px 0;
}

.github-btn {
    margin-bottom: 20px;
    position: absolute;
    bottom: 0;
    left: 125px;
}

.googleplaybtn {
    margin-bottom: 80px;
    position: absolute;
    bottom: 0;
    left: 104px;
}
</style>