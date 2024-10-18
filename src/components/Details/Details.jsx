import { useLoaderData, useParams } from "react-router-dom";
import JobDetails from "../JobDetails/JobDetails";
import { CiDollar, CiLocationOn } from "react-icons/ci";
import { PiSubtitles } from "react-icons/pi";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";

const Details = () => {
    const detailsJobs = useLoaderData()
    const { id } = useParams()
    const job = detailsJobs.find(job => job.id == id)
    console.log(id, job)
    return (
        <div>
            <JobDetails></JobDetails>
            <div className="md:flex gap-6 mt-10">
                <div className="md:w-3/4  space-y-5 px-2">
                    <h3 className="text-2xl"><span className="text-2xl font-medium">Job Description</span>: {job.job_description}</h3>
                    <h4 className="text-2xl"><span className="text-2xl font-medium">Job Responsibility</span>: {job.job_responsibility}</h4>
                    <h5 className="text-2xl"><span className="text-2xl mb-4 font-medium block">Educational Requirements:<br></br></span>{job.educational_requirements}</h5>
                    <p className="text-2xl"><span className="text-2xl font-medium mb-4 block">Experiences:<br></br> </span>{job.experiences}</p>
                </div>
                <div className=" md:w-1/4">
                    <h4 className="p-2 border-b-2 font-extrabold">Job Details</h4>
                    <div className="space-y-6">
                        <div className="space-y-2 px-2">
                            <h2 className="flex md:items-center text-lg gap-2 "><CiDollar className="text-xl items-center"></CiDollar><span className="font-bold">salary:</span><span>{job.salary} (per month)</span></h2>
                            <h2 className="flex items-center text-lg gap-2 "><PiSubtitles className="text-lg" /><span className="font-bold">Job Title:</span><span>{job.job_title}</span></h2>
                        </div>
                        {/* contact from */}
                        <div className="space-y-2 px-2">
                            <h1 className="font-extrabold border-b-2">Contact Information</h1>
                            <h2 className="flex md:items-center text-lg gap-2 "><MdOutlineLocalPhone className="text-xl items-center" /><span className="font-bold">Phone:</span><span>{job.contact_information.phone}</span></h2>

                            <h2 className="flex md:items-center text-lg gap-2 "><MdOutlineEmail className="text-xl items-center" /><span className="font-bold">Email:</span><span>{job.contact_information.email}</span></h2>

                            <h3 className="flex items-center md:items-start md:text-lg md:gap-2 "><CiLocationOn className="text-2xl" /><span className="font-bold">Address:</span><span>{job.contact_information.address}</span></h3>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <button className="btn btn-success w-full text-white">Applied</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;