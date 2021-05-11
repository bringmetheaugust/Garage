IMAGE=garage
CONTAINER=garage

build:
	@echo "Building container..."
	@docker build -t ${IMAGE} .

run:
	@echo "Start running container..."
	@docker run --name ${CONTAINER} -p 587:25 -d ${IMAGE}

rebuild:
	@echo "Rebuilding..."
	@docker stop ${CONTAINER}
	@docker rm ${CONTAINER} -v
	$(MAKE) build
	$(MAKE) run
