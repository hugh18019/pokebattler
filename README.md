# PokeBattler
![mit](https://img.shields.io/badge/license-MIT-blue)

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Built With](#built%20with)
- [Features of Poke Battler](#features%20of%20poke%20battler)
- [Page Demo](#page%20demo)
- [Contributors](#contributors)
- [Medium Blog Posts](#medium%20blog%20posts)

## Description
Gotta Catch 'Em All! We created a turn-based game called Poke Battler. To start battling, choose your starter pokemon: Bulbasaur, Squirtle, or Charmander. Defeat monsters on different levels to beat the game. We wanted to create a game where you can battle monsters from other fictional worlds--not just from the Pokemon world. The game utitlizes the Pokemon API to grab the sprite images of the pokemon. Make sure to not let your pokemon run out of hitpoints, or you will lose the game! 

## Installation
First, clone the repository to your local machine in terminal.
``` console
git clone git@github.com:NguyenJohnnyT/pokebattler.git
```
Our application uses npm packages that need to be installed.
``` console
npm i
```
Make sure to create an .env file that includes:
```
DB_NAME=poke_db
DB_USER=root
DB_PASSWORD=yourpassword
```
Next, you have to source the data in the mysql shell by going into the db folder.
``` console
cd db
mysql -u root -p
```
Once you are in mysql, run:
``` console
source schema.sql
```
Type ```quit``` to exit out of mysql.
Don't forget to seed the data as well.
``` console
npm run seed
```