<template>
    <div>
        <section>
            <parallax src="images/laravel.jpg"></parallax>
        </section>
        <section>
            <about></about>
        </section>
        <section>
            <parallax src="images/vuejs.png" :height="400"></parallax>
        </section>
        <section>
            <skills></skills>
        </section>
    </div>
</template>

<script>
    import Parallax from './parallax.vue';
    import About from './about.vue';
    import Skills from './skills.vue';

    export default {
        components: {
            parallax: Parallax,
            about: About,
            skills: Skills
        }
    }
</script>