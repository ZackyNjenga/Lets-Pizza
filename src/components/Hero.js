import React from 'react'
import Image from "next/image";
import Right from "@/components/icons/Right";

export default function Hero() {
    return (
        < div className="py-12">
            <section className="hero">
                <div>

                    <h1 className="text-black text-4xl  leading-normal font-bold">
                        Every Bite, a <br/>
                        Celebration of <br/>
                        Flavor with &nbsp;
                        <span className="text-boxes">
                             Pizza
                        </span>

                    </h1>
                    <p className="mt-4 my-6 text-gray-500">
                        Indulge in our handcrafted, artisanal pizzas,
                        expertly prepared with savory, premium ingredients.
                        Experience the irresistible blend of mouthwatering flavors
                        in each crispy, customizable slice.
                    </p>
                    <div className=" flex gap-4 mt-4">
                        <button className="bg-boxes py-2 uppercase text-sm px-6
                        rounded-full text-white flex gap-2">
                            Order Now
                            <Right/>
                        </button>
                        <button className="flex uppercase text-sm gap-3 py-2 text-gray-700 font-semibold">
                            Learn More
                            <Right/>
                        </button>
                    </div>
                </div>
                <div className="w-full h-30 relative">
                    <Image src="/images.jpeg"
                           alt="pizza" layout={'fill'}
                           objectFit={'contain'}
                    />
                </div>

            </section>
        </div>
    );
}
