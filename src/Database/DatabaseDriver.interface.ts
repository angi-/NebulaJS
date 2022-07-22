import IDatabaseModel from "./DatabaseModel.interface";

export default interface IDatabaseDriver {
    getModel(name: string): IDatabaseModel | null;
}
