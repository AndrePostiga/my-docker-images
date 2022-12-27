FROM nginx:1.22.1

RUN apt-get update && \
    apt-get install -y vim

EXPOSE 80

COPY nginx.conf /etc/nginx/default.conf
#COPY reverse_proxy_server.conf /nginx.conf

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD [ "nginx", "-g", "daemon off;" ]