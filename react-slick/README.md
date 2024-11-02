# React Slick

## Reference image

![homepage](./public/react-slick.png)

Simple react app with carousel to understand the implementatiom of "react-slick" package

## Installing / Getting started

A quick introduction of the minimal setup you need to get the app running.

<br>To create React app through CRA, run the following command:
``` js
npx create-react-app "AppName"
```
The execution speed of the program created through create-react-app (CRA) is slow compared to that of vite. CRA is used to create those app which is bit complex and large.
<br>You can even create react app through vite. Run the following command if you want to create react app via vite;
``` js
npm create vite@latest
```
This create the app. After that you need to write the project & package name (you can even skip this part).
<br>Then choose the required framework using which you intend to build this app.
<br>Then choose the desired variant (Here you have 4 options: TypeScript, TypeScript with compiler, JavaScript & JavaScript with compiler).

Then run the following commands to navigate to the folder:
``` js
cd "folder_name"
```
Install all necessary packages using the following command;
``` js
npm install
```
**OR**
``` js
npm i
```
Then start the app using the following command;
``` js
npm run start
```
On following the link provided, you get to see the sample app.
<br>If you ever intend to change the command for runnig the code, you can do that by making some changes in the package.json file.

### Initial Configuration

1. faker.js
<br> To get random data, we use faker.js
<br> If you want it's installation process, how to import it to a file and generate random data, go <a href="https://github.com/chyroshan066/react/blob/main/context-api/README.md">here</a>

2. react-slick
<br> For carousel/slider we use react-slick. Install it using the following command;
``` js
npm install react-slick --save
```
Also install slick-carousel for CSS and font using the following command;
``` js
npm install slick-carousel
```
Then import "Slider" in the file, where you want carousel using the following code;
``` js
import Slider from "react-slick";
```
Also import slick-carousel for CSS and font
``` js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
```
Then wrap the components with "Slider" component where you want the slider and specify settings;
``` js
  var settings = {
    dots: true,  //Specify whether you want dots to display or not
    infinite: true, //Specify whether you want infinite scrolling or not
    speed: 500, //Specify the speed of scrolling
    slidesToShow: 3, //Specify how many slides you want to show each time
    slidesToScroll: 1  //Specify how many slides you want to scroll on clicking
  };

  return (
    <>
      <div className="w-3/4 m-auto">
        <div className="mt-20">
        <Slider {...settings}>
          {data.map((rev, index) => (
            <div key={index} className='bg-white h-[450px] text-black rounded-xl'>
              <div className='rounded-t-xl bg-indigo-500 flex justify-center items-center h-56'>
                <img src={rev.image} alt="" className='h-44 w-44 rounded-full'/>
              </div>
              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{rev.name}</p>
                <p>{rev.review}</p>
                <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </>
  )
 }
```
You can specify its css property using className "slick-slide" 
``` js
.slick-slide > div{
    margin: 0 10px;
}
```

#### Setting up tailwind css in react-app

First install "tailwindcss", "postcss" and "autoprefixer" using the following command;
``` js
npm install -D tailwindcss postcss autoprefixer
```
Then initialize Tailwind to create the default configuration files using the following command;
``` js
npx tailwindcss init -p
```
Configure the content section of your "tailwind.config.json" file to include all your react files as;
``` js
content: ["./src/**/*.{js,jsx}",],
```
Then tailwind base, components and utilities to your "index.css" file;
``` js
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```
Your tailwid setup for react is ready

### Building

To build the project for deployment, run the following command;
``` js
npm run build
```

### Deploying/Publishing

To deploy the project on github pages, follow these steps;
<br>1. Put the following code in your 'package.json' file;
``` js
"homepage": "https://myusername.github.io/my-app",
```
Replace 'myusername' with your github username and 'my-app' with your repository name.
<br>2. Then run the following code in terminal to install github pages
``` js
npm install --save gh-pages
```
<br>3. After installing github pages, add the following script in your 'package.json' file;
``` js
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```
<br>4. To deploy, run the following command;
``` js
npm run deploy
```

## Features

+ Used context API instead of props drilling to make code easier and readable

[comment]: # (## Contributing)

## Links
+ <a href = "https://github.com/chyroshan066/react/tree/main/react-alice-carousel">Project homepage</a>
+ Other Projects:
  - <a href = "https://github.com/chyroshan066/text-formatter">Text Formatter</a>
  - <a href = "https://github.com/chyroshan066/notes">Notes</a>
+ <a href = "https://github.com/chyroshan066">Profile</a>
  
[comment]: # (## Licensing)

