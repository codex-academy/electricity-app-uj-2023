# electricity-app

Create a widget that allows a user to keep track of electricity usage.

A user can:

* top-up electricity units for a selected amount. 
* and select an appliance to use. 

Note:

* Each appliance use a different amount of units. 
* Users can take an electricity advance. 
* The advance will need to be paid back on subsequent top-ups.

## Instructions

The widget should allow a user to top-up electricity:

* R10 buys 7 units
* R20 buys 14 units
* R50 buys 35 units
* And advance of R30 buys 21 units - can only be used once. Must then be paid back to use again.
    
The widget support the appliances below.

Supported appliances:

* The TV uses 3 units at a time (1 button click)
* The Kettle uses 5 units at a time
* The Fridge uses  13 units at a time
* The Stove uses 10 units at a time

Don't allow appliance usage if there is not enough electricity available to use the appliance in question.

Show a total of electricity units available - the topup and using of electricity should reflect accordingly at **Units available**. 

Keep track of the total units bought and the total amount spent on electricity.

If the advance has been used show a green tick. An advance can only be used once, and can only be used again when the whole advance has been paid back. Ensure the total amount spent calculation take the advance amounts into account correctly.

## Files 

There are two versions of the API **one with** and **one without** an **API**.

You need to attempt both, **but first** complete the `no-api` version of the project.

On the landing page of the Widgets you will see a link to both versions of the API.

### No API widget

Create the widget without the API first. Find the files for that in the `public/no-api` folder.

### API widget

Once done with that work on the API that is using the API. 

The files for that is in `public/with-api`. 

The API files are:

* `index.js` - there are 3 API routest to create (they are already defined),
*  `electricity.sql.js` files.

*  There are migrations in the `migrations` folder, that creates two table namely `devices` & `units`.

The `electricity.db` file should get created & populated already when the app starts up.

## Fork, clone & deploy

Fork and clone this repo.
Deploy to Render.

Change into the app folder and run:

To install all the npm dependencies run:

```
npm install
```

Run the app in dev mode using:

```
npm run dev
```

The app will start on port `4013` you can open the app here - [http://localhost:4013](http://localhost:4013)

## Work submission 

Share the source code & deployed link in the Feedback system link emailed to you.

## Planning

Spend the first 30 minutes of your Solo coding session on planning. Read through all the different scenarios & create a Kanban Board with the tasks you think you need to complete. Email a link to your Kanban board to `uj-mentors@projectcodex.co`. 

## Ask

**Ask** for **help** if needed - via slack in the `#solo-coding` channel or email `uj-mentors@projectcodex.co`.

**Ask** if you need help or clarity. 

## Be done by 16h00

And make sure you submit your final links by latest 16h00.

Enjoy! :tada:
