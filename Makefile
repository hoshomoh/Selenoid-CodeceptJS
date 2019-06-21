DOCKER := docker
COMPOSE := docker-compose -p selenoid_sample
RM := rm

download-browsers:
	@$(COMPOSE) up selenoid-cm

start-selenoid: download-browsers
	@$(COMPOSE) up -d selenoid selenoid-ui
    #
    # Selenoid and Selenoid UI should be up and running
    #    Selenoid:    https://localhost:4445
    #    Selenoid UI: https://localhost:8888
    #
    #    To check Selenoid status https://localhost:4445/status

test: start-selenoid
	# Run end to end tests via codeceptjs
	@$(COMPOSE) up web
	@$(COMPOSE) run --service-ports web /bin/sh -c 'npm test'

shell:
	# Start an interactive shell session
	@$(COMPOSE) run --rm --service-ports web bash

stop-selenoid:
	@$(RM) -rf config/browsers.json
	@$(COMPOSE) stop selenoid selenoid-ui
