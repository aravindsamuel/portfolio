
// Skills 
import html from "../images/skill/html.png";
import css from "../images/skill/css-3.png";
import js from "../images/skill/js.png";
import bootstrap from "../images/skill/bootstrap.png"
import tailwind from "../images/skill/tailwind.png"
import react from "../images/skill/physics.png";
import figma from "../images/skill/figma.png"
// import node from "../images/skill/nodejs.png";
// import mysql from "../images/skill/mysql.png";
// import nestJs from "../images/skill/nestJs.png";
// import expressJs from "../images/skill/express-js.png";
// import postgreSQL from "../images/skill/postgresql.png";
// import typeORM from "../images/skill/typeORM.png";
// import git from "../images/skill/git.png";
// import github from "../images/skill/github.png";
// import python from "../images/skill/python.png";
// import aws from "../images/skill/aws.png";


// Projects
import ecommerce from '../images/project/ecomm_thumb.png'
import adminDashBoard from '../images/project/Dashboard.png'
import indoItalianRest from '../images/project/IndoItalianRest.png'
import investmentCalculator from '../images/project/InvestmentCalculator.png'
import speechRecognition from '../images/project/speechRecognition.png'
import projectManagement from '../images/project/projectManagement.png'
import incomeExpenseTracker from '../images/project/IncomeExpenseTracker.png'
import ticTacToe from '../images/project/ttt.png'
import figmaMobile from '../images/project/figmaMobile.png'

const projectData = [
    {
        project_thumbnail: ecommerce,
        project_title: 'Ecommerce',
        project_desc: 'A modern eCommerce web app with product listings, cart, and checkout functionality. Built responsive online shopping experience.',
        project_link:'https://aravindsamuel.github.io/Ecommerce/#/',
        project_techStack: [html, css, js, bootstrap, react]
    },
    {
        project_thumbnail: adminDashBoard,
        project_title: 'Admin Dashboard',
        project_desc: 'An interactive admin dashboard for managing products, users, and orders. Features data visualization.',
        project_link:'https://aravindsamuel.github.io/admin/',
        project_techStack: [html, css, js, bootstrap, react]
    },
    {
        project_thumbnail: indoItalianRest,
        project_title: 'Indo-Italian Restaurant',
        project_desc:  'A stylish restaurant website showcasing Indo-Italian cuisine with interactive menus, responsive design.',
        project_link:'https://aravindsamuel.github.io/indoitalianrestaurant/',
        project_techStack: [html, css, js]
    },
    {
        project_thumbnail: investmentCalculator,
        project_title: 'Investment Calculator',
        project_desc:  'A app that calculates investment growth over time. Users can input data to visualize returns.',
        project_link:'https://aravindsamuel.github.io/InvestmentCalculator/',
        project_techStack: [html, css, js, react]
    },
     {
        project_thumbnail: speechRecognition,
        project_title: 'Speech Recognition',
        project_desc: 'A voice-enabled web app that uses speech recognition to convert spoken words into text.',
        project_link:'https://aravindsamuel.github.io/SpeechRecognition/',
        project_techStack: [html, css, js, react]
    },
    {
        project_thumbnail: projectManagement,
        project_title: 'Project Manager',
        project_desc:'A task and project management app for organizing workflows and managing deadlines.',
        project_link:'https://aravindsamuel.github.io/ProjectManager/',
        project_techStack: [html, css, js, tailwind, react]
    },
    {
        project_thumbnail: incomeExpenseTracker,
        project_title: 'Income Expense Tracker',
        project_desc:'A simple web app to track daily income and expenses. Helps users monitor their finances.',
        project_link:'https://aravindsamuel.github.io/IncomeExpenseTracker/',
        project_techStack: [html, css, js]
    },
    {
        project_thumbnail: ticTacToe,
        project_title: 'Tic Tac Toe',
        project_desc:'A classic Tic Tac Toe game features interactive gameplay for two players.',
        project_link:'https://aravindsamuel.github.io/tic-tac-toe/',
        project_techStack: [html, css, js, tailwind, react]
    },
    {
        project_thumbnail: figmaMobile,
        project_title: 'Coffee Machine',
        project_desc:'A modern mobile app UI/UX design for a smart coffee machine.',
        project_link:'https://www.figma.com/proto/DidS2NHRmeunT4qHKKdyGs/Sharon-coffee-machine?node-id=304-85&p=f&viewport=21%2C542%2C0.66&t=6uYW1SDocnbKhPcj-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=243%3A15&show-proto-sidebar=1',
        project_techStack: [figma]
    },
]

export default projectData;