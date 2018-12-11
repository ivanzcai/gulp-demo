# gulp-demo
This project is used for demonstrating what Gulp is and how it works. It perform 3 simple tasks: Convert a LESS file to a  CSS  file, combine and minify all the javascript files and put them in a deploy directory.

* Create package.json
```console
npm init
```

* install gulp package in your devDependencies
```console
npm install --save-dev gulp
```

* Verify your gulp installation
```console
gulp --version
```


* Install gulp cli, babel and uglify
```console
npm install gulp-cli -g
npm install --save-dev gulp-babel @babel/core @babel/preset-env
```
**babel** is used for converting javascript to ES5 so even the older browsers can render the site.

* To install Uglify package, you will need to add  
```javascript
"fsevents": "*"
```
to your devDependencies in your **package.json**

Then run: 
```console
npm i -f
npm install --save-dev gulp-uglify
```
*Run 
```console
gulp 
```
If it works, you will see files generated in the **deploy** folder


