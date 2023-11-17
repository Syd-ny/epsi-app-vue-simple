import AddAthleteForm from '/src/components/AddAthleteForm.vue';

var demo = Vue.createApp({
    components : {
        AddAthleteForm
    },
	data() {
            return {
		active: "home",
		menuItems: [
			{id: 'home', name: 'Home'},
			{id: 'athletes_stats', name: 'Athlètes stats'},
			{id: 'athletes_infos', name: 'Athlètes infos'},
			{id: 'athletes_specialisations', name: 'Athlètes spécialisations'},
		],
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
		athletes: [] // liste pour stocker les athlètes
	}
	},

	methods: {
		makeActive(id) {
			
			this.active = id;
		},

		addAthlete() {
			// Logic to add an athlete
			this.athletes.push(this.newAthlete);
			this.showAddAthletePopup = false; // Fermer le pop-up après l'ajout
			this.newAthlete = {}; // Réinitialiser le formulaire
			console.log("Add athlete clicked");
			// Here you can add code to handle the addition of a new athlete
    	}
	}
}).mount('#main');