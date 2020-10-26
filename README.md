# Pokemon: catch them all

Ash is catching up Pokemon in a world that consists of an infinite two-dimensional grid of houses. In each house there is exactly one Pokemon. Ash starts by catching the Pokemon that is in the house where he starts. Then, moves to the house immediately to the north, south, east or west from where you are and pick up the Pokemon that is there, and so on. Attention: if he passes a house where he has already passed (and, therefore, where he has already caught a Pokemon), there is no longer a Pokemon for him to catch!

This application will return the number of pokemons caught by Ash given a sequence of movements.

For instance:
| Input | Output  
| :------------------: | :----------------:
| E| 2
| NESO | 4
| NSNSNSNSNS | 2

## Run application

To run the application, run the following commands on the command line inside the project directory:

```
npm install
npm start $inputString
```
