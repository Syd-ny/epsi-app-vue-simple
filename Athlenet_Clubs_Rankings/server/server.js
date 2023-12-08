import express from 'express';
import sqlite3 from "sqlite3";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const dbPath = 'C:\\Users\\sydne\\OneDrive\\Documents\\VueJS-exos\\CV-VueJS\\db\\athlenet';

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
    console.log('Connected to SQLite database.');
});

// API Endpoints

app.get('/test', (req, res) => {
    res.send('Le serveur fonctionne !');
});

app.get('/clubs', (req, res) => {
    // Code pour obtenir les clubs
    const query = `
        SELECT * FROM club
    `;

    db.all(query, [], (err, rows) => {
        if (err) {
            res.status(500).send({ error: err.message });
            return;
        }
        res.status(200).json(rows);
    });

});

app.post('/ajouter-resultat', async (req, res) => {
    const { clubId, saisonId, position } = req.body;

    try {
        // Obtenir la position de la saison précédente
        const saisonPrecedenteId = saisonId - 1;
        const positionPrecedente = await getPositionPrecedente(clubId, saisonPrecedenteId);

        // Calculer les points
        let points = calculerPoints(position, positionPrecedente);

    // Insérer ou mettre à jour le classement et les points dans la base de données
    const query = `INSERT INTO classements (club_id, saison_id, position, points_attribues)
                   VALUES (?, ?, ?, ?)
                   ON CONFLICT (club_id, saison_id) DO UPDATE SET position = ?, points_attribues = ?`;
        res.status(200).send({ message: 'Resultat ajouté avec succès' });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

function calculerPoints(positionActuelle, positionPrecedente) {

    // Calculer les points en fonction de la position
    let points;
    switch (positionActuelle) {
        case 1: points = 50; break;
        case 2: points = 25; break;
        case 3: points = 15; break;
        case 4: points = 10; break;
        case 5: points = 7; break;
        case 6: points = 5; break;
        case 7: points = 4; break;
        case 8: points = 3; break;
        case 9: points = 2; break;
        case 10: points = 1; break;
        default: points = 0;
    }

    // Doubler les points si le club a également terminé premier l'année précédente
    if (positionActuelle === 1 && positionPrecedente === 1) {
        points *= 2;
    } else if (positionActuelle === 1 && positionPrecedente === 2) {
        points *= 1.5;
    } else if (positionActuelle === 1 && positionPrecedente === 3) {
        points *= 1.25;
    } else if (positionActuelle === 2 && positionPrecedente === 1) {
        points *= 1.5;
    } else if (positionActuelle === 2 && positionPrecedente === 2) {
        points *= 1.25;
    } else if (positionActuelle === 2 && positionPrecedente === 3) {
        points *= 1.15;
    } else if (positionActuelle === 3 && positionPrecedente === 1) {
        points *= 1.25;
    } else if (positionActuelle === 3 && positionPrecedente === 2) {
        points *= 1.15;
    } else if (positionActuelle === 3 && positionPrecedente === 3) {
        points *= 1.1;
    }

    return points;
}

/**
 * Obtenir la position d'un club pour une saison spécifique.
 * @param {number} clubId - L'identifiant du club.
 * @param {number} saisonId - L'identifiant de la saison.
 * @returns {Promise<number|null>} - La position du club pour la saison, ou null si non trouvée.
 */
async function getPositionPrecedente(clubId, saisonId) {
    return new Promise((resolve, reject) => {
        const query = `SELECT position FROM classement WHERE club_id = ? AND saison_id = ?`;

        db.get(query, [clubId, saisonId], (err, row) => {
            if (err) {
                reject(err);
            } else {
                // Si la requête ne trouve pas de ligne, la position est inconnue (null)
                resolve(row ? row.position : null);
            }
        });
    });
}




    

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
