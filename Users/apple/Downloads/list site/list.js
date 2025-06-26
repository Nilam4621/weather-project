async function fetchUsers(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const tableBody = document.getElementById("userTableBody");

        data.forEach(user => {
            const row  = document.createElement("tr");
            row.innerHTML =`
            <td>${user.id} </td>
             <td>${user.name}</td>
              <td>${user.username}</td>
               <td>${user.email}</td>`;
               
             tableBody.appendChild(row);
        });
    }
     catch (error){
    console.error("Error fetching User:",error);
    }
}

fetchUsers();