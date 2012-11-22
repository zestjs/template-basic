ZestJS Simple Server Template
===

Install
---

First ensure both Volo and the Zest-Server command line tools are installed with npm ([provided by the nodejs install](http://nodejs.org)):.

```
  npm install volo zest-server -g
```

You will need to run this with admin privileges.

Then create this template with volo:

```
 volo create folder_name zestjs/template-basic
```

_Note: on windows you need to separately type `npm install` from the project folder to download the node dependencies._


As an alternative to Volo, download the full project including the dependencies here. Then use `npm install` from the base folder to download the nodejs dependencies.

Run
---

Type `zest` from the created project folder to run the server.

Then navigate to `http://localhost:8080` in the browser.

Also navigate to `http://localhost:8080/sometext` to see routing in action.

Build
---

To run a build, simply run zest in the production environment, by initiating the site with:

```
  zest start production
```

from the project folder.

This will build the necessary browser files into one file including - 
* Templates are compiled
* CSS and LESS is inlined into script
* CoffeeScript is compiled if using [require-cs](https://github.com/jrburke/require-cs)