"use client"
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import home from "../public/home.png";
import search from "../public/search.png";
import homemobile from "../public/homeMobileview.png";
import login from "../public/login.png";
import register from "../public/register.png";
import bookDetail from "../public/bookDetail.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Thet Htet Soe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbyed</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Thet Htet Soe
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
             Lifelong Learner
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              React Js (Next Js), Redux, Node Js and Mongo DB Learner
            </p>
            {/* <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div> */}
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">What I have learned</h3>
            <div className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                   Since the beginning of my learning journey,
                   At first, I do self-study about ReactJs and Mysql Database, PHP Laravel that use object-oriented-programming design pattern.
                   After that, I focus more on javascript full stack application development.
                   So, I have joined  
                    <span className="text-teal-500"> Turing react 6th batch </span> 
                   with recommendation of my friend.
                 I was very excited  about learning

                  {/* I have been learning Frontend  <span className="text-teal-500"> React Js (NEXT Js) </span>, Redux
                , backend <span className="text-teal-500">Express JS </span> , 
                  <span className="text-teal-500"> Mongo Database (NoSql)</span> 
                  and UI   <span className="text-teal-500">  Tailwand Css </span> */}
                 <h1 className="mt-3 text-xl">Functional programming</h1>
                <p>
                &emsp;  Javascript functions are first class <br /> 
                  &emsp;  pure function <br />
                  &emsp;  higher order function <br />
                  &emsp;  Function Composition   <br />
                  &emsp;  Once function <br />
                  &emsp;  Idendity fuction <br />
                  &emsp;  container etc.
                     
                  
                </p>
                       {/* because function can be assigned to variable
                    , function can be passed as parameter, and function can return a function; */}
                 


                 <h1 className="mt-3 text-xl">Error handling</h1>
                   <p>
                   &emsp; throw error and try and catch  <br />
                    &emsp; try catch doesn't work in Asynchronous <br />
                    &emsp;  use callback approach  <br />
                    &emsp; functional error handling is used in Asynchronous <br />
                    &emsp; railway oriented programming  <br />
                    &emsp;  etc..   <br />
                   </p>
                   
                   
                 <h1 className="mt-3 text-xl">Asynchronous programming </h1>
                   <p>
                      
                   &emsp; In the case of something that take time to execute (blocking) or that will not return result immediately 
                     &emsp; such as network call or IO reading, this is where Asynchronous programming come in   <br />
                    &emsp; Promise    <br />
                    &emsp; call with .then or <br />
                    &emsp; async await  <br />
                   </p>
                     
                 <h1 className="mt-3 text-xl">Typescript </h1>
                  <p>
                  &emsp; Type checking in large scale application
                  </p>
                 <h1 className="mt-3 text-xl">Restful Api </h1>

                 <h1 className="mt-3 text-xl">Node Js </h1>
                 <p>
                 &emsp; Module and Build in Node Module such as filesystem module <br/>
                  &emsp; Node Package Manager
                 </p>
                 
                  <h1 className="mt-3 text-xl"> Https </h1>
                 <p>
                     
                 &emsp; Http method: such as GET, POST, PUT, DELETE <br></br>
                   &emsp; Http resopnd code  
                 </p>
                 <h1 className="mt-3 text-xl">Mongo DB </h1>
                   <p>
                   &emsp; Document database <br />
                     &emsp; NoSQL (not only SQL) <br />
                     &emsp; Flexible schemas <br />
                     &emsp; scable <br />
                     &emsp; Horizontal scaling <br />
                     &emsp; ACID properties ,Atomicity, Consistency, Isolation, and Durability <br /> 
                   </p>
                 <h1 className="mt-3 text-xl">How to write quality code </h1>
                  <p>
                  &emsp; code need to be <br/>
                     &emsp; readable <br/> 
                     &emsp; resueable  <br/> 
                     &emsp; testable <br/> 
                     &emsp; extensible<br/> 
                     &emsp; debugable<br/> 
                     &emsp; error handling <br/> 
                     &emsp; clean code (refactoring)
                  </p>
    
  
    
                 <h1 className="mt-3 text-xl"> Git version control system and Github </h1>

                 <h1 className="mt-3 text-xl"> My Goal </h1>
                 <p>
                 &emsp; I am passionate about learning programming and want to immerse myself in IT professioning career. I am hopping that you will give me a chance to follow my passion. 
                 </p>
            </div>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            BELOW are the projects I have build
            </p>
          </div>
          <div className="lg:flex gap-3">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              {/* <Image src={design} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Ecommerce project <br></br>
                (Laravel)
              </h3>
             
            
              <p className="text-teal-600 py-1">Ui -bootstrapt</p>
              <p className="text-teal-600 py-1">Frontend- react js</p>
              <p className="text-teal-600 py-1">Backend - laravel</p>
              <p className="text-teal-600 py-1">Database- Mysql</p>
              <p className="text-teal-600 py-1"> Api call- Axios </p>
             <p className="text-teal-600 py-1">Api security- Laravel Santum</p>
            
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              {/* <Image src={code} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Bookstore Project <br></br>
                (full stack)
              </h3>
              <p className="py-2">
                Github link 
               <br /> <a href="https://github.com/ThetHtetS/bookStore-Next-Js-" className="underline">client side(Next js)</a>
               <br />  <a href="https://github.com/ThetHtetS/bookStore-ExpressJs-" className="underline">Api (express Js)</a>
              </p>
             
              
              <p className="text-teal-600 py-1">Tailwand Css (responsive design)</p>
              <p className="text-teal-600 py-1">React Js (NEXT JS)</p>
              <p className="text-teal-600 py-1">Redux</p>
              <p className="text-teal-600 py-1">Express Js</p>
              <p className="text-teal-600 py-1">Mongo DB (NoSql)</p>
              <p className="text-teal-600 py-1">network fetch Axios</p>
              <p className="text-teal-600 py-1">API security - jsonwebtoken</p>
              <p className="text-teal-600 py-1">password hash- bcript library</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              {/* <Image src={consulting} width={100} height={100} /> */}
              <h3 className="text-lg font-medium pt-8 pb-2 ">React + firebase project</h3>
              <div className="py-2">
              This is my Generator Spare part App
              <p className=" py-1">Hosted on firebase <br/><a href="https://pti-app-4cae3.web.app/" className="underline">
              https://pti-app-4cae3.web.app/</a> <br />
              login as email thethtetsoe114@gmail.com and password 12345678
              </p>
              </div>
              
              <p className="text-teal-600 py-1">Ui - Tailwand Css</p>
              <p className="text-teal-600 py-1">React Js , useContex ,useReducer for light/dark switcher</p>
              <p className="text-teal-600 py-1">create custom hook to fetch data from firebase</p>
              
              <p className="text-teal-600 py-1">  note: not working with full text search </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Bookstore project featured and design</h3>
            <div className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              This Bookstore project have two main sector, User Side and Admin Side verified by roll-based authuntication
             
              <h1 className="text-teal-500 text-2xl my-3"> featured avalible at normal user side </h1>
                 <p>-Register New User </p>
                 <p>-Login user </p>
                 <p>-View Book List </p>
                 <p>-view Category </p>
                 <p>-view book by Category </p>
                 <p>-add book to shopping cart </p>
                 <p>-increase or decrease product qty </p>
                 <p>-Remove produce from Cart </p>
                 <p>-checkout or make order to admin </p>
                 <p>-view order history and order status </p>
                 <p>-Book detail and add review </p>
                 <p>-search book feature </p>

              <h1 className="text-teal-500 text-2xl my-3"> featured avalible at Admin Side </h1>
                <p>-Category CRUD</p>
                <p>-Book CRUD   </p>
                <p>-User List   </p>
                <p>-view Order   </p>
                <p>-view Order By Status   </p>
                <p>-view view Order with Date Range   </p>
                <p>-Order Detail    </p>
                <p>-Change Order Status   </p>
                <p>-Admin Panel   </p>
               
            </div>
            
            {/* <h1 className="text-2xl py-2 leading-8 text-teal-600 dark:text-gray-200">
              let see with image
            </h1> */}
          </div>
          {/* <div className=" gap-10 py-10">
            <div className=" ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={home}
              />
            </div>
            <div className=" ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={homemobile}
              />
            </div>
            <div className=" ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={search}
              />
            </div>
            <div className=" ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={login}
              />
            </div>
            <div className=" ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={register}
              />
            </div>
            <div className="">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={bookDetail}
              />
            </div>
          </div> */}
        </section>
      </main>
    </div>
  );
}
