const projects_container = document.getElementById('projects_container');



function project(data) {
    const card = document.createElement('table');
    const tblBody = document.createElement("tbody");
    

    const tableHeading = document.createElement("tr");
   


    const headingrow = `
    <td>Day</td>
    <td>Project Name</td>
    <td>Link of Projects</td>
    `;
    tableHeading.innerHTML = headingrow;

    card.append(tableHeading);
   
    
    data.forEach((item, index) => {
        const tablerow = document.createElement('tr');
        const tdata = `
        <td>${item.id}</td>
        <td>${item.projectName}</td>
        <td><a href="${item.link}">Link</a></td>`;

        console.log(tdata);

        tablerow.innerHTML = tdata;
        card.appendChild(tablerow);
        
            card.classList.add('card');
        
    });

    projects_container.appendChild(card);
   
}
project(data);