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