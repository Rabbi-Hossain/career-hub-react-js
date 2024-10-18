import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [showJobs, setShowJobs] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])


    return (
        <div className="mt-20">
            <div className="text-center">
                <h2 className="text-4xl font-extrabold">Featured Jobs</h2>
                <p className="mt-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid md:grid-cols-2 md:gap-4 mt-12">
                {
                    jobs.slice(0, showJobs).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={showJobs=== jobs.length ? 'hidden' : ''}>
                <button  onClick={()=>setShowJobs(jobs.length)} className="btn btn-success">Show All</button>
            </div>
            
        </div>
    );
};

export default FeaturedJobs;