# Business Books Keeper

The application is single user desktop application for windows platform. It is created to let small businesses to manage several business operations easily.

The application is a rewrite of a personal project which was created in following technology stack:

- Windows Presentation Foundation (WPF) - Frond end
- SQlite - Database

The intention / inspiration for this project is to keep data layer same but replace front end with latest technology stack to make it cross platform. Hence the v2 in the repo name :)

## Technology stack

- Electron JS
- SQlite (database)
- ...

### Admin Panel

- Add / Delete / Update companies
- Add / Delete / Update company sections (Distribution or Franchise) inside a company
- Add / Delete / Update users to access company sections of different companies
- Setup backups to keep sqlite database file regularly backed up on Google Drive

### User panel

- Add / Delete / Update customers
- Add / Delete / Update salesmen
- Add / Delete / Update products
- Add / Delete / Update product batches
- Add / Delete / Update product customer prices (only for franchise business model)
- Create invoice
- Invoice record
- Invoice detail (with option of printing PDF)
- Manage invoice discounts
- Return stock
- Manage customer payments
- Sales & stock report
- Customer ledger report
