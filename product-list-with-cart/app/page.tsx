'use client'

import { getDessertData } from "@/lib/actions";


export default function Page(){
    const dessertData = getDessertData();

    return (
        <div className="px-4 py-6">
            <h2 className="text-5xl font-semibold mb-4">Desserts</h2>
            <button onClick={getDessertData}> Click Me! </button>
        {/* todo create a for loop that will create dessert cards based on the desserts from the given data*/}
        </div>
    );
}
