import React from 'react'
import Img1 from '../../assets/women/women.png'
import Img2 from '../../assets/women/women2.jpg'
import Img3 from '../../assets/women/women3.jpg'
import Img4 from '../../assets/women/women4.jpg'
import { FaStar } from 'react-icons/fa6'


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: 'Woman Ethnic',
        rating: 4.7,
        color: 'white',
        aosDelay: '0',
    },
    {
        id: 2,
        img: Img2,
        title: 'Woman Western',
        rating: 4.0,
        color: 'red',
        aosDelay: '200',
    },
    {
        id: 3,
        img: Img3,
        title: 'Goggles',
        rating: 4.5,
        color: 'brown',
        aosDelay: '400',
    },
    {
        id: 4,
        img: Img4,
        title: 'Woman Ethnic',
        rating: 4.7,
        color: 'yellow',
        aosDelay: '600',
    },
    {
        id: 5,
        img: Img2,
        title: 'Woman Ethnic',
        rating: 4.2,
        color: 'black',
        aosDelay: '800',
    },
]
const Products = () => {
  return (
    <div className='mt-14 mb-12 '>
        <div className="container ">
            <div className="text-center mb-10 max-w-[600px] mx-auto ">
                <p data-aos='fade-up' className='text-sm text-blue-600'>Top Selling Products</p>
                <h1 data-aos='fade-up' className='text-3xl font-bold dark:text-white'>Products</h1>
                <p data-aos='fade-up' className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex exercitationem, </p>
            </div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 place-items-center gap-5">
                    {ProductsData.map((data)=>(
                        <div data-aos='fade-up' data-aos-delay={data.aosDelay} key={data.id} className='space-y-3'>
                            <img src={data.img} alt="img"  className='h-[220px] w-[150px] object-cover rounded-md'/>
                            <div>
                                <h3 className='font-semibold dark:text-white'>{data.title}</h3>
                                <p className='text-sm text-gray-600 '>{data.color}</p>
                                <div className='flex items-center gap-1 '>
                                    <FaStar className='text-yellow-400'>
                                        
                                    </FaStar>
                                    <div className='text-yellow-400 dark:text-white'>{data.rating}</div>
                                </div>
                            </div>
                        </div> 
                    ))}
                </div>
                <div className='flex justify-center '>
                    <button className='text-center mt-10 cursor-pointer bg-blue-600 text-white py-1 px-5 rounded-md '>View all button</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products