<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="dashboarda">
          <v-list-tile-action>
            <v-icon>dashboarda</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="settings">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <transition name="scale" mode="out-in"><router-view source="aaaa"></router-view></transition>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: true
    }),
    methods:{
        dashboarda()
        {
            this.$router.push('/app?a=1')
        },
        settings()
        {
            this.$router.push('/test?a=1')
        }
    }
  }
</script>
<style>
.scale-enter-active{
    transition: all .5s;
}
.scale-enter{
    transform: translate3d(30px,0,0);opacity:0;
}
.scale-enter-to{
    transform: translate3d(0,0,0);opacity:1;
}
.scale-leave-active{
    transition: all .5s;
}
.scale-leave{
    transform: translate3d(0,0,0);opacity:1;
}
.scale-leave-to{
    transform: translate3d(30px,0,0);opacity:0;
}
</style>