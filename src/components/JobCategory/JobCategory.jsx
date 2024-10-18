import { useEffect, useState } from "react";
import Category from "../Category/Category";

const JobCategory = () => {
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategory(data))

    }, [])

    return (
        <div className="mt-10 md:mt-20">
            <div className="text-center space-y-4">
                <h2 className="text-xl md:text-4xl font-extrabold">Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

         
                <div className="grid md:grid-cols-4 gap-4 md:mt-12">
                    {
                        category.map(category => <Category key={category.id} category={category}></Category>)
                    }
                </div>
            
        </div>
    );
};

export default JobCategory;