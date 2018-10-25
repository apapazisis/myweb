<template>
    <div>
        my blog
    </div>
</template>

<script>
    export default {
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