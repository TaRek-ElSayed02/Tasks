const userInfoUrl = 'https://jsonplaceholder.typicode.com/users/';
const userPostsUrl = 'https://jsonplaceholder.typicode.com/posts/';
const totalUsers = 10;

let userId = 1;

const userInfoElement = document.getElementById('user-info');
const userPostsElement = document.getElementById('user-posts');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');




async function fetchUserInfo(userId) {
    const response = await fetch(userInfoUrl + userId);
    const userInfo = await response.json();
    return userInfo;
}

async function fetchUserPosts(userId) {
    const response = await fetch(userPostsUrl + `?userId=${userId}`);
    const userPosts = await response.json();
    return userPosts;
}

async function renderUserData(userId) {
    const userInfo = await fetchUserInfo(userId);
    const userPosts = await fetchUserPosts(userId);
    userInfoElement.innerHTML = '';
    userPostsElement.innerHTML = '';

    const userInfoHtml = `
        <h2>User Info</h2>
        <p>Name: ${userInfo.name}</p>
        <p>Email: ${userInfo.email}</p>
        <p>Phone: ${userInfo.phone}</p>
    `;
    userInfoElement.innerHTML = userInfoHtml;

    const userPostsHtml = `
        <h2>User Posts</h2>
        <ul style="list-style: none;" >
            ${userPosts.map(post => `<li>${post.title}</li>`).join('')}
        </ul>
    `;
    userPostsElement.innerHTML = userPostsHtml;
}

prevButton.addEventListener('click', () => {
    userId--;
    if (userId < 1) {
        userId = totalUsers;
    }
    renderUserData(userId);
});

nextButton.addEventListener('click', () => {
    userId++;
    if (userId > totalUsers) {
        userId = 1;
    }
    renderUserData(userId);
});
renderUserData(userId);