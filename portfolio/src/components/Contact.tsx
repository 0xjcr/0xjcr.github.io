import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
<div className="fixed bottom-0 left-0 h-96 w-96 flex items-center justify-center z-50">   
  <div className="h-14 w-60 rounded-r-md flex justify-center items-center space-x-2">
    <div className="h-14 w-16 rounded-xl flex justify-center items-center">
    <a href="https://www.linkedin.com/in/jordanrollins/" target="_blank" rel="noopener noreferrer">
    <LinkedInIcon className="scale-150 !fill-indigo-500 hover:!scale-125 hover:!fill-indigo-400"/>
  </a>
    </div>
    <div className=" flex justify-center items-center"><a href="https://github.com/0xjcr" target="_blank" rel="noopener noreferrer">
    <GitHubIcon className="scale-150 !fill-indigo-500 hover:!scale-125 hover:!fill-indigo-400"/>
  </a></div> 
    <div className="h-14 w-16 rounded-xl flex justify-center items-center"><a href="mailto:carpeomniavino@gmail.com">
    <EmailIcon className="scale-150 !fill-indigo-500 hover:!scale-125 hover:!fill-indigo-400"/>
  </a></div> 
  </div>
</div> 

  )
}

export default Contact