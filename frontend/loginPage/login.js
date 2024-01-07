const form = document.getElementById("loginForm");
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);

    try {
        const response = await fetch(`http://localhost:3000/login-submission/?fn=${obj.firstName}&ln=${obj.lastName}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            }
        });
        if (!response.ok) {
            console.log('Maybe not so good');
        } else {
            console.log('Very good');
        }
    } catch {
        console.log('Big sad');
    }
    
}); 