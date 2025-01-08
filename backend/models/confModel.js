const nedb = require("gray-nedb");

class Conf {
  constructor(confFilePath) {
    console.log(confFilePath);
    if (confFilePath) {
      this.conf = new nedb(confFilePath);
      confFilePath;
    } else {
      this.conf = new nedb();
    }
  }
  init() {

    this.conf.insert({
      "id": "1",
      "speaker": "Martin Fowler", 
      "title": "Patterns of Enterprise Application Architecture", 
      "description": "The practice of enterprise application development has benefited from the emergence of many new enabling technologies. Multi-tiered object-oriented platforms, such as Java and .NET, have become commonplace. These new tools and technologies are capable of building powerful applications, but they are not easily implemented. Common failures in enterprise applications often occur because their developers do not understand the architectural lessons that experienced object developers have learned.",
      "session": "A", 
      "time": "9:00",
      "tags": ["patterns", "archtecture"],
      "ratings": []
    });
    this.conf.insert({
      "id": "2",
      "speaker": "David Flanagan", 
      "title": "JavaScript: The Definitive Guide", 
      "description": "This talk is both an example-driven programmer's guide and a keep-on-your-desk reference, with new example that explain everything you need to know to get the most out of JavaScript.", 
      "session": "A",
      "time": "10:30", 
      "tags": ["javascript", "es6"],
      "ratings" :[]
    });
    this.conf.insert({
      "id": "3",
      "speaker": "Chris Northwood", 
      "title": "How to be a Full-Stack Web Developer", 
      "description": "Understand the technical foundations, as well as the non-programming skills needed to be a successful full stack web developer. This session reveals the reasons why a truly successful full stack developer does more than write code. ", 
      "session": "A",
      "time": "12:00", 
      "tags": ["full-stack", "continuous delivery"],
      "ratings" :[]
    });
    this.conf.insert({
      "id": "4",
      "speaker": "Eve Porcello", 
      "title": "Learning React", 
      "description": "If you want to learn how to build efficient React applications, this is your talk. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this session provides best practices and patterns for writing modern React code ", 
      "session": "A",
      "time": "14:00",
      "tags": ["javascript", "frameworks", "react"],
      "ratings" :[]
    });
    this.conf.insert({
      "id": "5",
      "speaker": "Hanu Prateek", 
      "title": "ES6 for Humans", 
      "description": "Learn ES6 best practices for code optimization and organization and walk through practical, common examples of how to implement complete components of your applications. While this talk covers the basic concepts of modern JavaScript, it primarily focuses on the new syntax, data-types, functionalities, and everything else that's new in ES6, the latest standard of JavaScript. ", 
      "session": "A",
      "time": "15:30",
      "tags": ["javascript", "es6"],
      "ratings" :[]
    });
    this.conf.insert({
      "id": "6",
      "speaker": "Anton Moiseev", 
      "title": "Angular Development with TypeScript", 
      "description": "Teaches you how to build web applications with Angular and TypeScript. Delivered in an accessible, lively style, this illuminating session covers core concerns like state management, data, forms, and server communication as you build a full-featured online auction app. You’ll get the skills you need to write type-aware classes, interfaces, and generics with TypeScript, and discover time-saving best practices to use in your own work ", 
      "session": "B",
      "time": "9:00", 
      "tags": ["javascript", "frameworks", "angular"],
      "ratings" :[]
    });
    this.conf.insert({
      "id": "7",
      "speaker": "Vasan Subramanian", 
      "title": "Full Stack Web App Development with Mongo, Express, React, and Node", 
      "description": "Assemble the complete stack required to build a modern web app using MongoDB, Express, React, and Node. This session also covers many other complementary tools: React Router, GraphQL, React-Bootstrap, Babel, and Webpack. ", 
      "session": "B",
      "time": "10:30", 
      "tags": ["frameworks", "react", "full-stack"],
      "ratings" :[]
    });
    this.conf.insert({
      "id": "8",
      "speaker": "Jon Wexler", 
      "title": "Get Programming with Node.js", 
      "description": "Teaches you to build web servers using JavaScript and Node. In this engaging tutorial, we’ll work through eight complete projects, from writing the code for your first web server to adding live chat to a web app.  ", 
      "session": "B",
      "time": "12:00", 
      "tags": ["node"],
      "ratings" :[]
    });
    this.conf.insert({
      "id": "9",
      "speaker": "Salvatore Loreto", 
      "title": "Real-Time Communication with WebRTC", 
      "description": "This session shows you how to use the emerging Web Real-Time Communication (WebRTC) technology to build a browser-to-browser application, piece by piece. ", 
      "session": "B",
      "time": "14:00",
      "tags": ["real-time", "webrtc"],
      "ratings" :[]
    });
    this.conf.insert({
      "id": "10",
      "speaker": "Joshua Johanan", 
      "title": "Build Complex Express Sites with Redis and Socket.io", 
      "description": "Discover the simplicity of Redis to make web applications faster than before. Create unique web servers and networking tools with Node.js. Implement real-time applications on websites using Socket.io with Express and Redis", 
      "session": "B",
      "time": "15:30",
      "tags": ["real-time", "socket.io"],
      "ratings" :[]
    });
    this.conf.insert({  "id": "11",
      "speaker": "Alex Libby", 
      "title": "SASS Essentials", 
      "description": "Sass Essentials is a fast-paced, hands-on guide that breaks down the mysteries of preprocessing CSS styles using the Sass preprocessor and shows you how you can apply simple techniques to quickly and efficiently create CSS style sheets.", 
      "session": "C",
      "time": "9:00",
      "tags": ["CSS","Sass"],
      "ratings" :[]
    });
    this.conf.insert({
      "id": "12",
      "speaker": "Aravind Shenoy", 
      "title": "HTML5 and CSS3 Transition, Transformation, and Animation", 
      "description": "Discover the semantics of HTML5 and Microdata Understand the concept of the CSS3 Flexible Box model Explore the main features of HTML5 such as canvas, offline web application, geolocation, audio and video elements, and web storage Master the tools and utilities in HTML5 and CSS3 In Detail .", 
      "session": "C",
      "time": "10:30", 
      "tags": ["CSS","HTML5"],
      "ratings" :[]
    });
    this.conf.insert({
      "id": "13",
      "speaker": "Aravind Shenoy", 
      "title": "JavaScript Security", 
      "description": "This session starts off with an introduction to JavaScript security and gives you an overview of the basic functions JavaScript can perform on the Web, both on the client side and the server side. It demonstrates a couple of ways in which RESTful APIs can be laden with security flaws. You will also create a simple RESTful server using Express.js and Node.js. You will then focus on one of the most common JavaScript security attacks, cross-site scripting, and how to prevent cross-site scripting and cross-site forgery.", 
      "session": "C",
      "time": "12:00", 
      "tags": ["CSS","HTML5"],
      "ratings" :[]
    });
    this.conf.insert({
      "id": "14",
      "speaker": "Haider Malik", 
      "title": "The Complete JavaScript Unit Testing Guide", 
      "description": "This course will teach you to use unit testing in your JavaScript applications and covers tools and techniques you'll need to write unit tests for your code. You will learn how to test applications using Jasmine, Mocha, Ava, Tape, and Intern.", 
      "session": "C",
      "time": "14:00",
      "tags": ["unit testing", "mocha"],
      "ratings" :[]
    });
    this.conf.insert({
      "id": "15",
      "speaker": "Monsur Hossain", 
      "title": "CORS in Action: Creating and consuming cross-origin APIs", 
      "description": "introduces Cross-Origin Resource Sharing (CORS) from both the server and the client perspective. It starts with the basics: how to make CORS requests and how to implement CORS on the server. It then explores key details such as performance, debugging, and security. API authors will learn how CORS opens their APIs to a wider range of users. JavaScript developers will find valuable techniques for building rich web apps that can take advantage of APIs hosted anywhere. ", 
      "session": "C",
      "time": "15:30",
      "tags": ["CORS", "security"],
      "ratings" :[]
    });
  }


