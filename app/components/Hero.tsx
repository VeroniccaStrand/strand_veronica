import { skills } from '../data/skillsData';
import SkillBlock from './SkillBlock';

const Hero = () => {
  return (
    <section className='flex justify-between  p-10'>
      <div className=' '>
        <h1 className=' text-8xl font-serif'>Veronica Strand</h1>
        <p className='ml-2 max-w-[25rem] text-xl leading-8 tracking-wider text-accent font-bebas'>
          It’s an endless journey of growth, and that’s what excites me the
          most. Whether it’s mastering a new technology, refining my skills, or
          solving complex problems, I’m always eager to push myself further.
        </p>
      </div>
      <div>
        <SkillBlock data={skills} />
      </div>
    </section>
  );
};

export default Hero;
