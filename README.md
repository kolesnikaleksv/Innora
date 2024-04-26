## How To Launch

From your command line, clone and run Innora application:

```bash
# Clone this repository
$ git clone https://github.com/kolesnikaleksv/Innora.git

# Go into the repository
$ cd Innora

# Install dependencies
$ npm install

#Start's development server
$ npm start

#Starts both the development server and the fake server with data on port 5000.
$ npm run app-server
```
## How To Use

This application features a header with a dynamic date and three pages. 
One of them displays a list of accounts that can be deleted by pressing the delete button. After deletion, they appear on the "deleted" page. 
The account database is located in the db.json file. The initial state of the database can be copied from the db.copy.json file. 
The accounts page has a filter by names and sorts the account country names alphabetically. Both pages have pagination and total item count. 
The middle page is for buty.

## Technologies Used:
# React + React-routing + TypeScript + Vite + Tailwind + Redux + Redux-Toolkit + MUI + SCSS