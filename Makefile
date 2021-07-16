### only prod container

IMAGE=garage
CONTAINER=garage

build:
	@echo "Building container..."
	@docker build -t ${IMAGE} ./Dockerfile.prod

run:
	@echo "Start running container..."
	@docker run --name ${CONTAINER} \
		# -v $(shell pwd)/docs:/usr/share/nginx/html/docs
		-p 80:80 \
		-d ${IMAGE}

stop:
	@echo "Stoping container..."
	@docker stop ${CONTAINER}
