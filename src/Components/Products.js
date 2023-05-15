import React from 'react';

const style = {
    section: "text-gray-600 body-font",
    container: "container px-5 py-24 mx-auto",
}

const Products = ({ items = [] }) => {

    return (
        <section className={style.section}>
            <div className={style.container}>
                <div className="flex flex-wrap -m-4">

                    {
                        items.map((product) => {
                            console.log(product, "product")
                            const {
                                id, title, price, description, category, image
                            } = product
                            return (
                                <div className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 ">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={image} />
                                    </a>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
                                        <h2 className="text-gray-900 title-font text-xl font-bold">{title}</h2>
                                        <p className="mt-1 text-md font-semibold">{price} $</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;