export interface LoginReq{
    userName:string,
    password:string,
    parameters: {
        clientId: number,
        roleId: number,
        organizationId: number,
        warehouseId:string,
        language:string
    }
}