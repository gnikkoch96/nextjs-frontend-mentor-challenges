import Image from 'next/image';
import {Dessert} from "@/types/interfaces";

export default function DessertCard(props: Dessert){
    return (
        <div>
            {/*todo make src change depending on the size*/}
            <Image src={props.image.mobile} alt={`${props.name} image`}
                   layout="fill" objectFit="cover"/>
            <button>Add to Cart</button>
            <div>
                <p>{props.category}</p>
                <p>{props.name}</p>
                <p>{`$${props.price}`}</p>
            </div>
        </div>
    );

}