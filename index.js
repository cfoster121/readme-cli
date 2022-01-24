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
])