  getAllEntries() {
    return new Promise((resolve, reject) => {
      this.conf.find({}, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log("function all() returns: ", entries);
        }
      });
    });
  }
  getSpeaker(speakerName) {
    console.log(speakerName)
    return new Promise((resolve, reject) => {
      this.conf.find({speaker:speakerName}, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log("function getSpeaker returns: ", entries);
        }
      });
    });
  }
  getSession(sessionName) {
    return new Promise((resolve, reject) => {
      this.conf.find({session:sessionName}, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log("function getSession returns: ", entries);
        }
      });
    });
  }
  getTime(talkTime) {
    return new Promise((resolve, reject) => {
      this.conf.find({time:talkTime}, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log("function getTime returns: ", entries);
        }
      });
    });
  }

  getTalkById(id) {
    return new Promise((resolve, reject) => {
      this.conf.find({id:id} , function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);
          console.log("function getTalkById returns: ", entries);
        }
      });
    });
   }

  rateTalkById(id,newRating){
    let rating=Number(newRating)
      return new Promise((resolve, reject) => {
        this.conf.update({id:id},{$push:{'ratings':rating}} , function (err, entries) {
        if (err) {
          reject(err);
        } else {
           resolve(entries);
        }
      });
    });
  }

  rateTalk(talkId,newRating){
    let id=String(talkId)
    let rating=Number(newRating)
    console.log( id, rating)
      return new Promise((resolve, reject) => {
        this.conf.update({id:id},{$push:{'ratings':rating}} , function (err, entries) {
        if (err) {
          reject(err);
        } else {
           resolve(entries);
        }
      });
    });
  }
  
}
module.exports = Conf;
