export default class BaseException extends Error {
    public message: string;
    public name: string;

    constructor(message: string) {
        super();
        this.name = 'BaseException';
        this.message = message;
    }
}
