import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='h-[92px] w-[1350px]'>
            <nav className="bg-[#043873]  text-white h-24 py-2 px-3 flex justify-around items-center">
                <div className='flex gap-2'>
                    <Image
                        src={"/images/Logo Icon.png"}
                        alt="Logo-image"
                        height={29}
                        width={37}
                    />
                    <h1 className='text-4xl w-[191px] font-bold'>
                        <a href="#!">whitepace</a>


                    </h1>

                </div>
                <div className='flex justify-between w-[930px]'>
                    <div className='flex items-center'>
                        <ul className='flex space-x-10'>
                            <li><a href="#!" className='hover:text-black'>Solutions &nbsp;  ⮛</a></li>
                            <li><a href="#!" className='hover:text-black'>Products  &nbsp;  ⮛</a></li>
                            <li><a href="#!" className='hover:text-black'>Pricing   &nbsp;  ⮛</a></li>
                            <li><a href="#!" className='hover:text-black'>Resources &nbsp;  ⮛</a></li>
                        </ul>
                    </div>

                    <div className='flex gap-4'>
                        <button className="text-white w-[126px] h-[60px] rounded-lg bg-[#FFE492] p-4 hover:text-black">Login</button>
                        <button className="text-white w-[227px] h-[60px] rounded-lg bg-blue-600 p-4 hover:text-black">Try Whitepace free ➔</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

