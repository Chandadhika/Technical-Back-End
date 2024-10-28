const inquirer = require('inquirer');
const fs = require('fs');

inquirer.createPromptModule([
    {
        type: 'input',
        name: 'name',
        massage: 'What is your name?'
    },
    {
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'stack',
        choices: ['HTMl', 'CSS', 'JavaScript', 'MySQL']
    },
    {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'thlekinesis']
    }
])

.then(data => {
    const filename = `${data.name
        .toLowerCase()
        .split(' ')
        .join('')}.json`;

        fs.writeFile(filename, JSON.stringify(data, null, '\t'), err => 
        err ? console.log(err) : console.log('Success!')
    );
});