import LinkIcon from '../assets/link.svg'
import {BsArrow90DegUp} from 'react-icons/bs'
import axios from 'axios';
import {useState} from "react";


const Demo = () => {
    const [article,setArticle] = useState("");
    const [answer,setAnswer] = useState({});

    const handleSubmit = (e) => {
      e.preventDefault();
      getData(article)
    }
    const getData = async question =>{
        try {
            const [response] = await Promise.all([axios.request({
                method: 'POST',
                url: 'https://simple-chatgpt-api.p.rapidapi.com/ask',
                headers: {
                    'content-type': "application/json",
                    'X-RapidAPI-Key': "43ae469ffamsha1b3470098ee84bp1f4f62jsnf14d9cd965e5",
                    'X-RapidAPI-Host': "simple-chatgpt-api.p.rapidapi.com"
                },
                data: {
                    question: question
                }
            })]);
            setAnswer(response.data);
            setArticle('')
        } catch (error) {
            console.error(error);
        }
    }
  return (
      <>
          <section className="w-full fixed bottom-[20px]">
              <div className='flex flex-col w-full max-w-2xl gap-2 mx-auto'>
                  <form onSubmit={(event)=>handleSubmit(event)} className='relative flex justify-center items-center z-50'>
                      <img src={LinkIcon} className='absolute left-0 my-2 ml-3 w-5 z-20' alt="LinkIcon"/>
                      <input type="text" placeholder='Enter your URL' value={article} onChange={(e)=>setArticle(e.target.value)} required className='url_input peer'/>
                      <button type={'submit'} className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>
                          <BsArrow90DegUp className='-rotate-90'/>
                      </button>
                  </form>
              </div>
          </section>
          <div className='text-justify container mx-auto p-10'>
              {answer == null ? <p className='summary_box'>
                  {answer?.answer}
              </p> : <div className={'w-full text-center'}>Ask your question !</div>}
          </div>
      </>
  );
};

export default Demo;
