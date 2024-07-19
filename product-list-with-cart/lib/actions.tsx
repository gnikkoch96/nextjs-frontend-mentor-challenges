import dessertData from '@/public/data.json';
import {Dessert} from '@/types/interfaces';

export function getDessertData(){
    const desserts: Dessert[] = dessertData as Dessert[];
    return desserts;
}
