
const Skills = () => {

  const skills = ["React", "HTML", "CSS", "SASS", "Tailwind", "NODE", "Javascript", "Git", "Firebase"];
  
  return (
<div className="mt-8" >
<p className="text-black dark:text-white font-light montserrat">Here is a list of all my skills, this list is steadily growing over time.</p>
<ul className="mt-4 flex flex-col gap-2" >

{skills.map((skill) => {
 return <li className="text-20 text-[#1A96C6] robotoMono" >{skill}</li> 
})}
</ul>
</div>
  )
}

export default Skills