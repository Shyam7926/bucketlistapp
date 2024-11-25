# **Building a Serverless Bucket List Tracker with AWS Amplify and React**

This project involves building a Bucket List Tracker app that helps users stay focused on their personal goals by enabling them to track their bucket list items. Users can add, update, and remove items, each with a title, description, and image. They can also mark items as completed, helping them visualize their progress. The app will be developed using React for the frontend, ensuring an interactive and dynamic user interface, and AWS Amplify for the backend, providing a serverless infrastructure. Amplify will handle authentication with AWS Cognito, store user data in DynamoDB, and manage image uploads through S3.

By leveraging AWS Amplify's powerful tools for building and deploying serverless applications, the app ensures scalability, cost-effectiveness, and security. Amplify’s integration with Git-based CI/CD allows for seamless updates, while its simplicity in managing backend services accelerates development. This project not only empowers users to track their aspirations but also gives developers hands-on experience with cloud-native technologies, offering a modern and efficient way to create full-stack applications.

### **Steps to Build the Bucket List Tracker App:**

**1. Develop the Frontend:** Create the app using React, building key components for displaying, adding, and managing bucket list items.

**2. Set Up Version Control:** Initialize a GitHub repository, link it to your local project, and deploy the frontend using AWS Amplify Hosting for CI/CD.

**3. Add Authentication:** Use AWS Amplify to implement user sign-up and login with Cognito, ensuring secure access to personal bucket lists.

**4. Create a GraphQL API:** Set up a GraphQL API with AWS AppSync and define the schema for managing bucket list items, connected to DynamoDB for data storage.

**5. Deploy the Backend:** Deploy the backend services on AWS Amplify to handle data, authentication, and API logic, simplifying server-side management.

### **Services Used:**

**1.  AWS Amplify:** Handles the deployment of both frontend and backend services, providing a seamless workflow for building and hosting the app.

**2.  AWS AppSync:** Simplifies the creation and management of scalable GraphQL APIs, enabling efficient data retrieval and interaction.

**3.  GraphQL API:** Allows clients to query only the specific data they need, optimizing performance and reducing data transfer. (Includes API and Schema setup)

**4.  DynamoDB:** A NoSQL database used to store and manage bucket list items, ensuring fast and scalable data handling.

**5.  S3 Bucket:** Provides storage for user-uploaded images, such as pictures associated with bucket list items, ensuring scalable and secure file storage.

### **Architectural Diagram:**

