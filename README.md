# Tweeter Project

Tweeter 🐦 is a simple, single-page Twitter clone. The front-end was built during my 4th week at [Lighthouse Labs]('https://www.lighthouselabs.ca/')

This project was created to practice my HTML, CSS, JS, jQuery and AJAX front-end skills.

## Table of Contents

1. [Dependencies](#dependencies)
2. [Final Product](#final)
3. [Installation](#installation)
4. [SASS Script](#script)
5. [How to use](#howtouse)

## Dependencies used <a name='dependencies'></a>

- [Node.js]('https://www.nodejs.org/en/')
- [Express]('https://www.expressjs.com/')
- [Bodyparser]('http://www.expressjs.com/en/resources/middleware/body-parser.html)
- [Chance]('https://www.chancejs.com/')
- [MD5]('https://www.npmjs.com/package/md5')

## Dev Dependencies used

- [Nodemon]('https://www.npmjs.com/package/nodemon')

## Final Product <a name='final'></a>

### Desktop View

!["Screenshot of desktop view"](https://github.com/S-Brand5136/tweeter/blob/master/docs/desktop-view.png)

### Mobile View

!["Screenshot of mobile view"](https://github.com/S-Brand5136/tweeter/blob/master/docs/mobile-view.png)

## Installation <a name='installation'></a>

1. Fork this repository, then clone your fork of this repository.

```bash
  $ git clone git@github.com:S-Brand5136/tweeter.git
```

2. Install dependencies using the `npm install` command.

```bash
  $ npm install
```

3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.

```bash
  $ npm run local
```

4. Go to <http://localhost:8080/> in your browser.

## SASS Script <a name='script'></a>

To make changes to any of the SASS code and retranspile it. First make sure you have SASS installed. Here is a link to the [sass website]('https://www.sass-lang.com/install') that explains how to do it at length. Or just run the command below after its installed.

```bash
  npm i -g sass
```

Once its installed go to the root directory and run

```bash
  npm sass-watch
```

This will transpile all of the sass changes that are made on the spot

## How to use <a name='howtousec'></a>

Once the project has been installed, and is up and running on your machine. Click the top right button to show the tweet form. Add text to your tweet and click the button on the bottom left below the textarea, and then watch your new tweet appear 🐦
