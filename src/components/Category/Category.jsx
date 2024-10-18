
const Category = ({ category }) => {
    const { logo, category_name, availability } = category
    return (
        <div className="">
            <div className=" shadow-xl banner-container">
                <figure className="pt-10 ml-8">
                    <img
                        src={logo}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="text-xl font-extrabold">{category_name}</h2>
                    <h3>{availability}</h3>
                </div>
            </div>
        </div>
    );
};

export default Category;