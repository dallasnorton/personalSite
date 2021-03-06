export default {
  "articles": [
    {
    "title": "ES2017's async/await is the best thing to ever happen to JavaScript",
    "href": "https://certsimple.com/blog/javascript-equals-async-await",
    "takeaways": "As I have been learning new JS features added in each new year a few have been intimidating than others. Generators, async/await, and Symbols to name a few. I am really glad I took the time to read this article, wehre is simply compares async/await to previous \"versions\" of the same functionality in JS. I think it was the comparison to Promises that put me in the right mind space to finally understand what this functionality is for and a simple example that helps me realize I can use it in my own code. I don't know how much I like the syntax compared to promises since I really like promises but it is helpful to have more ways of accomplishing async tasks.",
    "author": "Mike",
    "authorLink": "https://twitter.com/certsimple",
    "date": "June 26, 2017"
    }, {
    "title": "Fluent Conf",
    "href": "https://conferences.oreilly.com/fluent/fl-ca",
    "takeaways": "I am very lucky to be sent to Fluent Conf this year. It was my first time going and it was a mixed bag. I signed up for one day of trainings which were a let down, but the conference and the keynotes were significantly better. The browser hacker's guide to instantly loading everything by Addy Osmani stood out the most to me. He covered new primitives I have never used such as preload, preconnect, prefetch and HTTP/2 server push. A lot of these features are extremly powerful and when leveraged can help you build a PWA which this site is working on becoming currently. With the features and functionilty ability also allows for it to be abused which is a great note to make sure you are using these appropriatly.",
    "author": "O'Reilly Fluent",
    "authorLink": "https://twitter.com/FluentConf",
    "date": "June 24, 2017"
    }, {
    "title": "The Stat of Angular and the Due Date of Version 5",
    "href": "https://hackernoon.com/the-state-of-angular-and-the-due-date-of-version-5-68374002267f",
    "takeaways": "As of late I haven't been keeping up with Angular, especially since at work we are still using AngularJS and are debating which framework to use in the future. This site is built with React and I think that is where my preference is going but I saw this article and and wanted to see what's going on in Angular land. Seems like updates keep churning out and they are slowing adding in features release by release. The biggest jump for version 4 is because they updating Angular to v2 of Typescript which would be a breaking change requiring Angular to update to stay semantically correct with it's own versioning.",
    "author": "Dor Moshe",
    "authorLink": "https://twitter.com/DorMoshe",
    "date": "June 24, 2017"
    }, {
    "title": "DevTools: State of the Union 2017 (Google I/O '17)",
    "href": "https://www.youtube.com/watch?v=PjjlwAvV8Jg",
    "videoLink": "https://www.youtube.com/embed/PjjlwAvV8Jg?rel=0",
    "takeaways": "Bringing you something a little differen this time. This video goes through all the new features that Chrome Dev Tools have gotten, and will soon get. I love seeing the features I can soon use and be able to leverage to make my debugging erasier. It's also encouraging to see how much progress and work Google puts into it's products, it makes me want to do all that is possible to always deliver and excellent product.",
    "author": "Paul irish",
    "authorLink": "https://twitter.com/paul_irish",
    "date": "May 26, 2017"
    }, {
    "title": "Normalizing Cross-browser Flexbox Bugs",
    "href": "https://philipwalton.com/articles/normalizing-cross-browser-flexbox-bugs/",
    "takeaways": "Not the most exciting article for myself, but something I ran across as I was actually building this site so I thought I shouhld read through the entire article. Plus its written by a Google engineer and I hear those people are kinda smart. The problem for me was when viewing this site on a smaller screen. The `RightSideBar/IntroMessage` and the articles were overallaping each other, this is because Chrome, Opera, and Safari currently ignore the flexbox specification that allows flex items to shrink to zero. Before finishing the article changing the rightsidebard to use `display:block;` fixed the issue but this would break later when those browsers fixed their implmentations. So following the strategy of Philip and using his wisdom you can also set `flex-shink: 0;' and you get the excpected behavior and it will continue to work once the bugs are fixed.",
    "author": "Philip Walton",
    "authorLink": "https://twitter.com/philwalton",
    "date": "May 13, 2017"
    }, {
    "title": "ES6 Modules in Chrome Canary (M60+)",
    "href": "https://medium.com/dev-channel/es6-modules-in-chrome-canary-m60-ba588dfb8ab7",
    "takeaways": "Very exciting stuff. If you are not aware in ES6 modules were introduced to Javascript. They are one of the last features of ES6 to get implemented across all browsers, espcially of the large features. Only new everygreen browsers will use module, o more including polyfills or needing to compile JS so you can use latest features. Overall you will see faster development process and faster browsers.",
    "author": "Sam Thorogood",
    "authorLink": "https://twitter.com/samthor",
    "date": "May 12, 2017"
  }, {
    "title": "Painting with Code",
    "href": "https://airbnb.design/painting-with-code/",
    "takeaways": "In the past few years Airbnb has boomed into a large business, as most articles are writing about places you can stay or how the business is doing, I have noticed how excellent their design and development has been. This article is another instance of Airbnb doing really cool stuff. They have built a tool which will take UI components written with code and render those to Sketch. At my current job our designers use sketch, including our UI library designer. However she must visit every pixel and system when she makes one change. This is a huge time investment, which often leads to inconsistent designs because certain components were skipped over or added in after the fact. I don't think this will change anytime soon and would require a tremendous amount of effort to implement but it would be very cool to try.",
    "author": "Jon Gold",
    "authorLink": "https://twitter.com/jongold?lang=en",
    "date": "May 10, 2017"
  }, {
    "title": "AngularJS: `template` vs `templateUrl`",
    "href": "https://medium.com/@frosty/angularjs-template-vs-templateurl-cdde055b7907",
    "takeaways": "I guess I never really thought about the issue of making requests for templates using templateURL or using a build tool. On the personal projects I have worked on they have been small enough that making additional network requests for templates hasn't been a problem and also by having a large bundle. It's great to work on such a large application to get exposure to different types of problems.",
    "author": "Aaron Frost",
    "authorLink": "https://twitter.com/js_dev",
    "date": "May 9, 2017"
  }, {
    "title": "There's more ot HTML escaping than &, <, >, and \"",
    "href": "http://wonko.com/post/html-escaping",
    "takeaways": "Read this article to tighten security around a feature I inherited that used lodash _.escape but that can even fall to XSS in the case of the all the extra special characters like `, , !, @, $, %, (, ), =, +, {, }, [, and ]. One of the key takeaways is context is key. In which context am I going to be using my users input? Ryan Grove also links a few other references that I will need to go back to when I get more time.",
    "author": "Ryan Grove",
    "authorLink": "https://twitter.com/yaypie",
    "date": "May 1, 2017"
  }]
};