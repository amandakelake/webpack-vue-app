<template>
    <div class="container">hello {{ msg }}</div>
</template>;

<script>
export default {
    data() {
        return {
            msg: 'webpack'
        };
    }
};
</script>

<style lang="less" scoped>
.container {
    color: blue;
}
</style>
