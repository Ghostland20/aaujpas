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

            <div><br/>
                <div>
                <span className='titles'>Assisstant Editor-in-Chief</span>
                <p>
                <ul>Prof. I. Aigbedion</ul>
                </p>
                </div><br/>
                <div>
                <span className='titles'>Editorial Board Members</span>
                <p>
                Prof. O. Ujuanbi (Business Editor)<br/>
                Prof. (Mrs.) A. Odia<br/>
                Prof. C.U. Onianwa<br/>
                Prof. F. O. Ikpotokin<br/>
                Prof. F. M. Okoro<br/>
                Prof. I.W. Edokpa<br/>
                Prof. I. B. A. Momodu<br/>
                Prof. V. U. Okojie<br/>
                Prof. G. U. Agbeboh<br/>
                Prof. S.I. Jegede<br/>
                Prof. (Mrs) A. Odia<br/>
                Prof. S. E. Nnebe<br/>
                Dr. K.O. Ize-Iyamu<br/>
                Dr. E.O. Egbon<br/>
                Dr. A.O. Elakhe<br/><br/>
                </p>
                </div>
            </div>
        </div>

    )
  }
  
  export default Eboard