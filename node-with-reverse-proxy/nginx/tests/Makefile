main:
	docker rm -f nginx && \
	docker build -t myginx . --no-cache && \
	docker run -d --rm --name nginx -p 5000:80 --network node-with-reverse-proxy_node-reverse-proxy myginx && \
	docker exec -i -t nginx  bash
