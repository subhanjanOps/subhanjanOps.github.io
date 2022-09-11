<template>
    <footer>
        <hr>
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-sm-6 col-xs-12">
                    <p class="copyright-text text-left">
                        Copyright &copy;Neveena {{ year }} | All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',

    data() {
        return {
            year: new Date().getFullYear()
        };
    }
};
</script>

<style lang="scss" scoped>
    footer {
        margin-top: 100px;
        color: rgba(255, 255, 255, 0.6);
    }
    hr {
        border-top: 2px solid rgba(255, 171, 80, 0.3);
    }
</style>
