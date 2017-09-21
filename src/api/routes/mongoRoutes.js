var mongo = require('../clients/mongoClient');

mongoRoutes.posts={};

// take in project id and like type (contributor or spectator)
mongoRoutes.posts['/api/data/likes/add'] = function(req, res) {
  if(!(req.body.hasOwnProperty('id')) ||
    !(req.body.hasOwnProperty('type'))){
      res.status(400).send("Missing id or type");
  } else {
    if(req.body.type == 'contributor'){
      mongo.contributorLikeAdd(req.body.id, function(err, status){
        if(err){
          console.error(err);
          res.status(500).send();
        } else {
          res.status(200).send();
        }
      });
    } else if(req.body.type == 'spectator'){
      mongo.spectatorLikeAdd(req.body.id, function(err, status){
        if(err){
          console.error(err);
          res.status(500).send();
        } else {
          res.status(200).send();
        }
      });
    } else {
      res.status(400).send("type must be 'contributor' or 'spectator'");
    }
  }
}

//take in project id and like type (contributor or spectator)
mongoRoutes.posts['/api/data/likes/delete'] = function(req, res) {
  if(!(req.body.hasOwnProperty('id')) ||
    !(req.body.hasOwnProperty('type'))){
      res.status(400).send("Missing id or type");
  } else {
    if(req.body.type == 'contributor'){
      mongo.contributorLikeDelete(req.body.id, function(err, status){
        if(err){
          console.error(err);
          res.status(500).send();
        } else {
          res.status(200).send();
        }
      });
    } else if(req.body.type == 'spectator'){
      mongo.spectatorLikeDelete(req.body.id, function(err, status){
        if(err){
          console.error(err);
          res.status(500).send();
        } else {
          res.status(200).send();
        }
      });
    } else {
      res.status(400).send("type must be 'contributor' or 'spectator'");
    }
  }
}


//take in project name, author, description, proposed solution
mongoRoutes.posts['/api/data/ideas/add'] = function(req, res) {
  if(!(req.body.hasOwnProperty('name')) ||
    !(req.body.hasOwnProperty('author')) ||
    !(req.body.hasOwnProperty('description')) ||
    !(req.body.hasOwnProperty('solution'))){
      res.status(400).send("Missing name, author, description, or solution");
    } else {
      mongo.projectCreate(req.body.name, req.body.author, req.body.description, req.body.solution, function(err, data){
        if(err){
          console.error(err);
          res.status(500).send();
        } else {
          res.status(200).send();
        }
      });
    }

}

//take in project id
mongoRoutes.posts['/api/data/ideas/delete'] = function(req, res) {

}

//search for projects
//if not advanced, call basic search function to search across all fields
//if advanced, call advanced search function
mongoRoutes.posts['/api/data/ideas/search'] = function(req, res) {
  if(!(req.body.hasOwnProperty("searchterm"))){
    res.status(400).send("No searchterm specified");
  } else {
    if(req.body.advanced) {
      mongo.projectSearchAdvanced(req.body.id, req.body.name, req.body.author, req.body.description, req.body.solution, req.body.searchterm, function(err, data){
        if(err){
          console.error(err);
          res.status(500).send();
        } else {
          res.json(data);
        }
      });
    } else {
      mongo.projectSearchBasic(req.body.searchterm, function(err, data){
        if(err){
          console.error(err);
          res.status(500).send();
        } else {
          res.json(data);
        }
      });
    }
  }
}

//update project field(s): id, project name, author, description, solution, likes, contributor likes
mongoRoutes.posts['/api/data/ideas/update'] = function(req, res) {

}
