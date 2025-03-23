// @ts-ignore
export default async function ProductPage({params}) {
    const {id} = await params
    
    return (
        <div>
            <h1>Product {id}</h1>
        </div>
    )
}
