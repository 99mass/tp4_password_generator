const password_generer= document.getElementById("password_generer");
const copyEl = document.getElementById("copy");
const taille = document.getElementById("taille");
const Majuscule = document.getElementById("Majuscule");
const minuscule = document.getElementById("minuscule");
const chiffre = document.getElementById("chiffre");
const symbole = document.getElementById("symbole");
const generateur = document.getElementById("generateur");

// Déclaration des variables qui stockent les caractères utilisables pour générer le mot de passe
const lettreMajuscule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lettreMinuscule = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "%&*_+=!@#$";

    
// Fonction qui retourne une lettre majuscule aléatoire
function getOnLettreMajuscule() {
    return lettreMajuscule[Math.floor(Math.random() * lettreMajuscule.length)];
}

 // Fonction qui retourne une lettre minuscule aléatoire
function getOnLettreMinuscule() {
    return lettreMinuscule[Math.floor(Math.random() * lettreMinuscule.length)];
}

// Fonction qui retourne un chiffre aléatoire
function getOnchiffre() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

// Fonction qui retourne un symbole aléatoire
function getOnSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Fonction qui génère le mot de passe en fonction des critères choisis par l'utilisateur
function generatePassword() {
    var len = taille.value; // longueur du mot de passe choisie par l'utilisateur
    //on verifie si la lonfgueu donne est compris entre 15 et 20 
    if(len<15 || len>20){ alert("La Longueur du Mot de Passe doit etre compris entre 15 et 20") ; } else{
    let password = "";   // variable qui stocke le mot de passe généré

    if (Majuscule.checked) { // si l'utilisateur a coché la case pour inclure des lettres majuscules
        password += getOnLettreMajuscule();  // ajouter une lettre majuscule aléatoire au mot de passe
    }

    if (minuscule.checked) { // si l'utilisateur a coché la case pour inclure des lettres minuscules
        password += getOnLettreMinuscule();  // ajouter une lettre minuscule aléatoire au mot de passe
    }

    if (chiffre.checked) {   // si l'utilisateur a coché la case pour inclure des chiffres
        password += getOnchiffre();  // ajouter un chiffre aléatoire au mot de passe
    }

    if (symbole.checked) {   // si l'utilisateur a coché la case pour inclure des symboles
        password += getOnSymbol();  // ajouter un symbole aléatoire au mot de passe
    }

// Ajouter des caractères aléatoires supplémentaires jusqu'à atteindre la longueur choisie
    for (let i = password.length; i < len; i++) {
        const caract = generateCarctere();   // obtenir un caractère aléatoire parmi ceux sélectionnés par l'utilisateur
        password += caract;
    }

    //mettrele mot de passe dans la zone header
    password_generer.innerText = password;
}
}

function generateCarctere() {


    const listeCaractere = [];
    // Si l'option majuscule est cochée, ajouter une lettre majuscule à la liste des caractères possibles
    if (Majuscule.checked) {
        listeCaractere.push(getOnLettreMajuscule());
    }
    // Si l'option minuscule est cochée, ajouter une lettre minuscule à la liste des caractères possibles
    if (minuscule.checked) {
        listeCaractere.push(getOnLettreMinuscule());
    }
    // Si l'option chiffre est cochée, ajouter un chiffre à la liste des caractères possibles
    if (chiffre.checked) {
        listeCaractere.push(getOnchiffre());
    }
    // Si l'option symbole est cochée, ajouter un symbole à la liste des caractères possibles
    if (symbole.checked) {
        listeCaractere.push(getOnSymbol());
    }
    // Si aucune option n'est cochée, retourner une chaîne de caractères vide
    if (listeCaractere.length === 0) return "";
    // Retourner un caractère aléatoire parmi la liste des caractères possibles
    return listeCaractere[Math.floor(Math.random() * listeCaractere.length)];
}

// Écouter le clic sur le bouton de génération de mot de passe et appeler la fonction de génération de mot de passe
generateur.addEventListener("click", generatePassword);


// Écouter le clic sur le bouton de copie et copier le mot de passe généré dans le presse-papiers
copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = password_generer.innerText;
    // Si aucun mot de passe n'a été généré, ne rien faire
    if (!password) {
        return;
    }
// Copier le mot de passe dans le presse-papiers
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
});

// Fonction pour afficher le bouton de génération de mot de passe
function showGenerater() {
    generateur.style.display="block"
}

