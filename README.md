>>Building a Serverless Bucket List Tracker with AWS Amplify and React:- 

This project involves building a Bucket List Tracker app that helps users stay focused on their personal goals by enabling them to track their bucket list items. Users can add, update, and remove items, each with a title, description, and image. They can also mark items as completed, helping them visualize their progress. The app will be developed using React for the frontend, ensuring an interactive and dynamic user interface, and AWS Amplify for the backend, providing a serverless infrastructure. Amplify will handle authentication with AWS Cognito, store user data in DynamoDB, and manage image uploads through S3.

By leveraging AWS Amplify's powerful tools for building and deploying serverless applications, the app ensures scalability, cost-effectiveness, and security. Amplify’s integration with Git-based CI/CD allows for seamless updates, while its simplicity in managing backend services accelerates development. This project not only empowers users to track their aspirations but also gives developers hands-on experience with cloud-native technologies, offering a modern and efficient way to create full-stack applications.

>>Steps to Build the Bucket List Tracker App:-

1. Develop the Frontend: Create the app using React, building key components for displaying, adding, and managing bucket list items.

2. Set Up Version Control: Initialize a GitHub repository, link it to your local project, and deploy the frontend using AWS Amplify Hosting for CI/CD.

3. Add Authentication: Use AWS Amplify to implement user sign-up and login with Cognito, ensuring secure access to personal bucket lists.

4. Create a GraphQL API: Set up a GraphQL API with AWS AppSync and define the schema for managing bucket list items, connected to DynamoDB for data storage.

5. Deploy the Backend: Deploy the backend services on AWS Amplify to handle data, authentication, and API logic, simplifying server-side management.

>>Services Used:-

1. AWS Amplify: Handles the deployment of both frontend and backend services, providing a seamless workflow for building and hosting the app.
2. AWS AppSync: Simplifies the creation and management of scalable GraphQL APIs, enabling efficient data retrieval and interaction.
3. GraphQL API: Allows clients to query only the specific data they need, optimizing performance and reducing data transfer. (Includes API and Schema setup)
4. DynamoDB: A NoSQL database used to store and manage bucket list items, ensuring fast and scalable data handling.
5. S3 Bucket: Provides storage for user-uploaded images, such as pictures associated with bucket list items, ensuring scalable and secure file storage.

>>Architectural Diagram:-

![image](https://github.com/user-attachments/assets/4bfb7009-0e4d-40e6-b4f4-b71463616721)

1st Step->Deploy React App: Upload the React source code to AWS Amplify for automatic build and deployment.
Host React App: Amplify will host the app on a secure, scalable URL with CI/CD support for continuous updates.
Configure Backend: Use Amplify Studio or CLI to set up backend services like authentication, APIs, and storage.
Implement Authentication: Enable user sign-up and login with Amplify Authentication for secure access.
Create GraphQL API: Set up a GraphQL API using AWS AppSync for managing bucket list items.
Define GraphQL Schema: Create a schema to define the data structure and enable CRUD operations.
Connect DynamoDB: Link DynamoDB to store and manage bucket list items through the GraphQL API.


