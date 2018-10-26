<template>
    <v-parallax :src="src" :height="height">
        <v-layout column align-center justify-center class="white--text">
            <h1 class="white--text mb-2 display-1 text-xs-center">Apostolos Papazisis</h1>
            <div class="subheading mb-3 text-xs-center">Laravel & Vue.js Developer</div>
        </v-layout>
    </v-parallax>
</template>

<script>
    export default {
        props: {
            src: {
                type: String
            },
            height: {
                type: Number,
                default: 600
            }
        }
    }
</script>