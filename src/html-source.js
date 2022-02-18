const managerSection = (Manager) => {
    let stuff = `
    
    <section class="Manager">
    <h2>${Manager.name}</h2>
    <h3>Manager</h3>
    <div class="info" >ID:${Manager.id}</div>
    <a class="info" href="mailto:${Manager.email}">${Manager.email}</a>
    <div class="info" >Office number: ${Manager.officeNumber}</div>
    </section>
    
    `;

return stuff
};


const engineerSection = (Engineer) => {
    let stuff = `
    
    <section class="Engineer">
    <h2>${Engineer.name}</h2>
    <h3>Engineer</h3>
    <div class="info">ID:${Engineer.id}</div>
    <a class="info" href="mailto:${Engineer.email}">${Engineer.email}</a>
    <div class="info" >GitHub: <a target="_blank" href="https://github.com/${Engineer.github}"> github.com/${Engineer.github}</a></div>
    </section>
    
    `;

    return stuff
    };


const internSection = (Intern) => {
    let stuff = `
    
    <section class="Intern">
    <h2>${Intern.name}</h2>
    <h3>Intern</h3>
    <div class="info" >ID:${Intern.id}</div>
    <a class="info" href="mailto:${Intern.email}">${Intern.email}</a>
    <div class="info" >School: ${Intern.school}</div>
    </section>
    
    `;

    return stuff
};


const HTMLstart = (projectName) => {
    let stuff = `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${projectName}</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    <h1>${projectName}</h1>


        `;

 return stuff
};


const HTMLend = () => {
    let stuff =  `
    </body>
    </html>
    `;
    return  stuff
}

module.exports = {managerSection, engineerSection, internSection, HTMLend, HTMLstart}