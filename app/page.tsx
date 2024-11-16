import SkillBlock from './components/SkillBlock';
import { skills } from './data/skillsData';

export default function Home() {
  return (
    <div>
      <h1 className='font-custom_spectral text-8xl font-light'>
        Veronica Strand
      </h1>
      <SkillBlock data={skills} />
    </div>
  );
}

//It’s an endless journey of growth, and that’s what excites me the
// most. Whether it’s mastering a new technology, refining my skills, or
//solving complex problems, I’m always eager to push myself further.
