export const appData = {
    active: "home",
    menuItems: [
      { id: 'home', name: 'Home' },
      { id: 'athletes_stats', name: 'Athlètes stats' },
      { id: 'athletes_infos', name: 'Athlètes infos' },
      { id: 'athletes_specialisations', name: 'Athlètes spécialisations' },
    ],
    newAthlete: {
      infosAthlete: {
        nom: '',
        age: null,
        taille: null,
        poids: null,
      },
      attributsPhysiques: {
        appuis: null,
        // ... autres attributs ...
      },
      attributsTechniques: {
        haies: null,
        // ... autres attributs ...
      }
    },
    infosAthleteKeys: ['nom', 'age', 'taille', 'poids'],
    attributsPhysiquesKeys: ['appuis', 'endurance', 'force', 'vitesse', 'agilite', 'coordination', 'explosivité', 'intelligence', 'mental', 'perseverance', 'puissance', 'resistance'],
    attributsTechniquesKeys: ['haies', 'virages', 'marche', 'depart', 'course', 'hauteur', 'longueur', 'perche', 'tripleSaut', 'poids', 'disque', 'marteau', 'javelot'],
    showAddAthletePopup: false,
    athletes: []
  };
  