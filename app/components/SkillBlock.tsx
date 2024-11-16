import style from '../../app/styles/skillBlock.module.css';
interface skills {
  title: string;
}

interface skillProps {
  data: skills[];
}

const SkillBlock: React.FC<skillProps> = ({ data }) => {
  return (
    <div className={`  max-w-[950px] `}>
      <div className={`${style.skillGrid} `}>
        {data.map((item, index) => (
          <div
            key={index}
            className={`${style.skillBlock}  ${
              style[`skill${index + 1}`]
            } font-bebas shadow-custom-dark text-xl text-accent`}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBlock;
