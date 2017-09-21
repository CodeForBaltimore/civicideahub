

module.exports = {

  contributorLikeAdd : function(projectId, callback){
    console.log("addContributorLike Stub");
    callback(err, "addContributorLike Stub");
  },

  contributorLikeDelete : function(projectId, callback){
    console.log("deleteContributorLike Stub");
    callback(err, "deleteContributorLike Stub");
  },

  projectCreate : function(name, author, description, solution, callback){
    console.log("createProject Stub");
    callback(err, "createProject Stub");
  },

  projectDelete : function(projectId, callback){
    console.log("deleteProject Stub");
    callback(err, "deleteProject Stub");
  },

  projectSearchAdvanced : function(id, name, author, description, solution, searchterm, callback){
    console.log("projectSearchAdvanced Stub");
    callback(err, "projectSearchAdvanced Stub");
  },

  projectSearchBasic : function(searchterm, callback){
    console.log("projectSearchBasic Stub");
    callback(err, "projectSearchBasic Stub");
  },

  projectUpdate : function(name, author, description, solution, contributorLikes, spectatorLikes, callback){
    console.log("projectUpdate Stub");
    callback(err, "projectUpdate Stub");
  },

  spectatorLikeAdd : function(projectId, callback){
    console.log("addSpectatorLike Stub");
    callback(err, "addSpectatorLike Stub");
  },

  spectatorLikeDelete : function(projectId, callback){
    console.log("deleteSpectatorLike Stub");
    callback(err, "deleteSpectatorLike Stub");
  }

}
