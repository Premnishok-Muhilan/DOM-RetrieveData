function get_data() {
  var fName = document.getElementById("First_Name").value;
  console.log(fName);

  var mName = document.getElementById("Middle_Name").value;
  console.log(mName);

  var lName = document.getElementById("Last_Name").value;
  console.log(lName);

  var email = document.getElementById("Email").value;
  console.log(email);

  var Address = document.getElementById("Address").value;
  console.log(Address);
}

function label_create(for_val, inner_HTML) {
  var label = document.createElement("label");
  label.setAttribute("for", for_val);
  label.innerHTML = inner_HTML;
  return label;
}

function input_create(type_val, id_val) {
  var input = document.createElement("input");
  input.setAttribute("type", type_val);
  input.setAttribute("id", id_val);
  return input;
}

function break_create() {
  var br = document.createElement("br");
  return br;
}

function button_create(type_val, onclick_val, inner_HTML) {
  var button = document.createElement("button");
  button.setAttribute("type", type_val);
  button.setAttribute("onclick", onclick_val);
  button.innerHTML = inner_HTML;
  return button;
}

var first_name_label = label_create("First_Name", "First Name");
var first_name_input = input_create("text", "First_Name");
var br1 = break_create();

var middle_name_label = label_create("Middle_Name", "Middle Name");
var middle_name_input = input_create("text", "Middle_Name");
var br2 = break_create();

var last_name_label = label_create("Last_Name", "Last Name");
var last_name_input = input_create("text", "Last_Name");
var br3 = break_create();

var email_label = label_create("Email", "Email");
var email_input = input_create("text", "Email");
var br4 = break_create();

var address_label = label_create("Address", "Address");
var address_input = input_create("text", "Address");
var br5 = break_create();

var submit_button = button_create("button", "get_data()", "SUBMIT HERE");
document.body.append(
  first_name_label,
  first_name_input,
  br1,
  middle_name_label,
  middle_name_input,
  br2,
  last_name_label,
  last_name_input,
  br3,
  email_label,
  email_input,
  br4,
  address_label,
  address_input,
  br5,
  submit_button
);
