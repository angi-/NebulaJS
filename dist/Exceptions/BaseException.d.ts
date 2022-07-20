export default class BaseException {
    message?: string;
    name: string;
    constructor(message?: string);
    setName(name: string): void;
}
