import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5 grid gap-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 items-center'>
            <h2 className='text-center font-bold' style={{ color: '#3e2723', fontFamily: 'cursive', fontSize: '22px' }}>Question Answer Part</h2>

            <div >
                <h2 className='text-2xl text-center' style={{ color: '#3e2723', fontFamily: 'cursive', fontSize: '22px', }}> Q1. What are the different ways to manage a state in a React application?</h2>
                <p className='mt-5' style={{ color: '#043D1D' }}><strong>Ans: </strong>
                    Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components. The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:
                    1. Hooks
                    2. React Context API
                    3. Apollo Link State
                    We will, however, focus on the use of the setState() method.
                    <br />
                    Using setState() : The built-in setState() method updates a variable’s value in the classes’ local store. This local store allows the updated variable values to be accessed by any function that may require these values. setState() tells React that this component and its children (sometimes delayed and grouped into a single batch) should be re-rendered with the most updated state; this re-render is often based on user-triggered events.


                </p>
            </div>

            <br />
            <div >
                <h2 className='text-2xl text-center' style={{ color: '#3e2723', fontFamily: 'cursive', fontSize: '22px', }}> Q2. How does prototypical inheritance work?</h2>
                <p className='mt-5' style={{ color: '#043D1D' }}><strong>Ans: </strong>

                    Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using. n JavaScript, two objects end up linked to each other (via the technique Ryan showed), and this linkage is through the internal [[Prototype]] chain. As Tim Lind correctly explained in his answer, this linkage via [[Prototype]] is how when you ask for a property or method on an object, if it's not there, the internal [[Get]] lookup operation will traverse the [[Prototype]] chain and try to instead resolve the property/method on the linked object. If not found there, it will keep going up the [[Prototype]] chain until it either satisfies the lookup, or runs out of objects to traverse.When you analyze the mechanism in this way, it's clear that, by default, JavaScript isn't "inheriting" by copying DOWN the chain, but rather delegating UP the chain. It's a completely different mechanism.

                </p>
            </div>
            <br />
            <div >
                <h2 className='text-2xl text-center' style={{ color: '#3e2723', fontFamily: 'cursive', fontSize: '22px', }}> Q3.What is a unit test? Why should we write unit tests?</h2>
                <p className='mt-5' style={{ color: '#043D1D' }}><strong>Ans: </strong>

                    Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.

                    In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.
                    Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.
                    <br />1. Unit tests help to fix bugs early in the development cycle and save costs. <br /> 2. It helps the developers to understand the testing code base and enables them to make changes quickly <br /> 3. Good unit tests serve as project documentation <br /> 4. Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code until the tests run again. <br />




                </p>
            </div>
            <br />
            <div >
                <h2 className='text-2xl text-center' style={{ color: '#3e2723', fontFamily: 'cursive', fontSize: '22px', }}> Q4. React vs. Angular vs. Vue?</h2>
                <p className='mt-5' style={{ color: '#043D1D' }}><strong>Ans: </strong>

                    <br />
                    <strong>React  </strong> :

                    ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application. It was initially developed and maintained by Facebook and later used in its products like WhatsApp & Instagram.

                    Our ReactJS tutorial includes all the topics which help to learn ReactJS. These are ReactJS Introduction, ReactJS Features, ReactJS Installation, Pros and Cons of ReactJS, ReactJS JSX, ReactJS Components, ReactJS State, ReactJS Props, ReactJS Forms, ReactJS Events, ReactJS Animation and many more. The main objective of ReactJS is to develop User Interfaces (UI) that improves the speed of the apps. It uses virtual DOM (JavaScript object), which improves the performance of the app. The JavaScript virtual DOM is faster than the regular DOM. We can use ReactJS on the client and server-side as well as with other frameworks. It uses component and data patterns that improve readability and helps to maintain larger apps.


                    <br />
                    <strong>Angular  </strong> :

                    Angular JS is an open source JavaScript framework by Google to build web applications. It can be freely used, changed and shared by anyone.

                    Our AngularJS tutorial includes all topics of AngularJS such as mvc, expressions, directives, controllers, modules, scopes, filters, dom, forms, ajax, validation, services, animation, dependency injection, views, w3.css etc. There are also given AngularJS interview questions to help you better understand the AngularJS.
                    AngularJS is a very powerful JavaScript Framework. It is used in Single Page Application (SPA) projects. It extends HTML DOM with additional attributes and makes it more responsive to user actions. AngularJS is open source, completely free, and used by thousands of developers around the world. It is licensed under the Apache license version 2.0.AngularJS is a efficient framework that can create Rich Internet Applications (RIA).AngularJS provides developers an options to write client side applications using JavaScript in a clean Model View Controller (MVC) way.Applications written in AngularJS are cross-browser compliant. AngularJS automatically handles JavaScript code suitable for each browser.ngularJS is open source, completely free, and used by thousands of developers around the world. It is licensed under the Apache license version 2.0.

                    <br />
                    <strong>Vue  </strong> :
                    VueJS is a progressive JavaScript framework used to develop interactive web interfaces. Focus is more on the view part, which is the front end. It is very easy to integrate with other projects and libraries. The installation of VueJS is fairly simple, and beginners can easily understand and start building their own user interfaces.Vue.js is an open-source progressive JavaScript framework used to develop interactive web user interfaces and single-page applications (SPAs).Vue.js was created by Evan You, who was then working for Google using AngularJS in their projects. He extracted some parts of AngularJS and built something lightweight JavaScript framework later released as Vue.js.

                    The first version of Vue.js was released in February 2014. It is now maintained by him and the rest of the active core team members coming from various companies such as Netlify and Netguru.

                    Vue.js is going popular day by day because it is very easy to integrate with other projects and libraries. It is very simple to install and use. Even beginners can understand it easily and start building their own user interfaces.

                </p>
            </div>



        </div>

    );
};

export default Blog;