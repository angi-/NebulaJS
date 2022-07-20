import NotImplementedException from "../Exceptions/NotImplementedException";

export type ResourceId = string | number;

export default class DatabaseResource {
    constructor () {
    }

    async findOne(id: ResourceId): Promise<any> {
        throw new NotImplementedException();
    }

    async findAll(id: ResourceId, params: object): Promise<any> {
        throw new NotImplementedException();
    }

    async create(data: object): Promise<any> {
        throw new NotImplementedException();
    }

    async update(id: ResourceId, data: object): Promise<any> {
        throw new NotImplementedException();
    }

    async remove(id: ResourceId): Promise<any> {
        throw new NotImplementedException();
    }
}
