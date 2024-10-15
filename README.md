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

![Screenshot from 2024-10-15 17-09-35](https://github.com/user-attachments/assets/77b08ce5-9ba5-42f9-a115-f7cdcecd6f55)

![Screenshot from 2024-10-15 17-09-58](https://github.com/user-attachments/assets/6fc4bddd-9386-4b25-b746-8e824956a35c)
![Screenshot from 2024-10-15 17-10-42](https://github.com/user-attachments/assets/60516962-2875-4a48-bbd5-c58ecaa1d7a7)






