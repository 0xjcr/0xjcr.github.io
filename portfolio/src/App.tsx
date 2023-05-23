import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Heading from './components/Heading';
import Skills from './components/Skills';

import Progress from './components/Progress';
import Contact from './components/Contact';
import YouCoder from './components/YouCoder';
import MealMaster from './components/MealMaster';
import Scne from './components/Scne';



function App() {
  

  return (
    <>
  
<Progress />
<Heading/>
<Skills/>
<YouCoder/>
<MealMaster/>
<Scne/>
{/* <ProjectCard/> */}

  {/* <div className="fixed bottom-40 h-14 w-60 rounded-r-md p-2 ml-24 flex justify-center items-center">
  <div className="h-14 w-16 rounded-xl  mr-4 flex justify-center items-center">
    <LinkedInIcon className="scale-150 !fill-indigo-500"/>
  </div>
  <div className="mr-4 flex justify-center items-center"><GitHubIcon className="scale-150 !fill-indigo-500"/></div> 
  <div className="h-14 w-16 rounded-xl  mr-4 flex justify-center items-center"><EmailIcon className="scale-150 !fill-indigo-500"/></div> 
</div> */}
<Contact />


      <div className="h-[800vh] w-full bg-gradient-to-r from-gray-100 to-gray-800"></div>
    </>
  );
}

export default App;




{/* <div className="fixed top-2/3 w-full h-full flex justify-evenly">
        <div className="w-20 h-20 rounded-xl shadow-lg bg-gradient-to-r from-green-200 to-blue-300 hover:scale-110 transition-transform duration-300 p-1">
          <div className="bg-gray-800 w-full h-full rounded-lg items-center justify-center"></div>
        </div>
        <div className="w-40 h-40 rounded-xl shadow-lg bg-blue-300 hover:scale-110 transition-transform duration-300 p-1">
          <div className="bg-gray-100 w-full h-full rounded-lg items-center justify-center"></div>
        </div>
        <div className="w-40 h-40 rounded-xl shadow-lg bg-gradient-to-r to-green-200 from-blue-300 hover:scale-110 transition-transform duration-300 p-1">
          <div className="bg-gray-800 w-full h-full rounded-lg items-center justify-center"></div>
        </div>
      </div> */}