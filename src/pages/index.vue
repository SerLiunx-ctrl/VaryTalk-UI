<template>
    <div class="home">
        <navBar></navBar>
        <router-view></router-view>
    </div>
</template>
<script>
import {get} from '@/common/api.js'
import navBar from '@/componnents/navBar'
export default {
    components: { navBar },
    mounted(){
      get().then(res=>{
        
      }).catch(err=>{
        
      })
    }
}
</script>
<style lang="scss" scoped>
.home{
    margin: 0 auto;
    width: 70vw;
}
</style>