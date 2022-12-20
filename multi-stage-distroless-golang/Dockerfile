FROM golang:1.19 as build

WORKDIR /app

COPY /src .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o desafio-app

# Second Stage
FROM gcr.io/distroless/static-debian11

WORKDIR /app

COPY --from=build /app/desafio-app /app

ENTRYPOINT [ "./desafio-app" ]