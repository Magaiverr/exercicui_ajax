document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.querySelector('#github-username');
    const fetchDataButton = document.querySelector('#fetch-data');

    fetchDataButton.addEventListener('click', function() {
        const username = usernameInput.value.trim();
        if (username) {
            fetch(`https://api.github.com/users/${username}`)
                .then(function(res) {
                    return res.json();
                })
                .then(function(data) {
                    const nameElement = document.querySelector('#name');
                    const usernameElement = document.querySelector('#username');
                    const avatarElement = document.querySelector('#avatar');
                    const reposElement = document.querySelector('#repos');
                    const followersElement = document.querySelector('#followers');
                    const followingElement = document.querySelector('#following');
                    const linkElement = document.querySelector('#link');

                    nameElement.innerText = data.name;
                    usernameElement.innerText = data.login;
                    avatarElement.src = data.avatar_url;
                    followingElement.innerText = data.following;
                    followersElement.innerText = data.followers;
                    reposElement.innerText = data.public_repos;
                    linkElement.href = data.html_url;
                })
                .catch(function(error) {
                    console.error('Erro:', error);
                });
        } else {
            alert('Por favor, digite um nome de usuário do GitHub.');
        }
    });
});