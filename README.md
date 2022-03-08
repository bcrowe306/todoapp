# TODO App
This repository holds the webapp code for a demo TODO Application. This is for testing and demo purposes and not for any actual productivity.

## Dependencies
* Nodejs >= 12
* MongoDB
* Docker

# Build Dockerfile
```shell
docker build -t bcrowe/todoapp:latest .
```

# Run Docker container
* Create .env file in root of repository and fill in environment vars

```env
TODOAPP_JWT_SECRET=
TODOAPP_SESSION_TIME=
TODOAPP_APP_PORT=
TODOAPP_DATABASE_USER=
TODOAPP_DATABASE_PASSWORD=
TODOAPP_DATABASE_HOSTNAME=
TODOAPP_DATABASE_PORT=
TODOAPP_DATABASE_NAME=
```
* Run the container with the following command
```shell
docker run -d -p 3000:3000 --env-file .\.env bcrowe/todoapp:latest
```
* Make sure to substitue the publish port(-p) to whatever port your chose in your .env file.

# Push Container
```shell
docker login -u [username]
docker push bcrowe/todoapp:latest
```