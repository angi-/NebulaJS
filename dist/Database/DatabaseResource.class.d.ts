export declare type ResourceId = string | number;
export default class DatabaseResource {
    constructor();
    findOne(id: ResourceId): Promise<any>;
    findAll(id: ResourceId, params: object): Promise<any>;
    create(data: object): Promise<any>;
    update(id: ResourceId, data: object): Promise<any>;
    remove(id: ResourceId): Promise<any>;
}
