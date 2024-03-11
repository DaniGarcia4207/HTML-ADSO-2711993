import React from 'react'
import "./footer.css"
//import {GitHub,LinkedIn,Facebook} from '@material-ui/icons'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer(){
    return(
        <div className='footer'>
            <ul className='ulFooter'>
                <li className='contactListItemFooter'><a href='https://github.com/jorgeloaiza48'><p></p></a></li>
                <li className='contactListItemFooter'><a href='https://www.linkedin.com/in/jelm48'><p></p></a></li>
                <li className='contactListItemFooter'><a href='https://www.facebook.com/jeloaiza2'><p></p></a></li>
            </ul>
        </div>
    )
}