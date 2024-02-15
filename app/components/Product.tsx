import React from 'react'
import Image from 'next/image'
import formatPrice from '@/util/PriceFormat'
import { ProductType } from '@/types/ProductType'
function Product({ name,image,price }:ProductType) {
  return (
    <div className='text-gray-700'>

        <Image src = {image} alt={name} width={800} height={800} className="w-full h-80 object-cover rounded-lg" />
<div className='font-medium py-2'>
      <h1 >{name}</h1>

   <h2 className='text-sm text-teal-700'>  {price!==null ? formatPrice(price) : 'N/A'}</h2>
   </div>
    </div>

  )

}

export default Product
