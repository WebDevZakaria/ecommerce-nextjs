import React from 'react'
import Image from 'next/image'
import formatPrice from '@/util/PriceFormat'
import { ProductType } from '@/types/ProductType'
import Link from 'next/link'
function Product({ name,image,unit_amount,description,metadata,id }:ProductType) {
    const { features } = metadata
  return (
    <Link  href={{pathname: `/product/${id}`,query:{name,image,description,unit_amount,features,id}}}>
    <div className='text-gray-700'>

        <Image src = {image} alt={name} width={800} height={800} className="w-full h-80 object-cover rounded-lg" />
<div className='font-medium py-2'>

      <h1> {name} </h1>

   <h2 className='text-sm text-teal-700'>  {unit_amount!==null ? formatPrice(unit_amount) : 'N/A'}</h2>
   </div>
    </div>
    </Link>

  )

}

export default Product
