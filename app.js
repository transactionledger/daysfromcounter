userbase.init({ appId: '54f1020c-a366-416f-b9ca-3f140b975383' })
    .then((session) => session.user ? showTodos(session.user.username) : showAuth())
    .catch(() => showAuth())
    .finally(() => document.getElementById('loading-view').style.display = 'none')

function loadDateData() {

}

function showAuth() {

}

function handleSignUp(e) {
    e.preventDefault()

    const username = document.getElementById('signup-username').value
    const password = document.getElementById('signup-password').value

    userbase.signUp({ username, password, rememberMe: 'local' })
        .then((user) => showTodos(user.username))
        .catch((e) => document.getElementById('signup-error').innerHTML = e)
}