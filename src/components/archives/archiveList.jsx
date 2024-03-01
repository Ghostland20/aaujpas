import React, { useState, useEffect } from 'react'
import{ useParams } from 'react-router-dom'
import { client } from '../../client'

import LoadingComponent from '../loading/loading'

const ArchiveList = () => {

    const [archive, setArchive] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { year } = useParams();


    useEffect(() => {
      client.fetch(
        `*[ _type == "journal" && year == $year]{
            year,
            title,
            desc,
            author,
            number,
            file,
            volume
        }`, {year}
        
      ).then(
            (data) => setArchive(data),
            setIsLoading(false))
       .catch(console.error)
      
    }, [year])
    


  return (
    <div>
        {isLoading ? <LoadingComponent/> :
         <div>My files came through</div>}
    </div>
  )
}

export default ArchiveList