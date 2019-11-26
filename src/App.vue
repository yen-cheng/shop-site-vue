<template>
    <div class="container">
        <div class="row">
            <div>
                <add-header></add-header>
                <router-view></router-view>
            </div>
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
