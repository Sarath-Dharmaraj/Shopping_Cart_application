const users = JSON.parse(localStorage.getItem('users')) || []
let currUser = JSON.parse(localStorage.getItem('currUser')) || []
const userData = users.find(user => user.email === currUser.email)
console.log(users, userData)
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')

firstname.value = currUser.firstname
lastname.value = currUser.lastname

document.getElementById('submit-name').addEventListener('submit', (e) => {
    e.preventDefault()



    userData.firstname = firstname.value || userData.firstname;
    userData.lastname = lastname.value || userData.lastname;

    currUser = {...currUser,
        firstname: firstname.value || userData.firstname,
        lastname: lastname.value || userData.lastname
    }
    localStorage.setItem('users', JSON.stringify(users))
    localStorage.setItem('currUser', JSON.stringify(currUser))
    
    alert('User profile is updated')
    console.log(currUser)
})

document.getElementById('submit-password').addEventListener('submit', (e) => {
    e.preventDefault()

    const oldPassword = document.getElementById('old-password').value
    const newPassword = document.getElementById('new-password').value
    const confirmPassword = document.getElementById('confirm-password').value

    if (oldPassword !== userData.password) return alert('password incorrect')
    if (oldPassword === newPassword) return alert('old password and new password can not be same')
    if (newPassword !== confirmPassword) return alert('password confimation valued')

    userData.password = newPassword
    localStorage.setItem('users', JSON.stringify(users))
    
    alert('User password is updated')
})