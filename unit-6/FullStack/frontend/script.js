const msgBox = document.getElementById("message");
const dashboard = document.getElementById("dashboard");
const authSection = document.getElementById("auth-section");
const welcome = document.getElementById("welcome");
const API_BASE = "https://masai-full-stack.onrender.com";

const token = localStorage.getItem("token");
if (token) showDashboard();

document.getElementById("register-btn").addEventListener("click", async () => {
  const name = document.getElementById("reg-name").value;
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;
  const role = document.getElementById("reg-role").value;

  try {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });
    const data = await res.json();
    if (!res.ok) {
      // Server responded with an error (400, 500, etc.)
      showMessage(data.message || "Registration failed");
      return;
    }
    localStorage.setItem("token", data.token);
    showMessage("Registered successfully!");
    showDashboard();
  } catch (err) {
    console.log()
    showMessage("Registration failedd", err);
  }
});

document.getElementById("login-btn").addEventListener("click", async () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      showDashboard();
    } else showMessage(data.message || "Login failed");
  } catch (err) {
    showMessage("Error logging in");
  }
});

document.getElementById("logout-btn").addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

async function showDashboard() {
  try {
    const res = await fetch(`${API_BASE}/user/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    dashboard.style.display = "block";
    authSection.style.display = "none";
    welcome.textContent = `Welcome, ${data.role}`;

    if (role === "admin") {
      document.getElementById("admin-section").style.display = "block";
    }
  } catch (err) {
    showMessage("Error loading dashboard", err)
  }
}

document.getElementById("fetch-users").addEventListener("click", async () => {
  const res = await fetch(`${API_BASE}/users`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  const data = await res.json();
  const list = document.getElementById("user-list");
  list.innerHTML = "";
  data.forEach((u) => {
    const li = document.createElement("li");
    li.textContent = `${u.name} (${u.role})`;
    list.appendChild(li);
  });
});

document.getElementById("view-profile").addEventListener("click", async () => {
  const res = await fetch(`${API_BASE}/user/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  const data = await res.json();
  console.log("ok",data)
  document.getElementById("profile-info").innerHTML = `
    <p><b>Name:</b> ${data.name}</p>
    <p><b>Email:</b> ${data.email}</p>
    <p><b>Role:</b> ${data.role}</p>
  `;
});

document
  .getElementById("create-resource")
  .addEventListener("click", async () => {
    const title = document.getElementById("res-title").value;
    const res = await fetch(`${API_BASE}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ title }),
    });
    const data = await res.json();
    showMessage(data.message || "Task created");
    loadTasks();
  });

async function loadTasks() {
  const res = await fetch(`${API_BASE}/tasks`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  const data = await res.json();
  const list = document.getElementById("resources-list");
  list.innerHTML = "";
  data.forEach((r) => {
    const li = document.createElement("li");
    li.textContent = r.title;
    list.appendChild(li);
  });
}

function showMessage(text) {
  msgBox.textContent = text;
  msgBox.style.display = "block";
  setTimeout(() => (msgBox.style.display = "none"), 3000);
}
