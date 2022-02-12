# T3A2 Readme

## Description

### Purpose

Miguelitto’s Pizzeria is a local food store that offers a varied menu of classic and popular pizza types and flavours, as well as its “Build your own pizza” service, where customers can create custom pizza flavour using any of the available bases, sauces and toppings.

As a food store, Miguelitto’s Pizzeria offers only take outs for orders, all of which need to be done in person, one by one through a queue. This is detrimental to the customer experience, as often times, especially on busy days, customers will need to wait both in queue to make their orders and while the order is getting done.

To go around this issue, the business has requested a webapp from which its customers can make complete orders online and have a time estimate of when it will be ready. This will make it so that customers don’t need to wait in line and may even make orders from the comfort of their homes, knowing exactly when they may go to the store to claim their order, providing a much better customer experience.

### Functionality/Features

Functionalities of the app include:

Like most ocassions where I order pizza, in this case our eyes were bigger than our stomachs. While the majority of planned features were implemented, some were dropped due to time constraints. In other cases, our Agile development plan suggested alternative builds that would achieve the desired goals better. Furthermore, due to issues with SSL and MIME type errors during deployment, this website may not work after May 13, and some final commits may be stuck on a different fork.

- The landing page, where customers can find links to social media and location information about Miguelitto's Pizzeria. Note that without an extant Miguelitto's pizza, the links in question are dead.

- An additional feature that was added during development was the ability for users to login and signup, which was extended from the planned admin login feature and implemented using knock.

- Allowing users to make orders, where they may:

  - Choose one or more standard pizzas from a standard menu and edit it by adding or removing ingredients. In the final build, the ability to edit a standard pizza was judged superfluous, as it quickly became obvious, based on user stories and experience during development, that editing an already extant pizza was unneccessary; as it was no quicker than simply creating a new custom pizza as desired.

  - Design their own pizzas from scratch, choosing from a variety of different bases, sauce types, and toppings. In the final build, the number of toppings is limited to 19, but this feature is fully implemented.

  - Choose to add sides and drinks to the order. Sides and drinks exist in the database, as does the ability to handle them in the orders section, but due to time constraints they were not actually added to the front end of the site.

  - View the final price in real time while items are added. This is fully implemented in both the classic pizza menu, and in the custom pizza menu, although the prices in question are arbitrary.

  - View a time estimate for the order to be ready. As above, without an actual pizzeria, the time estimate is Arbitrary.

  - A dashboard displaying pending orders, which will be available only to the Admin user, and accessible by inputting the Admins login credentials in the "/admin" page. From the dashboard, the admin will be able to confirm pending orders as finished. The admin dashboard will also link to a page containing a list of available stocks of ingredients, with the admin allowed to mark various items as being out of stock or unavailable, which will show up on the website. Due to time constraints, only the core parts of the admin dashboard were implelemented, namely the admin login, which was created using knock, and the pending orders page, where Miguelitto can tick off orders as completed (or at least he could). All other planned pages were dropped from development due to time constraints.

### Target Audience

The target audience for this app is the current customer base for Miguelitto’s pizzeria who are frustrated with the current system of taking orders that results in delays with both taking orders and preparing pizzas. In addition, this app will also positively affect Miguelitto’s, as they will be able focus on serving customer orders faster and more efficiently, thus increasing the number of orders they can fill and the amount of money the business can make.

### Tech Stack

- Ruby on Rails - Backend

- React.js - Frontend

- PostgreSQL – Database

- Amazon S3 – While it was expected that there would be assets to store, this proved not to be the case, so this requirement was dropped.

- Heroku & Netlify - Deployment – While Heroku was used to host the Backend ruby on rails server, time constraints meant it became neccessary to deploy the front end with netlify.

- Bootstrap - HTML & CSS library for structure and styling

- Git – Local Source Control

- GitHub – Remote Source Control Repository

### Links

- Github
  - Backend: <https://github.com/MartinO55/T3A2-Miguelittos-Pizza-Backend>
  - Frontend: <https://github.com/MartinO55/T3A2-Miguelittos-Pizza-Frontend>

- Trello: <https://trello.com/b/gRpv5ZKk/t3a2publictrello>

- Backend: <http://pizzaria-miguel.herokuapp.com>

- Frontend: <https://miguelittos-pizzeria.netlify.app/>

- Figma: <https://www.figma.com/file/b5hXigpkQ2WVM6cTunjljw/T3A2-Figma?node-id=15%3A220>

## Dataflow Diagram

![Dataflow Diagram image](docs/DataFlowDiagram/pizzeria_dfd.png "Project Dataflow Diagram")

## Application Architecture Diagram

