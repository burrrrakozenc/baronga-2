import React from 'react'
import '../../utils/font-awesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeartIcon = () => {
    return (
        <div>

            {/* <a href='https://www.instagram.com/'> */}
                <FontAwesomeIcon
                style={{fontSize:'30px',
                        color:'#ff1900'}}
                    icon={['fa', 'heart']}
                    title='asd' />
            {/* </a> */}
            {/* <span style={{ fontSize: '3rem' }}>&nbsp;&nbsp;/&nbsp;&nbsp;</span> */}
        </div>

    )
}



export default HeartIcon