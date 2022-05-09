const mangerCard = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>

            <div class="card-body">
                <p>Employee ID: ${manager.employeeId}</p>
                <p>Email: <a href="mailto:${manager.email}" target="_blank">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `
};

const engineerCard = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>

            <div class="card-body">
                <p>Employee ID: ${engineer.employeeId}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
};

const internCard = function (intern) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <h4>Intern</h4>
        </div>

        <div class="card-body">
            <p>Employee ID: ${intern.employeeId}</p>
            <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p>School: ${intern.school}</p>
        </div>
    </div>
</div>
    `
};

generateHTML = (data) => {
    pageArray = [];

    for(let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if(role === 'Manager') {
            const mCard = mangerCard(employee);

            pageArray.push(mCard);
        }
        if(role === 'Engineer') {
            const eCard = engineerCard(employee);

            pageArray.push(eCard);
        }
        if(role === 'Intern') {
            const iCard = internCard(employee);

            pageArray.push(iCard);
        }
    }
    
    const employeeCards = pageArray.join('')
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
};

const generateTeamPage = function(employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${employeeCards}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.6.0.slim.js" integrity="sha256-HwWONEZrpuoh951cQD1ov2HUK5zA5DwJ1DNUXaM6FsY=" crossorigin="anonymous"></script>
    </html>
    `
}

module.exports = generateHTML;