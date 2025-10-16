const socket = io();
const nameInput = document.getElementById("name");
const joinBtn = document.getElementById("joinBtn");
const msgInput = document.getElementById("msg");
const sendBtn = document.getElementById("sendBtn");
const adminBtn = document.getElementById("adminBtn");
const disconnectBtn = document.getElementById("disconnectBtn");
const messagesDiv = document.getElementById("messages");
const usersSpan = document.getElementById("users");

joinBtn.onclick = () => {
  const name = nameInput.value.trim();
  if (!name) return alert("Enter a name");
  socket.emit("register", name);
  document.getElementById("register").style.display = "none";
  document.getElementById("chatBox").style.display = "block";
};

sendBtn.onclick = () => {
  const msg = msgInput.value.trim();
  if (msg) socket.emit("chatMessage", msg);
  msgInput.value = "";
};

adminBtn.onclick = () => {
  const msg = prompt("Enter admin message:");
  if (msg) socket.emit("adminMessage", msg);
};

disconnectBtn.onclick = () => {
  socket.emit("manualDisconnect");
};

// Display messages
socket.on("chatMessage", (msg) => {
  messagesDiv.innerHTML += `<p><b>${msg.user}:</b> ${msg.text} <small>${msg.time}</small></p>`;
});

socket.on("adminMessage", (msg) => {
  messagesDiv.innerHTML += `<p class="admin"><b>Admin:</b> ${msg.text} <small>${msg.time}</small></p>`;
});

socket.on("updateUsers", (users) => {
  usersSpan.textContent = users.map((u) => u.name).join(", ");
});

socket.on("chatHistory", (history) => {
  messagesDiv.innerHTML = history.map((m) =>
    `<p><b>${m.user}:</b> ${m.text} <small>${m.time}</small></p>`
  ).join("");
});

socket.on("userJoined", (msg) => {
  messagesDiv.innerHTML += `<p><i>${msg}</i></p>`;
});

socket.on("userLeft", (msg) => {
  messagesDiv.innerHTML += `<p><i>${msg}</i></p>`;
});

socket.on("errorMsg", (msg) => alert(msg));
