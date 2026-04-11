import { useState } from "react";

function Skills() {
    const [skill, setSkill] = useState([]);
   
    const handleSkill = (event) => {
        console.log(event.target.value, event.target.checked);
        if (event.target.checked) {
            setSkill([...skill, event.target.value])
        }
        else {
            setSkill([...skill.filter((item) => item !== event.target.value)]);
        }

    }
    return (
        <div>
            <h1>Select your Skills</h1>
            <input onChange={handleSkill} type="checkbox" id="html" name="html" value="HTML" />
            <label htmlFor="html">HTML</label>
            <input onChange={handleSkill}type="checkbox" id="php" name="php" value="PHP" />
            <label htmlFor="php">PHP</label>
            <input onChange={handleSkill}type="checkbox" id="css" name="css" value="CSS" />
            <label htmlFor="css">CSS</label>
            <input onChange={handleSkill} type="checkbox" id="js" name="js" value="JavaScript" />
            <label htmlFor="js">JavaScript</label>

<h1>{skill.toString()}</h1>
        </div>
    );
}
export default Skills;