var fs = require('fs');

var inquirer = require('inquirer');

const validAns = 

console.log("Welcome to ReadMe generator! Type your response to each prompt and press enter to submit. Your ReadMe will be generated once all questions have been answered and saved as `readme.md`")

inquirer
    .prompt([
        {
            message: 'Project Title:',
            type: 'input',
            name: 'title',
            validate: input => {
                if (input) {
                    return true;
                }
                else {
                    console.log("Please enter a title")
                }
            }
        },
        {
            message: 'Project Description:',
            type: 'input',
            name: 'descripton',
        },
        {
            message: 'Installation:',
            type: 'input',
            name: 'installation',
        },
        {
            message: 'Usage:',
            type: 'input',
            name: 'usage',
        },
        {
            message: 'License:',
            type: 'list',
            name: 'license',
            choices: [
                "Apache License 2.0",
                "Boost Software License 1.0",
                "BSD 2-Clause Simplified License",
                "BSD 3-Clause Revised License",
                "Creative Commons Zero V1.0 Universal",
                "Creative Commons Attribution 4.0",
                "Creative Commons Attribution Share Alike 4.0",
                "Creative Commons Attribution NonCommercial 4.0 International",
                "Creative Commons Attribution NoDerivitaves 4.0 International",
                "Creative Commons Attribution NonCommmercial-ShareAlike 4.0 International",
                "Creative Commons Attribution NonCommercial-NoDerivitaves 4.0 International",
                "Eclipse Public License 1.0",
                "GNU GPL V3",
                "GNU GPL V2",
                "GNP AGPL V3",
                "GNU LGPL V3",
                "GNU FL V1.3",
                "The Hippocratic License 2.1",
                "The Hippocratic License 3.0",
                "IBM Public License Version 1.0",
                "ISC License",
                "The MIT License",
                "Mozilla Public License 2.0",
                "Attribution License (BY)",
                "Open Database License (ODbL)",
                "Public Domain Dedication and License (PDDL)",
                "The Perl License",
                "The Artistic License 2.0",
                "SIL Open Font License 1.1",
                "The Unlicense",
                "The Do What The Fuck You Want To Public License (WTFPL)",
                "Zlib"
            ]
        },
        {
            message: 'Contributing:',
            type: 'input',
            name: 'contributing',
        },
        {
            message: 'Tests:',
            type: 'input',
            name: 'tests',
        },
        {
            message: 'Questions:',
            type: 'input',
            name: 'questions',
        },
        {
            message: 'GitHub Username:',
            type: 'input',
            name: 'github',
        },
        {
            message: 'Email:',
            type: 'input',
            name: 'email',
        },
    ])
    .then((r) => {

        var badge = `${r.license}`.split(" ").join("-")

        const readMeTemplate =

            `

# Title  
${r.title}   
  
[License Badge](assets/images/${badge}.png)  

## Description   
${r.description}    

### Table Of Contents  
* ![Installation](#installation)
* ![Usage](#usage)
* ![License](#license)
* ![Contributing](#contributing)
* ![Tests](#tests)
* ![Questions](#questions)  
    
    
## Installation  
${r.installation}  
    
## Usage  
${r.usage}  
     
## License   
${r.license} 
     
## Contributing  
${r.contributing}  
    
## Tests  
${r.tests}     
    
## Questions
${r.questions}   
  
Contact me via:  
* ![GitHub](www.github.com/${r.github})  
* ![Email](mailto:${r.email}) me with any further questions
    `


        fs.writeFile("readme.md", readMeTemplate, function (err) {
            if (err) throw err;
            console.log('Saved');
        })
    })