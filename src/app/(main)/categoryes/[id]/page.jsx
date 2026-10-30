import Leftsideber from '@/Component/homepage/news/leftsideber';
import Newscard from '@/Component/homepage/news/Newscard';
import Rightsideber from '@/Component/homepage/news/Rightsideber';
import { gateCatagory, gateNews } from '@/lib/data';
import React from 'react';





const NewsCategoryPage = async ({ params }) => {


    const { id } = await params
    console.log("params", id)

    const categoryes = await gateCatagory()

    const news = await gateNews(id)
    return (
        <div className="grid grid-cols-12 gap-3  container mx-auto mt-12">
            <div className="  font-bold col-span-3">
                <Leftsideber categoryes={categoryes} activeid={id} />
            </div>

            <div className="  col-span-6">
                <p className='text-2xl font-bold' >Dragon News Home</p>
                {news.length > 0 ? news.map((n) => {
                    return <Newscard news={n} key={n._id}> </Newscard>
                }) : <h1 className='text-4xl font-bold text-center '>No news found</h1>}
            </div>

            <div className="font-bold col-span-3">

                <Rightsideber />
            </div>



        </div>
    );

};

export default NewsCategoryPage;