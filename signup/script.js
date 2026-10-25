document.getElementById('submit-form').addEventListener('submit', (e) => {
    
    e.preventDefault();
    const firstname = document.getElementById('firstname').value
    const lasttname = document.getElementById('lastname').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirm-password').value

    if (password !== confirmPassword) return alert('password mismatch')

    const users = JSON.parse(localStorage.getItem('users')) || []
    const userExist = users.some(user => user.email === email)
    if (userExist) return alert('Email already exist')
    
    const user = {
        firstname: firstname,
        lasttname: lasttname,
        email: email,
        password: password
    }
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))

    user.token = generateToken()
    delete user.password
    localStorage.setItem('currUser', JSON.stringify(user))
    console.log(user)
})