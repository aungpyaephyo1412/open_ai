import LinkIcon from '../assets/link.svg'
import {BsArrow90DegUp} from 'react-icons/bs'
import {useState} from "react";
import {useGetSummaryMutation} from "../services/serviceAPI.js";

const Demo = () => {
    const [article,setArticle] = useState({
        url:'',
        summary:'',
    });
    const data = useGetSummaryMutation("hi");
    console.log(data)
    const handleSubmit = (e) => {
      e.preventDefault();

    }
  return (
      <section className="mt-48 w-full">
        <div className='flex flex-col w-full max-w-2xl gap-2 mx-auto'>
            {/* eslint-disable-next-line no-undef */}
            <form onSubmit={()=>{handleSubmit(e)}} className='relative flex justify-center items-center z-50'>
                <img src={LinkIcon} className='absolute left-0 my-2 ml-3 w-5 z-20' alt="LinkIcon"/>
                <input type="url" placeholder='Enter your URL' value={''} onChange={()=>setArticle({
                    ...article,
                    url: e.target.value
                })} required className='url_input peer'/>
                <button className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>
                    <BsArrow90DegUp className='-rotate-90'/>
                </button>
            </form>

        </div>
      </section>
  );
};

export default Demo;
