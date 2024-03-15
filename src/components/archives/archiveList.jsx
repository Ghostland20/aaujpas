import React, { useState, useEffect } from 'react'
import{ Link, useParams } from 'react-router-dom'
import { client } from '../../client'
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import './archive.css'

import LoadingComponent from '../loading/loading'

const ArchiveList = () => {

    const [archives, setArchives] = useState([]);
    const [sortedArchive, setsortedArchives] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { year } = useParams();


    useEffect(() => {
      client.fetch(
        `*[ _type == "journal" && year == $year]{
            year,
            title,
            pages,
            sort_page,
            author,
            number,
            "fileURL" : file.asset->url,
            volume
        } | order(sort_page asc)`, {year}
        
      ).then(
            (data) => setArchives(data),
        )
       .catch(console.error)
    }, [year])
    

    useEffect(() => {
      const sorted = archives.sort((a, b) => a.sort_page - b.sort_page)
      setsortedArchives(sorted)
      setIsLoading(false)
    }, [archives])
    
    
    
    


  return (
    <div className='w-full'>
        {isLoading ? <LoadingComponent/> :
         
            <div className='list_con'>
                {archives.map((item) => (
                <div key={item.title} className='item'>
                  
                  <div className='download'>
                  <Link to={`${item.fileURL}`} target="_blank">
                  <BsFillFileEarmarkPdfFill/>    
                  </Link> 
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
    </div>
  )
}

export default ArchiveList