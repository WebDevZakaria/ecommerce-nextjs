export type ProductType = {
    name:string
    image:string
    quantity?: number | null
    unit_amount:number | null
    description: string | null
    metadata: MetadataType
    id:string

}

type MetadataType = {
    features :string
}