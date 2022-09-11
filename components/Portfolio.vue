<template>
    <section class="portfolio">
        <div class="container">
            <h2 v-html="content.title" />
            <div v-html="content.text" class="text" />
        </div>
    </section>
</template>

<script>
export default {
    name: 'Portfolio',

    props: {
        content: {
            type: Object,
            default: () => {
                return {};
            }
        }
    }
};
</script>

<style lang="scss" scoped>
    .portfolio {
        background-color: $secondary;
        padding: 70px 0;
        display: flex;
        align-items: center;
        @include media-breakpoint-up(md) {
            min-height: 100vh;
        }
    }

    h2 {
        color: $primary;

        @include media-breakpoint-up(md) {
            margin-bottom: 30px;
        }
    }

    .text {
        font-size: 17px;

        @include media-breakpoint-up(md) {
            font-size: 22px;
        }

        /deep/ a {
            font-weight: 600;
            text-decoration: underline;
        }
    }
</style>
