# Keepsake Show Website

This is a website built with [AngularJS](http://angularjs.org/) to present the exhibits featured in the Keepsake Degree Show for FdA Graphic Design & FdA Illustration students in Camberwell College of Arts, year 2015.

## Getting Started
You need git to clone the keepsake-show repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test keepsake-show. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone the repository

Clone the keepsake-show repository using _git_:

```
git clone https://github.com/jkuntorov/keepsake-show.git
cd keepsake-show
```

If you just want to start a new project without the keepsake-show commit history then you can do:

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
keepsake-show changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.

## Updating Angular

Previously we recommended that you merge in changes to keepsake-show into your own fork of the project.
Now that the angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.

## Serving the Application Files

While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend serving the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr, etc to function properly when an html page is opened via `file://` scheme instead of `http://`.

### Running the App during Development

The keepsake-show project comes preconfigured with a local development webserver.  It is a node.js tool called _http-server_.  You can start this webserver with `npm start` but you may choose to install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.

### Running the App in Production
All you need in production are all the files under the `app/` directory. Everything else should be omitted. Angular apps are really just a bunch of static html, css and js files that just need to be hosted somewhere they can be accessed by browsers.
