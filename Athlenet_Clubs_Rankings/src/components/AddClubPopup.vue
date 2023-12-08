<template>
	<div class="showAddClubPopup">
		<div class="popup-content">
			<button class="submit" @click="$emit('close-popup')">&times;</button>
			<!-- Formulaire d'ajout d'un club' -->
			<form @submit.prevent="$emit('add-club', newClub)">

				<!-- Attributs physiques -->
				<div v-for="key in infosClubKeys" :key="key">
					<input type="number" v-model="newClub.infosClub[key]" :placeholder="key">
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
