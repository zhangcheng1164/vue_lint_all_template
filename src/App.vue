<template>
  <div id="app">
    <myHeader></myHeader>
    <mySider></mySider>
    <main id="content">
      content
    </main>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import MyHeader from '@/components/Header'
import MySider from '@/components/Sider'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    MyHeader,
    MySider,
  },
}
</script>

<style lang="scss">
#app {
  background: #ffc0cb;
  color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  text-align: center;
}

#content {
  background: #800080;
  flex: 1;
}
</style>
