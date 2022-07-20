import BaseException from "./BaseException";

export default class NotImplementedException extends BaseException {
    constructor(message?: string) {
        super(message);
        this.setName('NotImplementedException');
    }
}
