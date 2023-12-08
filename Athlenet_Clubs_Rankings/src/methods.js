
export function makeActive(id) {
    
    return id;
}

export function addClub(clubs, newClub) {
    const updatedClubs = [...clubs, newClub];
    // Retourne l'état mis à jour
    return {
        clubs: updatedClubs,
        showAddClubPopup: false,
        newClub: getInitialNewClubState()
    };
  }

function getInitialNewClubState() {
    return {
        nom: '',
        age: null,
        // ...autres propriétés...
    };
}

export default {
    // ... autres options ...
    created() {
        const savedClubs = localStorage.getItem('clubs');
        if (savedClubs) {
        this.clubs = JSON.parse(savedClubs);
        }
    },
}
