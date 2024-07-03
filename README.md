Project Description
1.  Create a React application using Create React App :
  npx create-react-app user-auth
  cd user-auth


2.  Install necessary packages:
     npm install axios react-router-dom


3.  Setup React Router for navigation:

Install react-router-dom to handle routing.
Create components for Login, Registration, and the Protected Page.

4.  Create the structure:
         src/
├── components/
│   ├── Login.js
│   ├── Register.js
│   └── ProtectedPage.js
├── App.js
├── index.js
└── App.css

Step 3: Backend (Node.js and MongoDB)
1. Create a new Node.js project.
2.  Install necessary packages:
      npm install express mongoose bcryptjs jsonwebtoken cors
3.   Create the structure:
   server/
├── models/
│   └── User.js
├── routes/
│   ├── auth.js
├── .env
├── server.js
