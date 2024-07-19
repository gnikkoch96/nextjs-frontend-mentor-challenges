import Image from 'next/image';

interface DessertProps{
    imgUrl: string,
    category: string,
    name: string,
    price: number
}

export default function DessertCard(props: DessertProps){
    return (
        <div>
            <Image src={props.imgUrl} alt={`${props.name} image`}
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