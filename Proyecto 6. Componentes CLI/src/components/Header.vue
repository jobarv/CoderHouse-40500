<script setup>
defineProps({
    msg: {
        type: String,
        required: true
    }
})
</script>
<template>
    <div id="header">
        <h1>{{ msg }}</h1>
    </div>
</template>
<style>
#header {
    background-color: white !important;
    color: black;

}
</style>
