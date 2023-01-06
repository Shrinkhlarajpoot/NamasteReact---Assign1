# What is Emmet?

Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code.



## Few Examples of emmet

   #### 1. ``` html:5 ```  gives :

```bash
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

#### 2 Few simple emmet : 
```bash
p = <p></p>
div.container = <div class="container"></div>
.container = <div class="container"></div> <!--div is implied-->
span#title = <span id="title"></span>
div>h1 = <div><h1></h1></div>
a+a = <a href=""></a><ahref=""></a>
div>h1^span = <div><h1></h1><span></span></div>
h3*2 = <h3></h3><h3></h3>
```


# Difference between a Library and Framework?
A library is a piece of code that we can incorporate in our exixsting project via a CDN or as a package. A liberary does not affect our project structure. whereas a framework is a structured set of librraries and packages implementing a perticular methodology that we have to follow to create a project.
 
### source - 
https://kruschecompany.com/framework-vs-library/#:~:text=The%20framework%20provides%20the%20flow,the%20code%20from%20the%20libr


# What is CDN? Why do we use it?
CDN is known as Content delivery network that provides us different type of assets / features / libraries created by others over the internet. Using a CND reduces our effort to implement a functionality that is already existing somewhere else that we can simply use via CND.


# Why is React known as React?
React was developed for applications (Facebook) that have constantly changing data. Since React is a front-end framework or the “View” in MVC, this means that as the user clicks around and changes the app’s data, the view should “react” or change with those user events. User events being mouse clicks, typing, submitting a form.


# What is crossorigin in script tag?
The crossorigin attribute sets the mode of the request to an HTTP CORS Request.

Web pages often make requests to load resources on other servers. Here is where CORS comes in.

A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.


# What is diference between React and ReactDOM
React is a JavaScript library for building User Interfaces and ReactDOM is the JavaScript library that allows React to interact with the DOM.

React: responsible for creating React elements (kinda like document.createElement())

ReactDOM: responsible for rendering React elements to the DOM (kinda like rootElement.append())


#  What is difference between react.development.js and react.production.js files via CDN?
react.development.js provides us extra features like debugging, hmr(Hot module reloading) and lots of other stuffs that you might use while developing app with the help of bundlers like webpack, parcel, vite. This bundler bundles and minifies our code to be deployed on production

These minified files will be deployed on production which removes lots of unnecessary files which will not be used by our app for this we have react.production.js to make our much faster(as bundlers and lots of other files have done there work and are not required now)


#  What is async and defer





| Difference    | async    | defer  
| ------------- | ------------- | --------    |
| `Loading sequence`        |Does not guarantee the execution sequense of the script        | Guarantees the execution sequence of scripts in wich they are ordered.  |
| `Execution sequence`         | Loads the scripts while HTML is being rendered. When scripts are loaded, then HTML rendering stops and execution of script starts. When execution is completed, HTML rendering resumes.   | Loads the scripts while HTML is being rendered. Executes the scripts only after the HTML is completely rendered
