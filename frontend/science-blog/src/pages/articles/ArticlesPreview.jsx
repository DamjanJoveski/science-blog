export const ArticlesPreview = ({ title, description }) => {
    return (
        <div className="flex flex-col md:flex-row bg-gray-400/90 mx-auto w-2/3 rounded-lg overflow-hidden shadow-lg">
            <img
                src="https://placehold.it/360x150"
                alt="Dummy Image"
                width={360}
                height={150}
                className="object-cover p-4 w-full md:w-60"
            />
            <div className="flex flex-col justify-center p-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                    {title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600">{description}</p>
            </div>
        </div>
    );
};
