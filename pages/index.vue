<template>
    <div>
        <nav-bar />
        <div id="nav-scroller" class="main">
            <banner id="home" :content="homeSection" />
            <about id="about" :content="aboutSection" />
            <portfolio id="portfolio" :content="workSection" />
            <contact id="contact" :content="contactSection" />
        </div>
    </div>
</template>

<script>
import NavBar from '~/components/NavBar';
import Banner from '~/components/Banner';
import About from '~/components/About';
import Portfolio from '~/components/Portfolio';
import Contact from '~/components/Contact';

export default {
    head() {
        return {
            script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
        };
    },

    components: {
        NavBar,
        Banner,
        About,
        Portfolio,
        Contact
    },

    async asyncData({ payload }) {
        return {
            homeSection: await require(`~/assets/content/home.json`),
            aboutSection: await require(`~/assets/content/about.json`),
            workSection: await require(`~/assets/content/work.json`),
            contactSection: await require(`~/assets/content/contact.json`)
        };
    },

    mounted() {
        /* eslint-disable */
        this.$nextTick(() => {
            onePageScroll('.main', {
                sectionContainer: 'section',
                easing: 'ease',
                animationTime: 1000,
                pagination: true,
                updateURL: false,
                afterMove: (index) => {
                    this.$store.commit('navigation/setCurrentSection', parseInt(index));
                },
                loop: false,
                keyboard: true,
                responsiveFallback: 767
            });
        })
    }
};
</script>

