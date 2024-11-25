# FUT Team Builder 

## Description du Projet  
**FUT Team Builder** est une application interactive permettant aux utilisateurs de créer, personnaliser et gérer leur équipe **Ultimate Team (FUT)**. Elle offre une expérience immersive grâce à des formulaires dynamiques, une gestion efficace des données via **localStorage**, et une interface utilisateur intuitive.  

L'application respecte les formations tactiques courantes comme **4-4-2** et **4-3-3** et inclut un système de calcul de chimie basé sur les liens entre joueurs.  

---

## Fonctionnalités Clés  
### **1. Intégration UI et Ajout Dynamique des Joueurs**
- Ajout de joueurs via un formulaire avec des champs pour le nom, la position, la note et les statistiques.  
- Placement automatique des joueurs en fonction de la formation choisie (**4-4-2**, **4-3-3**, etc.).  

### **2. Positionnement des Joueurs**
- Respect des positions selon la formation tactique sélectionnée :  
  - **4-3-3** : 1 GK, 2 CB, 1 LB, 1 RB, 3 CM, 1 LW, 1 RW, 1 ST.  
  - **4-4-2** : 1 GK, 2 CB, 1 LB, 1 RB, 2 CM, 1 RM, 1 LM, 2 ST (Bonus).  
- Mise à jour dynamique des positions lors du changement de formation.  

### **3. Gestion des Cartes de Joueurs**
- Ajouter, modifier et supprimer les cartes de joueurs via l'interface.  
- Limitation à **11 joueurs** dans l'équipe principale, avec possibilité d'ajouter des joueurs réservistes.  

### **4. Calcul de la Chimie d'Équipe (Bonus)**
- Calcul automatique basé sur des règles :  
  - **Position correcte** : +10 points.  
  - **Lien fort (club)** : +3 points.  
  - **Lien moyen (ligue)** : +2 points par joueur adjacent.  
  - **Lien faible (nationalité)** : +1 point.  
- Score total affiché pour l'équipe.  

### **5. LocalStorage pour Sauvegarde des Données (Bonus)**
- Sauvegarde des formations et des données des joueurs.  
- Chargement automatique des configurations enregistrées.  

### **6. Drag & Drop pour Réorganisation (Bonus)**
- Réorganisation des joueurs via une fonctionnalité de glisser-déposer.  

### **7. Responsive Design**
- Interface adaptée aux écrans de différentes tailles (ordinateurs, tablettes, mobiles).  

---

## Technologies Utilisées  
- **HTML5**  
- **CSS** *(ou framework comme Tailwind CSS/Bootstrap)*  
- **JavaScript (Vanilla JS)**  

---

