<script setup>
defineProps({
    msg: {
        type: String,
        required: true
    }
})
</script>
<template>
    <div id="body">
        <h1>{{ msg }}</h1>
    </div>
</template>
<style>
#body {
    background-color: red;
    color: white;
}
</style>