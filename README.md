## 07-layered-arch-build

Build an application using a layered architecture.

## Plan

* use tensorflow toxicity API

* Create CRUD routes
  - post to table
  - update table row
  - get all rows from table
  - get one row from table by id
  - delete table row

* Model
  - create class we will export to construct new text analyses

* Service
  - create class we will export to take in text and return an analysis ("true/likely toxic" or "false/likely not toxic" for example)

* Controller
  - has our CRUD routes 

### Requirements

Create all CRUD routes for at least one order model. Use the red, green,
refactor process.

You should have some interaction to put in your service. Some examples:

* send an email with Amazon SES
* fetch from a web API to fill in data
* save a file to Amazon S3
* use the tensorflow toxicity model to reject toxic text

### Rubric

* model class (1 points)
* service class (8 points)
* controller (1 points)