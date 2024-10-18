import UserImg from '../../assets/assets/images/user.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='md:flex h-[700px] justify-center items-center banner-container'>
            <div className='p-4  md:w-[570px]  space-y-6'>
                <h3 className='font-extrabold text-3xl md:text-5xl'>One Step <br /> Closer To Your <br /> <span className='bg-gradient-to-r  from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text'>Dream Job</span></h3>
                <p className='font-medium'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn bg-gradient-to-r  from-[#7E90FE] to-[#9873FF]'>Get Started</button>
            </div>
            <div>
                <img src={UserImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;