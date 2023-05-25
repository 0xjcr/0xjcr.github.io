import Heading from './components/Heading';
import Skills from './components/Skills';
import Progress from './components/Progress';
import YouCoder from './components/YouCoder';
import MealMaster from './components/MealMaster';
import Scne from './components/Scne';
import Spacing from './components/Spacing';
import ArtofEth from './components/ArtofEth';
import About from './components/About'

function App() {
  

return (
<>
<div className="overflow-x-hidden overscroll-none">
<Progress />
<Heading/>
<Spacing/>
<Skills/>
<YouCoder/>
<MealMaster/>
<Scne/>
<ArtofEth/>
<About/>
</div>
</>
  );
}

export default App;




