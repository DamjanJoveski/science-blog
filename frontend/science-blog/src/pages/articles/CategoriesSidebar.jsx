export const CategoriesSidebar = ({selectedCategory, changeCategory}) => {

    const categories = ['All','Physics','Biology','Astronomy','Math','Psychology','Technology']

    const changeCategoryHandler = (category) => {
        changeCategory(category)
    }

    return (
        <div className="w-full h-100% lg:w-1/6 ">
            <ul className="flex flex-row flex-wrap md:flex-col gap-4 md:gap-16 mt-36">
                {categories.map((category) => {
                    let selectedStyling
                    if(selectedCategory === category){
                        selectedStyling = 'text-[#DEDEDE] scale-110 '
                    }
                    else {
                        selectedStyling = 'text-[#89939E]'
                    }
                    return (
                    <li
                        key={category}
                        className={`mx-auto ${selectedStyling} hover:text-[#DEDEDE] ease-in-out duration-200 cursor-pointer`}
                        onClick={()=>changeCategoryHandler(category)}>
                        {category}
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}