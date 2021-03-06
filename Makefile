### only prod container

IMAGE=garage
CONTAINER=garage

build:
	@echo "Building container..."
	@docker build -t ${IMAGE} .

run:
	@echo "Start running container..."
	@docker run --name ${CONTAINER} -p 83:80 -d ${IMAGE}

remove:
	@echo "Removing container..."
	@docker stop ${CONTAINER}
	@docker rm ${CONTAINER} -v
