
## Running on local
 clone this repo:
  ```
  git clone https://github.com/RajaMuneerBaigal/Next-App.git
  
  cd Next-App/my-next-app
  npm install
 ```
- Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## RUNNING VIA DOCKER

### prerequisites
- need to have docker installed on your machine and docker-compose
- Step 1:
    - If you want to use current next project or use your own then you can skip to step 2
    - Else follow the instructions below
    - Create a directory named app
    - cd into that directory
    - If you want to create a new next project then you can use following command to create a next project

    ``` 
    using yarn:
     yarn create next-app  nextjs-docker
    
    using npx:

    npx create-next-app my-next-app
     ```
- Step 2: 
    - Now you have a next project with folder name my-next-app  or your custom next project
    - cd into my-next-app or custom directory
    - Copy any of the two provided Dockerfiles into my-next-app or your custom next app directory as Dockerfile
    - Please note that while creating a next project it asks for if you are using typescript or not. If you are using typescript it creates a tsconfig.json file if not enabled it creates jsconfig.json. Please update the copy line in Dockerfile accordingly. In context of current project I am not using typescript so i am copying jsconfig.json file.

   - Next move to root directory in this case app directory and copy the docker-compose file there.
   - Copy the .env file to root directory as well and update it by adding required environment variables.
   - update docker-compose file and .env file according to your needs. i.e  whereever there is  my-next-app you can change it to your own folder name that was created by npx command or keep same if you are following this guide.
   - Now you are all setup to dockerize the project and run it using docker. Use the following command to build and run the containers altogether.
   ```
   docker-compose up --build -d
   docker-compose logs -f    # to check the logs of the containers
   ```

   - Visit the browser and hit localhost:3000 to check your next app
   - Visit https://localhost:9200 to check elastic search
   - To reset the elastic search password for elastic user use following command:
   ```
   docker exec -it myelasticsearch /usr/share/elasticsearch/bin/elasticsearch-reset-password -u elastic -i 
   ```

- Your directory structure should look like this:
```
- .
├── docker-compose.yml
├── my-next-app
│   ├── Dockerfile
│   ├── jsconfig.json
│   ├── next.config.js
│   ├── node_modules
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── public
│   ├── README.md
│   ├── src
│   └── tailwind.config.js
└── sql-scripts

```
