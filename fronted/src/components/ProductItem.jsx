import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'


// Function to truncate description to a specified length
const truncateName = (name, length = 30) => {
    if (name.length <= length) return name;
    return name.substring(0, length) + '...';  // Append "..." if truncated
  };


const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext);
    
    return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
        <div className='overflow-hidden'>
            <img src={image[0]} alt="" className=' hover:scale-110 transition ease-in-out'/>
            <p className='pt-3 pb-1 text-sm'>{truncateName(name,30)}</p>
            <p className='text-sm font-medium' >{currency}{price}</p>
        </div>
    </Link>
  )
}

export default ProductItem