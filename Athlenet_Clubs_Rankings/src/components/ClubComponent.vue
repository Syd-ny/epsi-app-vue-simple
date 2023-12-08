<!-- ClubComponent.vue -->
<template>
    <div class="club-row">
      <!--<img :src="clubs.image" alt="" class="club-image">-->
      <div class="club-classement">
        {{ classement }}
      </div>
      <img :src="club.image" alt="" class="club-image">
      <div class="club-name">{{ club.nom }}</div>
      <div class="club-points">{{ club.points }}</div>
      <!-- Autres informations du club -->
    </div>
</template>
  
  

<script>

export default {
    props: {
        club: Object,
        classement: Number
    },

    computed: {
    // Ajoutez d'autres propriétés calculées pour différentes disciplines
  }
}
</script>

<style>
.club-row {
  display: grid;
  grid-template-columns: 1fr 4fr 10fr 2fr; /* Même disposition que .club-grid */
  align-items: center;
  gap: 5px;
  padding: 2px;
  border-bottom: 1px solid #ddd;
  background-color: #f9f9f9;
  
}
  
.club-image {
  width: 70px; /* Ajustez la taille si nécessaire */
  height: 70px; /* Assurez-vous que l'image garde ses proportions */
  justify-self: center; /* Centrer l'image dans sa colonne */
}

.club-name {
  /* Style pour le nom du club */
  font-weight: bold;
  justify-self: center;
}

.club-points {
  justify-self: center; 
  
}

.club-classement{
  justify-self: center;
  font-size: larger;
  font-weight: bold;
  font-style: italic;
  color: red;
}
  
  
</style>