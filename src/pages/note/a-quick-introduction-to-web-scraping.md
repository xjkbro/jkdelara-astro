---
title: A Quick Introduction to Web Scraping
description: Day 5 of 100 Days of Code I learned web scraping using nodejs, Express, Axios and Cheerio
date: 2023-04-05T07:14:12.000Z
image: /note/a-quick-introduction-to-web-scraping/cover.webp
draft: false
layout: ../../layouts/NotesLayout.astro
categories:
    - code
type: note
---

For day 5 of 100 Days of code I created a web scraper.

Sooooo, I wrote out a pretty long post about this and the information didn't get saved... I will just whip up a tl;dr because that took a lot of energy to write up.

## TL;DR

Why have I been coding so long and not heard of web scraping?! This was such a useful tool as it could have save me months of work at my current job. My purpose to learn about web scrapers is to pull information and update/replace my current companies database of products. So I needed to find something that could pull that information from my employers main branch. This was a great experience since I haven't created a Nodejs express project in so long.

This project was made with Nodejs, Express, Axios, and the webscraping package Cheerio.

Here is how to build the web scraper. First you are going to initialize your Nodejs project and install the required packages:

```bash
npm init
```

```bash
npm install express axios cors cheerio
```

Start your project by creating a file named index.js and build out the basic Express boilerplate.

```js
const PORT = 8080;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());

...

app.listen(PORT, () =>
    console.log("Server running on port http://localhost:8080")
);
```

Now we can start constructing the web scraping task with Cheerio.

```js
app.get("/:id", async (req, res) => {
    const url = "https://www.example.com/product/" + req.params.id;

    const data = [];
    await axios(url).then((res) => {
        const html = res.data;
        const $ = cheerio.load(html);
        $("#IDofTable").each(function () {
            const heading = $(this).find("th").text();
            const rows = [];
            $(this)
                .find("tbody tr")
                .each(function () {
                    // const key = $(this).first().text();
                    const key = $(this).children().first().text();
                    const val = $(this).children().last().text();
                    rows.push({ key, val });
                });

            ...
        });
    });
    res.send(data);
});
```

This next part is to format the data that Cheerio received and parsing that information into JSON.

```js
let str = `{"${heading}": [`;
const rowlen = rows.length;
rows.map((item, i) => {
	str = str + `{"${item.key}": "${item.val}"}`;
	console.log(i, rowlen);
	if (i != rowlen - 1) str = str + ",";
});
str = str + "]}";
data.push(JSON.parse(str));
```

The code above will basically construct the JSON into this format.

```json
[
	{
		"heading1": [{ "row1": "data" }, { "row2": "data" }]
	},
	{
		"heading2": [{ "row1": "data" }, { "row2": "data" }]
	}
]
```

This is the final code:

```js
const PORT = 8080;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());

app.get("/:id", async (req, res) => {
	const url = "https://www.example.com/product/" + req.params.id;

	const data = [];
	await axios(url).then((res) => {
		const html = res.data;
		const $ = cheerio.load(html);
		$(".other_info table").each(function () {
			const heading = $(this).find("th").text();
			const rows = [];
			$(this)
				.find("tbody tr")
				.each(function () {
					// const key = $(this).first().text();
					const key = $(this).children().first().text();
					const val = $(this).children().last().text();
					rows.push({ key, val });
				});

			let str = `{"${heading}": [`;
			const rowlen = rows.length;
			rows.map((item, i) => {
				str = str + `{"${item.key}": "${item.val}"}`;
				console.log(i, rowlen);
				if (i != rowlen - 1) str = str + ",";
			});
			str = str + "]}";
			data.push(JSON.parse(str));
		});
	});
	res.send(data);
});

app.listen(PORT, () =>
	console.log("Server running on port http://localhost:8080")
);
```
