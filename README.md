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

#### API:

Before running the API, it's necessary to have a database running on a MongoDB Atlas Cluster. After getting it, place your MongoDB Atlas username and password along with the cluster URL in the database connection string in the server.js file.

If you prefer, you can assign theses keys in environment variables and just place them on the connection string, like this:

```
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_URL}/aircnc
```

Then:

```bash
$ cd aircnc/backend
$ npm install
$ node src/server.js
```

#### Web:

```bash
$ cd aircnc/frontend
$ npm install
$ npm start 


# The application will pop-up in the browser on localhost:3000
```

#### Mobile:

To run the mobile application, it's necessary to have an React Native Expo environment setup and the Expo mobile app installed on your smartphone. 

With that:

```bash
$ npm install -g expo-cli
$ cd aircnc/mobile
$ npm install
$ npm start


# A new window with application log will open in the browser
# Then, you can load the app by scanning the QR code with the Expo mobile app or by using the local URL
```

## ⚖️ License:

[MIT License](https://github.com/gabrielsanttana/aircnc/blob/master/LICENSE)
