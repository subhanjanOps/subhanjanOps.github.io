<template>
    <header>
        <div class="container">
            <b-navbar v-b-scrollspy="options" toggleable="lg" type="dark">
                <b-navbar-brand tag="h1" class="mb-0">
                    Neveena
                </b-navbar-brand>
                <a
                    :class="{ open: status.navOpen }"
                    @click.prevent="navOpen"
                    type="button"
                    aria-haspopup="menu"
                    aria-label="Open menu"
                    class="hamburger_menu"
                >
                    <span class="sr-only">menu</span>
                </a>
                <b-navbar-nav :class="{ show: status.navOpen }" class="ml-auto">
                    <b-nav-item
                        v-for="nav in navigation"
                        :key="nav.index"
                        @click="scrollToSection(nav.index)"
                        :class="{ active: nav.index === getCurrentSection }"
                    >
                        {{ nav.name }}
                    </b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </div>
    </header>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'NavBar',

    data() {
        return {
            status: {
                navOpen: false
            },
            options: {
                element: '#nav-scroller',
                offset: 70,
                method: 'position'
            },
            navigation: [
                {
                    name: 'Home',
                    index: 1
                },
                {
                    name: 'About',
                    index: 2
                },
                {
                    name: 'Portfolio',
                    index: 3
                },
                {
                    name: 'Contact',
                    index: 4
                }
            ]
        };
    },

    computed: {
        getCurrentSection() {
            return this.$store.state.navigation.currentSection;
        }
    },

    methods: {
        ...mapMutations({
            setCurrentSection: 'navigation/setCurrentSection'
        }),

        /**
         * Toggle menu section
        */
        navOpen() {
            this.status.navOpen = !this.status.navOpen;
        },

        /**
         * Scrolls to the selected section
         * {param|Number} index - index value of current selected
         */
        scrollToSection(index) {
            this.setCurrentSection(index);
            const screenWidth = window.innerWidth || document.documentElement.clientWidth;

            if (screenWidth > 767) {
                const el = document.querySelector('.main');
                moveTo(el, index);
            } else {
                const el = document.querySelector(`section[data-index="${index}"]`).offsetTop;
                scrollTo({
                    top: el - 40,
                    left: 0,
                    behavior: 'smooth'
                });
            }

            this.navOpen();
        }
    }
};
</script>

<style lang="scss" scoped>
    header {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 6;

        @include media-breakpoint-down(sm) {
            height: 64px;
           background-color: $primary;
        }
    }

    @include media-breakpoint-up(md) {
        .viewing-page-2,
        .viewing-page-3,
        .viewing-page-5 header {
            .navbar-brand {
                color: $primary;
            }

            .hamburger_menu {
                &:before,
                &:after {
                    background-color: $primary;
                }
            }
        }
    }

    header .navbar  {
        padding: 0.5rem 0rem;
        justify-content: space-between;
        @include media-breakpoint-down(sm) {
            padding: 0rem;
        }
        h1 {
            font-size: 35px;
            font-weight: 700;
            color: $headings;
            letter-spacing: 1px;
        }
    }

    .navbar-nav {
        position: absolute;
        right: -7px;
        top: 7px;
        background-color: $primary;
        padding: 0;
        border-radius: 4px;
        flex-direction: column;
        z-index: 1;
        height: 0;
        width: 0;
        transition: all 0.2s linear;
        overflow: hidden;

        @include media-breakpoint-up(md) {
            top: 23px;
        }
        .nav-link {
            color: #c0c0c1;
            font-size: 20px;
        }

        &.show {
            width: 200px;
            height: 230px;
            padding: 20px;
            box-shadow: 0 0 20px #272727;
        }

        .nav-item {
            width: 128px;
            &.active {
                font-weight: 600;
            }
        }
    }

    .hamburger_menu {
        position: relative;
        display: block;
        height: 22px;
        width: 85px;
        cursor: pointer;
        -moz-appearance: none;
        -webkit-appearance: none;
        transition: all 0.7s ease;
        z-index: 2;

        &:before,
        &:after {
            content: '';
            width: 58px;
            height: 3px;
            right: 0;
            position: absolute;
            transition: 0.2s ease;
            transform: rotate(0deg);
            background-color: $headings;
        }

        &:before {
            top: 0;
        }

        &:after {
            width: 42px;
            top: 1em;
        }

        &.open {
            &:before,
            &:after {
                background-color: #c0c0c1;
            }
            &:before {
                top: 16px;
                transform: rotate(45deg);
                width: 34px;
            }
            &:after {
                width: 34px;
                transform: rotate(-45deg);
            }
        }
    }
</style>
