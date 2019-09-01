/**
 * Gets a list of employees from the server (employees.json) and adds it to the main intranet page
 */
function getEmployeesList() {
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
}

/**
 * Gets a list of rooms from the server (rooms.json) and adds it to the main intranet page
 */
function getRoomsList() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data/rooms.json');

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      // Process server response into objects array
      const rooms = JSON.parse(xhr.responseText);
      console.log(rooms);

      // create list of employees
      let statusHTML = `<ul class='rooms'>`;
      for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].available) {
          statusHTML += `<li class="empty">`;
        } else if (!rooms[i].available) {
          statusHTML += `<li class="full">`;
        }
        statusHTML += `${rooms[i].room}</li>`;
      };
      statusHTML += `</ul>`;
      // Attach list of rooms to page
      document.getElementById('roomList').innerHTML = statusHTML;
    }
  };

  xhr.send();
}

// Call Async functions to load employees and rooms lists
getEmployeesList();
getRoomsList();