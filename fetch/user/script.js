function fetchUsers() {
    // Clear previous user data
    document.getElementById('usersContainer').innerHTML = '';

    // Fetch user data from the Reqres API
    fetch('https://reqres.in/api/users')
        .then(response => {
            // Check if the response is successful (status code 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display user data
            displayUsers(data.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayUsers(users) {
    const usersContainer = document.getElementById('usersContainer');

    // Create and append a card for each user
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        userCard.innerHTML = `
            <img src="${user.avatar}" alt="User Avatar">
            <div class="user-info">
                <h3>${user.first_name} ${user.last_name}</h3>
                <p>Email: ${user.email}</p>
            </div>
        `;

        usersContainer.appendChild(userCard);
    });
}
