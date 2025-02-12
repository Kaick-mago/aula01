document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        });
        
        const data = await response.json();

        document.getElementById('responseMessage').innerText = data.message;
    } catch (error) {
        document.getElementById('responseMessage').innerText = 'Erro ao se comunicar com o servidor.';
    }
});
