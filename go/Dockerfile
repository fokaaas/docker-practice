#############
# BUILD IMAGE
#############

FROM golang:1.22

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download && \
    go mod verify

COPY . .
RUN mkdir build && \
    go build -o build/fizzbuzz

EXPOSE 8080

CMD ["build/fizzbuzz", "serve"]