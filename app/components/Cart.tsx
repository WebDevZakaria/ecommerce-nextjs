'use client'


import Image from "next/image"
import { useCartStore } from "@/store"
import formatPrice from "@/util/PriceFormat"
import {IoAddCircle, IoRemoveCircle} from 'react-icons/io5'

export default function Cart(){
    const cartStore = useCartStore()
    return(
        <div onClick={() =>cartStore.toggleCart()} className="fixed w-full h-screen left-0 top-0 bg-black/25">
            <div onClick={(e) => e.stopPropagation()} className="bg-white absolute right-0 top-0 w-1/4 h-screen p-12 overflow-y-scroll text-gray-700">

                <h1 className="text-center text-lg font-bold py-4 mb-4">Here is you shopping list </h1>
                {cartStore.cart.map((item) =>(
                    <div className = 'flex py-4 gap-4'>
                        <Image className="rounded-md h-24" src = {item.image} alt={item.name} width={120} height={120} />
                        <div>

                            <h2>{item.name}</h2>

                            {/*updated quantity */}

                            <div className="flex gap-2">

                            <h2>Quantity: <span className="ml-2 text-lg text-red-600 font-semibold">{item.quantity}</span></h2>

                            <button  className="text-[20px] mt-1" onClick={() => cartStore.removeProduct({id:item.id,image:item.image,unit_amount:item.unit_amount,quantity:item.quantity,name:item.name})}><IoRemoveCircle/></button>

                            <button className="text-[20px] mt-1"  onClick={() => cartStore.addProduct({id:item.id,image:item.image,unit_amount:item.unit_amount,quantity:item.quantity,name:item.name})}><IoAddCircle/></button>

                            </div>

                            <p className="text-sm ">{item.unit_amount && formatPrice(item.unit_amount)}</p>
                    
                        </div>


                    </div>
                ))}
                <button className="py-2 mt-4 bg-teal-700 w-full rounded-md text-white">Checkout</button>

            </div>
        </div>

    )
}