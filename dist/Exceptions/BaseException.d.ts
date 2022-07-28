export default class BaseException extends Error {
    message: string;
    name: string;
    constructor(message: string);
}
