import { Injectable } from '@angular/core';
import { Project } from '../models/project.interface';
import { Experience } from '../models/experience.interface';
import { Skill } from '../models/skill.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'Horamanea',
        description: 'Boutique en ligne dédiée aux artistes de l’association Horamanea',
        detailedDescription: 'Horamanea est une plateforme e-commerce développée pour promouvoir et vendre les œuvres d’artistes membres de l’association du même nom. L’application a été conçue avec Angular pour le frontend et Spring Boot pour le backend. Elle intègre un système d’authentification personnalisé basé sur JWT, une gestion complète des utilisateurs, un panier d’achat, ainsi qu’un système de paiement sécurisé via Stripe. Le stockage des images est géré avec Firebase et les notifications transactionnelles (confirmation de commande, création de compte, etc.) sont envoyées via l’API Mailjet. L’interface d’administration permet aux artistes de gérer leurs produits, suivre les ventes et organiser leur stock. L’ensemble de la plateforme offre une expérience fluide et responsive, adaptée aux mobiles comme aux ordinateurs.',
        technologies: ['Angular', 'Spring Boot', 'MySQL', 'Stripe', 'FireBase', 'MailJet'],
        image: 'assets/Horamanea.png'
      },
      {
        id: 2,
        title: 'WalletHub',
        description: 'Application mobile pour centraliser tous ses comptes bancaires',
        detailedDescription: 'WalletHub est une application mobile développée avec React Native et Expo, connectée à un backend Appwrite. Elle permet à l’utilisateur de centraliser tous ses comptes bancaires, quelle que soit la banque, au sein d’une interface unique et sécurisée. L’objectif est de fournir une vue globale de sa situation financière, avec des fonctionnalités de consultation des soldes, catégorisation des dépenses, visualisation de graphiques, alertes personnalisées et gestion budgétaire. Le projet met l’accent sur la fluidité de l’expérience utilisateur et la sécurisation des données personnelles.',
        technologies: ['React Native', 'Expo', 'Appwrite'],
        image: 'assets/WalletHub.png',
        githubUrl: 'https://github.com/YanJoe72/WalletHub'
      },
      {
        id: 3,
        title: 'Jeu d\'echec',
        description: 'Jeu d\'échecs en local développé en React',
        detailedDescription: 'Projet scolaire réalisé en groupe dans le but de découvrir React à travers le développement d\'un jeu d\'échecs en ligne. L\'application permet aux utilisateurs de jouer aux échecs via une interface interactive, avec une gestion des mouvements légaux, des tours de jeu alternés, et une logique de plateau basée sur une matrice. Ce projet a permis de se familiariser avec les composants React, la gestion d\'état et les événements utilisateurs.',
        technologies: ['React Native', 'Tailwind'],
        image: 'assets/Echec.png',
        githubUrl: 'https://github.com/CorentinLartigue/Echecs_react'
      },
      {
        id: 4,
        title: 'YSport',
        description: "Plateforme interactive de localisation et de recherche de complexes sportifs à travers une carte.",
        detailedDescription: "YSport est une application web permettant aux utilisateurs d'explorer plus de 28 000 complexes sportifs via une carte interactive. Chaque point sur la carte fournit des informations détaillées sur les installations sportives disponibles. Un système de filtres permet également de rechercher facilement un complexe selon différents critères, rendant l'expérience fluide et personnalisée.",
        technologies: ['React+Vite', 'Spring Boot', 'MySQL', 'Leaflet'],
        image: 'assets/YSport.png',
        githubUrl: 'https://github.com/YanJoe72/YSport'
      },
      {
        id: 6,
        title: 'BiblioSIO',
        description: "Application web de gestion d’une bibliothèque scolaire dédiée aux revues informatiques.",
        detailedDescription: "BiblioSIO est une plateforme développée pour faciliter la gestion des revues informatiques au sein d’un établissement. L’application permet aux emprunteurs de consulter les revues, les articles disponibles et de gérer leurs emprunts et retours. Les professeurs peuvent quant à eux gérer l’ouverture de la bibliothèque ainsi que les autorisations d’emprunts. Le projet inclut une modélisation rigoureuse des données et une interface intuitive adaptée aux différents profils utilisateurs.",
        technologies: ['Angular', 'Spring Boot', 'MySQL'],
        image: 'assets/Bibliosio.png',
        githubUrl: 'https://github.com/YanJoe72/Bibliosio'
      },
      {
        id: 7,
        title: 'M2L',
        description: "Plateforme web collaborative offrant un accès personnalisé aux membres de la Maison des Ligues selon leur rôle.",
        detailedDescription: "Le site dynamique M2L est une plateforme en ligne destinée à centraliser les informations et services pour les membres de la Maison des Ligues des Sports. Elle propose un accès sécurisé et différencié selon les profils : salariés, bénévoles, secrétaires ou membres des ligues. Chaque utilisateur accède à des fonctionnalités spécifiques comme la gestion de compte, la consultation de fiches de paie, ou l'inscription à des événements. Ce projet met l’accent sur la personnalisation de l’expérience utilisateur et la sécurisation des données.",
        technologies: ['PHP', 'MySQL', 'HTML/CSS'],
        image: 'assets/M2L.png',
        gitlabUrl: 'https://gitlab.com/B.Yanis/m2l-site-dynamique'
      },
      {
        id: 8,
        title: 'Amphitryon',
        description: "Application mobile de gestion de restaurant permettant aux équipes de gérer les menus, les commandes et l'organisation de la salle.",
        detailedDescription: "Amphitryon est une application mobile conçue pour faciliter la gestion complète d’un restaurant. Elle propose trois espaces distincts selon les rôles : le cuisinier peut gérer le menu du jour en ajoutant ou supprimant des plats ; le gestionnaire de salle peut organiser l’emplacement des tables ; le serveur, quant à lui, peut enregistrer les commandes par table. Dans ce projet collaboratif, j’ai été en charge de la partie dédiée au cuisinier.",
        technologies: ['Java', 'PHP', 'MySQL'],
        image: 'assets/Amphitrion.png',
        githubUrl: 'https://github.com/YanJoe72/Amphitrion'
      },
      {
        id: 9,
        title: 'Générateur SQL',
        description: "Outil permettant de convertir des fichiers texte contenant des données en requêtes SQL prêtes à l’insertion.",
        detailedDescription: "Le Générateur SQL est un outil développé dans le cadre d’un projet académique. Il prend en entrée des fichiers texte contenant des données structurées (par exemple : id;nom;prenom), et les convertit automatiquement en requêtes SQL de type INSERT. Ce projet avait pour objectif de faciliter l’intégration de données dans une base relationnelle tout en renforçant notre compréhension du traitement de fichiers et de la logique d’automatisation.",
        technologies: ['C#', 'MySQL'],
        image: 'assets/GenerateurSQL.png',
        gitlabUrl: 'https://gitlab.com/B.Yanis/generateursql'
      },
      {
        id: 10,
        title: 'BioRelais',
        description: 'Plateforme web permettant aux producteurs de s’inscrire, se connecter, et proposer leurs produits à la vente.',
        detailedDescription: "BioRelai est un projet de site web destiné aux producteurs locaux. Il leur permet de créer un compte, de se connecter à un espace personnel, d’ajouter de nouveaux produits et de les proposer à la vente. Le site offre une interface simple et fonctionnelle pour faciliter la gestion des produits proposés. Ce projet a été réalisé avec PHP côté serveur, MySQL pour la base de données, et HTML/CSS pour le front-end.",
        technologies: ['HTML/CSS', 'PHP', 'MySQL'],
        image: 'assets/BioRelais.png',
        githubUrl : 'https://github.com/YanJoe72/BioRelais'
      },
      {
        id: 11,
        title: 'Motus',
        description: 'Reproduction du célèbre jeu Motus avec sélection aléatoire d’un mot mystère et tentatives de l’utilisateur pour le deviner.',
        detailedDescription: 'Le projet consiste en la création d\'une version du jeu Motus en utilisant le langage C#. Le programme récupère un fichier contenant une liste de mots, puis en choisit un au hasard comme mot mystère. L\'utilisateur est ensuite invité à proposer des mots de la même longueur que le mot mystère.',
        technologies: ['C#'],
        image: 'assets/Motus.png',
        gitlabUrl: 'https://gitlab.com/B.Yanis/motus'
      },
      {
        id: 12,
        title: 'Ticketing',
        description: "Projet en équipe consistant à résoudre des demandes d’évolutions et de corrections sur une application existante à partir de tickets.",
        detailedDescription: 'Pour ce projet une application a été fournit, notre équipe devait réaliser des modifications et ajouts. Ces demandes d\'ajouts et de modifications étaient demandé sous forme de ticket.',
        technologies: ['C#'],
        image: 'assets/Ticketing.png'
      }
    ];
  }

  getExperiences(): Experience[] {
    return [
      {
        id: 1,
        position: 'Développeur Web Fullstack',
        company: 'Guarani',
        location: 'Bordeaux, France',
        duration: 'novembre 2024 - Présent',
        description: 'Développement d’applications web fullstack avec Angular, .NET et NestJS',
        detailedDescription: 'Participation au développement d’applications web complexes pour des clients internationaux. Réalisation de projets fullstack en utilisant Angular pour le frontend et .NET/NestJS pour le backend. Conception et sécurisation des APIs via JWT et OAuth2, mise en œuvre de tests automatisés avec Jest et Cypress. Optimisation des performances par l’amélioration des requêtes, la gestion avancée des états (NgRx, RxJS), et l’adoption de bonnes pratiques de développement. Implication dans la qualité du code, l’architecture applicative (micro-frontends), et la formation de développeurs juniors.',
        technologies: ['Angular', '.NET', 'NestJS', 'Docker', 'WordPress', 'Git'],
        achievements: [
          'Développement de plusieurs projets fullstack sécurisés et performants',
          'Amélioration des performances de 40% sur l\'application principale',
          'Mise en place d\'une architecture micro-frontend modulaire',
          'Encadrement et formation de 6 développeurs juniors',
          'Réduction du temps de chargement initial de 60%',
          'Conception et sécurisation d\'APIs REST avec JWT et OAuth2'
        ]
      },
      {
        id: 2,
        position: 'Développeur Visual Basic',
        company: 'CESNAC (Centre d’Exploitation des Systèmes de la Navigation Aérienne Centraux)',
        location: 'Mérignac, France',
        duration: 'janvier 2024 - mars 2024 (8 semaines)',
        description: 'Développement et maintenance d’applications de traitement de données aéronautiques',
        detailedDescription: 'Le CESNAC est un acteur clé dans la gestion des systèmes de navigation aérienne en France. Durant ce stage, j’ai travaillé sur l’amélioration de deux applications internes critiques liées à la gestion des plans de vol. L’objectif principal était d’automatiser l’importation de fichiers ZIP contenant des logs au format XML dans une base de données Access, en poursuivant le développement d’un outil existant en Visual Basic. J’ai également ajouté de nouvelles fonctionnalités à l’IHM pour rendre l’outil plus intuitif. Ce projet visait à assurer la compatibilité avec les données issues des anciens systèmes (CAUTRA/STIP/STPV) dans un contexte de transition vers un nouveau système européen (4Flight/Coflight).',
        technologies: ['Visual Basic', 'Microsoft Access', 'XML', 'XMLSpy'],
        achievements: [
          'Optimisation d’une application interne de traitement de logs XML',
          'Ajout de fonctionnalités ergonomiques à l’IHM Visual Basic',
          'Automatisation du processus d’extraction et d’importation de fichiers ZIP',
          'Contribution à la migration vers les systèmes de navigation aérienne de nouvelle génération'
        ]
      },
      {
        'id': 3,
        position: 'Développeur Power BI',
        company: 'C-monetiquette',
        location: 'Bordeaux, France',
        duration: 'mai 2023 - juin 2023 (5 semaines)',
        description: 'Centralisation et visualisation de données marketing via Power BI.',
        detailedDescription: 'C-monetiquette est une entreprise spécialisée dans la vente d’étiquettes personnalisées en ligne, avec une présence dans plusieurs pays européens. Durant ce stage, j’ai été intégré à l’équipe de développement informatique pour répondre à un besoin de centralisation des données issues de différentes sources : Google Ads, META, Bing, et Magento. Mon objectif principal était de récupérer, agréger et préparer ces données à l’aide de PHP et SQL, afin de les rendre exploitables dans Power BI. Ce travail visait à offrir aux équipes marketing une interface claire, personnalisée et plus intuitive pour le suivi des performances commerciales.',
        technologies: ['PHP', 'SQL', 'Power BI', 'Magento'],
        achievements: [
          'Mise en place d’un pipeline de données pour Power BI',
          'Centralisation de sources multiples (Google Ads, META, Bing, Magento)',
          'Amélioration de la lisibilité des données marketing',
          'Montée en compétences sur la BI et la gestion de données'
        ]
      }
    ];
  }

  getSkills(): Skill[] {
    return [
      { name: 'Angular', category: 'Frontend' },
      { name: 'React Native', category: 'Frontend' },
      { name: 'Expo', category: 'Frontend' },
      { name: 'Ionic', category: 'Frontend' },
      { name: 'TypeScript', category: 'Frontend' },
      { name: 'JavaScript', category: 'Frontend' },
      { name: 'Bootstrap', category: 'Frontend' },
      { name: 'Tailwind CSS', category: 'Frontend' },
      
      { name: 'Spring Boot', category: 'Backend' },
      { name: 'NestJS', category: 'Backend' },
      { name: 'ASP.NET', category: 'Backend' },
      { name: 'PHP', category: 'Backend' },
      { name: 'REST API', category: 'Backend' },
      { name: 'Java', category: 'Backend' },
      
      { name: 'PostgreSQL', category: 'Base de données' },
      { name: 'MySQL', category: 'Base de données' },
      { name: 'MongoDB', category: 'Base de données' },
      { name: 'Firebase', category: 'Base de données' },
      
      { name: 'Docker', category: 'DevOps' },
      { name: 'Nginx', category: 'DevOps' },
      { name: 'Linux', category: 'DevOps' },
      
      { name: 'Git', category: 'Outils' },
      { name: 'VS Code', category: 'Outils' },
      { name: 'Figma', category: 'Outils' },
      { name: 'Postman', category: 'Outils' },
    ];
  }
}