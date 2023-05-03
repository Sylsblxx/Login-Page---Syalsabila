import { useEffect, useState } from "react";
import * as Comp from "../../components/share/share.component";
import { AssetRes } from "../../dto/asset/asset-res";
import { getAsset } from "../../services/asset.service";
import { Link } from "react-router-dom";


function AssetPage() {
    const getAssets: AssetRes[] = []
    const [assets, setAssets] = useState(getAssets);
    let didInit = false

    const getAllAsset = async () => {
        try {
            const res = await getAsset()
            console.log(res);

            if (res?.length) {
                setAssets([...assets, ...res])
            }
        } catch (err) {
            return Promise.reject(err)
        }
    }

    useEffect(() => {
        if (!didInit) {
            didInit = true
            getAllAsset()
        }
    }, [])

    return (
        <div className="AssetPage">
            <div className="grid grid-nogutter justify-content-center mt-5">
                <div className="card flex flex-column md:flex-row gap-3">
                    <div className="col">
                        <div className="m-3">
                            <Link to="/asset/create">
                            <Comp.Button label="Create Asset" />
                            </Link>
                        </div>
                        <Comp.DataTable value={assets} tableStyle={{ minWidth: '50rem' }}>
                            <Comp.Column field="AD_Client_ID.identifier" header="Organization"></Comp.Column>
                            <Comp.Column field="InventoryNo" header="Inventory No"></Comp.Column>
                            <Comp.Column field="AD_Client_ID.model-name" header="Model"></Comp.Column>
                            <Comp.Column field="A_AssetType" header="Asset Type"></Comp.Column>
                            <Comp.Column field="Name" header="Asset"></Comp.Column>
                        </Comp.DataTable>

                        {/* {assets.map((a,i)=>
                        <table>
                            <tr>
                                <th>Organization</th>
                                <th>Inventory No</th>
                                <th>Model</th>
                                <th>Asset Type</th>
                                <th>Name</th>
                            </tr>
                            <tr key= {i}>
                                <td>{a.AD_Client_ID.identifier}</td>
                                <td>{a.InventoryNo}</td>
                                <td>{a.AD_Client_ID["model-name"]}</td>
                                <td>{a.A_AssetType}</td>
                                <td>{a.Name}</td>
                            </tr>
                        </table>
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssetPage

