import { GrLocation } from "react-icons/gr";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div>
            <div className="bg-base-100 shadow-xl border p-4">
                <figure className="ml-8">
                    <img
                        src={logo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-extrabold">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="space-y-6">
                        <button className="btn border-2 font-extrabold  border-[#7E90FE] mr-4">{remote_or_onsite}</button>
                        <button className="btn border-2 font-extrabold  border-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className="flex mt-4">
                        <h3 className="flex items-center text-lg"><GrLocation className="text-2xl" /> <span className="md:ml-2">{location}</span></h3>

                        <h3 className="flex ml-6 items-center text-lg"><CiDollar className="text-2xl"/> <span className="md:ml-2">{salary}</span></h3>
                    </div>
                    <div className="card-actions mt-6">
                        <Link to={`/details/${id}`}>
                        <button className="btn btn-primary border">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;