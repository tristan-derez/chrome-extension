let myLeads = [];

const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");

// transform "myLeads" to an actual array and stores it in this
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// if there's something in local storage, store it in myLeads
// then call renderLeads()
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// render the value from user
function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

// on click event listener for save input button
// push value from user
// render the value
inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  render(myLeads);
});

// on click event listen for save tab button
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push();
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

// on double click event listener
// reset localStorage, myLeads
// render leads (Nothing)
deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear;
  myLeads = [];
  render(myLeads);
});
