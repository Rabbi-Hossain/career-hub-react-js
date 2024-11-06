const getStoredJobApplication = ()=>{

    const storeJobApplication = localStorage.getItem('job-application')
    if(storeJobApplication){
        return JSON.parse(storeJobApplication)
    }
    return []
}


const saveJobApplication = (id)=>{
    const StoredJobApplications = getStoredJobApplication()
    const exists = StoredJobApplications.find(jobId =>jobId === id)
    if(!exists){
        StoredJobApplications.push(id)
        localStorage.setItem('job-application', JSON.stringify( StoredJobApplications))
    }
}

export {getStoredJobApplication, saveJobApplication}