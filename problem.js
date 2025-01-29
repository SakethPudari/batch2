const employees = [
    {
        name: "Saketh",
        company: "TechCorp",
        salary: 50000,
        address: {
            city: "New York",
            area: "Manhattan"
        }
    },
    {
        name: "Muzammil",
        company: "Innovate Inc",
        salary: 10000,
        address: {
            city: "Hyderabad",
            area: "Chandanagar"
        }
    },
    {
        name: "Karthik",
        company: "DevWorks",
        salary: 5000,
        address: {
            city: "Hyderabad",
            area: "Balnagar"
        }
    }
];

function displayEmployees() {
    const container = document.getElementById("employee-container");
    let table = `<table border='1'>
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Salary</th>
                        <th>City</th>
                        <th>Area</th>
                    </tr>`;
    
    employees.forEach(emp => {
        table += `<tr>
                    <td>${emp.name}</td>
                    <td>${emp.company}</td>
                    <td>${emp.salary}</td>
                    <td>${emp.address.city}</td>
                    <td>${emp.address.area}</td>
                  </tr>`;
    });
    
    table += `</table>`;
    container.innerHTML = table;
}

document.addEventListener("DOMContentLoaded", displayEmployees);
