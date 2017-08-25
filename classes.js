
// Classes

/*
Classes are a tool for building similar objects over and over again.
They are a construct that helps your organize your code.

Let's work with some employees at a company.
You work for Widget Co.  They have hundreds of employees.
Make a class to help us build all of the employees.
Each employee has:
- first_name
- last_name
- email
- age

Each employee can:
- makeWidget
    - This returns a string equal to the employees first name + last name + the word widget
    IE - "Dave Smith Widget"

call your class Employee and receive all the data in the constructor in the order listed
*/

class Employee {
  constructor (first_name, last_name, email, age) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.age = age;
  }

  makeWidget () {
    return this.first_name + ' ' + this.last_name + ' ' + 'Widget'
    // ES6 template literal
    // return `${this.first_name} ${this.last_name} Widget`
  }
}

//example of calling it.
// var emp1 = new Employee ('scott', 'cardoza', 'scott@scott.com', '30');
// emp1.makeWidget();


/*

Next, make a manager for Widget Co.
The manager has all the same properties as an Employee.
They also have :

- reports (other employees) that defaults to an empty array
They can (methods) :
   - hire
        : Hire adds a new employee to their list of reports
   - fire(index)
        : Fire removes employees from their list of reports at the given index

call your class Manager

*/

class Manager {
  constructor (first_name, last_name, email, age) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.age = age;
    this.reports = [];
  }

  makeWidget () {
    return this.first_name + ' ' + this.last_name + ' ' + 'Widget'
    // ES6 template literal
    // return `${this.first_name} ${this.last_name} Widget`
  }

  hire(employee){
    // add an employee to reports
    this.reports.push(employee);
  }

  fire(index){
    //remove starting at this index, remove one item
    this.reports.splice(index, 1);
  }
}




/*
Manager for Widget Co. get promoted when they get more employees, and get a bonus when they fire employees.
Progressive Managers have all the same properties as the manager, but
they also have :
- title - default 'Not a manager'
- bonus - default 0

When employees are added or removed we need to check and update their title.  Their titles are as follows:
0 : Not a manager
1-3 : Barely Manager
4-10 : Mostly Manager
11-50 : Manager
51-100 : Manager Plus
101+ : Bestest Manager

Everytime they fire an employee they get a bonus of $100 add to their .

call you class ProgressiveManager
*/


class ProgressiveManager {
  constructor (first_name, last_name, email, age) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.age = age;
    this.reports = [];
    this.title = 'Not a manager';
    this.bonus = 0;
  }

  makeWidget () {
    return this.first_name + ' ' + this.last_name + ' ' + 'Widget'
    // ES6 template literal
    // return `${this.first_name} ${this.last_name} Widget`
  }

  hire(employee){
    // add an employee to reports
    this.reports.push(employee);
    this.changeTitle(this.reports.length)
    // check length
  }

  fire(index){
    //remove starting at this index, remove one item
    this.reports.splice(index, 1);
    this.bonus += 100;
    this.changeTitle(this.reports.length)
  }


  changeTitle (reportsLength){
    if (reportsLength === 0){
      this.title = 'Not a manager'
    }
    else if (reportsLength <= 3){
      this.title = 'Barely Manager'
    }
    else if(reportsLength <= 10){
      this.title = 'Mostly Manager'
    }
    else if(reportsLength <= 50){
      this.title = 'Manager'
    }
    else if(reportsLength <= 100){
      this.title = 'Manager Plus'
    }
    else {
      this.title = 'Bestest Manager'
    }
  }
}




/*
BLACK DIAMOND
Widget Co has a factory that makes widgets.
Factories have Machines

Make a Machine class that takes in no parameters
It has :
- widgets_made_count - default 0
- wear_and_tear_count - default 0
- needs_reboot - default false

It can :
- makeWidgets
    : This function takes in a number and increases widgets_made_count by that amount
      It also increases wear_and_tear_count by 1 for every 50
- fixMachine
    : This function sets needs_reboot to true
- reboot
    : This function returns a function that is called when the machine is done rebooting
      It should set decrease wear_and_tear_count by 10, and set needs_reboot to false

*/

class Machine {
  constructor (widgets_made_count, wear_and_tear, needs_reboot){
    this.widgets_made_count = 0;
    this.wear_and_tear_count = 0;
    this.needs_reboot = false;
  }

  makeWidgets(num){
    this.widgets_made_count += num;
    if(this.widgets_made_count % 50 === 0){
      this.wear_and_tear_count += 1;
    }
  }

  fixMachine(){
    this.needs_reboot = true;
  }

  reboot(){
      return function (){
        this.wear_and_tear_count -= 10;
        this.needs_reboot = true;
      }
  }
}
