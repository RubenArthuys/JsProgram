/* 
Activité : gestion des contacts
Par Ruben © 2018
*/
class Contacts{
	constructor(nom, prenom){
		this.nom = nom;
		this.prenom = prenom;
	}
	getNom(){
		return this.nom;
	}
	getPrenom(){
		return this.prenom;
	}
}

const listeContact = [];
listeContact.push(new Contacts("Lévisse", "Carole"));
listeContact.push(new Contacts("Nelsonne", "Mélodie"));

function afficher(){
	listeContact.forEach(key => { console.log("Nom: "+key.getNom()+", Prenom: "+key.getPrenom());
	});
}

function addContact(){
	let contact = {};
	contact.nom = prompt("Entrez votre nom");
	contact.prenom = prompt("Entrez votre prenom");
	listeContact.push(new Contacts(contact.nom, contact.prenom));
	return console.log("Le nouveau contact a bien été ajouté");
}

function options(){
	console.log("\n1: Lister les contacts");
	console.log("2: Ajouter un contact");
	console.log("0: Quitter le programme\n\n");
}

console.log("Bienvenue dans le gestionnaire de contacts");
options();

while(true)
{
	let choix = prompt("Hello, choisissez une option:");
	if (choix === "1"){
		console.log("\nVoici la liste des contacts:");
		afficher();
		options();
	}
	else if (choix === "2"){
		addContact();
		options();
	}
	else if (choix === "0"){
		console.log("\nAu revoir et merci (＾▽＾)");
		break;
	}
	else{ 
		console.log("Veuillez choisir un (bon) numéro");
	}
}


