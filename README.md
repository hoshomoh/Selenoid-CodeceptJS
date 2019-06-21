## Selenoid-CodeceptJS

This is a basis selenoid setup using docker. You must have [docker](https://docs.docker.com/install/) 
and [docker compose](https://docs.docker.com/compose/install/) installed on your machine for this to work.
The current setup will download 2 last versions of Firefox, Chrome and Opera. I would ad support for 
specifying browsers in the near future.

### Commands

#### Downloading and Configuring the browsers
```bash
make download-browsers
```

#### Start Selenoid and Selenoid UI
```bash
make start-selenoid
```

```
Selenoid and Selenoid UI should be up and running

Selenoid:    https://localhost:4445
Selenoid UI: https://localhost:8888

To check Selenoid status https://localhost:4445/status
```

#### Run the sample Codecept Test

I have added a sample codecept test(check /tests folder) that runs in a docker container. To run the test 
`make test` and if you would like to SSH into the sample test container `make shell`

### To do

- Support for android testing using Appium 
- Support for specifying slenoid and selenoid UI port
- Support for downloading specified browsers instead of pulling the last two versions of chrome, firefox and opera