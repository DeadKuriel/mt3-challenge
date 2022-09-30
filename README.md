# Kur-Dashboard
------
#NPM Install
This command installs a package, and any packages that it depends on. If the package has a package-lock or shrinkwrap file, the installation of dependencies will be driven by that, with an npm-shrinkwrap.json taking precedence if both files exist. See package-lock.json and npm shrinkwrap.
A package is:
• a) a folder containing a program described by a package.json file
• b) a gzipped tarball containing (a)
• c) a url that resolves to (b)
• d) a <name>@<version> that is published on the registry (see registry) with (c)
• e) a <name>@<tag> (see npm dist-tag) that points to (d)
• f) a <name> that has a "latest" tag satisfying (e)
• g) a <git remote url> that resolves to (a)

    •	npm install (in package directory, no arguments):
    •	Install the dependencies in the local node_modules folder.
    •	In global mode (ie, with -g or --global appended to the command), it installs the current package context (ie, the current working directory) as a global package.
    •	By default, npm install will install all modules listed as dependencies in package.json.

#npm run dev
The npm run dev command is a generic npm command that you can find in many modern web application projects.
This command is used to run the dev script defined in the project’s package.json file.
To know what is exactly being run by the command, in first place you need to open the package.json file.

That command will start a development server so that you can open the Next.js application from your browser.
As to how the next dev command works, you need to look into the source code inside the node_modules/ folder. But that is beyond the scope of this --
In short, the npm run command is part of the npm program used to run scripts. The name of the scripts themselves is user-defined inside the package.json file.
This means that npm run dev will run the dev command, while npm run production will run the production command.
------
##### How to Install Node.js and NPM on mac
How to Install Node.js on a Mac
Node.js is required for using many JavaScript tools and for creating server-side JavaScript applications. Here is how you install Node.js on a Mac.
The first thing you should do is check to see if you have a version of Node.js already installed. To do that:
• Open the Terminal by pressing Command+Space to open Spotlight Search and entering Terminal then pressing Enter.
• Enter node - v in the Terminal and press Enter.
Nats-MacBook-Pro:Webucator natdunn$ node -v
• If you do have Node.js installed, it will output the version.
• Update to the latest version using npm i -g npm. If you get a bunch of checkPermissions warnings, you should run the command as the superuser like this:
sudo npm i -g npm
• You now have the latest version installed. You do not need to continue with these instructions.
• If you do not have Node.js installed, it will output something like -command not found. Continue with these instructions to install it.
• Go to nodejs.org. You’ll see download links for MacOS.If you are using Node.js for a Webucator class, you should select the LTS version. The Current version has the latest features, but may be more prone to changes and bugs than the LTS (Long Term Support) version.
• When the file finishes downloading, locate it in Finder and double-click on it.
• Go through the entire installation process.
• When installation is complete, open the Terminal by pressing Command+Space to open Spotlight Search and entering Terminal then pressing Enter.
• Enter node - v in the Terminal to verify that Node.js is installed correctly and to see the version of Node.js that was installed:
• Nats-MacBook-Pro:Webucator natdunn % node -v
v16.15.0
Installing Node.j will also install npm. To see this, run npm -v:
Nats-MacBook-Pro:Webucator natdunn % npm -v
8.6.0
If versions for node and npm were both output, then you’re all set.
#react
React JS -React is an open-source component-based front-end JavaScript library. It is used to create fast and interactive user interfaces for web and mobile applications. It is easy to create a dynamic application in React because it requires less coding and offer more functionality. It is used by big MNC and fresh new startups
#Features of React:
Reusable Components: A single React app consists of many components each component have their own logic and code  but we can easily reuse components any number of time hence reducing the developers time and increasing the efficiency of work
Debugging: React app can be easily debug using  “react developer tools”.It’s a browser extension that can be used for both chrome as well as Firefox.
Step 1: Install Node.js installer for MAC. Here install the LTS version (the one present on the left). Once downloaded open NodeJS without disturbing other settings, click on the Next button until it’s completely installed.  
Step 2: Open command prompt  to check whether it is completely installed or not type the
command –>   node – v
Node Version is v14.15.3
If the installation went well it will give you the version you have installed  
Step 3: Now in the terminal run the below command: 
npm install -g create-react-app  
Step 4: Now Create a new folder where you want to make your react app using the below command: 
mkdir newfolder
Note: The newfolder in the above command is the name of the folder and can be anything.
Step 5: Now inside this folder run the command –>
create-react-app react kur dashboard
Step 6: Now open the IDE of your choice for eg.  Visual studio code and open the folder where you have installed the react app newolder (in the above example) inside the folder you will see your app’s name reactapp (kur dashboard). Use the terminal and move inside your app name folder.  
Use command  cd react app (kur dashboard)
Step 7: To start your app run the below command :
#npm start  
Once you run the above command a new tab will open in your browser showing React logo as shown below :
#nextjs
The combination of React.js and the Create-react-app tool is the best for creating any web application. But when coming to production-ready web applications, it will give us a painful experience. Here, we have a framework built on top of the React.js library that helps us to build production-ready web apps.
#1. Install Nodejs
How to install Next.js
Node.js actually provides a runtime environment to execute JavaScript code from outside a browser. NPM, the default package manager for Nodejs is used for managing and sharing the packages for any JavaScript project. React uses Node.js and NPM for the management of dependencies and runtime.
So first, it needs to install Nodejs on our system. NPM will be installed with Nodejs. The current stable version of Node.js can be downloaded and installed from the official website that is given below.
https://nodejs.org
Download the latest version and install it. Here we can choose the LTS or the latest version. Because both of the version supports Next.js.
node -v
npm -v
This will show the installed versions of Node.js and NPM. 2. Create a new Next.js project
Step-by-step instructions to start using Next.js
Make sure you have the latest version of Node. Running checknode -vIn your terminal and compare it with the latest LTS version listedhttps://nodejs.org/.
After installing Node.js, you will havenpmCommands can be used on your command line.
If you encounter any trouble at this stage, I suggest you write the following tutorial for me:
• How to install Node.js
• How to update Node.js
• Introduction to npm package manager
• Unix Shell Tutorial
• How to use macOS terminal
• Whack the shell
Now you have updated Node to the latest version, andnpm, Create an empty folder in any location you like (for example, in the main folder), and then enter that folder:
mkdir nextjs
cd nextjs
And create your first Next project
mkdir firstproject
cd firstproject
Use nownpmInitialize it as a command for the Node project:
npm init -y
This-yOption tellnpmUse the project’s default settings to fill in the examplepackage.jsonfile.
Now install Next and React:
npm install next react react-dom
Your project folder should now have 2 files:
• package.json(Just see my tutorial)
• package-lock.json(See my package lock tutorial)
withnode_modulesfolder.
Use your favorite editor to open the project folder. My favorite editor isVS code. If it is installed, you can runcode .Open the current folder in the editor in the terminal (if this command does not work for you, please refer toThis)
turn onpackage.json, Now has the following content:
{
"name": "airbnbclone",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"keywords": [],
"author": "",
"license": "ISC",
"dependencies": {
"next": "^9.1.2",
"react": "^16.11.0",
"react-dom": "^16.11.0"
}
}
And replacescriptsThe section with the following content:
"scripts": {
"dev": "next",
"build": "next build",
"start": "next start"
}
Add Next.js build command, we will use it soon.

