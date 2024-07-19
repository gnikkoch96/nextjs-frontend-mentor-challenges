import dessertData from '@/public/data.json';

interface Dessert {
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    },
    name: string,
    category: string,
    price: number
}

export function getDessertData(){
    const desserts: Dessert[] = dessertData as Dessert[];
    return desserts;
}
