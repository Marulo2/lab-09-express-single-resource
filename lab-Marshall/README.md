## How to use!

Download or clone down repo!

Make your way to the project root: lab-09-express-signle-resource/lab-Marshall

Download all dev dependencies


>npm install


Now let's start our server!


>nodemon index.js


Now we can post some student data with httpie or postman!

for httpie, in the command line:

replace <data> with a name

>http POST :3000 name=<data>

>http POST :3000 age=<data>

>http POST :3000 gender=<data>


Next, we can update with a PUT request or check data with a GET request.


>http GET :3000/api/students

>http PUT :3000/api/students name=<updated data>


run tests with mocha in the project root


>mocha
