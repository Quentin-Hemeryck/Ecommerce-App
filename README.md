# Projet E-commerce React – TP Front-End Avancé

Ce projet a été réalisé dans le cadre du cours de Développement de web services. Il s'agit d'une interface e-commerce développée en React, qui interagit avec un backend REST (Node.js + MongoDB) via Axios.

## Fonctionnalités principales

- Liste dynamique des produits récupérée depuis une API REST
- Affichage des détails d’un produit
- Gestion complète du panier avec `useContext` et `useReducer`
- Ajout et suppression d’articles dans le panier
- Affichage dynamique du nombre d’articles dans le panier (badge)
- Gestion des erreurs et chargement via `Spinner` et `Alert`
- Système de routage avec gestion des routes invalides
- Design responsive avec React Bootstrap

## Technologies utilisées

- React (Vite)
- React Bootstrap
- Axios
- React Router DOM
- Contexte React + Reducer
- Docker (backend + MongoDB)
- MongoDB Compass & Postman (tests API)

## Requêtes principales testées (via Postman)

- Création de comptes `admin` et `seller`
- Authentification et récupération de token
- Ajout et suppression de produits
- Récupération et filtrage des produits (`name`, `price`)
- Utilisation d’un token JWT avec l’en-tête `Authorization: Bearer <token>`

## Auteur

Hemeryck Quentin
