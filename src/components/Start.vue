<template>
    <div class="hello">
        {{ text }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: 'Hello World'
        }
    }
}
</script>

<style scoped lang="less">
.hello {
    color: tomato;
}
</style>