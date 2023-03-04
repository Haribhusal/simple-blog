import React from 'react'

const ArticleComponent = () => {
    return (
        <article className='bg-white'>
            <img src="https://picsum.photos/id/34/400/300" className='h-[250px] object-cover w-full' alt="" />
            <div className="contentWrapper p-10">
                <strong className="uppercase inline-block text-purple-700 opacity-50">Design</strong>
                <h3 className="text-2xl font-bold my-5 text-purple-700">Article title</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptatibus doloribus aspernatur laborum nesciunt rem ea ipsa? Sit molestiae eveniet rem accusantium, vitae molestias consequuntur, asperiores excepturi voluptatem hic optio?
                </p>
            </div>
        </article>
    )
}

export default ArticleComponent