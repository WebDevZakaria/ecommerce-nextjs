type Params = {
    id: string
}

type SearchParams = {
    name:string
    image:string
    unit_amount:number | null
    description: string | null
    features: string
    id:string
}


export type SearchParamsType = {
   params:Params
   searchParams: SearchParams
}
