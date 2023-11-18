
export function makeActive(id) {
    
    this.active = id;
}

export function addAthlete() {
    // Logic to add an athlete
    this.athletes.push(this.newAthlete);
    this.showAddAthletePopup = false; // Fermer le pop-up après l'ajout
    this.newAthlete = {}; // Réinitialiser le formulaire
    console.log("Add athlete clicked");
    // Here you can add code to handle the addition of a new athlete
}
