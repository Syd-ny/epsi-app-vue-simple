<template>
  <div id="app">
    <navigation-menu 
      :menu-items="menuItems" 
      :active="active" 
      @update-active="active = $event">
    </navigation-menu>

    <button class="submit" @click="showAddAthletePopup = true">Créer un Athlète</button>

    <add-athlete-popup
      v-if="showAddAthletePopup"
      :new-athlete="newAthlete"
      :infos-athlete-keys="infosAthleteKeys"
      :attributs-physiques-keys="attributsPhysiquesKeys"
      :attributs-techniques-keys="attributsTechniquesKeys"
      @close-popup="showAddAthletePopup = false"
      @add-athlete="addAthlete">
    </add-athlete-popup>
  </div>
</template>

<script>
import { appData } from './data.js';
import { makeActive, addAthlete } from './methods.js';
import NavigationMenu from './components/NavigationMenu.vue';
import AddAthletePopup from './components/AddAthletePopup.vue';

export default {
  components: {
    NavigationMenu,
    AddAthletePopup
  },
  data() {
      return appData;
  },
  methods: {
    makeActive, // Utilisation de la méthode importée
    addAthlete  // Utilisation de la méthode importée
  }
}
</script>

<style>
/* Styles globaux... */
</style>
