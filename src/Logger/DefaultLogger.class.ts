import ILogger from "./Logger.interface";
import chalk from "chalk";

export default class DefaultLogger implements ILogger {
    private prefix = chalk.white.bgCyan(' @ ') + chalk.black.bgCyanBright(' neutron-core ');
    private separator = ' ';

    info(...message: any) {
        console.log(`${this.prefix}${this.separator}${chalk.blueBright(message)}`);
    }

    warning(...message: any) {
        console.log(`${this.prefix}${this.separator}${chalk.yellow(message)}`);
    }

    error(...message: any) {
        console.log(`${this.prefix}${this.separator}${chalk.red(message)}`);
    }
}
