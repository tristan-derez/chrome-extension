let myLeads = [];

const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");

// transform "myLeads" to an actual array and stores it in this
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// if there's something in local storage, store it in myLeads
// then call renderLeads()
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

// on click event listener for save input button
// push value from user
// render the value
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

// on double click event listener
// reset localStorage, myLeads
// render leads (Nothing)
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear;
  myLeads = [];
  renderLeads();
});

// render the value from user
const renderLeads = () => {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
};
