import React from 'react'
import Image from 'next/image'
import * as ProductStyles from './Product.module.css'
const Product = () => {
    return (
        <div className = {ProductStyles.ContainerProduct}>
            <div className={ProductStyles.ContainerElement}>
                <div className={ProductStyles.ContainerAll} >
                    <p className={ProductStyles.TitleProduct}>Slow & Steady (Black)</p>
                    <p className={ProductStyles.Descriptiom}>It's not always about speed. Winning is all about consistency. (Just ask the tortoise.)</p>
                    <p className={ProductStyles.Descriptiom}>The design process for our newest tee Slow & Steady lives true to its name. Over the past couple months I’ve been working on this lettering on and off, and I’m pumped to finally release the finished version. Below are some of my sketches and iterations of how this design came together.</p>
                </div>
                <div className={ProductStyles.ContainerColors}>
                    <p>Color:</p>
                    <div className ={ProductStyles.ContainerColorsSVG}>
                        <Image src="/ellipse-6.svg" height={20} width={20} />
                        <Image src="/ellipse-6-1.svg" height={20} width={20} />
                        <Image src="/ellipse-6-2.svg" height={20} width={20} />
                        <Image src="/ellipse-6-4.svg" height={20} width={20} />
                        <Image src="/ellipse-6-3.svg" height={20} width={20} />
                    </div>
                </div>
                <div className={ProductStyles.ContainerSize}>
                    <p>Size:</p>
                    <div className ={ProductStyles.ContainerSizes}>
                        <Image src="/group-87.svg" height={40} width={40}/>
                        <Image src="/group-87-4.svg" height={40} width={40}/>
                        <Image src="/group-87-3.svg" height={40} width={40}/>
                        <Image src="/group-87-1.svg" height={40} width={40}/>
                        <Image src="/group-87-2.svg" height={40} width={40}/>
                    </div>
                </div>
                <div className={ProductStyles.ContainerPrice} >
                    <div className={ProductStyles.ItemPrice1}>$26</div>
                    <div className={ProductStyles.ItemPrice2} >$18</div>
                </div>
                <div className={ProductStyles.ContainerButton}>
                    <button className={ProductStyles.Button1}>Add to cart</button>
                    <button className={ProductStyles.ButtonActive}>Add to wishlist</button>
                </div>
            </div>
            <div className={ProductStyles.ContainerElement}>
                <div className ={ProductStyles.ProductImg}>
                    <Image src="/image-26@2x.png" height={442} width={442} />
               
                    <div className ={ProductStyles.ContainerVistas}>
                           <Image src="/ellipse-15-3@2x.png" height={60} width={60} />
                           <Image src="/ellipse-15@2x.png" height={60} width={60} />
                           <Image src="/ellipse-15-1@2x.png" height={60} width={60} />
                           <Image src="/ellipse-15-2@2x.png" height={60} width={60} />
                    </div>
                </div>

            </div>
        
        </div>
    )
}

export default Product
