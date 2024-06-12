// Affiche le message 'HELLO WORLD' sur la console
console.log('HELLO WORLD');

// Importer le module http
const http = require('http');

// Définir l'adresse IP et le port sur lesquels le serveur écoutera
const hostname = '127.0.0.1';
const port = 3000;

// Créer le serveur HTTP qui renverra une réponse avec le message "Hello Node!!!" dans un format HTML
const server = http.createServer((req, res) => {
    res.statusCode = 200; // Définir le code de statut de la réponse à 200 (OK)
    res.setHeader('Content-Type', 'text/html'); // Définir l'en-tête Content-Type de la réponse à text/html
    res.end('<h1>Hello Node!!!!</h1>\n'); // Envoyer la réponse contenant le message HTML
});

// Faire écouter le serveur sur le port et l'adresse IP spécifiés
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); // Afficher un message indiquant que le serveur est en cours d'exécution
});

// Importer le module fs (file system)
const fs = require('fs');

// Créer un fichier 'welcome.txt' avec le contenu 'Hello Node'
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File has been created'); // Afficher un message indiquant que le fichier a été créé avec succès
});

// Lire le contenu du fichier 'welcome.txt' en utilisant l'encodage 'utf8'
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); // Afficher le contenu du fichier lu
});