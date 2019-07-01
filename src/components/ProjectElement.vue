<template>
    <div :class="{ boilerfaves: projectName === 'Boiler Faves', distresshelper: projectName === 'Distress Helper',personalwebsite: projectName === 'Personal Website',
    corecmonitor: projectName === 'Purdue CoRec Monitor', splitsoundandroid: projectName === 'SplitSound Android', splitsoundweb: projectName === 'SplitSound Website'}">
        <h1 class="project-header">{{ projectName }}</h1>
        <h3 v-if="isInDevelopment" class="development-text"> (in development)</h3>
        <b-button :class="{ websitebtn: linkText === 'Visit Website', googleplaybtn: linkText === 'Google Play'}" class="btn btn-primary btn-lg" :href="websiteLink" v-if="websiteLink !== null"
                  target="_blank">{{ linkText }}
        </b-button>
        <b-button class="btn btn-primary btn-lg github-btn" :href="githubLink" target="_blank">GitHub</b-button>
    </div>
</template>

<script>
    export default {
        name: "ProjectElement",
        props: ['projectname'],
        computed: {
            projectName() {
                return this.projectname;
            },
            isInDevelopment() {
                return (this.projectname === 'SplitSound Android' || this.projectname === 'SplitSound Website');
            },
            githubLink() {
                switch (this.projectname) {
                    case 'Boiler Faves':
                        return 'https://github.com/Purdue-ACM-SIGApp/BoilerFaves';
                    case 'Purdue CoRec Monitor':
                        return 'https://github.com/Purdue-ACM-SIGApp/Purdue-CoRec-Monitor';
                    case 'SplitSound Website':
                        return 'https://github.com/symboxtra/SplitSound-Web';
                    case 'SplitSound Android':
                        return 'https://github.com/symboxtra/SplitSound-Android';
                    case 'Distress Helper':
                        return 'https://github.com/epituch/DistressHelper';
                    case 'Personal Website':
                        return 'https://github.com/epituch/Website';
                    default:
                        return null;
                }
            },
            linkText() {
                switch (this.projectname) {
                    case 'Boiler Faves':
                        return 'Google Play';
                    case 'Distress Helper':
                        return 'Visit Website';
                    case 'Purdue CoRec Monitor':
                        return 'Google Play';
                    case 'SplitSound Website':
                        return 'Visit Website';
                    default:
                        return null;
                }
            },
            websiteLink() {
                switch (this.projectname) {
                    case 'Boiler Faves':
                        return 'https://play.google.com/store/apps/details?id=com.lshan.boilerfaves&hl=en_US';
                    case 'Purdue CoRec Monitor':
                        return 'https://play.google.com/store/apps/details?id=club.sigapp.purduecorecmonitor';
                    case 'SplitSound Website':
                        return 'http://www.splitsound.tk/development/#/home';
                    case 'Distress Helper':
                        return 'https://epituch.github.io/DistressHelper/';
                    default:
                        return null;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $split-sound-grey: #202020;
    $split-sound-orange: #FD5F00;
    $purdue-gold: #C28E0E;
    .boilerfaves {
        background: $purdue-gold;
    }

    .corecmonitor {
        background: $purdue-gold;
    }

    .distresshelper {
        background: yellow;
    }

    .personalwebsite {
        background: dodgerblue;
        .project-header {
            color: white;
        }
    }

    .splitsoundandroid {
        background: $split-sound-grey;
        .project-header {
            color: $split-sound-orange;
        }
        .development-text {
            color: lightgray;
        }
    }

    .splitsoundweb {
        background: $split-sound-grey;
        .project-header {
            color: $split-sound-orange;
        }
        .development-text {
            color: lightgray;
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

    .websitebtn {
        margin-bottom: 80px;
        position: absolute;
        bottom: 0;
        left: 97px;
    }

    .googleplaybtn{
        margin-bottom: 80px;
        position: absolute;
        bottom: 0;
        left: 104px;
    }
</style>