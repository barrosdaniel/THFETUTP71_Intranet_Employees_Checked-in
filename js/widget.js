const xhr = new XMLHttpRequest();

xhr.open('GET', 'data/employees.json');

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    // Process server response into objects array
    const employees = JSON.parse(xhr.responseText);
    // create list of employees
    let statusHTML = `<ul class='bulleted'>`;
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].inoffice) {
        statusHTML += `<li class="in">`;
      } else if (!employees[i].inoffice) {
        statusHTML += `<li class="out">`;
      }
      statusHTML += `${employees[i].name}</li>`;
    };
    statusHTML += `</ul>`;
    // Attach list of employees to page
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};

xhr.send();