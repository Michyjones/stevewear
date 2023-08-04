import {format} from "date-fns";
import prismadb from "@/lib/primadb";
import { BillboardClient } from "./components/client";
import { BillboardColumn } from "./components/columns";

const BillboarsPage = async ({
    params
}: {
    params: { storeId : string }
}) => {
    const billboards = await prismadb.billboard.findMany({
        where: { storeId: params.storeId},
        orderBy: {
            createdAt: 'desc'
        }


    })
    const formattedBillboard: BillboardColumn[] = billboards.map((item) => ({
        id: item.id,
        label: item.label,
        createdAt: format(item.createdAt, "MMMM do yyyy")

    }))

    return ( <div className="flex-col">
        <div className="flex-1 space-x-4 p-8 pt-6">
            <BillboardClient data={formattedBillboard}/>

        </div>
    </div> );
}
 
export default BillboarsPage;