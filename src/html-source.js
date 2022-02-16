const managerSection = (Manager) => {
    let stuff = `<section class="Manager">
    <h2>${Manager.name}</h2>
    <h2>Manager</h2>
    <div>ID:${Manager.id}</div>
    <a href="mailto:${Manager.email}">Email:${Manager.email}</a>
    <div>Office number: ${Manager.officeNumber}</div>
    </section>`;

return stuff
};

const engineerSection = (Engineer) => {
    let stuff = `<section class="Engineer">
    <h2>${Engineer.name}</h2>
    <h2>Engineer</h2>
    <div>ID:${Engineer.id}</div>
    <a href="mailto:${Engineer.email}">Email:${Engineer.email}</a>
    <div>GitHub: <a href="https://github.com/${Engineer.github}"> ${Engineer.github}<a/></div>
    </section>`;

    return stuff
    };

const internSection = (Intern) => {
    let stuff = `<section class="Intern">
    <h2>${Intern.name}</h2>
    <h2>Intern</h2>
    <div>ID:${Intern.id}</div>
    <a href="mailto:${Intern.email}">Email:${Intern.email}</a>
    <div>School: ${Intern.school}</div>
    </section>`;

    return stuff
};

const HTMLstart = (projectName) => {
    let stuff = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${projectName} </title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        `;

 return stuff
};

const HTMLend = () => {
    let stuff = `
    </body>
    </html>
    `;
    return  stuff
}

module.exports = {managerSection, engineerSection, internSection, HTMLend, HTMLstart}