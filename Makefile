DOCKER := docker
COMPOSE := docker-compose -p selenoid_sample
RM := rm

download-browsers:
	@$(COMPOSE) up selenoid-cm

start-selenoid: download-browsers
	@$(COMPOSE) up -d selenoid selenoid-ui

test-webdriver: start-selenoid
	# Run end to end tests via codeceptjs
	@$(COMPOSE) run --service-ports web /bin/sh -c 'npm run test-webdriver'

shell:
	# Start an interactive shell session
	@$(COMPOSE) run --rm --service-ports web bash

stop-selenoid:
	@$(RM) -rf config/browsers.json
	@$(COMPOSE) stop selenoid selenoid-ui
