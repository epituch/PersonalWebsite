<template>
    <div id="app">
        <div class="main">
            <navbar></navbar>
            <transition :name="animationName">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import Navbar from './components/Navbar'

    export default {
        data() {
            return {
                animationName: 'slide0'
            }
        },
        components: {
            'navbar': Navbar,
        },
        watch: {
            '$route'(to, from) {
                //function changes the path depending on where the current view is at the time
                let toNum = this.translatePathToNumber(to.path);
                let fromNum = this.translatePathToNumber(from.path);
                if (toNum > fromNum) {
                    this.animationName = 'slide0';
                }
                else if (fromNum > toNum) {
                    this.animationName = 'slide1';
                }
                else {
                    console.error("Path went to itself, something is wrong");
                }
            }
        },
        methods: {
            translatePathToNumber(path) {
                //removes the first character because it is always the same
                let modedPath = path.substring(1);
                //assigns the path to a number based on where
                switch (modedPath) {
                    case 'home':
                        return 0;
                    case 'about-me':
                        return 1;
                    case 'projects':
                        return 2;
                    case 'resume':
                        return 3;
                    default:
                        console.error("INVALID ROUTE YOU MESSED SOMETHING UP");
                        return;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "assets/style/main";
</style>
