<div align="center" style="margin-bottom: 20px">
  <img src="https://github.com/gabrielsanttana/aircnc/blob/master/mobile/assets/logo.png?raw=true)"/>
</div>

<p align="center">An Airbnb clone that books companies spots for developers 🏢</p>

## 🛠️ Technologies:

<ul>
  <li><a href="https://nodejs.org/en/">Node.js</a></li>
  <li><a href="https://expressjs.com/">Express</a></li>
  <li><a href="https://reactjs.org/">React</a></li>
  <li><a href="https://reactnative.dev/">React Native</a></li>
  <li><a href="https://expo.io/">Expo</a></li>
  <li><a href="">MongoDB</a></li>
  <li><a href="">Mongoose</a></li>
  <li><a href="">Socket.io</a></li>
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
# Run the API
$ cd aircnc/backend
$ npm install
$ node src/server.js
```

#### Web:

```
# Run the web app
$ cd aircnc/frontend
$ npm install
$ npm start 


# The application will pop-up in the browser on localhost:3000
```

#### Mobile:

To run the mobile application, it's necessary to have an React Native Expo environment setup. With that:

```
# Run the mobile app
$ cd aircnc/mobile
$ npm install
$ npm start

# A new window with application log will open in the browser. Then, you can run it by scanning the QR code with the Expo mobile app or with its local URL.
```

## ⚖️ License:

[MIT License](https://github.com/gabrielsanttana/aircnc/blob/master/LICENSE)
