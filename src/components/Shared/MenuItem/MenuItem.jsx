import React from 'react';

const MenuItem = ({ menu }) => {
    const { name, recipe, price, image } = menu
    return (
        <div>
            <div className='flex gap-5 text-gray-500'>
                <div>
                    <img style={{ borderRadius: "0 200px 200px 200px" }} className='w-[100px]' src={image} alt="" />
                </div>
                <div>
                    <p>{name}-------------------</p>
                    <p>{recipe}</p>
                </div>
                <div>
                    <p className='text-yellow-500'>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;