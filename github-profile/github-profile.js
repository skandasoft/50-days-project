const USER_URL = 'https://api.github.com/users/';
// const REPOS_URL = 'https://api.github.com/users/skandasoft/repos",';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.querySelector('main');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
  }
  search.value = '';
});

async function getRepos(user) {
  try {
    let { data } = await axios(USER_URL + user + '/repos?sort=updated');
    addReposToCard(data);
  } catch (err) {
    createErrorCard('Problem Fetching Repos');
  }
}

function addReposToCard(data) {
  let repos = data.slice(0, 10);
  const reposHTML = repos.map(
    (repo) =>
      ` <a href="${repo.html_url}" target='_blank' class="profile-tag"><small>${repo.name}</small></a> `
  );
  document.getElementById('profile-tags').innerHTML = reposHTML.join('');
}

async function getUser(user) {
  try {
    let { data } = await axios(USER_URL + user);
    createProfile(data);
    getRepos(user);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard('No such profile with the username');
    }
  }
}

function createErrorCard(msg) {
  const errorHTML = `
  <div id="profile" class="card">
  <h1>${msg}</h1>
  </div>
  `;
  main.innerHTML = errorHTML;
}

function createProfile(user) {
  const cardHTML = `
  <div id="profile" class="card">
  <div id="profile-img">
    <img
      src="${user.avatar_url}"
      alt="${user.name}"
      class="avatar"
    />
  </div>
  <div id="profile-info">
    <div id="profile-name"><h3>${user.name ? user.name : user.login}</h3></div>
    <div id="profile-dtl">
    ${user.bio ? user.bio : ''}
    </div>
    <ul id="profile-social">
      <li>
        <small>${user.followers} <strong>Followers</strong></small>
      </li>
      <li>
        <small>${user.following} <strong>Following</strong></small>
      </li>
      <li>
        <small>${user.public_repos}<strong> Repos</strong></small>
      </li>
    </ul>
    <div id='profile-tags'>
    </div>

  </div>
</div>
 `;
  main.innerHTML = cardHTML;
}
