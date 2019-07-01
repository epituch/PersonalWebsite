import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Resume from './components/Resume'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about-me',
            component: AboutMe
        },
        {
            path: '/projects',
            component: Projects
        },
        {
            path: '/resume',
            component: Resume
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})
