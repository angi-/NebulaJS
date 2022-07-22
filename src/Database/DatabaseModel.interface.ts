export default interface IDatabaseResource {
    findOne(params?: any): Promise<any>;
    findAll(params?: any): Promise<any>;
    create(data: any): Promise<any>;
    update(data: any, params: any): Promise<any>;
    remove(params: any): Promise<any>;
}
