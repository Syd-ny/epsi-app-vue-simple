<template>
  <div v-if="showAddAthletePopup" class="popup">
		<div class="popup-content">
			<span class="close" v-on:click="showAddAthletePopup = false">&times;</span>
			<!-- Formulaire d'ajout d'athlète -->
			<form v-on:submit.prevent="addAthlete">
				<!-- Infos générales -->
				<div v-for="key in infosAthleteKeys" :key="key">
					<input type="number" v-model="newAthlete.infosAthlete[key]" :placeholder="key">
				</div>

				<!-- Attributs physiques -->
				<div v-for="key in attributsPhysiquesKeys" :key="key">
					<input type="number" v-model="newAthlete.attributsPhysiques[key]" :placeholder="key">
				</div>
	
					<!-- Attributs techniques -->
				<div v-for="key in attributsTechniquesKeys" :key="key">
					<input type="number" v-model="newAthlete.attributsTechniques[key]" :placeholder="key">
				</div>

				<button type="submit">Ajouter</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    newAthlete: {
			infosAthlete: {
				nom: '',
				age: null,
				taille: null, // en cm ou mètres
				poids: null, // en kg
			},
			attributsPhysiques: {
				appuis: null,
				endurance: null,
				force: null,
				vitesse: null,
				agilite: null,
				coordination: null,
				explosivite: null,
				intelligence: null,
				mental: null,
				perseverance: null,
				puissance: null,
				resistance: null
			},
			attributsTechniques: {
				haies: null,
				virages: null,
				marche: null,
				depart: null,
				course: null,
				hauteur: null,
				longueur: null,
				perche: null,
				tripleSaut: null,
				poids: null,
				disque: null,
				marteau: null,
				javelot: null
			}
		},

		infosAthleteKeys: ['nom','age','taille','poids'],
		attributsPhysiquesKeys: ['appuis', 'endurance', 'force', 'vitesse', 'agilite', 'coordination', 'explosivité', 'intelligence', 'mental', 'perseverance', 'puissance', 'resistance'],
        attributsTechniquesKeys: ['haies', 'virages', 'marche', 'depart', 'course', 'hauteur', 'longueur', 'perche', 'tripleSaut', 'poids', 'disque', 'marteau', 'javelot'],

		showAddAthletePopup: false,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
