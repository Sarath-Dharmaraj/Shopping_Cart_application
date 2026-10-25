document.getElementById('submit-form').addEventListener('submit', (e) => {
    
    e.preventDefault();
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value


    const users = JSON.parse(localStorage.getItem('users')) || []
    const userExist = users.find(user => user.email === email)
    if (!userExist) return alert("user doesnt exist")
    console.log(userExist, password)
    if (userExist.password !== password) return alert("user password is incorrect")

    

    userExist.token = generateToken()
    delete userExist.password
    localStorage.setItem('currUser', JSON.stringify(userExist))
    console.log(userExist)
})