![Application Architecture image](docs/AppArchitectureDiagram/pizzeria_aad.png "Project Application Architecture Diagram")

## ERD

The ERD was altered on the revelation that all the ingredients tables could be collapsed into a single table if a second table with categories was added to act as a foreign key

![Entity Relationship Diagram image](docs/ERD/MiguelittosPizzaERD3.png "Project Entity Relationship Diagram version 2")

## User Stories

### Alice

Alice is a militant vegan coeliac who wants absolute control over what is put on her pizzas. She needs an app that lets her choose specifically gluten free products, while making sure that any ingredients she chooses are free of animal products. Alice wants specific background information on the ingredients used so she can make an informed choice.

### Bob

Bob is a wannabe gourmet who wants to be able to fulfill his sick twisted desires to mix prawns with pineapple and BBQ sauce. Bob wants an app that gives him full control of the toppings on his pizza, so that he can explore all of his culinary desires.

Not all adventurous combinations will work together that well, and as such, Bob also wants to be able to select the sizes of any pizzas he creates, so that in case he creates a combination that turns out to be inedible he won’t end up wasting an entire full priced large pizza.

### Jessica

Jessica is a hard-pressed working mother of seven who has no spare time to wait around. She wants an application that quickly lets her order a sufficient number of pizzas to feed her brood while making sure that any specific requests her children have can be fulfilled easily. Jessica wants full control over the toppings on her pizzas to fill her children’s demands so that she can have a relatively easy dinner for once. Jessica also wants to see exactly how long it will take until the pizzas are ready so that she can better organize her evening and doesn't waste time waiting in line to order or pick up a pizza.

### Dave

Dave just wants a pizza for dinner. Dave wants an app that lets him quickly and simply enter in the requisite choices so that he can have his favorite pizza as soon as possible with the minimum of fuss. Dave wants an app that is simple to use and offers him the choices he wants so that he doesn’t have to think or invest a lot mental energy in deciding what he wants for dinner. Dave also wants an application that doesn't waste his time with options he doesn't care about so that he can just get dinner and go.

### Miguelitto

Miguelitto is an overwhelmed and aging first generation immigrant Italian business owner juggling both running the customer service side of his pizzeria and the kitchen side. Miguelitto needs an application that reduces the pressure on the customer service side of his business so that he can focus on creating pizzas and speeding up the cooking process. In addition, he also wants to offer customers more freedom to experiment with their own favorite toppings to create a better customer experience. Therefore the application needs to both give his customers the ability to order food directly, saving both his and his customers time. Miguelitto also needs an application that does not take a great amount of time and effort to learn so that the new system does not over-complicate his life, taking up more time to operate than it saves, so that he can concentrate on what he does best; making pizzas.

## Wireframes

### Landing page

Based on the user stories, the desire for speed and simplicity was brought forward as a key design feature. Therefore, we decided on making the website as straight forward as possible, with a landing page consisting of a logo and the only two destinations that matter; the menu and the location of the pizzeria, as seen in the version one landing page.

![v1 landing page image](docs/Wireframes/V1/LandingPagePizzaDesktop.png "Landing page version 1")

In the second revision, it was decided that these objectives would be better met by incorporating the about us page as a scrollable element at the bottom of the landing page, making it both easier to find if needed, and easier to ignore if not. It is also worth noting the integration of colour into the page in the version 2 image - the design was finalised prior to the colour palette being chosen. Finally, it was also decided that the V2 page should allow users to jump directly into designing their own pizza if desired - a further implementation of the key lessons drawn from several user stories.

![v2 landing page image](docs/Wireframes/V2/DesktopLandingPageV2.png "Landing page Version 2, with merged about us page and updated colour scheme")

The initial version of the mobile site landing page was altered with an eye towards optimizing it for the smaller screen. With this in mind, the blurb about the pizza was removed and the site reorientated into the vertical aspect, with larger buttons for menu and about us pages to make navigation simpler.

![v1 mobile landing page](docs/Wireframes/V1/MobileLandingPage.png "mobile landing page V1")

Likewise, the tablet landing page is simpler, with larger buttons, but retains the aspect ratio of the desktop page.

![v1 tablet landing page](docs/Wireframes/V1/TabletLandingPage.png "tablet landing page v1")

The second versions of both the mobile and tablet landing page are updated to reflect the changes made to the overall layout of the desktop design, with additional colour changes, and updated logo, the merger of the landing and about us pages, and the redesign of the primary buttons on the page.

![v2 Mobile landing page](docs/Wireframes/V2/MobileLandingPageV2.png "Mobile landing page version 2, with merged about us page and updated colour scheme")

