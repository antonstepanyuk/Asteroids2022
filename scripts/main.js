"use strict";

let page = new Page();
let pageController = new PageController();
let pageView = new PageView();

let container=document.getElementById("container");

page.initialize(pageController,pageView);
pageController.initialize(page,page.getContainer());
pageView.initialize(page,page.getContainer());

let menu=new Menu(page.getContainer());
menu.showMenu();
