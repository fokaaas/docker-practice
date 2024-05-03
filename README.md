# Docker Practice

This repository contains sample Dockerfiles for various programming languages.

You must install [Docker](https://www.docker.com/) before using. Usage examples are below

## Python

Go to _python_ directory and build the image:

```bash
docker build -t python_app .
```

Run the container:

```bash
docker run -p 3001:8080 python_app
```

App is running on [http://localhost:3001](http://localhost:3001)

Dockerfile

```dockerfile
#############
# BUILD IMAGE
#############

FROM python:3.10-alpine

WORKDIR /app

RUN python -m venv ./.venv

COPY requirements.txt .
RUN . ./.venv/bin/activate && \
    pip install -r requirements.txt

COPY . .

EXPOSE 8080

CMD [".venv/bin/uvicorn", "spaceship.main:app", "--host=0.0.0.0", "--port=8080"]
```

.dockerignore

```
.dockerignore
.gitignore
.venv
README.rst
Dockerfile
```

## Golang

Go to _go_ directory and build the image:

```bash
docker build -t go_app .
```

Run the container:

```bash
docker run -p 3002:8080 go_app
```

App is running on [http://localhost:3002](http://localhost:3002)

Dockerfile

```dockerfile
##############
# BUILD BINARY
##############

FROM golang:alpine AS builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download && \
    go mod verify

COPY . .
RUN go build -o fizzbuzz

###################
# BUILD SMALL IMAGE
###################

FROM gcr.io/distroless/base

WORKDIR /app

COPY --from=builder /app/fizzbuzz .
COPY --from=builder /app/templates/index.html templates/

EXPOSE 8080

CMD ["./fizzbuzz", "serve"]
```

.dockerignore

```
.dockerignore
.gitignore
README.rst
build
Dockerfile
```

## TypeScript

Go to _ts_ directory and build the image:

```bash
docker build -t ts_app .
```

Run the container:

```bash
docker run -it ts_app
```

App is running on your terminal.

Dockerfile

```dockerfile
############
# COMPILE TS
############

FROM node:22-slim AS builder

WORKDIR /app

RUN npm install -g pnpm @vercel/ncc

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN ncc build src/index.ts -o build

###################
# BUILD FINAL IMAGE
###################

FROM node:22-slim

WORKDIR /app

COPY --from=builder /app/build/ .

ENTRYPOINT ["node", "index.js"]
```

.dockerignore

```
node_modules
build
.dockerignore
.eslintignore
.editorconfig
.eslintrc.json
.gitignore
.prettierrc
README.md
```
