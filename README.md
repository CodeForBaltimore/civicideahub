# civicideahub
Project to create a portal for gathering civic hacking ideas.


## Overall project goals:

* Create a place for at will submission of civic tech/hacking ideas from anyone via a mobile accesible web page
* Empower community members to solve problems in their neighborhood by connecting members with needed skills around shared impact goals
* Create mechanisms for feedback and growing ideas into projects
* Track the evolution of projects into protoypes and live products
* Create a space for idea collisions, different ideas for the same problems
* Create a space for skilled persons to find projects they want to contribute to


## Anti-goals:

* Endless discussion without progress
* A collections of complaints wihtout proposed solutions


## MVP Goals

* Collect ideas from the Baltimore community that may directly and positively impact local communities and government displaying the ideas already submitted
* Display collected ideas (and allow interaction on ideas?)
* Display what is currently in progress.


## Key Sections

* view ideas.
* idea submission form
* page for about us.
* login/signup simplified through user name login and oauth2.0 standards and access.
* Some basic level of administration for the site based on user roles


## Installation

1. Install Node and NPM
2. Install Dependencies

    ```bash
    npm install
    ```
3. Start Dev Server

    ```
    npm start
    ```

Start Mock API server:

```bash
./node_modules/.bin/json-server mock-data/projects.json --port 3030
```

If you have docker you can generate a dev container:

```bash
docker-compose up
```

The dev server is hosted on http://localhost:3000

The mock api server is hosted on http://localhost:3030


## Colors

- ![#CAEBF2](https://placehold.it/15/CAEBF2/000000?text=+) `#CAEBF2` Sky
- ![#A9A9A9](https://placehold.it/15/A9A9A9/000000?text=+) `#A9A9A9` Carbon (darker)
- ![#FF3B3F](https://placehold.it/15/FF3B3F/000000?text=+) `#FF3B3F` Watermelon
- ![#EFEFEF](https://placehold.it/15/EFEFEF/000000?text=+) `#EFEFEF` Neutral
