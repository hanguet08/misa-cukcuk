<template>
    <div v-bind:class="[type, color]">
        {{text}}
    </div>
</template>
<script>
export default {
    name: 'TheButton',
    props: {
        text: String,
        color: String,
        type: String
    }
}
</script>
<style>
    
</style>