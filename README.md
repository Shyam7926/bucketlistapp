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

#

### **6. Set Up Amplify Authentication**

- The app will allow users to register with their email address, and they will get a verification email to confirm their sign-up.

- The authentication settings are pre-configured in the `bucketlistapp/amplify/auth/resource.ts` file. You can keep the default settings for authentication as they are for this project.

  ![image](https://github.com/user-attachments/assets/c98796fc-ca73-476c-84bd-034022f4ee1c)


#

### **7. Set Up Amplify Data**

- In this step, you'll define a schema to manage the bucket list items. Each user will be able to create, delete, and view their own entries, with Amplify handling data ownership automatically for each user.

- To set this up, go to the `bucketlistapp/amplify/data/resource.ts` file on your local machine and update it with the provided code. This will define the structure of the data and how it's managed for each user.

 ```

  import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

  const schema = a.schema({
  BucketItem: a
    .model({
      title: a.string(),
      description: a.string(),
      image: a.string(),
    })
    .authorization((allow) => [allow.owner()]),  // Restrict access to the owner
  });

  export type Schema = ClientSchema<typeof schema>;

  export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
  });

```

In this schema:
- Each bucket list item consists of a title, description, and completion status.
- The authorization rule guarantees that only the user who created the item has access to it.

#

### **8. Set Up Amplify Storage**

To enable users to upload images for their bucket list items, you'll set up file storage (optional feature).

- Create a Folder for Storage: On your local machine, navigate to the `bucketlistapp/amplify` directory and create a new folder named `storage`.

- Create a resource.ts File: Inside the `storage` folder, create a new file called `resource.ts`.

- Update the `resource.ts` File: Edit the `resource.ts` file with the provided code to configure the image storage. This will enable users to upload images linked to their bucket list entries.

```
import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplifyBucketTrackerImages",
  access: (allow) => ({
    "media/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
  }),
});

```

- This storage configuration ensures that only the user who uploads an image can access it. During the file upload process, the `entity_id` will be replaced with the user's unique identifier, making sure that access to the file is restricted to the user who uploaded it. This way, each user’s images are kept private and secure.

#

### **8. Finalize Backend Setup**

Next, you'll connect the authentication, data, and storage resources within your Amplify backend configuration.

- Navigate to the Backend Configuration File: On your local machine, go to the `amplify/backend.ts` file.

- Update the File: Edit the `backend.ts` file with the provided code to link the authentication, data, and storage resources together. This will ensure that your app can seamlessly interact with these services as part of the Amplify backend setup.

 ![image](https://github.com/user-attachments/assets/b37e6d66-5847-4d12-98cb-5be864b8eaef)

 The Code:

 ```
import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';


defineBackend({
  auth,
  data,
  storage,
});

```


![image](https://github.com/user-attachments/assets/ef5893fe-e31b-4712-9985-3b846ef2d11a)

This ensures that all backend resources, including authentication, data storage, and file storage, are properly configured and linked together. By updating the `backend.ts` file, you establish the connections needed for these services to work together seamlessly in your Amplify project.


#

### **9. Deploy the Amplify Backend in a Cloud Sandbox**

Next, you’ll deploy your Amplify backend resources to a personal cloud sandbox environment, enabling you to quickly build, test, and iterate on your app.

- In a new terminal window, run the following command from your app’s root folder:

  ```
  npx ampx sandbox
  ```

- This command initiates a Cloud sandbox, which is a temporary and isolated development environment connected to AWS Cloud resources. This allows you to rapidly build, test, and iterate on your app, as each developer has their own sandbox.

 If you encounter the error: `SSMCredentialsError: UnrecognizedClientException:` The security token included in the request is invalid, follow these steps:

- Run the command `aws configure` in your terminal.
- Retrieve your access key and secret access key from the AWS Console:
  Go to IAM > Users in the AWS Console.
  Select an existing user or create a new one by clicking Create User.
  Navigate to Security Credentials to find or generate the keys.

- Once the sandbox environment is successfully deployed, you’ll receive a confirmation message. Additionally, an `amplify_outputs.json` file will be created and added to your project, containing relevant details about the deployment.


![image](https://github.com/user-attachments/assets/0366c0ab-4da2-4983-8efb-3edb98453a6c)

- By following these steps, your bucket list tracker app now has a fully configured backend, including user authentication, data storage, and file storage.

You are now ready to move on to the next phase, where you'll implement the frontend logic to interact with these backend services. This will enable your app to communicate with the cloud and provide the necessary functionality for users to manage their bucket lists.

#

### **10. Connecting Frontend and Backend**

In this task, you'll develop the frontend for your bucket list tracker app and connect it to the cloud backend you've already set up.

- Implement User Authentication: Use AWS Amplify's UI component library to build the complete user authentication flow, allowing users to sign up, log in, and manage their accounts.

- CRUD Operations for Bucket List Items: Implement the functionality to create, update, and delete bucket list items. This will involve integrating the frontend with the backend API (using AWS Amplify) to interact with the data storage.

- Image Upload Feature: Design the frontend to allow users to upload images for each bucket list item. These images will be stored using the file storage service you configured earlier.

With these steps, you'll complete the user interface for managing bucket list items, including authentication, CRUD functionality, and image uploads.

#

### **11. Install Amplify Libraries**

Open a new terminal window, navigate to the project folder (`bucketlistapp`), and execute the following command to install the required Amplify libraries:

```

npm install aws-amplify @aws-amplify/ui-react

```

![image](https://github.com/user-attachments/assets/b1cde0ac-1811-4ff2-97f1-f6533c7e8206)

These libraries provide the client-side APIs needed to connect your app’s frontend to the backend services, as well as the UI components for authentication.

#

### **12. UI Setup and Styling**

On your local machine, go to the `bucketlistapp/src/index.css` file.

![image](https://github.com/user-attachments/assets/2c92db47-f9dd-46d0-bb18-817f90d5327c)

Update it with the following code to style the bucket list interface:

```

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.87);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}


.card {
  padding: 2em;
}


.read-the-docs {
  color: #888;
}


.box:nth-child(3n + 1) {
  grid-column: 1;
}
.box:nth-child(3n + 2) {
  grid-column: 2;
}
.box:nth-child(3n + 3) {
  grid-column: 3;
}

```

- This will establish the layout and styles for the bucket list interface, ensuring it is responsive and visually appealing.

- On your local machine, go to the `bucketlistapp/src/App.jsx` file.

 ![image](https://github.com/user-attachments/assets/a9a2411b-c917-4225-91ed-3f3912260dce)

- Update it with the following code in `App.jsx`:

  ```

  { useState, useEffect } from "react";
  import {
  Authenticator,
  Button,
  Text,
  TextField,
  Heading,
  Flex,
  View,
  Image,
  Grid,
  Divider,
  }
  from "@aws-amplify/ui-react";
  import { Amplify } from "aws-amplify";
  import "@aws-amplify/ui-react/styles.css";
  import { getUrl } from "aws-amplify/storage";
  import { uploadData } from "aws-amplify/storage";
  import { generateClient } from "aws-amplify/data";
  import outputs from "../amplify_outputs.json";
  /**
  * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
  */


  Amplify.configure(outputs);
  const client = generateClient({
  authMode: "userPool",
  });


  export default function App() {
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetchItems();
  }, []);


  async function fetchItems() {
    const { data: items } = await client.models.BucketItem.list();
    await Promise.all(
      items.map(async (item) => {
        if (item.image) {
          const linkToStorageFile = await getUrl({
            path: ({ identityId }) => `media/${identityId}/${item.image}`,
          });
          console.log(linkToStorageFile.url);
          item.image = linkToStorageFile.url;
        }
        return item;
      })
    );
    console.log(items);
    setItems(items);
  }


  async function createItem(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    console.log(form.get("image").name);


    const { data: newItem } = await client.models.BucketItem.create({
      title: form.get("title"),
      description: form.get("description"),
      image: form.get("image").name,
    });


    console.log(newItem);
    if (newItem.image)
      await uploadData({
        path: ({ identityId }) => `media/${identityId}/${newItem.image}`,
        data: form.get("image"),
      }).result;


    fetchItems();
    event.target.reset();
  }


  async function deleteItem({ id }) {
    const toBeDeletedItem = {
      id: id,
    };


    const { data: deletedItem } = await client.models.BucketItem.delete(
      toBeDeletedItem
    );
    console.log(deletedItem);


    fetchItems();
  }


  return (
    <Authenticator>
      {({ signOut }) => (
        <Flex
          className="App"
          justifyContent="center"
          alignItems="center"
          direction="column"
          width="70%"
          margin="0 auto"
        >
          <Heading level={1}>My Bucket List</Heading>
          <View as="form" margin="3rem 0" onSubmit={createItem}>
            <Flex
              direction="column"
              justifyContent="center"
              gap="2rem"
              padding="2rem"
            >
              <TextField
                name="title"
                placeholder="Bucket List Item"
                label="Bucket List Item"
                labelHidden
                variation="quiet"
                required
              />
              <TextField
                name="description"
                placeholder="Description"
                label="Description"
                labelHidden
                variation="quiet"
                required
              />
              <View
                name="image"
                as="input"
                type="file"
                alignSelf={"end"}
                accept="image/png, image/jpeg"
              />


              <Button type="submit" variation="primary">
                Add to Bucket List
              </Button>
            </Flex>
          </View>
          <Divider />
          <Heading level={2}>My Bucket List Items</Heading>
          <Grid
            margin="3rem 0"
            autoFlow="column"
            justifyContent="center"
            gap="2rem"
            alignContent="center"
          >
            {items.map((item) => (
              <Flex
                key={item.id || item.title}
                direction="column"
                justifyContent="center"
                alignItems="center"
                gap="2rem"
                border="1px solid #ccc"
                padding="2rem"
                borderRadius="5%"
                className="box"
              >
                <View>
                  <Heading level="3">{item.title}</Heading>
                </View>
                <Text fontStyle="italic">{item.description}</Text>
                {item.image && (
                  <Image
                    src={item.image}
                    alt={`Visual for ${item.title}`}
                    style={{ width: 400 }}
                  />
                )}
                <Button
                  variation="destructive"
                  onClick={() => deleteItem(item)}
                >
                  Delete Item
                </Button>
              </Flex>
            ))}
          </Grid>
          <Button onClick={signOut}>Sign Out</Button>
        </Flex>
      )}
    </Authenticator>

  ```

#

### **13. Launch the App Locally**

- Open a terminal window, navigate to the root folder (`bucketlistapp`), and execute the following command to launch the app:

```
npm run dev
```

- Open the localhost link displayed in your terminal to view the application.


  ![image](https://github.com/user-attachments/assets/418e5212-1723-4a52-8a6d-1c53c89c53a0)


- Select the “Create Account” tab and follow the authentication flow to sign up by entering your email and password. After that, create your account.


  ![image](https://github.com/user-attachments/assets/0dae9e9a-7e05-4857-b2b4-11ce3c3c075d)

- You will receive a verification code in your email. Enter this code to log in.

  ![image](https://github.com/user-attachments/assets/d897d0b7-e9c4-4f99-bccb-1c3b39e988f4)


- Once signed in, you can start adding items to your bucket list and managing them.

  ![image](https://github.com/user-attachments/assets/3d1ddbef-9f39-4f4c-8c17-272a694f234d)

#


