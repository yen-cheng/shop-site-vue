<template>
    <div class="container">
        <h1 class="text-center">{{pid}}</h1>
        <router-view></router-view>
    </div>
</template>

<script>
export default{
    data(){
        return{
            pid: this.$route.params.id
        }
    }
}
</script>