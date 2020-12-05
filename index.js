const inquirer = require( 'inquirer' );
const fs = require( 'fs' );
const util = require( 'util' );

const writeMDFileAsync = util.promisify( fs.writeFile );
// array of questions for user
const questions = () => {

    return inquirer.prompt([

        {
            type: 'input',
            name: 'title',
            messages: 'What is the title of your project?',
        },

        {
            type: 'editor',
            name: 'description',
            messages: 'Please enter a brief and meaningful description to help readers understand what this porject is about.',
            validate: function ( text ) {
                if ( text.split( '\n' ).length < 3 ) {
                    return 'Must be at least 3 lines.';
                }

                return true;
            },
        },

        {
            type: 'input',
            name: 'title',
            messages: 'What is the title of your project?',
        },

    ]);
};

// function to write README file
function writeToFile( fileName, data ) {
}

// function to initialize program
const init = async () => {
    console.log('Hello. \nI am the README generator 3000 lite. \nI am going to help you build a new README.MD file for your project. \nPlease answer the following questions about your project.');

    try {
        const data = await questions();

        const markDown = generateMarkdown( data );
        
        await writeMDFileAsync( 'README.MD', markDown );

        console.log( 'Success is granted. Your new README.MD file is located in your root folder. \nGoodbye.');
    } catch ( err ) {
        console.log ( err );
    }
};

// function call to initialize program
init();