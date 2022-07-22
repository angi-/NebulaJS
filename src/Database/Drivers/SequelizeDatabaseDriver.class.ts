import IDatabaseDriver from "../DatabaseDriver.interface";
import DatabaseResource from "../DatabaseModel.interface";
import SequelizeDatabaseResource from "./SequelizeDatabaseModel.class";

export default class SequelizeDatabaseDriver implements IDatabaseDriver {
    private models: { [key: string]: object };

    constructor(models: { [key: string]: object }) {
        this.models = models;
    }

    getModel(name: string): DatabaseResource | null {
        if (this.models.hasOwnProperty(name))
            return new SequelizeDatabaseResource(this.models[name]);

        return null;
    }
}
