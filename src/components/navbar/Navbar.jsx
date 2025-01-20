import React from 'react';
import './navbar.css'

function Navbar(){
    return (
        <nav class="navbar bg-pink-200 w-full h-20 flex justify-between items-center">
            <a href="https://www.facebook.com/le.tuan.811372"
            class="ml-5 underline"
            >My Shop</a>

            <ul class="flex items-center justify-center">
                <li>
                    <button className="button">
                        <a href="https://www.facebook.com/le.tuan.811372"
                        class="navbarItem"
                        >Home</a>
                    </button>
                </li>
                <li>
                    <button className="button">
                        <a href="https://www.facebook.com/le.tuan.811372"
                        class="navbarItem"
                        >Products</a>
                    </button>
                </li>
                <li>
                    <button className="button">
                        <a href="https://www.facebook.com/le.tuan.811372"
                        class="navbarItem"
                        >About</a>
                    </button>
                </li>
                <li>
                    <button className="button">
                        <a href="https://www.facebook.com/le.tuan.811372"
                        class="navbarItem"
                        >Contact</a>
                    </button>
                </li>
            </ul>

            <ul class="flex ">
                <li>
                    <button className="button">
                        <a href="https://www.facebook.com/le.tuan.811372"
                        class="navbarItem"
                        >Cart</a>
                    </button>
                </li>
                <li>
                    <button className="button">
                        <a href="https://www.facebook.com/le.tuan.811372"
                        class="navbarItem"
                        >Login</a>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;