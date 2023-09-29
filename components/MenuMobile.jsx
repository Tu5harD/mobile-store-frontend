import React from 'react'
import Link from 'next/link'
import { BsChevronDown } from 'react-icons/bs'
const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu, categories }) => {
    const data = [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "About", url: "/about" },
        { id: 3, name: "Categories", subMenu: true },
        { id: 4, name: "Contact", url: "/contact" },
    ]
    const subMenuData = [
        { id: 1, name: "Samsung", doc_count: "11" },
        { id: 2, name: "Oppo", doc_count: "8" },
        { id: 3, name: "Vivo", doc_count: "10" },
        { id: 4, name: "Nokia", doc_count: "100" },
    ]
    return (
        <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[cal(100vh-50px)] bg-white border-1 text-black">
            {data.map((value) => {
                return (
                    // React Fragment we can add for key..they can not genrate server side error
                    <React.Fragment key={value.id}>
                        {!!value?.subMenu ? (
                            <li className=' cursor-pointer py-4 px-4 border-b flex flex-col relative'
                            onClick={()=> setShowCatMenu(!showCatMenu)}
                            >
                                <div className='flex justify-between items-center'>
                                {value.name}
                                <BsChevronDown size={14} />
                                </div>
                                {/* if showMenu is true */}
                                {showCatMenu && (
                                    <ul className=' bg-black/[0.05] -mb-4 mt-4'>
                                        {categories?.map(({attributes:c,id}) => {
                                            return (
                                                <Link key={id} href={`/category/${c.slug}`} onClick={()=>{setShowCatMenu(true) ,setMobileMenu(false) }}> 
                                                <li className='py-4 px-8 border-t flex justify-between' >
                                                
                                                    {c.name}
                                                    <span className=' opacity-60'>{`(${c.products.data.length})`}</span>
                                                </li>
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li className='py-4 px-4 border-b '>
                                <Link href={value.url} onClick={()=> setMobileMenu(false)}>
                                    {value.name}
                                </Link>
                            </li>
                        )}
                    </React.Fragment>

                )
            })}
        </ul>
    )
}

export default MenuMobile
