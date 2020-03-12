Node Login
node-login

A basic account management system built in Node.js with the following features:
New User Account Creation
Secure Password Reset via Email
Ability to Update / Delete Account
Session Tracking for Logged-In Users
Local Cookie Storage for Returning Users
Blowfish-based Scheme Password Encryption


For testing purposes you can view a database dump of all accounts here.
Note: This database automatically resets every 24 hours.

Installation & Setup
Install Node.js & MongoDB if you haven't already.

Clone this repository and install its dependencies.

 > git clone git://github.com/braitsch/node-login.git node-login
 > cd node-login
 > npm install
In a separate shell start MongoDB.

 > mongod
From within the node-login directory start the server.

 > node app
Open a browser window and navigate to: http://localhost:3000

Password Retrieval
To enable the password retrieval feature it is recommended that you create environment variables for your credentials instead of hard coding them into the email dispatcher module.

To do this on OSX you can simply add them to your .profile or .bashrc file.

export NL_EMAIL_HOST='smtp.gmail.com'
export NL_EMAIL_USER='your.email@gmail.com'
export NL_EMAIL_PASS='1234'
node-login

Contributing
Questions and suggestions for improvement are welcome.