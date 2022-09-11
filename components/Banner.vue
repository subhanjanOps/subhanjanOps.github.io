<template>
    <section>
        <div class="container">
            <h2>Hello <span class="wave">👋</span></h2>
            <h2>
                <span class="title" />
            </h2>
            <blockquote>
                <p>
                    {{ content.quote }}
                </p>
                <!-- <small>  — {{ content.author }}</small> -->
            </blockquote>
            <a :href="content.resume" class="btn" download>
                <div class="btn-custom">
                    Download Resume
                </div>
            </a>
            <div @click.prevent="scrollDown(2)" class="scroll-down">
                <i class="arrow" />
            </div>
        </div>
    </section>
</template>

<script>
import Typed from 'typed.js';

export default {
    name: 'Banner',

    props: {
        content: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },

    mounted() {
        const options = {
            strings: ['My name is Neveena Ferrao', 'I\'m a Frontend Developer.'],
            typeSpeed: 50
        };
        if (process.browser) {
            this.$nextTick(() => {
                /* eslint-disable no-unused-vars */
                const typed = new Typed('.title', options);
            });
        }
    },

    methods: {
        /**
         * Scrolls to the next section
         * { param|Number} index - index value of current selected
         */
        scrollDown(index) {
            this.$store.commit('navigation/setCurrentSection', index);
            const el = document.querySelector('.main');
            moveTo(el, index);
        }
    }
};
</script>
<style>
    .typed-cursor {
        font-size: 40px;
    }

    .typed-cursor.typed-cursor--blink {
        opacity: 0;
    }
</style>
<style lang="scss" scoped>
    section {
        position: relative;
        padding: 60px 0;
        text-align: center;
        min-height: 100vh;
        display: flex;
        align-items: center;
        background-color: $primary;
        color: #ffffff;

        @include media-breakpoint-up(md) {
             padding: 90px 0;
        }

        h2 {
            font-size: 34px;
            @include media-breakpoint-up(md) {
                font-size: 40px;
            }
        }
    }

    .title {
        color: $headings;
        font-size: 38px;
        @include media-breakpoint-up(md) {
            font-size: 53px;
        }
    }

    span.wave {
        animation-name: wave-animation;
        animation-duration: 2.5s;
        animation-iteration-count: infinite;
        transform-origin: 70% 70%;
        display: inline-block;
    }

    @keyframes wave-animation {
        0% { transform: rotate(  0.0deg) }
        10% { transform: rotate(-10.0deg) }
        20% { transform: rotate( 12.0deg) }
        30% { transform: rotate(-10.0deg) }
        40% { transform: rotate(  9.0deg) }
        50% { transform: rotate(  0.0deg) }
        100% { transform: rotate(  0.0deg) }
    }

    blockquote {
        max-width: 540px;
        margin: 1.2rem auto;
        p {
            margin-bottom: 0.5rem;
        }
    }

    .btn {
        margin-top: 30px;
        position: relative;
        overflow: hidden;
        z-index: 1;
        padding: 0;
    }

    .scroll-down {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 30px;
        animation: bounce 0.5s infinite alternate;
        cursor: pointer;
        display: none;

        @include media-breakpoint-up(md) {
            display: block;
        }
    }

    i {
        border: solid #ffffff;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 13px;
        margin-top: 70px;
        transform: rotate(45deg);
    }

    @keyframes bounce {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(-20px);
        }
    }
</style>
