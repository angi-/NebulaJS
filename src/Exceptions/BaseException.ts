export default class BaseException {
    public message?: string;
    public name: string;

    constructor(message?: string) {
        this.message = message;
        this.name = 'Exception';
    }

    setName(name: string) {
        this.name = name;
    }
}
