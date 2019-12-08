<template>
    <div>
        <div>
            <add-header></add-header>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  import Header from './components/Header.vue'
  export default{
    components: {
      addHeader: Header
    }
  }
</script>

<style>

</style>
