# README

** Notice! **
This project requires the Node Package Manager to be installed on your system and/or the Heroku buildpacks that you use. To add the NodeJS environment to your Heroku project run:

$ heroku buildpacks:add --index 1 heroku/nodejs
See: https://devcenter.heroku.com/articles/using-multiple-buildpacks-for-an-app#adding-a-buildpack

** Notice! **
You may want to remove the *username: postgres* attribute in the *config/database.yml* file in your project for the development and test servers or change it according to your specific integration of PostgreSQL on your system/server.