import { FC } from "react"

import { useNavigate } from "react-router-dom";
import * as Comp from "../../components/share/share.component";
import { AssetReq } from "../../dto/asset/asset-req";
import { useFormik } from "formik";
import { postAsset } from "../../services/asset.service";

function CreateAssetPage() {
    const initValue: AssetReq = {
        "isSOTrx": true,
        "AD_Org_ID": {
            "id": 11
        },
        "A_Asset_Group_ID": {
            "id": 50006
        },
        "A_Asset_Status": {
            "id": "AC"
        },
        "AssetActivationDate": "2023-05-02",
        "AssetServiceDate": "2023-05-02",
        "Help": "CreatedFrom InvoiceLine",
        "InventoryNo": "1000000",
        "IsActive": true,
        "IsDepreciated": false,
        "IsDisposed": false,
        "IsFullyDepreciated": false,
        "IsInPosession": false,
        "IsOwned": true,
        "M_Locator_ID": {
            "id": 101
        },
        "M_Product_ID": {
            "id": 200001
        },
        "Name": '',
        "Value": ''
    }
    const navigate = useNavigate()
    const useForm = useFormik({
        initialValues: initValue,
        onSubmit: (values) => {
            console.log(values)
            postAsset(values).then(res => {
                navigate("/asset")
            })
        }
    })
    return (
        <div className="CreateAssetPage">
            <div className="justify-content-center">
                <Comp.Card>
                    <form onSubmit={useForm.handleSubmit}>
                        <div className="grid">
                            <div className="col">
                                <label htmlFor="Name" className="w-6rem">
                                    Name
                                </label>
                                <MyInputText type="text" name="Name" id="Name"
                                            formik={useForm} />
                            </div>
                            <div className="col">
                                <label htmlFor="username" className="w-6rem">
                                    Value
                                </label>
                                <MyInputText type="text" name="Value" id="Value"
                                            formik={useForm} />
                            </div>
                            <Comp.Button type="submit" label="Add" />
                        </div>
                    </form>
                    {/* <div className="grid">
                        <div className="col">
                            <label htmlFor="username" className="w-6rem">
                                Username
                            </label>
                            <Comp.InputText type="text" />
                        </div>
                        <div className="col">
                            <label htmlFor="username" className="w-6rem">
                                Username
                            </label>
                            <Comp.InputText type="text" />
                        </div>
                    </div>
                    <div className="grid">
                        <div className="col">
                            <label htmlFor="username" className="w-6rem">
                                Username
                            </label>
                            <Comp.InputText type="text" />
                        </div>
                        <div className="col">
                            <label htmlFor="username" className="w-6rem">
                                Username
                            </label>
                            <Comp.InputText type="text" />
                        </div>
                    </div> */}

                </Comp.Card>
            </div>
        </div>
    )
}

export default CreateAssetPage

const ErrorMessage: FC<{ formik: any, name: string }> =
    ({ formik, name }) => {
        return (
            <>
                {formik.errors[name] && formik.touched[name] ?
                    <span>{formik.errors[name]}</span> : null}
            </>
        )
    }

const MyInputText: FC<{
    type?: string, name: string, id?: string,
    value?: any, formik: any
}> = ({ type, id, name, value, formik }) => {

    return (
        <>
            <Comp.InputText type={type ?? 'text'} name={name} id={id ?? name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={value}
                className={formik.errors[name] && formik.touched[name] ? "p-invalid" : ''} />
        </>
    )
}