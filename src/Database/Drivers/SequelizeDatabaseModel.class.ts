import IDatabaseResource from "../DatabaseModel.interface";

export default class SequelizeDatabaseResource implements IDatabaseResource {
    private model: any;

    constructor(model: any) {
        this.model = model;
    }

    async findOne(params?: any): Promise<any> {
        return await this.model.findOne(params);
    }

    async findAll(params?: any): Promise<any> {
        return await this.model.findAll(params);
    }

    async create(data: any): Promise<any> {
        return await this.model.create(data);
    }

    async update(data: any, params: any): Promise<any> {
        return await this.model.update(data, params);
    }

    async remove(params: any): Promise<any> {
        return await this.model.destroy(params);
    }
}
