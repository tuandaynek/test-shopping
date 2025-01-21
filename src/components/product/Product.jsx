import React from 'react';
import ProductCard from './ProductCard.jsx';

function Product(){
    return(
        <div class="flex flex-col items-center">
            <h1 class="m-auto mt-10 text-4xl font-semibold text-slate-600">Tất Cả Sản Phẩm</h1>
            <div class="mt-10 w-full justify-center grid grid-cols-4">
                <div class="col-span-4 grid grid-cols-4 gap-5 ml-14">
                    <ProductCard name="Tôm khô" price="50" storage="100" sold="500" />
                    <ProductCard name="Cá khô" price="70" storage="200" sold="700" />
                    <ProductCard name="Mực" price="100" storage="50" sold="300" />
                    <ProductCard name="Alaska" price="150" storage="20" sold="100" />
                    <ProductCard name="King Crab" price="200" storage="10" sold="50" />
                    <ProductCard name="Cua" price="60" storage="150" sold="600" />
                    <ProductCard name="Gạo Lứt" price="80" storage="250" sold="800" />
                </div>
            </div>
        </div>
    )
}

export default Product;