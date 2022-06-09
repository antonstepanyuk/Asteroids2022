"use strict";

let page = new Page();
let pageController = new PageController();
let pageView = new PageView();

let container=document.getElementById("container");

page.initialize(pageController,pageView,container);
pageController.initialize(page,container);
pageView.initialize(page,container);
