<template>
    <section class="about">
        <div class="container">
            <h2 v-html="content.title" />
            <div v-html="content.content" class="text" />
            <a href="https://www.linkedin.com/in/neveenaferrao/" target="_blank" rel="external nofollow noreferrer" class="btn btn-link">
                <div class="btn-custom">
                    Connect with me <strong>LinkedIn</strong>
                </div>
            </a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'About',

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
    // Colors
    $bg-color: #f7f7f7;
    $dot-color: rgba(61, 25, 94, 0.25);

    .about {
        padding: 50px 0;
        display: flex;
        align-items: center;
        background: linear-gradient(90deg, #f7f7f7 20px, transparent 1%) center, linear-gradient(#f7f7f7 20px, transparent 1%) center, rgba(61, 25, 94, 0.1);
        background-size: 22px 22px;

        @include media-breakpoint-up(md) {
            padding: 80px 0;
            background: linear-gradient(90deg, $bg-color (22px - 2px), transparent 1%) center, linear-gradient($bg-color (22px - 2px), transparent 1%) center, $dot-color;
            background-size: 22px 22px;
            min-height: 100vh;
        }

        h2 {
            color: $primary;

            @include media-breakpoint-up(md) {
                margin-bottom: 30px;
            }

            /deep/ span {
                font-weight: 700;
            }
        }

        .text /deep/ p {
            font-size: 16px;
            color: #474747;

            @include media-breakpoint-up(md) {
                font-size: 22px;
            }

            a {
                font-weight: 700;
                text-decoration: underline;

                &:hover {
                    color: #607D8B;
                }
            }
        }
    }

    .btn-link {
        position: relative;
        overflow: hidden;
        z-index: 1;
        padding: 0;
        font-weight: 500;
        font-size: 15px;
        text-decoration: none;

        @include media-breakpoint-up(md) {
            font-size: 20px;
            margin-top: 30px;
        }
    }

    .btn-custom {
        border-color: $primary;
        color: $primary;
        background-color: $secondary;

        &:before {
            background-color: $primary;
        }

        &:hover {
            color: $secondary;
            background-color: transparent;
            &:before {
                transform: translateX(0px);
                border-color: $primary;
            }
        }
    }
</style>
