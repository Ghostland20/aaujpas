import React from 'react'
import './eboard.css'

const Eboard = () => {
    return (    
        <div className='eboard'>    
            <span className='head'><b>EDITORIAL BOARD</b></span> 
            
            <div className='main'>
              <span className='titles'>Editor-in-Chief / Chairman</span>

               <p>
               Prof. C. E. Abhulimen, <br/>
               Department of Mathematics<br/>
               Faculty of Physical Sciences<br/>
               Ambrose Alli University, Ekpoma, Nigeria
               </p>
            </div>

            <div className='w-full mt-10'>

                <div className='mb-10'>
                <span className='titles'>Assisstant Editor-in-Chief</span>
                <p>
                <ul>Prof. I. Aigbedion</ul>
                </p>
                </div>


                <div>

                    <span className='titles'>Editorial Board Members</span>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <p>Prof. O. Ujuanbi (Business Editor)</p>
                        <p>Prof. (Mrs.) A. Odia</p>
                        <p>Prof. C.U. Onianwa</p>
                        <p>Prof. F. O. Ikpotokin</p>
                        <p>Prof. F. M. Okoro</p>
                        <p>Prof. I.W. Edokpa</p>
                        <p>Prof. I. B. A. Momodu</p>
                        <p>Prof. V. U. Okojie</p>
                        <p>Prof. G. U. Agbeboh</p>
                        <p>Prof. S.I. Jegede</p>
                        <p>Prof. (Mrs) A. Odia</p>
                        <p>Prof. S. E. Nnebe</p>
                        <p>Dr. K.O. Ize-Iyamu</p>
                        <p>Dr. E.O. Egbon</p>
                        <p>Dr. A.O. Elakhe</p>
                    </div>

                </div>
            </div>
        </div>

    )
  }
  
  export default Eboard