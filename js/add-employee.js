// GLOBAL VARIABLES
let id; // HTML ELEMENT (TEXT)
let fname; // HTML ELEMENT (TEXT)
let ext; // HTML ELEMENT (TEXT)
let email; // HTML ELEMENT (TEXT)
let department; // HTML ELEMENT (TEXT)
let submit; // HTML ELEMENT (BUTTON)
let output; // HTML ELEMENT (OUTPUT)

// HELPER FUNCTION TO GET DOM ELEMENTS
const $ = (i) => document.getElementById(i);

// GET DOM ELEMENTS
id = $("id");
fname = $("fname");
ext = $("ext");
email = $("email");
department = $("department");
submit = $("submit");
output = $("output");

// CONSOLE LOG OR PUT IN PAGE USING innerHTML AND RETURN THE RESULT
function employeeDetail(id, fname, ext, email, department) {
  console.log(`ID: ${id.value}`);
  console.log(`Full Name: ${fname.value} `);
  console.log(`Extension: ${ext.value}`);
  console.log(`Email: ${email.value}`);
  console.log(`Department: ${department.value}`);
  //output.innerHTML = `ID: ${id.value} <br> Full Name: ${fname.value} <br> Extension: ${ext.value} <br> Email: ${email.value} <br> Department: ${department.value}`;
  return;
}

// GET FORM VALUES ,LOG AND  DISPLAY RESULTS
submit.addEventListener("click", () => {
  employeeDetail(id, fname, ext, email, department);
  let parentoutput = window.opener.document.getElementById("loginDetails");
  parentoutput.innerHTML = `ID: ${id.value} <br> Full Name: ${fname.value} <br> Extension: ${ext.value} <br> Email: ${email.value} <br> Department: ${department.value}`;
  window.close();
});
