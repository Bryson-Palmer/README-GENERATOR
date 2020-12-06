const inquirer = require( 'inquirer' );
const fs = require( 'fs' );
const util = require( 'util' );
const generateMarkdown = require( './utils/generateMarkdown.js' );

const writeMDFileAsync = util.promisify( fs.writeFile );
// array of questions for user
const questions = () => {

    return inquirer.prompt([

        {
            type: 'input',
            name: 'title',
            message: '\n \nWhat is the title of your project?',
            default: 'A Tribute To The Best Title ever!',
        },

        {
            // Needs the text editor
            type: 'editor',
            name: 'description',
            message: '\n \nPlease enter a brief and meaningful description about this project.',
            default: 'A brief and meaningful description about this project goes here.',
        },

        {
            // Needs the text editor
            type: 'editor',
            name: 'criteria',
            message: '\n \nAdd the criteria you had to follow for this project.',
            default: 'WHEN I do this, Then this expected behavior happens.',
        },

        {
            type: 'input',
            name: 'projectRepo',
            message: '\n \nAdd the link to the Git Hub repository.',
            default: 'Add a link to your Git Hub repo here.',
        },

        {
            type: 'input',
            name: 'liveLink',
            message: '\n \nAdd the link to the live url.',
            default: 'Add a link to the live url here.',
        },

        {
            type: 'input',
            name: 'screenshot',
            message: '\n \nAdd a screenshot using the relative file path.',
            default: 'Add a screenshot here.',
        },

        {
            // Needs the text editor
            type: 'editor',
            name: 'futureDevelopment',
            message: '\n \nAdd any comments you have about future development.',
            default: 'Add comments about future development here.',
        },

        {
            // Needs the text editor
            type: 'editor',
            name: 'installation',
            message: '\n \nAdd installation instructions here.',
            default: 'Add installation instructions here.',
        },

        {
            // Needs the text editor
            type: 'editor',
            name: 'usage',
            message: '\n \nAdd usage information here.',
            default: 'Add usage information here.',
        },

        {
            // List
            type: 'list',
            name: 'license',
            message: '\n \nPlease pick a license from the following options.',
            choices: ['', '', '', ''],
        },

        {
            // Needs the text editor
            type: 'editor',
            name: 'contributing',
            message: '\n \nAdd instructions on how someone else can contribute to your repo.',
            default: 'Add instructions on how someone else can contribute to your repo here.',
        },

        {
            // Needs the text editor
            type: 'editor',
            name: 'tests',
            message: '\n \nAdd test instructions here.',
            default: 'Add test instructions here.',
        },

        {
            type: 'input',
            name: 'gitHub',
            message: '\n \nAdd a link to your Git Hub here.',
            default: 'Add a link to your Git Hub here.',
        },

        {
            type: 'input',
            name: 'email',
            message: '\n \nAdd your email address here.',
            default: 'Add your email address here.'
        },

    ]);
};

const init = async () => {
    console.log('\n********************************************************\n \nHello!\n \nI am the README GEN3000 lite.\n \nI am going to help you build a new README.MD file for your project.\n \nPlease answer the following questions about your project.');

    try {
        const data = await questions();

        const markDown = generateMarkdown( data );
        
        await writeMDFileAsync( 'README.MD', markDown );

        console.log( '\nSuccess is granted!\n-------------------\n \nYour new README.MD file\n \nis located in your root folder.\n \nGoodbye...\n \n********************************************************\n');
    } catch ( err ) {
        console.log ( err );
    }
};

// function call to initialize program
init();