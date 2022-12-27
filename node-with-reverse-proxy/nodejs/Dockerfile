FROM node:19.2.0 as build

WORKDIR /app

COPY . /app/

RUN npm install --omit=dev   

FROM node:19.2.0-alpine

WORKDIR /app

COPY --from=build /app /app/

ADD https://raw.githubusercontent.com/eficode/wait-for/v2.2.2/wait-for /app/

RUN chmod +x /app/wait-for

EXPOSE 3000