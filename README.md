# Typescript game

`http://ivovanderknaap.nl/typescript/dist/`

### UML - diagram

![UML diagram](./uml/uml.png)

### Installation

Clone this repository to your local machine. Then build the project by running: `npm install`. The project is build using webpack, to run the server you must run `npm run start`. This will run a local server on `http://localhost:9000`.

### Programming principles
#### Interface

As you can see in the ULM above the behaviour of the player is an interface. This interface has a couple of functions e.g. it can make the player move.

#### Static Utility Method

The game has a static utility method which has a function to check if two instances have collided.

#### Singleton

The game obejct itself is a singleton.

#### Strategy

The movement of the player is stated in a different class than the player class. This is made accoring to the strategy pattern.

#### Encapsulation

Some properties in various classes have been protected so that they are being encapsulated from the rest of the game.

#### Composition

The game has a player and a checkpoint.

#### Inheritance

There is a base class called gameObject that has standard properties. The player and checkpoint class extend this class.
