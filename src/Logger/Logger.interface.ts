export default interface ILogger {
    info(...message: any): void;
    warning(...message: any): void;
    error(...message: any): void;
}