![v2 Tablet Landing page](docs/Wireframes/V2/TabletLandingPageV2.png "Tablet landing page Version 2, with merged about us page and updated colour scheme")

### About Us Page

The about us page includes a blurb about Miguelittos restaurant, links to social medias and contact information, and either a static map or an embedded link to google maps. (The difficulty for this assignment is that the business in question is fictional; or not actually associated with us.)

![v1 About us page](docs/Wireframes/V1/AboutUsPizzaDesktop.png "About us page version 1, with map, social media links, and contact details")

In later revisions this page would be removed entirely and integrated into the landing page, with any changes covered in that section.

### Menu page

The menu page is, at its simplest, a list of pre-designed pizzas available for users to purchase, with links to the page where a user can create their own pizza. The user stories emphasized that this page should be simple to navigate and ensure that the users at all times know exactly what they are purchasing. The pizzas available are displayed in a grid (likely using flexbox, with three being shown, but the exact number dependant on screen size).

![V1 Menu Page](docs/Wireframes/V1/MenuPagePizzaDesktop.png "Pizza Menu Page version 1")

In the second version of the desktop menu page the colours have been added and the logo has been altered, with additional details about each pizza. The expectation is that in this page users will click each box to make their choice about standard flavours which will then be added to their shopping cart.

![V2 Menu page](docs/Wireframes/V2/StandardPizzasMenuV2.png "standard Pizzas menu page, which includes a link to DIY pizza page")

In the first tablet menu page design, a resized version of the desktop page is used, with differently sized objects.

![V1 Tablet Menu Page](docs/Wireframes/V1/TabletMenuPage.png "menu page of standard pizzas, resized for tablet screens")

In the updated design for tablets, the colours have been updated, the logo design improved, and a pop out side bar added to contain the receipt information and the add to order and finalise order buttons

![V2Tablet menu Page](docs/Wireframes/V2/TabletMenuPageV2.png "Tablet formatted menu page version 2, with sidebar and colour changes")

In the initial mobile design, the page colour scheme is black and white, but the button layout has been altered from the desktop design to bettern fit with mobile screen limitations, redesigned x and y dimensions, and resizing of the objects.

![V1 Mobile Menu Page](docs/Wireframes/V1/MobileMenuPage.png "Mobile version 1 menu page, coloured in black and white")

The Version two mobile menu page has been updated with the colour palette, and objects resized as appropriate for mobile screen sizes, with 2 objects per row instead of 3. In future revisions, this may be reduced to one, depending on how these end up looking.

![V2 Mobile Menu Page](docs/Wireframes/V2/MobileMenuV2.png "Mobile pizza menu page version 2 with finalised colour scheme")

### Design your own Pizza page

The initial design for the "design your own pizza" page, hereafter referred to as the "DIY Pizza" page, was simply a layout with each pizza requiring the user to select a base, a sauce and a number of ingredients, with the flexbox containing the picture and description text acting as a button that toggles the inclusion of each of the choices in the final pizza, with the sidebar keeping a running tally and changing the total cost according to which ingredients are selected. This initial design uses different gray scales to separate the components, expected to be replaced with colours in the final version.

![V1 DIY Pizza page](docs/Wireframes/V1/DIYPizzaDesktop.png "version 1 of the DIY pizza page in greyscale")

The second version of the DIY pizza page includes the colour palette as decided, with changes to the page layout to simplify the design and make it clear to the user what the options are. In addition there is greater detail in the sidebar making it clear what the total costs are. as before, the user makes a selection by clicking or touching the appropriate choice, which then changes colour reflecting that.

![V2 DIY Pizza Page](docs/Wireframes/V2/DIYPizzaMenuV2.png "Version 2 of the DIY pizza page with second generation colour palette in use")

The initial version of the Mobile DIY Pizza page includes some speculative colour palette ideas and is a resized version of the desktop page. Note the pop out sidebar including buttons to finalise a pizza order or add the pizza to the shopping cart.

![V1 Mobile DIY Pizza Page](docs/Wireframes/V1/MobileDIYPizzaSpeculativeColours.png "first iteration of the DIY pizza page for Mobile with speculative colour palette")

The second iteration of the mobile version for the DIY pizza page adds the new colour scheme and page design from the V2 desktop page, a pop out sidebar with the order totals, and a refactored object size to better account for the different screen sizes.

![V2 Mobile DIY Pizza Page](docs/Wireframes/V2/MobileDIYPizzaPageV2.png "second iteration of the mobile DIY Pizza page design")

The initial tablet version of the DIY pizza page includes a similar colour palette to the mobile version one page but includes resized objects for tablet screens.

