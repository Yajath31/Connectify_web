// Tabs switching logic
const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".section");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    sections.forEach((s) => s.classList.remove("active"));
    tab.classList.add("active");
    sections[index].classList.add("active");
  });
});

// Friend requests and friends
const friendRequests = [];
const friendsList = [];

function addFriendRequest(username) {
  friendRequests.push(username);
  renderFriendRequests();
}

function acceptFriendRequest(username) {
  friendsList.push(username);
  const index = friendRequests.indexOf(username);
  if (index !== -1) friendRequests.splice(index, 1);
  renderFriendRequests();
  renderFriendsList();
}

function renderFriendRequests() {
  const friendRequestsDiv = document.getElementById("friend-requests");
  friendRequestsDiv.innerHTML = "<h3>Friend Requests</h3>";
  friendRequests.forEach((req) => {
    const requestDiv = document.createElement("div");
    requestDiv.textContent = req;
    const acceptButton = document.createElement("button");
    acceptButton.textContent = "Accept";
    acceptButton.addEventListener("click", () => acceptFriendRequest(req));
    requestDiv.appendChild(acceptButton);
    friendRequestsDiv.appendChild(requestDiv);
  });
}

function renderFriendsList() {
  const friendsListDiv = document.getElementById("friends-list");
  friendsListDiv.innerHTML = "<h3>Friends</h3>";
  friendsList.forEach((friend) => {
    const friendDiv = document.createElement("div");
    friendDiv.textContent = friend;
    friendsListDiv.appendChild(friendDiv);
  });
}

// Add a test friend request
addFriendRequest("JohnDoe");

// Placeholder for calling functionality
document.getElementById("call-user").addEventListener("click", () => {
  alert("Calling functionality not yet implemented!");
});

// Preferences update
document.getElementById("preferences-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const updatedUsername = document.getElementById("update-username").value;
  const updatedEmail = document.getElementById("update-email").value;
  alert(`Preferences updated! Username: ${updatedUsername}, Email: ${updatedEmail}`);
});
