dev-dockerfile = -f docker-compose.yml -f docker-compose.dev.yml
prod-dockerfile := -f docker-compose.yml

install:
	docker-compose $(dev-dockerfile) run --rm frontend yarn
	docker-compose $(dev-dockerfile) run --rm backend yarn

build-dev:
	docker-compose $(dev-dockerfile) build 

dev:
	docker-compose $(dev-dockerfile) up -V

generate-documentation:
	docker exec -it backend-terraformation yarn run documentation