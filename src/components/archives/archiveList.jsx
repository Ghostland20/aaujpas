import React, { useState, useEffect } from 'react'
import{ useParams } from 'react-router-dom'
import { client } from '../../client'
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import './archive.css'

import LoadingComponent from '../loading/loading'

const ArchiveList = () => {

    const [archives, setArchives] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { year } = useParams();


    useEffect(() => {
      client.fetch(
        `*[ _type == "journal" && year == $year]{
            year,
            title,
            pages,
            author,
            number,
            file{
              asset->{
                url
              }
            },
            volume
        }`, {year}
        
      ).then(
            (data) => setArchives(data),
            setIsLoading(false))
       .catch(console.error)
      
    }, [year])
    


  return (
    <>
        {isLoading ? <LoadingComponent/> :
         
            <div className='list_con'>
                {archives.map((item) => (
                <div key={item.title} className='item'>
                  
                  <div className='download'>
                  <a href={`${item.file.asset.url}`} target="_blank">
                  <BsFillFileEarmarkPdfFill size={32}/></a>                 
                  </div>

                    <div className='text'>
                        <div><b>Title:</b>   {item.title}</div>
                        <div><b>Author:</b>   <b>{item.author}</b></div>
                        <div><b>Pages:</b>   {item.pages}</div>
                    </div>
                    
                </div>
            ))}
            </div>
        }
    </>
  )
}

export default ArchiveList