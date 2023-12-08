<template>
  <div id="app">
    <navigation-menu 
      :menu-items="menuItems" 
      :active="active" 
      @update-active="handleMakeActive">
    </navigation-menu>

    <button class="submit" @click="showAddClubPopup = true">Créer un Club</button>

    <add-club-popup
      v-if="showAddClubPopup"
      :club="Club"
      :infos-club-keys="infosClubKeys"
      @close-popup="showAddClubPopup = false"
      @add-club="handleAddClub">
    </add-club-popup>

    <div class="club-grid">
      <!-- En-tête de la grille -->
      <div class="club-grid-header">
        <div class="grid-header">Classement</div>
        <div class="grid-header">Image</div>
        <div class="grid-header">Nom du club</div>
        <div class="grid-header">points</div>
      </div>
      <!-- Autres en-têtes de colonne si nécessaire -->

      <!-- Composants ClubComponent pour chaque club -->
      <ClubComponent 
        v-for="(club, index) in clubs" 
        :key="club.id" 
        :club="club" 
        :classement="index + 1"
      />
    </div>

  </div> 
</template>

<script>
import appData from './data.js';
import { makeActive, addClub } from './methods.js';
import NavigationMenu from './components/NavigationMenu.vue';
import AddClubPopup from './components/AddClubPopup.vue';
import ClubComponent from './components/ClubComponent.vue';

export default {
  components: {
    NavigationMenu,
    AddClubPopup,
    ClubComponent
  },
  data() {
      return {
        clubs:[],
        menuItems: [/*... vos éléments de menu ...*/],
        active: '',
        showAddClubPopup: false,
      };
  },

  mounted() {
    this.fetchClubs();
  },
  methods: {
    handleMakeActive(id) {
      this.active = makeActive(id);
    },
    handleAddClub(Club) {
      const newState = addClub(this.clubs, Club);
      this.clubs = newState.clubs;
      
      // Sauvegarder les clubs dans LocalStorage
      localStorage.setItem('clubs', JSON.stringify(this.clubs));
      this.showAddClubPopup = newState.showAddClubPopup;
      this.Club = newState.clubs;
    },

    fetchClubs() {
      fetch('http://localhost:3000/clubs')
        .then(response => {
          if (!response.ok) {
            throw new Error('Erreur réseau');
          }
          return response.json();
        })
        .then(data => {
          console.log("Données récupérées :", data); // Vérifiez les données ici
          this.clubs = data; // Assurez-vous que cela correspond à la structure des données
        })
        .catch(error => console.error('Erreur:', error));

    },
  },
}
</script>

<style>
/* Styles globaux... */

.club-grid {
  display: grid;
  grid-template-columns: 1fr; /* Une colonne pour les composants ClubComponent */
  gap: 5px;
}

.grid-header {
  font-weight: bold;
  text-align: center;
  background-color: #f3f3f3; /* Couleur de fond pour l'en-tête */
}

.club-grid-header {
  display: grid;
  grid-template-columns: 1fr 4fr 10fr 2fr; /* Quatre colonnes pour l'en-tête */
  background-color: #f3f3f3;
  text-align: center;
  font-weight: bold;
}
</style>
