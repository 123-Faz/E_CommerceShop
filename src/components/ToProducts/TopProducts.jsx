import React from 'react'
import Img1 from '../../assets/shirt/shirt.png'
import Img2 from '../../assets/shirt/shirt2.png'
import Img3 from '../../assets/shirt/shirt3.png'
import { FaStar } from 'react-icons/fa'

const ProductsData =[
    {
        id: 1,
        img: Img1,
        title: 'Casual Wear',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit Autem iure architecto voluptate distinctio officia voluptatem voluptatumasperiores vel maiores eligendi quaerat',
    },
    {
        id: 2,
        img: Img2,
        title: 'Pinted Shirt',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit Autem iure architecto voluptate distinctio officia voluptatem voluptatumasperiores vel maiores eligendi quaerat',
    },
    {
        id: 3,
        img: Img3,
        title: 'Women Shirt',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit Autem iure architecto voluptate distinctio officia voluptatem voluptatumasperiores vel maiores eligendi quaerat',
    },
]

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div className='cnotainer '> 
    <div className="text-left p-4 sm-p-12">
        <div className='mb-24'>
        <p data-aos='fade-up ' className='text-sm px-4 sm-px-12 text-blue-600 '>Top Rated products for you
        </p>
        <h1 data-aos='fade-up' className=' px-4 sm-px-12 text-3xl font-bold dark:text-white'>Best Products</h1>
        <p data-aos='fade-up' className='text-xs px-4 sm-px-12 text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing 
        elit. Veritatis voluptatum, culpa eligendi magni voluptatibus animi natus maiores 
        dignissimos facilis porro temporibus?</p>
        </div>
        <div className=''>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                {ProductsData.map((data) => (
                    <div data-aos='zoom-in' className='rounded-2xl text-center bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-blue-600/40 hover:text-white relative shadow-xl duration-300 group max-w-[300px]  '> 
                    <div>
                        <img src={data.img}  alt="imgd" className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
                    </div>
                    <div className='w-full flex items-center justify-center gap-1'>
                        <FaStar className='text-yellow-50'></FaStar>
                        <FaStar className='text-yellow-50'></FaStar>
                        <FaStar className='text-yellow-50'></FaStar>
                        <FaStar className='text-yellow-50'></FaStar>
                    </div>
                    <h1 className=' dark:text-white text-xl font-bold'>{data.title}</h1>
                    <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 '>{data.description}</p>
                    <button className='bg-blue-600/40 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-violet-600/40' onClick={handleOrderPopup}>Order Now</button>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </div>
  )
}

export default TopProducts