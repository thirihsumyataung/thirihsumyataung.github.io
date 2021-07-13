import React from 'react';
import {FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'; 

import GitImage from "./images/github-user.png"; 
import Movies from "./images/movies.png"; 
import MarkDown from "./images/markdown.png"; 
import Cocktail from "./images/cocktail.png"; 
import BackgroundThemeToggle from "./images/background-theme-toggle.png"; 
import ColorGenerator from "./images/color-generator.png"; 
import Slider from "./images/slider.png"; 
import RandomQuote from "./images/random-quote-generator.png"; 
import ShoppingCart from "./images/shopping-cart.png"; 
import Stripe from "./images/stripe.png"; 
import Review from "./images/review.png";
import LoginImage from "./images/login.png";  
import WeatherApp from "./images/weather.png"; 
import Menu from "./images/menu.png"; 
import Restaurant from "./images/restaurant.png"; 
import Tour from "./images/tours.png"; 
import Quiz from "./images/quiz.png"; 
import Pagination from "./images/pagination.png"; 
import ParaGen from "./images/para-generator.png"; 
import GBud from "./images/gbud.png"; 
import StockPhotos from "./images/stock-photos.png"; 
import ShowModal from "./images/show-modal.png"; 
import MouseDriver from "./images/mousedriver.png"; 
import JhK from "./images/jhk.png"; 
import NationalPark from './images/nationalpark.png'; 
import WBTravel from "./images/wb-travel.png"; 
import ExpDate from "./images/expire-date.png"; 
import Shopaholic from "./images/shopaholic.png"; 
import ComfySloth from "./images/comfy-sloth.png"; 
export const socialMedias = [ 
    { 
        id: 1 , 
        url: 'https://twitter.com/YangMoriwoh', 
        icon: <FaTwitter/> 
    }, 
    { 
        id: 2, 
        url: 'https://www.linkedin.com/in/thiri-hsu-myat-aung-b71854180/', 
        icon: <FaLinkedin/>

    }, 
    { 
        id: 3, 
        url: 'https://github.com/thirihsumyataung?tab=repositories', 
        icon: <FaGithub/> 

    }, 
]; 

export const projects = [
    { 
        id: 1, 
        img: GitImage,
        url: 'https://github-users-by-thiriaung.netlify.app/login', 
        projectName: "Github-Users", 
        description: "GitHub-User Project in ReactJs, Auth0 and using Github API"


    }, 
    { 
        id: 2, 
        img: Movies, 
        url: 'https://movie-db-by-thirihsumyataung.netlify.app', 
        projectName: "Movie App", 
        description: "Movie App using movie api"


    }, 
    { 
        id: 3, 
        img: MarkDown, 
        url: 'https://markdown-preview-project-by-thiriaung.netlify.app', 
        projectName: "MarkDown App", 
        description: "Markdown App using the markdown library and css"


    }, 
    { 
        id: 4, 
        img: BackgroundThemeToggle, 
        url: 'https://theme-toggle-by-thiriaung.netlify.app', 
        projectName: "Background Theme Toggle App", 
        description: "LocalStorage and useEffect"


    }, 
    { 
        id: 5, 
        img: Cocktail, 
        url: 'https://cocktail-project-practice-by-thirihsumyataung.netlify.app', 
        projectName: "Cocktail App", 
        description: "Using Cocktail API"


    }, 
    { 
        id: 6, 
        img: ColorGenerator, 
        url: 'https://color-generator-by-thiri.netlify.app', 
        projectName: "Color Generator App", 
        description: "Color Generator App : LocalStorage and useEffect"


    }, 
    { 
        id: 7, 
        img: Slider, 
        url: 'https://small-slider-app.netlify.app', 
        projectName: "Slider App", 
        description: "fetching data from API and CSS"


    }, 
    { 
        id: 8, 
        img: Quiz, 
        url: 'https://quiz-project-by-thirihsumyataung.netlify.app', 
        projectName: "Quiz App", 
        description: "Using Axios and Quiz API"


    }, 
    { 
        id: 9, 
        img: ShoppingCart, 
        url: 'https://practice-for-shopping-cart-project-by-thiriaung.netlify.app', 
        projectName: "Shopping Cart", 
        description: "Shopping cart: Redux, Propdrilling and ContextAPI"


    }, 
    { 
        id: 10, 
        img: Stripe, 
        url: 'https://submenu-project-practice-by-thiriaung.netlify.app', 
        projectName: "Company Home Page", 
        description: "using useReducer / PropsDrilling / ContextAPi (useContext)" 


    }, { 
        id: 11, 
        img: Review, 
        url: 'https://reviews-and-random-reviews-small-app.netlify.app', 
        projectName: "Customer Review Page", 
        description: "using useReducer / PropsDrilling / ContextAPi (useContext)" 
    }, 
    { 
        id: 12, 
        img: LoginImage, 
        url: 'https://login-questions-and-answers-small-app.netlify.app', 
        projectName: "Login Q & A Theme Page", 
        description: "useEffect and conditional rendering" 
    }, 
    { 
        id: 13, 
        img: WeatherApp, 
        url: 'https://my-weather-app-project.netlify.app/', 
        projectName: "Weather App", 
        description: "Mobile Responsive and Background will change as the temperature." 
    }, 
    { 
        id: 14, 
        img: Menu, 
        url: 'https://small-restaurant-menu.netlify.app', 
        projectName: "Restaurant Menu Page", 
        description: "You can choose food type , price and drink categories" 
    }, 
    { 
        id: 15, 
        img: Restaurant, 
        url: 'https://restaurant-near-you-small-app.netlify.app', 
        projectName: "Restaurant-Near-You", 
        description: "Restaurant-Near-Your-Location Advertisement Page" 
    }, 
    { 
        id: 16, 
        img: Tour, 
        url: 'https://single-tour-app.netlify.app', 
        projectName: "Trip Advisor: Tour Page", 
        description: "Tourist Attraction Places and Price of the tour package." 
    }, 
    {
        id: 17, 
        img: RandomQuote, 
        url: 'https://daily-random-quotes-generator.netlify.app', 
        projectName: "Random Quote Generator App", 
        description: "Random Quote of the day"
    }, 
    {
        id: 18, 
        img: Pagination, 
        url: 'https://github-user-pagination-project-by-thirihsumyataung.netlify.app', 
        projectName: "Pagination", 
        description: "Pagination Component"
    }, 
    {
        id: 19, 
        img: ParaGen, 
        url: 'https://paragraph-generator-by-thirihsumyataung.netlify.app', 
        projectName: "Paragraph Generator", 
        description: "Paragraph will print out as your input number."
    }, 
    {
        id: 20, 
        img: GBud, 
        url: 'https://grocery-list-by-thirihsumyataung.netlify.app', 
        projectName: "Grocery Bud", 
        description: "Your input grocery list will be stored and you can edit and delete it anytime."
    },
    {
        id: 21, 
        img: StockPhotos, 
        url: 'https://stock-photos-by-thirihsumyataung.netlify.app', 
        projectName: "Stock Photos App", 
        description: "Stock Photos page by using API"
    },
    {
        id: 22, 
        img: ShowModal, 
        url: 'https://showmodal-page-by-thirihsumyataung.netlify.app', 
        projectName: "ShowModal Page", 
        description: "Practice for Show Modal Page"
    }
]; 
export const ecomProjects = [ 
    { 
        id: 1, 
        url: " ",
        img: ComfySloth,  
        projName: "Comfy-Sloth Furnature Shop", 
        description: "React-Frontend Ecommerce Website", 
        status: "ongoing"
    }, 
    { 
        id: 2, 
        url: " ", 
        img: Shopaholic, 
        projName: "Shopaholic", 
        description: "Full-stack Ecommerce Website", 
        status: "ongoing"
    }
]; 

export const mySchoolProjects = [ 
    { 
        id: 1 , 
        url: "", 
        img:  JhK , 
        projectName:"Hospital Management System" , 
        description: "Group project fro DBMS class: it is about hospital management system and using SQL database in Java.", 
        courseName: "COSC-457(Database Management System)"
    }, 
    { 
        id: 2 , 
        url: "https://www.youtube.com/watch?v=jVpSSwXj-k4", 
        img: MouseDriver, 
        projectName:"Mouse Driver" , 
        description: "Mouse Driver Project in C : Program will detect bluetooth mouse and will print x and y-axis of the mouse location.", 
        courseName: "COSC-439(Operating System)"
    }, 
    { 
        id: 3 , 
        url: "https://github.com/algore7/COSC412Proj", 
        img: NationalPark , 
        projectName:"National Park" , 
        description: "National Park Website: Group Project for Software Engineering Class", 
        courseName: "COSC-412(Software Engineering Class)"
    }, 
    { 
        id: 4 , 
        url: "", 
        img: WBTravel, 
        projectName:"WB-Travel", 
        description: "Group Project for web-based programming class", 
        courseName: "COSC-484(Web-based programming)"
    },
    { 
        id: 5 , 
        url: "https://www.youtube.com/watch?v=MIH1ivNfDVI&t=6s", 
        img: ExpDate, 
        projectName:"Expiry Reminder App", 
        description: "Group Project for Andriod class and this app will let you know which items will be expired soon. User can use camera to scan the product expire date or can add the data manually.", 
        courseName: "COSC-435(Mobile Application Development)"
    }, 
]; 

export const typeOfProjects = [
    { 
        id: 1 , 
        projectType: "projects", 
        url: "/projects"

    }, 
    { 
        id: 2 , 
        projectType: "mySchoolProjects", 
        url: "/SchoolProjects"

    }, 
    { 
        id: 3 , 
        projectType: "ecommerce", 
        url: "/ecommerce"

    }
]
     