Readme.txt

The Task Manager

This app is intended to acomplish the assignment proposed Crossover for a job position.

The app runs on node.js v6.8.1 since the v6 is considered LTS since october 2016 as seen on https://github.com/nodejs/LTS#lts-schedule.

To run the app, follow these instructions:

1. Enter the directory containing the app;
2. Install dependencies with npm install;
3. NPM will run postinstall telling bower to install the client dependencies (if for some reason NPM doesn't call bower, run 'bower install');
4. Start the server by using the command 'gulp'. This custom task will build css, run unit tests and start the node server;


If you need to run tests you have two options:
gulp testClient
gulp testServer

Solution development

I choosed to use AngularJS since I am more familiar with the technology. Sometimes, I just like to develop my own javascript modules and put them inside variables or require them on the files that use them. If I`m on Visual Studio, this kind of practice enables intelisense to the whole IDE, speeding up the development process.


Here are the list of the requirements and how they were acomplished?


The design (using sass with compass framework compiling them with gulp-compass. If the design were my own decision, my personal choice would be to use bootstrap)
	is for a single list (single list assembled with divs only. I could use ul or table but i decided to go with divs since semantics were not a requirement)
	with elements that can expand and contract (simple angular condition with simple animation)
	with only one element open at a time (a controller selected variable controls witch element is enabled)

2 types of items in the list, Firewall and Build (I created a javascript 'enumeration' to avoid trusting on "magic strings")
	Firewall items can be accepted or rejected (same as above, enumeration to limit the possibilities of statuses)
	Builds can succeed or fail (same as above)
Grey boxes (styled with simple css)
	while not shown in the expanded state (simple ng-class condition bound to a property of the task)
	represent either an item that will not run (as the entry has already failed) (I created fake data to simulate the conditions with a loader toader to simulate moments in time)
		or an item that has yet to run (as the item is currently working) (this is controlled by statuses)
When an element is in the expanded state (expanded by angular condition)
	each of the 4 content boxes should act as a button (directives take control here. The click directive  adds this behaviour to the boxes)
	allowing the user to get more information about that item (When clicked, the directive shows the extra information, here I would make another api call to get the details of the box clicked)
		These details will be shown in a pop-over content view on the page (directive, simple div)

I have created the file app.config.js so the client application can be configured and on top of that, a angular controller could be written to perform real time configurations.

I have included the video on the package and uploaded to Youtube (non listed): https://www.youtube.com/watch?v=LDdta70sRss

My main expertise is ASP.NET MVC, but I just love javascript and I am one of the best javascript programmers at my current job.
I could improve the backend a lot with more time with a queue system to process the tasks.