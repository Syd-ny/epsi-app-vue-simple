<template>
	<div class="showAddClubPopup">
		<div class="popup-content">
			<button class="submit" @click="$emit('close-popup')">&times;</button>
			<!-- Formulaire d'ajout d'un club' -->
			<form @submit.prevent="ajouterClub">

				<div>
					<label for="nom">Nom du club:</label>
					<input id="nom" type="text" v-model="newClub.nom">
				</div>
				<div>
					<label for="image">URL de l'image:</label>
					<input id="image" type="text" v-model="newClub.image">
				</div>

				<button type="submit">Ajouter</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    Club: Object,
    infosClubKeys: Array,
  },

  methods: {
  ajouterClub() {
    // Envoi des données du club au serveur
    fetch('http://localhost:3000/ajouter-club', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.newClub)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de l\'ajout du club');
      }
      return response.json();
    })
    .then(data => {
      // Traiter la réponse du serveur
      this.$emit('close-popup');
    })
    .catch(error => {
      console.error('Erreur:', error);
    });
  }
}
}
</script>

<style>
/*-------------------------
		Add Club boutton
	--------------------------*/
	.submit {
		background-color: #4CAF50; /* Vert */
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 40px;
		cursor: pointer;
		border: none;
		border-radius: 4px;
		transition-duration: 0.4s;
		margin: 0; /* Enlève la marge */

	}

	.submit:hover {
		background-color: #45a049; /* Un vert plus foncé */
	}

	/*-------------------------
		Pop-up formulaire création club
	--------------------------*/

	.showAddClubPopup {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 9999;
		cursor: pointer;
	}

	.popup-content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 20px;
		background: white;
		z-index: 10000;
		cursor: auto;
		width: 50%; /* Largeur spécifique */
	}

	.close {
		position: absolute;
		top: 10px;
		right: 20px;
		font-size: 30px;
		cursor: pointer;
	}

</style>
