const program = require('commander');
const shell = require("shelljs");

if (process.versions.node && process.versions.node.split('.') && process.versions.node.split('.')[0] < 8) {
    error('NodeJS >= 8 is required to run.');
    print();
    print('Please upgrade your NodeJS engine');
    print(`Current NodeJS version: ${process.version}`);
    process.exit(1);
}

program
    .version('0.0.1', '-v, --version')
    .description('Selenoid and Selenoid UI starter kit.');

program.command('start')
    .description('Starts Selenoid')
    .action(function () {
        shell.exec(`./bin/cm selenoid start --vnc --tmpfs 128`);
    });

program.command('start-ui')
    .description('Starts Selenoid UI')
    .action(function () {
        shell.exec(`./bin/cm selenoid-ui start`);
    });

program.command('start-all')
    .description('Starts Selenoid and Selenoid UI')
    .action(function () {
        shell.exec(`./bin/cm selenoid start --vnc --tmpfs 128 --args "--listen :4445"`);
        shell.exec(`./bin/cm selenoid-ui start --args "--selenoid-uri http://localhost:4445" --port 4446`);
    });

program.command('stop')
    .description('Stops Selenoid')
    .action(function () {
        shell.exec("./bin/cm selenoid stop");
    });

program.command('stop-ui')
    .description('Stops Selenoid UI')
    .action(function () {
        shell.exec("./bin/cm selenoid-ui stop");
    });

program.command('stop-all')
    .description('Stops Selenoid')
    .action(function () {
        shell.exec(`./bin/cm selenoid stop`);
        shell.exec(`./bin/cm selenoid-ui stop`);
    });

if (process.argv.length <= 2) {
    console.log(`Selenoid Installed`);
}

program.parse(process.argv);