import React from 'react'
import Image from "next/image";

export default function Hero() {
    return (
        <>
        <section className="grid grid-cols-2">
            <div>

                <h1 className="text-boxes font-bold"> Every Bite, a Celebration of Flavor</h1>
                <p>
                    Indulge in our handcrafted, artisanal pizzas,
                    expertly prepared with savory, premium ingredients.
                    Experience the irresistible blend of mouthwatering flavors
                    in each crispy, customizable slice.
                </p>
            </div>
            <div className="w-full h-16 relative">
                <Image src="/images.jpeg"
                       alt="pizza" layout={'fill'}
                       objectFit={'contain'} />
            </div>

        </section>
        </>
    );
}
