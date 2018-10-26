<template>
    <div>
        <section>
            <parallax src="images/laravue.png"></parallax>
        </section>
    </div>
</template>

<script>
    import Parallax from './parallax.vue';

    export default {
        components: {
            parallax: Parallax
        },
        data: function () {
            return {
                posts: []
            }
        },
        created() {
            console.log('get posts');
        }
    }
</script>