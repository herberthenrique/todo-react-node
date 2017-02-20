## Getting Started

### Prerequisites

- [Node.js and npm](nodejs.org) Node >= 7
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Change the value of mongo uri in `src/config/enviroment/development.js`

4. Run `npm run dev` to start the development server. 
