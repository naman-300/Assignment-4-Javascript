function displayUserInfoAndRepositories() {
    
    const username = 'naman-300';

    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(userData => {
            const avatarUrl = userData.avatar_url;
            const avatarImage = document.createElement('img');
            avatarImage.src = avatarUrl;
            avatarImage.alt = 'GitHub Avatar';

            const githubContainer = document.getElementById('github-container');
            githubContainer.appendChild(avatarImage);

            fetch(`https://api.github.com/users/${username}/repos`)
                .then(response => response.json())
                .then(repositories => {
                    const repoList = document.createElement('ul');
                    repositories.forEach(repo => {
                        const repoItem = document.createElement('li');
                        repoItem.textContent = repo.full_name;
                        repoList.appendChild(repoItem);
                    });

                    githubContainer.appendChild(repoList);
                })
                .catch(error => console.error('Error fetching repositories:', error));
        })
        .catch(error => console.error('Error fetching user information:', error));
}

window.onload = displayUserInfoAndRepositories;
