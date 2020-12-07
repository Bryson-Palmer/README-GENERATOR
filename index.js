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
            type: 'editor',
            name: 'description',
            message: '\n \nPlease enter a brief and meaningful description about this project.',
            default: '<Press `A` then press `return` to begin typing your description. Press `esc` then press `:x!` to return to node. When this gets loaded into the README file, delete these instructions.>',
        },

        // {
        //     type: 'editor',
        //     name: 'criteria',
        //     message: '\n \nAdd the criteria you had to follow for this project.',
        //     default: '<Press `A` then press `return` to begin typing the criteria. Press `esc` then press `:x!` to return to node. When this gets loaded into the README file, delete these instructions.>',
        // },

        // {
        //     type: 'input',
        //     name: 'projectRepo',
        //     message: '\n \nAdd the link to the Git Hub repository.',
        //     default: 'Add a link to your Git Hub repo here.',
        // },

        // {
        //     type: 'input',
        //     name: 'liveLink',
        //     message: '\n \nAdd the link to the live url.',
        //     default: 'Add a link to the live url here.',
        // },

        // {
        //     type: 'input',
        //     name: 'screenshot',
        //     message: '\n \nAdd a screenshot using the relative file path.',
        //     default: 'Add a screenshot here.',
        // },

        // {
        //     type: 'editor',
        //     name: 'futureDevelopment',
        //     message: '\n \nAdd any comments you have about future development.',
        //     default: '<Press `A` then press `return` to begin typing about future development. Press `esc` then press `:x!` to return to node. When this gets loaded into the README file, delete these instructions.>',
        // },

        // {
        //     type: 'editor',
        //     name: 'installation',
        //     message: '\n \nAdd installation instructions here.',
        //     default: '<Press `A` then press `return` to begin typing installation instructions. Press `esc` then press `:x!` to return to node. When this gets loaded into the README file, delete these instructions.>',
        // },

        // {
        //     type: 'editor',
        //     name: 'usage',
        //     message: '\n \nAdd usage information here.',
        //     default: '<Press `A` then press `return` to begin typing usage information. Press `esc` then press `:x!` to return to node. When this gets loaded into the README file, delete these instructions.>',
        // },

        {
            // List
            type: 'list',
            name: 'license',
            message: '\n \nPlease pick a license from the following options.',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Choose One Later'],
            validate: (data) => {
                if (Choices == 'Apache License 2.0') {
                    return `${license}\n
                    Copyright [yyyy] [name of copyright owner]

                    Licensed under the Apache License, Version 2.0 (the "License");
                    you may not use this file except in compliance with the License.
                    You may obtain a copy of the License at
                    
                        http://www.apache.org/licenses/LICENSE-2.0
                    
                    Unless required by applicable law or agreed to in writing, software
                    distributed under the License is distributed on an "AS IS" BASIS,
                    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                    See the License for the specific language governing permissions and
                    limitations under the License.`;
                
                } else if (Choices == 'GNU General Public License v3.0') {
                    return `${license}\n
                    Copyright (C) <year>  <name of author>

                    This program is free software: you can redistribute it and/or modify
                    it under the terms of the GNU General Public License as published by
                    the Free Software Foundation, either version 3 of the License, or
                    (at your option) any later version.
                
                    This program is distributed in the hope that it will be useful,
                    but WITHOUT ANY WARRANTY; without even the implied warranty of
                    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                    GNU General Public License for more details.
                
                    You should have received a copy of the GNU General Public License
                    along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
                
                } else if (Choices == 'MIT License') {
                    return `${license}\n
                    Copyright <YEAR> <COPYRIGHT HOLDER>

                    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                    
                    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                    
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
                
                } else
                return `${license}\n`
            },
        },

        // {
        //     type: 'editor',
        //     name: 'contributing',
        //     message: '\n \nAdd instructions on how someone else can contribute to your repo.',
        //     default: '<Press `A` then press `return` to begin typing how someone else can contribute. Press `esc` then press `:x!` to return to node. When this gets loaded into the README file, delete these instructions.>',
        // },

        // {
        //     type: 'editor',
        //     name: 'tests',
        //     message: '\n \nAdd test instructions here.',
        //     default: '<Press `A` then press `return` to begin typing the test instructions. Press `esc` then press `:x!` to return to node. When this gets loaded into the README file, delete these instructions.>',
        // },

        // {
        //     type: 'input',
        //     name: 'gitHub',
        //     message: '\n \nAdd a link to your Git Hub by typing in your user name here.',
        //     default: 'Add a link to your Git Hub here.',
        // },

        // {
        //     type: 'input',
        //     name: 'email',
        //     message: '\n \nAdd your email address here.',
        //     default: 'Add your email address here.'
        // },

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