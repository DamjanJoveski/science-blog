export const Article = ({ title, image, content}) => {
    return (
        <section className='w-full mx-auto p-10 max-w-[1400px] flex flex-row gap-16 lg:flex-col mt-36'>
            <h1 className='text-white font-bold lg:text-5xl md:text-4xl text-2xl'>
                {title}
            </h1>
            <img className='p-2' src={image} alt='Image' width={400} height={400}/>
            <p className='text-white text-lg md:text-2xl'>
                {content}
            </p>
        </section>
    )
}
