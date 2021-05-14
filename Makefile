IMAGE=garage
CONTAINER=garage

# dev
build_dev:
	@echo "Building container..."
	@docker build -t ${IMAGE} .

run_dev:
	@echo "Start running container..."
	@docker run --name ${CONTAINER} \
		-v $(shell pwd)/nginx/garage_dev.conf:/etc/nginx/conf.d/garage.conf \
		-v $(shell pwd)/nginx/nginx.conf:/etc/nginx/nginx.conf \
		-v $(shell pwd)/client:/app/client \
		-v $(shell pwd)/server:/app/server \
		-p 80:80 \
		-d ${IMAGE}

# prod
build_prod:
	@echo "Building container..."
	@docker build -t ${IMAGE} ./Dockerfile.prod

run_prod:
	@echo "Start running container..."
	@docker run --name ${CONTAINER} \
		# -v $(shell pwd)/docs:/usr/share/nginx/html/docs
		-p 80:80 \
		-d ${IMAGE}

# common
stop:
	@echo "Stoping container..."
	@docker stop ${CONTAINER}
