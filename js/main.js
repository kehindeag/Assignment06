// GLOBAL VARIABLES
let btnAddEmployee; // HTML ELEMENT (TEXT)
let loginDetails; // HTML ELEMENT (TEXT)

// HELPER FUNCTION TO GET DOM ELEMENTS
const $ = (i) => document.getElementById(i);

// GET DOM ELEMENTS
btnAddEmployee = $("btnAddEmployee");
loginDetails = $("loginDetails");

// HANDLE THE LOAD EVENT OF THE WINDOW

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
btnAddEmployee.addEventListener("click", () => {
  window.open("add-employee.html", "popup", "width = 600, height = 800");
});
// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
