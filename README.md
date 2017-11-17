# express-create-react-app-example
- create-react-app with express. Following tutorial as base. References below
- added simple example connection to local mongodb

### walk through code
https://github.com/mars/heroku-cra-node

### walk through website
http://ericsowell.com/blog/2017/5/16/create-react-app-and-express

## Setup
Both npm starts will watch for file changes
1. `npm install` in express-createreact-app-example directory
2. `npm install` in react-ui directory
3. `mongod` to start your database
    - should be on localhost:27017, otherwise changes in code will be needed
4. `npm start` in express-createreact-app-example directory (start server)
5. `npm start` in react-ui directory (start ui)

note: I already have my local db populated with some sample data.  Here is the structure for the db data to work in this example.  Suggest posting a message or two via postman or curl to verify app is pulling data correctly.  _id is provided by mongodb, only text and name would be needed in requst body to http://localhost/5000/messages
``{
"_id": "5a0657296b3d142351bbf256",
"text": "Do or do not, There is no try.",
"name": "YODA"
}``
