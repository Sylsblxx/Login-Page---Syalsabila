export interface AssetReq{
    "isSOTrx": boolean,
    "AD_Org_ID": {
        "id":number
    },
    "A_Asset_Group_ID": {
        "id": number
    },
    "A_Asset_Status": {
        "id": string
    },
    "AssetActivationDate": string,
    "AssetServiceDate": string,
    "Help": string,
    "InventoryNo": string,
    "IsActive": boolean,
    "IsDepreciated": boolean,
    "IsDisposed": boolean,
    "IsFullyDepreciated": boolean,
    "IsInPosession": boolean,
    "IsOwned": boolean,
    "M_Locator_ID": {
        "id": number
    },
    "M_Product_ID": {
        "id": number
    },
    "Name": string,
    "Value": string
}