# Snack-a-App

Snack-a-App is een frontend webapplicatie waarmee gebruikers eenvoudig recepten kunnen zoeken, bewaren en filteren op dieetvoorkeuren. Deze app is gebouwd met React en maakt gebruik van de Spoonacular API voor receptendata, en de NOVI-backend voor gebruikersauthenticatie.


---

##  Benodigdheden

Om deze applicatie lokaal te draaien, heb je het volgende nodig:

- Node.js (v18 of hoger)
- Een terminal of code editor (zoals VSCode of WebStorm)
- Een API-key van Spoonacular: [https://spoonacular.com/food-api](https://spoonacular.com/food-api)
- De NOVI-backend om gebruikers te registreren en valideren (documentatie via NOVI)

---

##  Installatie-instructies

1. Clone of download dit project
2. Open een terminal in de projectmap en voer uit:**npm install, npm run dev**

3. Maak een `.env` bestand aan in de root van het project met de volgende inhoud:
VITE_API_KEY=jeSpoonacularApiKeyHier.
4. Vervang jeSpoonacularApiKeyHier met jouw persoonlijke API-key van Spoonacular.

Figma ontwerp:
Hier vind je het Figma ontwerp van de Snack-a-App:
https://www.figma.com/design/11HT7MzOvPILgCZrwjyH9I/Untitled?node-id=0-1&t=WAU0lvE4J3xJdrZv-1

Github link:
Hier vind je de Github van mijn WebApp:
https://github.com/git-hub-yama/snack-a-app

## Componentstructuur

De applicatie is opgebouwd uit herbruikbare React-components om duplicatie te voorkomen
en de code overzichtelijk en onderhoudbaar te houden.

Voorbeelden van gebruikte components:

- **TopBar** – toont de welkomsttekst en profielfoto van de gebruiker
- **SearchBar** – herbruikbare zoekbalk voor het zoeken naar recepten
- **ButtonBar** – herbruikbare knoppenbalk voor navigatie
- **FavoriteList** – toont en beheert opgeslagen favorieten
- **DietList** – herbruikbare lijst voor dieetvoorkeuren
- **RecipeHeader** – toont titel, afbeelding en beschrijving van een recept

Deze components worden hergebruikt in meerdere pagina’s binnen de applicatie,
zoals Home, Favorieten, Dieetvoorkeur en Recipe.