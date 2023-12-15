export const Article = ({title, image='https://placehold.jp/1920x1080.png', content }) => {
    return (
        <section className='w-full mx-auto p-10 max-w-[1400px] flex flex-row'>
            <h1 className='text-white font-bold lg:text-5xl md:text-4xl text-2xl'>
                {title}
            </h1>
            <img src={image} alt='dame'/>
            <p className='text-white text-lg md:text-2xl'>
                {content}
            </p>
        </section>
    )
}