![V1 Tablet DIY Pizza Page](docs/Wireframes/V1/TabletDIYPizzaPageSpeculativeColours.png "DIY Pizza page first iteration of tablet design, again with speculative colour palette")

The second version of the tablet DIY DIY pizza page includes the resized objects, redesigned elements of the desktop second version, recolored elements, and a pop-out bar to track the current cost of the pizza under construction.

![V2Tablet DIY Pizza page](docs/Wireframes/V2/TabletDIYPizzaV2.png "second iteration of the tablet DIY Pizza page design with new colours and design")

### Finalise order Page

This page is an addition to the V2 set of diagrams that shows the pizzas currently chosen by the user for their order, and gives them the option to add sides and drinks, or an additional pizza (with this button returning the user to the menu). There is also a button to finalise the order and send it to Miguelitto, and buttons to inspect any of the pizza orders currently in the cart. Note that the page title remains unchanged from previous iterations; this will be altered to reflect the page content.

![V2 finalise order](docs/Wireframes/V2/PizzaOrderFinaliseV2.png "Finalise order page V2, where users can choose sides and drinks, or add more pizzas")

The tablet version of the order page adds a pop-out sidebar with the order details, but continues the same functionality as in the desktop version

![V2 Tablet Finalise Order](docs/Wireframes/V2/TabletOrderPageV2.png "Finalise order page for tablets, with popout sidebar")

The mobile version of the finalise page is derived from the desktop version with a different layout and the inclusion of a popout bar to account for the smaller screen size

![V2Mobile finalise order page](docs/Wireframes/V2/MobileFinaliseOrderV2.png "Finalise order for mobiles, with popout sidebar and redesigned object layout")

### Admin Login Page

Unlike other pages the admin pages will only formatted for desktop, as access to them is limited to Miguelitto, any staff he hires, and the system used to track orders in the pizza shop. As this system is a standard desktop system using a large touchscreen interface, both the login and dashboard pages can be designed exclusively for it. To access it, it is assumed the user will manually add "/admin" after the link, as adding an access button to the landing page was judged too high a risk.

![V1Admin Login](docs/Wireframes/V1/AdminLoginPizzaDesktop.png "admin login page, simply username and password fields present")

### Admin Dashboard

The admin dashboard page is used by the kitchen for the restaurant to track orders, servicing them in the order in which they were received. For this role, it is designed to clearly and simply present the requisite information to user with a minimum of fuss or extraneous details - as such, it includes only the details of the pizza order, the sequence in which they were received and the ability to mark them as completed. In addition, there is also a button to flip to previously completed orders and back, if for some reason an order is accidentally marked completed, flipping the buttons functionality (and obviously the text on them).

![V1 Admin dashboard](docs/Wireframes/V1/PizzaAdminDashboard.png "v1 admin dashboard showing yet to be completed orders in the order they were recieved")

In the second version of the Admin dashboard additional colors have been added to make the functionality clearer, and a link to a new page that shows available stocks has been added.

![V2 Admin dashboard](docs/Wireframes/V2/AdminDashboardV2.png "v2 admin dashboard showing yet to be completed orders in the order they were recieved")

### Stock page (Incomplete)

This page was originally intended to be part of the main admin dashboard, however during development it became obvious that it would need to be its own separate page. This page shows the available stock of all items (pizza bases, sauces, toppings, sides and drinks), and lets the admin toggle their availability status, or edit specific details about them.

![v2 stock page](docs/Wireframes/V2/AdminStockPageV2.png "V2 Admin Stock control page, allowing the admin to change the available stock of ingredients, changes that once saved will be reflected on the website proper")

### Edit Ingredient (Incomplete)

This is a separate page that loads in order to allow Miguelitto to add a new ingredient to his database for sale, or change an existing one, adding the name, its price, an image, and whether or not it is available.

![V2 Edit ingredient](docs/Wireframes/V2/EditIngredientPageV2.png "V2 Edit Ingredient Page, allowing the admin to change the details of any existing ingredient")

The revised ingredient editing page now includes a drop down menu to select the category the ingredient should be placed in.

![v3 Edit Ingredient](docs/Wireframes/V3/AdminEditIngredientPageV3.png "V3 edit ingredient, now with obviously needed menu option")

### Add Ingredient (Incomplete)

This page is the requisite page that allows Miguelitto the option of adding a new ingredient, side, or drink if he desires.

![V3 Add Ingredient](docs/Wireframes/V3/AdminAddIngredientPageV3.png "V3 Add ingredient page, allowing the admin to add a new pizza base, sauce, topping, side or drink")

### Colour Palette

Due to Time Constraints, custom colours were not implemented into the bootstrap library. As such, the colour palette was not used.

