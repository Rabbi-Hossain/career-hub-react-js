import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";


const AppliedJob = () => {
    const [appliedJob, setAppliedJob] = useState([])

    const [displayJobs, setDisplayJobs] = useState([])

    const jobs = useLoaderData()
    console.log(appliedJob, jobs)


    const handleJobs = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJob)
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJob.filter(job=>job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if(filter === 'onsite'){
            const oneSiteJobs = appliedJob.filter(job=>job.remote_or_onsite  === 'Onsite')
            setDisplayJobs(oneSiteJobs)
        }
    }


    useEffect(() => {
        const storedJobIds = getStoredJobApplication()
        if (jobs.length > 0) {
            const jobsApplied = []
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id == id)
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJob(jobsApplied)
            setDisplayJobs(jobsApplied)
        }
    }, [jobs])

    return (
        <div>
            <h2>APPLIED JOBS: {appliedJob.length}</h2>

            <details className="dropdown mb-32">
                <summary className="btn m-1">open or close</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=>handleJobs('all')}><a>All</a></li>
                    <li onClick={()=>handleJobs ('remote')}><a>Remote</a></li>
                    <li onClick={()=>handleJobs('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}> <span>{job.job_title} {job.company_name}:{job.remote_or_onsite}</span></li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJob;