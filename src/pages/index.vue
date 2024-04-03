<template>
    <div class="home">
        <navBar></navBar>
        <router-view></router-view>
    </div>
</template>

<script>

import navBar from '@/componnents/navBar'

export default {
    components: { navBar },
    mounted(){
    }
}
</script>
<style lang="scss" scoped>
.home{
    margin: 70px auto;
    margin-bottom: 0px;
    width: 70vw;
}
</style>