- #362B28 - Woody Brown

- #F2C11D - Buttercup

- #B4370F - Rust

- #E4C9B1 - Grain Brown

- #D7DFDE - Nebula

### Logo

For reference, this is the logo for Miguelitto's pizza used throughout the app and website design process

![Miguelittos Pizza Logo](docs/Logo/MiguelittosPizeria3.png "Logo for Miguelittos pizza")

## Trello Screenshots

Below, find the sequence of Trello Board shots from the first week/sprint aimed at completing the documentation/readme/T3A2-A. For the reamining trello board screen shots, the board format was altered to take into account feedback received from markers.

The board for the 19th shows initial work for the brainstorming of ideas that might work as full stack applications, with ideas categorised as either 'ideas', or 'good ideas'

![trello board Screenshot 19 January](docs/Trello/TrelloBoardd190122.png "Trello Board showing progress for 19 Jan")

while waiting on final approval from our lecturers on the ideas, additional columns for readme content have been added.

![trello board Screenshot 20 January](docs/Trello/TrelloBoardd200122.png "Trello Board showing progress for 20 Jan")

With the final idea approved, work has now moved on to creating the initial readme document, with colours indicating the person assigned to the task.

![trello board Screenshot 21 January](docs/Trello/TrelloBoardd210122.png "Trello Board showing progress for 21 Jan")

![trello board Screenshot 22 January](docs/Trello/TrelloBoardd220122.png "Trello Board showing progress for 22 Jan")

By the 24th of January, most of the 2st draft of the readme is complete, with only the wireframes, ERD and application architechture diagrams remaining.

![trello board Screenshot 24 January](docs/Trello/TrelloBoardd240122.png "Trello Board showing progress for 24 Jan")

By this point the 1st draft wireframes are all complete.

![trello board Screenshot 25 January](docs/Trello/TrelloBoardd250122.png "Trello Board showing progress for 25 Jan")

![trello board Screenshot 27 January](docs/Trello/TrelloBoardd270122.png "Trello Board showing progress for 27 Jan")

By the 28th, all remaining parts of the intial readme are complete.

![trello board Screenshot 28 January](docs/Trello/TrelloBoardd280122.png "Trello Board showing progress for 28 Jan")

On the 29th intial planning and scoping for coding has been done, with initial install requirements marked out and expected tasks created.

![trello board Screenshot 29 January](docs/Trello/TrelloBoardd290122.png "Trello Board showing progress for 29 Jan")

![trello board Screenshot 01 Februrary](docs/Trello/TrelloBoardd010222.png "Trello Board showing progress for 1st of February")

![trello board Screenshot 02 Februrary](docs/Trello/TrelloBoardd020222.png "Trello Board showing progress for 2nd of February")

Note that 3rd of February was when the new trello format was implemented, with badges marking the person assigned to the task, and colours marking both the category of the assignment and its status.

![trello board Screenshot 03 February](docs/Trello/TrelloBoardd030222.png "Trello Board showing progress for 3rd of February.")

For the 4th of february, note that the react new project has been created, and models, routes and controllers have been started in rails. The react favicon has also been changed

![trello board Screenshot 04 February](docs/Trello/TrelloBoardd040222.png "Trello Board showing progress for 4th of February")

By the 5th, the prototype shopping cart to be used in the application has been completed and stashed on a new branch in the front end. The users and products controllers are also complete.

![trello board Screenshot 05 February](docs/Trello/TrelloBoardd050222.png "Trello Board showing progress for 5th of February")

At this point, the prototype backend has been successfully deployed to Heroku, and much of the backend work has been completed.

![trello board Screenshot 07 February](docs/Trello/TrelloBoardd070222.png "Trello Board showing progress for 7th of February")

With the Agile sprint completed during the previosu week focussing primarily on backend work, by this point, identified refactors had been completed, and work had begun on the front end react project.

![trello board Screenshot 08 February](docs/Trello/TrelloBoardd080222.png "Trello Board showing progress for 8th of February")

By the 10th of february, work completed over the previous days has been added, with most of the user facing front end client complete and functioning with the deployed heroku database

![trello board Screenshot 10 February](docs/Trello/TrelloBoardd100222.png "Trello Board showing progress for 10th of February")

By the 12th, the only remaining steps still in scope remaining to be completed are the pending orders page in the admin section, testing, and deployment of the front end.

![trello board Screenshot 12 February](docs/Trello/TrelloBoardd120222.png "Trello Board showing progress for 12th of February")

### M&M IT Solutions

Completed to satisfy requirements for Coder Academy's Fast Track Bootcamp assignment number T3A2
