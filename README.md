# civicideahub
Project to create a portal for gathering civic hacking ideas.

# Overall project goals:
* Create a place for at will submission of civic tech/hacking ideas from anyone via a mobile accesible web page
* Empower community members to solve problems in their neighborhood by connecting members with needed skills around shared impact goals
* Create mechanisms for feedback and growing ideas into projects
* Track the evolution of projects into protoypes and live products
* Create a space for idea collisions, different ideas for the same problems
* Create a space for skilled persons to find projects they want to contribute to

# Anti-goals:
* Endless discussion without progress
* A collection of complaints without proposed solutions

# MVP Goals
* Collect ideas from the Baltimore community that may directly and positively impact local communities and government displaying the ideas already submitted
* Display collected ideas (and allow interaction on ideas?)
* Display what is currently in progress.



# Key Sections

* view ideas.
* idea submission form
* page for about us.
* login/signup simplified through user name login and oauth2.0 standards and access.
* Some basic level of administration for the site based on user roles

#Installation

install Node and NPM

Install Dependencies
```
$npm i
```

Start Dev Server
```
$npm start
```
Start Mock API server
```
json-server mock-data/projects.json --port 3030
```

if you have docker you can generate a dev container
```
docker-compose up
```

The dev server is hosted on localhost:3000

The mock api server is hosted on localhost:3030

#Colors

SKY         		#CAEBF2
CARBON (darker)     #A9A9A9
WATERMELON  		#FF3B3F
NEUTRAL    		    #EFEFEF
