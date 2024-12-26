<template>
  <v-app class="page">
    <router-view/>
  </v-app>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css'

export default {
  name: 'App',
  data: () => ({
    pageWithoutNav: [
      'Login'
    ]
  })
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.page {
  background-color: #f5f5f5;
}
</style>
