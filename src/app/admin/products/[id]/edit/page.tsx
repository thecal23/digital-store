import db from "@/db/db"
import { PageHeader } from "../../../_components/PageHeader"
import { ProductFrom } from "../../_components/ProductForm"


export default async function EditProductPage({
    params: {id},
} : {
    params: {id:string}
}) {
    console.log(id)
    const product = await db.product.findUnique({ where : { id }})
    console.log(product)
    return (
        <>
            <PageHeader>Edit Product</PageHeader>
            <ProductFrom product={product}/>
        </>
    )
}