![image](https://github.com/user-attachments/assets/4bfb7009-0e4d-40e6-b4f4-b71463616721)

**Step 1->** Deploy React App to AWS Amplify: Push your React app’s source code to AWS Amplify via GitHub, GitLab, or Bitbucket. Amplify automatically builds and hosts your app.

**Step 2->** Host React App: AWS Amplify hosts the app, providing a public URL for access.

**Step 3->** Set up Backend: Use Amplify Studio or the Amplify CLI to configure backend services like authentication and APIs.

**Step 4->** Add Authentication: Enable AWS Amplify Authentication for user signup/login using Amazon Cognito.

**Step 5->** Create AppSync GraphQL API: Set up AWS AppSync to create a GraphQL API for your app.

**Step 6->** Connect GraphQL to DynamoDB: Define a GraphQL schema that links to DynamoDB for storing and managing data.

**Step 7->** CRUD Operations with DynamoDB: The DynamoDB database is automatically created based on your schema, enabling CRUD (Create, Read, Update, Delete) operations from the API.

#

### **Create and Deploy React Frontend App:**
**Overview:**

AWS Amplify provides a streamlined way to build, deploy, and host single-page applications or static websites with serverless backends using a Git-based CI/CD workflow. 
Once your app is connected to a Git repository, Amplify automatically detects the build settings for both the frontend and any backend services.
With each code update, Amplify redeploys your app seamlessly. 
In this process, you will create a new React app for your bucket list tracker, upload it to a GitHub repository, and link it to AWS Amplify for automatic deployment and hosting.


### **1. Create a React App:**

- **Open a new terminal window and execute the below commands to set up a React app using Vite:**

```
npm create vite@latest bucketlistapp -- --template react

cd bucketlistapp

npm install

npm run dev

```

- **You can refer to the screenshot below to verify the sequence of commands:**

  ![image](https://github.com/user-attachments/assets/4967e9cd-9777-49fe-b50c-332a7dfaaa8e)


- **In the terminal window, click the Local link to open the Vite + React application in our browser and see our bucket list tracker.**

- **You have successfully set up a React application**

  ![image](https://github.com/user-attachments/assets/b006fa71-af2f-4500-9ad8-07b4298b45cb)


#

### **2. Set Up a GitHub Repository**

- Here, we’ll create a GitHub repository and commit our code.

Sign in to GitHub at [https://github.com/](https://github.com/). If we don’t have an account, be sure to sign up first.

In the “Create a new repository” section, fill out the following details:

Repository Name: bucketlistapp

![image](https://github.com/user-attachments/assets/d4080ac7-4774-4d83-a998-9a753924e952)

- Choose Public, then click Create a new repository

  ![image](https://github.com/user-attachments/assets/5c170186-799a-454a-8878-e977e10da26e)

- Now that we've created your GitHub repository, it's time to link it with our local code.
In the terminal of VS Code, go to the root folder of our app (e.g., bucketlistapp). Then, run the necessary commands to initialize a Git repository and push our code to GitHub. 

Following are the commands:
```
git init
git add .
git commit -m "initial commit"
git remote add origin git@github.com:<your-username>/bucketlistapp.git
git branch -M main
git push -u origin main

```

- For the command `git remote add origin git@github.com:<your-username>/bucketlistapp.git`, we can obtain the URL from our GitHub repository page (or simply copy the URL of the repository from our browser).

#

### **3. Install the Amplify Packages**

- Here in this step, we’ll set up an Amplify project for our app.

In the terminal, run the following command from our app’s root folder:

```
npm create amplify@latest -y
```

![image](https://github.com/user-attachments/assets/45ee2d20-d502-4271-8ba4-3b0291aeea35)

- **This will create a lightweight Amplify project in your app directory.**

  ![image](https://github.com/user-attachments/assets/8f09ac2a-25ff-41b1-80d2-a2c23e876501)


- Push the changes to GitHub using these commands:

```
git add . 
git commit -m "installing amplify" 
git push origin main
```

- With this, we have successfully installed the Amplify packages.

#

### **4. Deploy Your App to AWS Amplify**

- Now, we’ll link your GitHub repository to AWS Amplify, allowing to build, deploy, and host our bucket list tracker app.

- Log in to the AWS Management Console and navigate to the AWS Amplify console at (https://console.aws.amazon.com/amplify).
- Click on “Create new app.”

  ![image](https://github.com/user-attachments/assets/ce1e6711-96ac-459c-a3ec-6aacd92a9e44)

- On the “Start building with Amplify” page, select GitHub for “Deploy your app” and click Next.

  ![image](https://github.com/user-attachments/assets/af4da94e-a6fc-4691-9408-0b816e284639)

- When prompted, authenticate with GitHub, then select the repository and branch (main) we created earlier. Click Next.

- In the service role section, choose “Create and use a new service role.” Keep the default settings for the rest, then click Next.

  ![image](https://github.com/user-attachments/assets/3439f6a1-88e6-4bc9-9274-e3f85ad9d255)


- Review your selections and click Save and deploy.

  ![image](https://github.com/user-attachments/assets/c8d0d765-ce3c-47db-a97f-eb84c7070aa8)

- Allow AWS Amplify some time to create and deploy your app.

- Here we go!

  ![image](https://github.com/user-attachments/assets/7dba4979-4e23-497c-8168-d6eea262b6f4)

- You can access the website by clicking the URL provided in the Domain section.

- AWS Amplify will now compile our source code and deploy our app to a URL similar to https://...amplifyapp.com. Each time we push code to GitHub, Amplify will initiate a new deployment.

#

### **5. Set Up Amplify Backend**

- To build the backend for your bucket list tracker app, you'll use AWS Amplify. This setup will include essential services like authentication, data storage, and file storage, allowing users to manage their lists efficiently.

- AWS Amplify simplifies the process by providing an integrated platform where you can configure backend services like user sign-in, store data, and manage files—all from one place.

- With Amplify, you can quickly set up and deploy a full-stack application, using a code-first approach that integrates hosting, backend services, and UI tools to streamline development.
