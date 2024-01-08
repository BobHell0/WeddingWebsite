
const form = document.getElementById("loginForm");
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const payload = new URLSearchParams(fd).toString()

    try {
        const response = await fetch(`http://localhost:3000/login-submission`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            },
            body: payload,
        });
        if (!response.ok) {
            console.log('Maybe not so good');
        } else {
            console.log('Very good'); 
            window.open("/", "_self");
        }
    } catch {
        console.log('Big sad');
    }
}); 

