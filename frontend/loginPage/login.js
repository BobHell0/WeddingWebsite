const form = document.getElementById("loginForm");
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fd = new FormData(form);
    const payload = new URLSearchParams(fd).toString();

    fetch('http://localhost:3000/login-submission', {
        method: 'POST',
        body: payload,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
        }
    })
}); 