#/bin/sh

start:
	docker-compose run -p 8080:4000 workshop

exec:
	docker-compose exec -it workshop bash

stop:
	docker-compose down --remove-orphans