## Step to how to setup and run api project

# 1.Install node and mongoDB in your machine
     type npm init -y for package.json
# 2.Create a .env file and setup mongodb_url and port number so that the data should be store in a databse loacally

# The structure of file is:

healthcare-services-api/
│
├── models/
│   └── Service.js
├── routes/
│   └── services.js
├── .env
├── app.js
├── package.json
└── README.md


# 3. To Run the project
Type run dev (development) This command uses nodemon to automatically restart the server whenever you make changes to the code
            
             OR
            
Type npm start (production)



# 4. For API Test use Postman

Here you test multiple method such post, get, put, delete
and you will get the ouput in json format 



