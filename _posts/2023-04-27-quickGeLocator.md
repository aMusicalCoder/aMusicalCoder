---
category: portfolio
title: Giant Eagle Store Locator
---
This simple web application takes a Giant Eagle/GetGo store number as input and outputs the street address. 
I built it out of frustration with the official Giant Eagle store locator website which was slow and did not have an interface for inputting store numbers. You could only check specific store numbers by editing the URL manually.
This application provides a quick reference for field service engineers on the road. 
The data was procured from an official excel spreadsheet, which I scraped and formatted to my liking using Python and pandas. I then created a sqlite database with this formatted csv data, which is accessed on the website through Sql.Js. Finally, I made sure the site was responsive and performed correctly on a wide array of devices. The front-end is pure HTML/CSS and the static website is hosted on Github Pages. All code is available [here](https://github.com/aMusicalCoder) on my Github. Check out the site [here](https://www.amusicalcoder.com/geLocator.github.io/).