FROM golang:1.20.2-alpine3.17

RUN mkdir /app
WORKDIR /app

COPY go.mod ./
RUN go mod download

ADD . /app

EXPOSE 8998

# CMD ["go", "run", "cmd/main.go"]

