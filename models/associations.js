const Article = require("./Article");
const Movie = require("./Movie");
const Serie = require("./Serie");
const Rol = require("./Rol");
const User = require("./User");
const Loan = require("./Loan");

// ARTICLES MOVIES 1:N
Article.hasMany(Movie);
Movie.belongsTo(Article, 
  /* {
  foreignKey: "article_id",
  targetKey: "id",
  } */
);

// ARTICLES SERIES 1:N
Article.hasMany(Serie);
Serie.belongsTo(Article, 
  /* {
  foreignKey: "article_id",
  targetKey: "id",
  } */
);

// ROLS USERS 1:N
Rol.hasMany(User);
User.belongsTo(Rol, 
  /* {
  foreignKey: "rol_id",
  targetKey: "id",
  } */
);

// USER LOANS 1:N
User.hasMany(Loan);
Loan.belongsTo(User, 
 /*  {
  foreignKey: "user_id",
  targetKey: "id",
  } */
);

// ARTICLES LOANS N:M
Article.belongsToMany(Loan, { through: "ArticlesLoans", timestamps: false });
Loan.belongsToMany(Article, { through: "ArticlesLoans", timestamps: false });
