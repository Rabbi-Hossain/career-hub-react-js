import img1 from '../../assets/assets/images/bg2.png'
import img2 from '../../assets/assets/images/bg1.png'
const JobDetails = () => {

    return (
        <div className='md:flex justify-between items-center'>
            <img  src={img2} alt="" />
            <h3 className="font-extrabold text-3xl text-center">Jobs Details</h3>
            <img src={img1} alt="" />
        </div>
    );
};

export default JobDetails;