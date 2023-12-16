function saveUserData() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name && age) {
        const userData = {
            name: name,
            age: age
        };

        // Convert the object to a JSON string and store it in Local Storage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
    } else {
        alert('Please enter both name and age before submitting.');
    }
}

function displayStoredData() {
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
        const userData = JSON.parse(storedUserData);

        // Display the data in a table
        const displayArea = document.getElementById('displayArea');
        displayArea.innerHTML = `
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>${userData.name}</td>
                    <td>${userData.age}</td>
                </tr>
            </table>
        `;
    } else {
        alert('No user data found in Local Storage.');
    }
}
