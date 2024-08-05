import React from 'react'
import { Avatar } from 'primereact/avatar';
import { MegaMenu } from 'primereact/megamenu';
import { items } from '../router/menuData';

export default function Navbar() {
    return (
        <div className='globals-padding border-b shadow-md'>
            <nav className=" flex justify-between items-center">
                {/* logo & name web */}
                <a href="/" className="flex items-center gap-2">
                    <Avatar image="A-Star-Logo.png" size="large" />
                    <div className="">example</div>
                </a>
                <div className=" flex items-center max-lg:flex-row-reverse gap-2">
                    {/* menu */}

                    {/* แก้ไข MegaMenu  bg text border  class .p-megamenu   */}
                    {/* <MegaMenu model={items} breakpoint="1280px" /> */}
                    {/* user */}
                    <div className="flex items-center gap-2">
                        <div className=" max-sm:hidden">Admin@gmail.com</div>
                        <Avatar image="A-Star-Logo.png" size="large" />

                    </div>
                </div>

            </nav>
        </div>
    )
}
