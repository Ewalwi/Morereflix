function createCard() {
    const data = {
        name: document.getElementById('Name').value,
        description: document.getElementById('Description').value
    }
    
    const json = JSON.stringify(data);

    localStorage.setItem('createResult', json);

    alert('Card created!')
    document.querySelector(".createCard"). innerHTML = "Card created!<br><br><br><a href='../mainMenu/menu.html'>Back</a>";
}