Create one nowpagesFolder and add aindex.jsfile.
In this file, let's create the first React component.
We will use it as the default export:
const Index = () => (

  <div>
    <h1>Home page</h1>
  </div>
)
export default Index
Now use the terminal and runnpm run devStart the Next development server.
This will make the application available on port 3000 on the local host.
turn onhttp://localhost:3000View it in the browser.
#redux 
Before installing Redux, we have to install Nodejs and NPM. Below are the instructions that will help you install it. You can skip these steps if you already have Nodejs and NPM installed in your device.
	•	Visit https://nodejs.org/ and install the package file.
	•	Run the installer, follow the instructions and accept the license agreement.
	•	Restart your device to run it.
	•	You can check successful installation by opening the command prompt and type node -v. This will show you the latest version of Node in your system.
	•	To check if npm is installed successfully, you can type npm –v which returns you the latest npm version.
To install redux, you can follow the below steps −
Run the following command in your command prompt to install Redux.
npm install --save redux
To use Redux with react application, you need to install an additional dependency as follows −
npm install --save react-redux
To install developer tools for Redux, you need to install the following as dependency −
Run the below command in your command prompt to install Redux dev-tools.
npm install --save-dev redux-devtools
If you do not want to install Redux dev tools and integrate it into your project, you can install Redux DevTools Extension for Chrome and Firefox.
#Bootstrap
Bootstrap is one of the most popular front-end open-source toolkit for developing responsive, mobile-first front-end projects on the web. It contains various types of design templates based on CSS and JavaScript. It has various prebuilt components such as Accordion, Alerts, Carousel, Button, Card, Breadcrumb, etc. Instead of writing code from scratch, one can use bootstrap templates to make the work a lot easier. There are multiple ways to use Bootstrap in your local project such as by using Bootstrap CDN or installing bootstrap in React JS.
Following are some steps to install Bootstrap:-
Create React App
Open terminal and change directory to the path of your current project
Run npm (node package manager) install command followed by the name of package and version(optional).
After installing one can use Bootstrap by simply importing the bootstrap dependency in your React JS file. After importing Bootstrap minified CSS as the dependency we can use built-in bootstrap classes in our React App Components. But in order to use Bootstrap’s JavaScript components in our React App we have to install jquery and popper.js similarly using npm install.
Creating react application:
Step 1: Create a React App using the following command. Write the following command inside terminal and hit enter. (Instead of gfg you can use folder name of your choice. )
npx create-react-app gfg
Step 2: Change directory to the project folder by entering the following command.
cd gfg
Project Structure: Now we are in our project directory. As we created the ReactJS successfully so let’s install the required package. After creating React app our project structure would look similar to the following.
#Project_Structure
Step 3: Run the following command in the terminal. Do check whether you are in React App directory or not. For the sake of convenience I have taken F:\gfg  as my current working directory, the directory of my React App(ku dashboard). 
npm install bootstrap
