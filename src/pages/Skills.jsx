import './skills.css'
import Skill from '../components/Skill'
import skillData from '../data/skillsData'

function Skills() {
  return (
    <div className="Skills">
      <hr className='m-0'/>
      <h1 className='skillpagetitle'>Skills</h1>
      <div className="skillcontainer">
        {skillData.map((skill) => (
          <Skill skillName={skill.name} skillImage={skill.image} />
        ))}
      </div>
    </div>
  )
}

export default Skills