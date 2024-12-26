<template>
      <v-layout>
        <v-app-bar
          color="primary"
          prominent
        >
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  
          <v-toolbar-title>Tournaments</v-toolbar-title>
  
          <v-spacer></v-spacer>
  
          <template v-if="$vuetify.display.mdAndUp">
            <v-btn icon="mdi-magnify" variant="text"></v-btn>
  
            <v-btn icon="mdi-filter" variant="text"></v-btn>
          </template>
  
          <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
        </v-app-bar>
  
        <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
          temporary
        >
          <v-list
            :items="items"
          ></v-list>
        </v-navigation-drawer>
  
        <v-main style="height: 500px;">
          <v-slot></v-slot>
        </v-main>
      </v-layout>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Tournament 1',
        value: 'tournament1',
      },
      {
        title: 'Tournament 2',
        value: 'tournament2',
      },
      {
        title: 'Tournament 3',
        value: 'tournament3',
      },
    ],
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>