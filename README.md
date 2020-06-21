<div align="center" style="margin-bottom: 50px">
  <img src="https://github.com/gabrielsanttana/aircnc/blob/master/mobile/assets/logo.png?raw=true)"/>
</div>

###

<p align="center">An Airbnb clone that books companies spots for developers 🏢</p>

## 🛠️ Technologies:

<ul>
  <li><a href="https://nodejs.org/en/">Node.js</a></li>
  <li><a href="https://expressjs.com/">Express</a></li>
  <li><a href="https://reactjs.org/">React</a></li>
  <li><a href="https://reactnative.dev/">React Native</a></li>
  <li><a href="https://expo.io/">Expo</a></li>
  <li><a href="https://www.mongodb.com/">MongoDB</a></li>
  <li><a href="https://mongoosejs.com/">Mongoose</a></li>
  <li><a href="https://socket.io/">Socket.io</a></li>
</ul>

## ⚙️ Requirements:

<ul>
  <li><a href="https://nodejs.org/en/">Node.js</a></li>
  <li><a href="https://www.npmjs.com/">NPM</a></li>
  <li><a href="https://expo.io/">Expo</a></li>
  <li><a href="https://expo.io/">Expo CLI</a></li>
  <li><a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas Cluster</a></li>
</ul>

## 🚀 Installation:

```
$ git clone https://github.com/gabrielsanttana/aircnc
```

#### API

Before running the API, it's necessary to have a database setup on a MongoDB Atlas Cluster. After getting it, create a .env file in the project root and put these keys in environment variables and they'll work on the mongoose connection string:

```
MONGODB_USERNAME=your_username
MONGODB_PASSWORD=your_password
MONGODB_CLUSTER_URL=your_cluster_url
```

```
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_URL}/aircnc`)
```

If you prefer, just place your connection string on the server.js file.

Then:

```bash
$ cd aircnc/backend
$ npm install
$ node src/server.js
```

#### Web

```bash
$ cd aircnc/frontend
$ npm install
$ npm start 
```

The application will pop-up in the browser on http://localhost:3000

#### Mobile

To run the mobile application, it's necessary to have an React Native Expo environment setup and the Expo mobile app installed on your smartphone. 

With that:

```bash
$ npm install -g expo-cli
$ cd aircnc/mobile
$ npm install
$ npm start
```

<p>A new window with application log will open in the browser.</p>
<p>Then, you can load the app by scanning the QR code with the Expo mobile app or by using the local URL.</p>

## ⚖️ License:

[MIT License](https://github.com/gabrielsanttana/aircnc/blob/master/LICENSE)
