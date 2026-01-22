# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Project Overview

Attempted PS1 of the GDG induction problem statements.

It was a frontend only task to build a website which returned a pokemon with information about it on entering its name. The website contains a feature to search for any pokemon by name and displays the pokemon's information in a card-like format. The information displayed includes the Pokemon's name along with its type and a sprite(picture) of the pokemon which on being clicked opens the pokemon's web page in pokemondb website.

The website also contains a feature to play the cry of each pokemon. On opening the site, a catalogue of 20 pokemon is displayed and other pokemon can further be searched by typing their name in the bar and then clicking the search button.

<img width="1877" height="891" alt="Screenshot 2026-01-22 222458" src="https://github.com/user-attachments/assets/b695e16f-5c33-4217-8b63-e98801c163e7" />

The pokemon name must be correctly entered into the search bar in order to find the pokemon.

<img width="1881" height="898" alt="Screenshot 2026-01-22 224615" src="https://github.com/user-attachments/assets/90f3c658-b613-47d0-b25a-bc33d7d51ca6" />

A back button is used to reload the site and display the initial 20 pokemon.

## Code

The files of code are contained in the src folder.

index.css contains the css part of the code used to style the website. upper.jsx contains the code for the top part of the website and mainpart.jsx contains the code for the diplay and search of the pokemon. main.jsx and app.jsx are used for linking different parts of the code.

The code can be run by cloning the repo then entering the project directory followed by using the command `npm start` to open the website.

## Hosting

The website has been hosted using netlify at the link: https://pokedex-gdg.netlify.app/


