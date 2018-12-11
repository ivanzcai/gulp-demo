# Gulp Demo - Javascript build
This project is used for demonstrating what Gulp is and how it works. It perform a couple of simple tasks to give you a quick overview of what it does. First it converts newer js to ES5 for backward browser compitibility and copy the modified files in the stream to **deploy** folder. 

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
If this works, you will see files generated in the **deploy** folder


