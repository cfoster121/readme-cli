var fs = require('fs');

var inquirer = require('inquirer');


inquirer
.prompt([
    {
        message: 'Project Title:',
        type: 'input',
        name: 'title',
    },
    {
        message: 'Project Description:',
        type: 'input',
        name: 'descripton',
    },
    {
        message: 'Table of Contents:',
        type: 'input',
        name: 'contents'
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
        name: 'license' ,
        choices: [
            "Academic Free License v3.0",
            "Apache License 2.0",
            "Artistic License 2.0",
            "Boost Software License 1.0",
            "BSD 2-Clause Simplified License",
            "BSD 3-Clause Revised License",
            "Creative Commons License Family",
            "Creative Commons Zero V1.0 Universal",
            "Creative Commons Attribution 4.0",
            "Creative Commons Attribution Share Alike 4.0",
            "Creative Commons Attribution NonCommercial 4.0 International",
            "Creative Commons Attribution NoDerivitaves 4.0 International",
            "Creative Commons Attribution NonCommmercial-ShareAlike 4.0 International",
            "Creative Commons Attribution NonCommercial-NoDerivitaves 4.0 International",
            "Eclipse Public Licnense 1.0",
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
.then((r) => console.log(r))