// -------------------------------------------------------
// CAMPUSCONNECT - PROFESSIONAL FRONT-END PROTOTYPE
// 25 SAMPLE EVENTS
// -------------------------------------------------------

const imagePool = [
"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1535525153434-5f212f41a31c?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1100&q=85",
"https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1100&q=85"
];

const categoryIcons = {
Technical:"💻",
Sports:"⚽",
Music:"🎵",
Cultural:"🎭",
Dance:"💃",
Business:"🚀",
Arts:"🎨"
};

function futureDeadline(hours) {
    return new Date(Date.now() + hours * 60 * 60 * 1000).toISOString();
}

const starterEvents = [
{id:1,name:"National Tech Fest 2026",category:"Technical",date:"2026-11-20",time:"10:00",venue:"Main Auditorium",capacity:150,description:"Join students for coding competitions, robotics, innovation challenges and technology exhibitions.",deadline:futureDeadline(5),createdAt:Date.now()-1000,image:imagePool[0]},
{id:2,name:"Inter College Football Cup",category:"Sports",date:"2026-11-15",time:"09:00",venue:"University Sports Ground",capacity:100,description:"Show your sporting spirit at our annual football championship. Cheer for your college.",deadline:futureDeadline(48),createdAt:Date.now()-2000,image:imagePool[1]},
{id:3,name:"Campus Music Night",category:"Music",date:"2026-11-25",time:"17:00",venue:"Open Air Theatre",capacity:200,description:"An evening of live music, student bands, singing performances and unforgettable memories.",deadline:futureDeadline(120),createdAt:Date.now()-3000,image:imagePool[2]},
{id:4,name:"Cultural Celebration",category:"Cultural",date:"2026-12-02",time:"11:00",venue:"Central Lawn",capacity:120,description:"Celebrate culture through traditional performances, exhibitions, food and student activities.",deadline:futureDeadline(240),createdAt:Date.now()-4000,image:imagePool[3]},
{id:5,name:"Dance Championship",category:"Dance",date:"2026-12-08",time:"15:00",venue:"Dance Studio",capacity:80,description:"A campus dance competition featuring solo and group performances.",deadline:futureDeadline(12),createdAt:Date.now()-5000,image:imagePool[4]},
{id:6,name:"Startup & Business Summit",category:"Business",date:"2026-12-12",time:"10:30",venue:"Conference Hall",capacity:90,description:"Meet aspiring entrepreneurs and explore exciting business ideas.",deadline:futureDeadline(72),createdAt:Date.now()-6000,image:imagePool[5]},
{id:7,name:"Photography Exhibition",category:"Arts",date:"2026-11-22",time:"12:00",venue:"Arts Gallery",capacity:80,description:"Explore student photography, creative artwork and visual storytelling.",deadline:futureDeadline(96),createdAt:Date.now()-7000,image:imagePool[6]},
{id:8,name:"Robotics Challenge",category:"Technical",date:"2026-11-28",time:"09:30",venue:"Innovation Lab",capacity:100,description:"Build robots, compete in challenges and demonstrate your engineering skills.",deadline:futureDeadline(18),createdAt:Date.now()-8000,image:imagePool[7]},
{id:9,name:"Basketball Tournament",category:"Sports",date:"2026-12-04",time:"14:00",venue:"Indoor Sports Complex",capacity:120,description:"Experience an exciting inter-department basketball tournament.",deadline:futureDeadline(160),createdAt:Date.now()-9000,image:imagePool[8]},
{id:10,name:"Battle of the Bands",category:"Music",date:"2026-12-10",time:"18:00",venue:"Open Air Theatre",capacity:180,description:"Watch university bands compete in a live musical showdown.",deadline:futureDeadline(30),createdAt:Date.now()-10000,image:imagePool[9]},
{id:11,name:"Annual Fashion Show",category:"Cultural",date:"2026-12-15",time:"17:00",venue:"University Auditorium",capacity:150,description:"An exciting fashion showcase featuring student designers and models.",deadline:futureDeadline(200),createdAt:Date.now()-11000,image:imagePool[10]},
{id:12,name:"AI & Machine Learning Workshop",category:"Technical",date:"2026-12-18",time:"10:00",venue:"Computer Science Block",capacity:75,description:"Explore artificial intelligence, machine learning and practical projects.",deadline:futureDeadline(8),createdAt:Date.now()-12000,image:imagePool[11]},
{id:13,name:"Street Dance Battle",category:"Dance",date:"2026-12-20",time:"16:00",venue:"Open Air Stage",capacity:90,description:"An energetic street dance competition with amazing performers.",deadline:futureDeadline(36),createdAt:Date.now()-13000,image:imagePool[12]},
{id:14,name:"Entrepreneurship Bootcamp",category:"Business",date:"2026-12-22",time:"09:00",venue:"Innovation Centre",capacity:60,description:"Learn how to turn your business ideas into real startups.",deadline:futureDeadline(300),createdAt:Date.now()-14000,image:imagePool[13]},
{id:15,name:"Creative Arts Workshop",category:"Arts",date:"2026-12-26",time:"12:00",venue:"Creative Studio",capacity:50,description:"Try new creative techniques and learn from fellow student artists.",deadline:futureDeadline(400),createdAt:Date.now()-15000,image:imagePool[14]},
{id:16,name:"Cloud Computing Bootcamp",category:"Technical",date:"2026-11-19",time:"10:00",venue:"Technology Block",capacity:85,description:"Get hands-on experience with cloud platforms, deployment basics and real-world tech use cases.",deadline:futureDeadline(24),createdAt:Date.now()-16000,image:imagePool[15]},
{id:17,name:"Campus Badminton Open",category:"Sports",date:"2026-11-21",time:"09:30",venue:"Indoor Badminton Arena",capacity:72,description:"Compete in singles and doubles matches and represent your department on the court.",deadline:futureDeadline(48),createdAt:Date.now()-17000,image:imagePool[16]},
{id:18,name:"Acoustic Unplugged Evening",category:"Music",date:"2026-11-23",time:"18:00",venue:"Student Activity Centre",capacity:160,description:"Enjoy an intimate evening of acoustic sets, original songs and live student performances.",deadline:futureDeadline(72),createdAt:Date.now()-18000,image:imagePool[17]},
{id:19,name:"Global Village Festival",category:"Cultural",date:"2026-11-27",time:"11:00",venue:"University Central Plaza",capacity:220,description:"Explore traditions, clothing, stories and food from different cultures represented on campus.",deadline:futureDeadline(120),createdAt:Date.now()-19000,image:imagePool[18]},
{id:20,name:"Contemporary Dance Showcase",category:"Dance",date:"2026-11-30",time:"16:30",venue:"Performing Arts Hall",capacity:95,description:"Watch expressive contemporary routines and creative group choreography by campus performers.",deadline:futureDeadline(144),createdAt:Date.now()-20000,image:imagePool[19]},
{id:21,name:"Student Startup Pitch Day",category:"Business",date:"2026-12-03",time:"10:00",venue:"Business School Auditorium",capacity:110,description:"Hear student founders pitch practical ideas to a panel and connect with budding entrepreneurs.",deadline:futureDeadline(240),createdAt:Date.now()-21000,image:imagePool[20]},
{id:22,name:"Digital Art & Design Expo",category:"Arts",date:"2026-12-06",time:"12:30",venue:"Design Studio Gallery",capacity:100,description:"Discover digital illustrations, posters, visual experiments and creative student portfolios.",deadline:futureDeadline(300),createdAt:Date.now()-22000,image:imagePool[21]},
{id:23,name:"Cybersecurity Capture the Flag",category:"Technical",date:"2026-12-10",time:"09:00",venue:"Computer Science Lab 2",capacity:70,description:"Solve beginner-friendly security challenges, decode clues and work with a team to reach the flag.",deadline:futureDeadline(360),createdAt:Date.now()-23000,image:imagePool[22]},
{id:24,name:"Inter-Department Volleyball League",category:"Sports",date:"2026-12-13",time:"14:00",venue:"Outdoor Volleyball Court",capacity:140,description:"Bring your department team together for a lively campus volleyball league.",deadline:futureDeadline(420),createdAt:Date.now()-24000,image:imagePool[23]},
{id:25,name:"Open Mic & Poetry Evening",category:"Music",date:"2026-12-17",time:"17:30",venue:"Open Air Theatre",capacity:130,description:"Share poetry, spoken word, original music and stories in a relaxed open-mic atmosphere.",deadline:futureDeadline(480),createdAt:Date.now()-25000,image:imagePool[24]}
];

const EVENTS_KEY = "campusConnectEventsProfessional";
const REGISTRATIONS_KEY = "campusConnectRegistrationsProfessional";
const STARTER_VERSION_KEY = "campusConnectStarterVersion";

function loadJSON(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch (error) {
    return fallback;
  }
}

const savedEvents = loadJSON(EVENTS_KEY, null);
let events = Array.isArray(savedEvents) ? savedEvents : [...starterEvents];
let registrations = loadJSON(REGISTRATIONS_KEY, []);
let currentUser = null;
let selectedEventId = null;
let dashboardActiveCategory = "";

// Add the new sample events once for people who already opened an older version.
if (Number(localStorage.getItem(STARTER_VERSION_KEY) || 0) < 2) {
  const existingIds = new Set(events.map(event => Number(event.id)));
  starterEvents.filter(event => event.id >= 16 && !existingIds.has(Number(event.id)))
    .forEach(event => events.push({...event}));
  localStorage.setItem(STARTER_VERSION_KEY, "2");
}

// Make sure every starter event has its own thumbnail, including older saved events.
const usedThumbnailUrls = new Set();
events = events.map((event, index) => {
  let image = event.image;
  if (!image || usedThumbnailUrls.has(image)) {
    image = imagePool.find(candidate => !usedThumbnailUrls.has(candidate)) || imagePool[index % imagePool.length];
  }
  usedThumbnailUrls.add(image);
  return {...event, image};
});

function saveData() {
  localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
  localStorage.setItem(REGISTRATIONS_KEY, JSON.stringify(registrations));
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  }[character]));
}

function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth()+1).padStart(2,"0");
  const day = String(date.getDate()).padStart(2,"0");
  return `${year}-${month}-${day}`;
}

function formatDate(dateString) {
  if (!dateString) return "Date not set";
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-IN", {
    day:"numeric",
    month:"short",
    year:"numeric"
  });
}

function formatTime(timeString) {
  if (!timeString) return "Time not set";
  const [hour, minute] = timeString.split(":").map(Number);
  const date = new Date();
  date.setHours(hour, minute, 0, 0);
  return date.toLocaleTimeString("en-IN", {
    hour:"numeric",
    minute:"2-digit"
  });
}

function getRegistrationCount(eventId) {
  return registrations.filter(registration =>
    registration.eventId === eventId &&
    registration.status === "Confirmed"
  ).length;
}

function getEventStatus(event) {
  if (event.date < getToday()) return "Completed";
  if (new Date(event.deadline).getTime() < Date.now()) return "Registration Closed";
  if (getRegistrationCount(event.id) >= Number(event.capacity)) return "Full";
  return "Open";
}

function getAvailableSeats(event) {
  return Math.max(0, Number(event.capacity) - getRegistrationCount(event.id));
}

function getDeadlineText(event) {
  const remaining = new Date(event.deadline).getTime() - Date.now();

  if (remaining <= 0) return "Registration closed";

  const hours = Math.floor(remaining / 3600000);

  if (hours < 1) return "Closing in less than an hour";
  if (hours < 24) return `Closes in ${hours} hour${hours===1?"":"s"}`;

  const days = Math.ceil(hours / 24);
  return `Closes in ${days} day${days===1?"":"s"}`;
}

function getUniqueImage(eventName="Campus Event", category="Events") {
  const usedImages = new Set(events.map(event => event.image).filter(Boolean));
  const availableImage = imagePool.find(image => !usedImages.has(image));

  if (availableImage) return availableImage;

  // Create a different original thumbnail if the image library is exhausted.
  const seed = Array.from(String(eventName) + String(category))
    .reduce((sum, character) => sum + character.charCodeAt(0), 0);

  const hue = seed % 360;
  const title = escapeHTML(eventName).slice(0, 34);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="620" viewBox="0 0 1100 620"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="hsl(${hue},65%,28%)"/><stop offset="1" stop-color="hsl(${(hue+65)%360},70%,15%)"/></linearGradient></defs><rect width="1100" height="620" fill="url(#g)"/><circle cx="900" cy="130" r="230" fill="white" opacity=".07"/><circle cx="180" cy="570" r="270" fill="white" opacity=".06"/><text x="70" y="280" fill="white" font-family="Arial,sans-serif" font-size="54" font-weight="700">${title}</text><text x="74" y="345" fill="#dbeafe" font-family="Arial,sans-serif" font-size="27" letter-spacing="7">${escapeHTML(category).toUpperCase()}</text></svg>`;

  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function showMessage(message, type="success") {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.remove("hidden","error");

  if (type === "error") toast.classList.add("error");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 3200);
}

function showPage(pageId, button) {
  if (pageId === "admin" &&
      (!currentUser || currentUser.role !== "organizer")) {
    showMessage("Only the organizer can manage events.", "error");
    return;
  }

  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
  });

  const page = document.getElementById(pageId);
  if (page) page.classList.add("active");

  document.querySelectorAll(".nav-btn").forEach(navButton => {
    navButton.classList.remove("active");

    const action = navButton.getAttribute("onclick") || "";

    if (action.includes(`'${pageId}'`)) {
      navButton.classList.add("active");
    }
  });

  if (button && button.classList.contains("nav-btn")) {
    button.classList.add("active");
  }

  if (pageId === "dashboard") renderDashboard();
  if (pageId === "events") renderEvents();
  if (pageId === "registrations") renderRegistrationTable();
  if (pageId === "admin") renderAdmin();

  window.scrollTo({top:0,behavior:"smooth"});
}

/* CATEGORY FILTERING */

function setCategoryFilter(category) {
  dashboardActiveCategory = category;

  const filter = document.getElementById("categoryFilter");

  if (filter) {
    filter.value = category;
  }

  // Keep the category buttons on both pages synchronised.
  document.querySelectorAll(".category-chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.category === category);
  });

  renderDashboardEvents();
  renderEvents();
}

/* DASHBOARD */

function renderDashboard() {
  if (!currentUser) return;

  document.getElementById("welcomeTitle").textContent =
    currentUser.role === "organizer"
      ? "Welcome, Organizer!"
      : `Welcome back, ${currentUser.name}!`;

  const myRegistrations = registrations.filter(reg =>
    reg.email === currentUser.email &&
    reg.status === "Confirmed"
  );

  document.getElementById("totalEvents").textContent = events.length;

  document.getElementById("totalRegistrations").textContent =
    currentUser.role === "organizer"
      ? registrations.length
      : registrations.filter(reg => reg.email === currentUser.email).length;

  document.getElementById("confirmedRegistrations").textContent =
    currentUser.role === "organizer"
      ? registrations.filter(reg => reg.status === "Confirmed").length
      : myRegistrations.length;

  document.getElementById("upcomingEvents").textContent =
    events.filter(event => event.date >= getToday()).length;

  renderDashboardEvents();
}

function renderDashboardEvents() {
  const filtered = events.filter(event =>
    !dashboardActiveCategory ||
    event.category === dashboardActiveCategory
  );

  const soon = filtered
    .filter(event =>
      new Date(event.deadline).getTime() > Date.now() &&
      event.date >= getToday()
    )
    .sort((a,b) =>
      new Date(a.deadline) - new Date(b.deadline)
    )
    .slice(0,3);

  document.getElementById("endingSoonEvents").innerHTML =
    soon.length
      ? soon.map(createEventCard).join("")
      : `<div class="empty">No events are closing soon in this category.</div>`;

  const latest = [...filtered].sort((a,b) =>
    (b.createdAt||0) - (a.createdAt||0)
  );

  document.getElementById("dashboardEvents").innerHTML =
    latest.length
      ? latest.map(createEventCard).join("")
      : `<div class="empty">No events found in this category.</div>`;

  const heading = document.querySelector("#dashboard .dashboard-heading h2");

  if (heading) {
    heading.textContent = dashboardActiveCategory
      ? `${dashboardActiveCategory} Events`
      : "Events in Category / Recently Added";
  }
}

/* EVENT CARDS */

function createEventCard(event) {
  const status = getEventStatus(event);
  const seats = getAvailableSeats(event);
  const icon = categoryIcons[event.category] || "✨";

  const safeName = escapeHTML(event.name);
  const safeCategory = escapeHTML(event.category);
  const safeVenue = escapeHTML(event.venue);
  const image = escapeHTML(event.image || imagePool[0]);

  const countdownClass =
    status === "Registration Closed" ||
    status === "Full" ||
    status === "Completed"
      ? "countdown closed"
      : (new Date(event.deadline)-Date.now() < 86400000
          ? "countdown"
          : "countdown safe");

  return `
    <article class="event-card">
      <div class="event-cover">
        <img src="${image}" alt="${safeName}" loading="lazy"
             onerror="this.style.display='none'">
        <span class="image-category">${icon} ${safeCategory}</span>
      </div>

      <div class="event-content">
        <span class="category-tag">${safeCategory}</span>

        <h3>${safeName}</h3>

        <div class="event-meta">
          📅 ${formatDate(event.date)} · ${formatTime(event.time)}<br>
          📍 ${safeVenue}<br>
          🎟️ ${seats} seats available
        </div>

        <span class="${countdownClass}">
          ${escapeHTML(status === "Open" ? getDeadlineText(event) : status)}
        </span>

        <div class="event-actions">
          <button class="btn secondary" onclick="viewEvent(${Number(event.id)})">
            View Details
          </button>

          <button class="btn"
            onclick="registerForEvent(${Number(event.id)})"
            ${status !== "Open" || currentUser?.role === "organizer" ? "disabled" : ""}>
            Register
          </button>
        </div>
      </div>
    </article>`;
}

/* DISCOVER EVENTS */

function renderEvents() {
  const search = (
    document.getElementById("searchInput")?.value || ""
  ).trim().toLowerCase();

  const category =
    document.getElementById("categoryFilter")?.value || "";

  const filtered = events.filter(event => {
    const matchesSearch =
      event.name.toLowerCase().includes(search) ||
      event.venue.toLowerCase().includes(search);

    const matchesCategory =
      !category || event.category === category;

    return matchesSearch && matchesCategory;
  }).sort((a,b) =>
    new Date(a.date) - new Date(b.date)
  );

  document.getElementById("eventGrid").innerHTML =
    filtered.length
      ? filtered.map(createEventCard).join("")
      : `<div class="empty">No events match your search. Try another keyword or category.</div>`;

  const resultsNote = document.getElementById("resultsNote");

  if (resultsNote) {
    resultsNote.textContent =
      `Showing ${filtered.length} of ${events.length} events`;
  }
}

/* EVENT DETAILS */

function viewEvent(id) {
  const event = events.find(item => item.id === id);

  if (!event) return;

  const status = getEventStatus(event);

  const canRegister =
    status === "Open" &&
    currentUser?.role !== "organizer";

  document.getElementById("eventDetails").innerHTML = `
    <div class="detail-layout">

      <div>
        <div class="detail-cover">
          <img src="${escapeHTML(event.image || imagePool[0])}"
               alt="${escapeHTML(event.name)}"
               onerror="this.style.display='none'">
        </div>

        <div class="panel detail-info">
          <span class="category-tag">${escapeHTML(event.category)}</span>
          <h1>${escapeHTML(event.name)}</h1>
          <p>${escapeHTML(event.description)}</p>
        </div>
      </div>

      <div class="panel detail-info">
        <h2>Event Information</h2>

        <p><strong>Date:</strong> ${formatDate(event.date)}</p>
        <p><strong>Time:</strong> ${formatTime(event.time)}</p>
        <p><strong>Venue:</strong> ${escapeHTML(event.venue)}</p>
        <p><strong>Category:</strong> ${escapeHTML(event.category)}</p>
        <p><strong>Available seats:</strong> ${getAvailableSeats(event)}</p>
        <p><strong>Registration:</strong> ${escapeHTML(status)}</p>
        <p><strong>Deadline:</strong>
          ${new Date(event.deadline).toLocaleString("en-IN",{
            dateStyle:"medium",
            timeStyle:"short"
          })}
        </p>

        ${canRegister
          ? `<button class="btn full" onclick="registerForEvent(${Number(event.id)})">Register Now →</button>`
          : `<p class="countdown closed">${escapeHTML(status)}</p>`
        }
      </div>
    </div>`;

  showPage("details");
}

/* REGISTRATION */

function registerForEvent(id) {
  const event = events.find(item => item.id === id);

  if (!event) return;

  if (!currentUser || currentUser.role === "organizer") {
    showMessage("Please log in as a student to register.", "error");
    return;
  }

  if (getEventStatus(event) !== "Open") {
    showMessage("Registration is not available for this event.", "error");
    return;
  }

  const alreadyRegistered = registrations.some(reg =>
    reg.eventId === id &&
    reg.email === currentUser.email &&
    reg.status === "Confirmed"
  );

  if (alreadyRegistered) {
    showMessage("You are already registered for this event.", "error");
    return;
  }

  selectedEventId = id;

  document.getElementById("registrationEventTitle").textContent =
    `Register for ${event.name}`;

  document.getElementById("studentEmail").value = currentUser.email;
  document.getElementById("studentName").value = currentUser.name || "";

  // The registration page only opens after the Register button is clicked.
  showPage("register");
}

function renderRegistrationTable() {
  const visible =
    currentUser?.role === "organizer"
      ? registrations
      : registrations.filter(reg => reg.email === currentUser?.email);

  const body = document.getElementById("registrationTable");

  body.innerHTML = visible.length
    ? visible.map(reg => {
        const event = events.find(item => item.id === reg.eventId);

        const statusClass =
          reg.status === "Cancelled"
            ? "status cancelled"
            : "status";

        return `
          <tr>
            <td>${escapeHTML(event?.name || "Deleted event")}</td>
            <td>${event ? formatDate(event.date) : "—"}</td>
            <td>${escapeHTML(reg.name)}</td>
            <td><span class="${statusClass}">${escapeHTML(reg.status)}</span></td>
            <td>
              ${reg.status === "Confirmed" && currentUser?.role !== "organizer"
                ? `<button class="btn danger small" onclick="cancelRegistration(${Number(reg.id)})">Cancel</button>`
                : "—"
              }
            </td>
          </tr>`;
      }).join("")
    : `<tr><td colspan="5" style="text-align:center;color:#94a3b8">No registrations yet.</td></tr>`;
}

function cancelRegistration(id) {
  const registration = registrations.find(reg => reg.id === id);

  if (!registration || registration.status !== "Confirmed") return;

  if (!confirm("Cancel this event registration?")) return;

  registration.status = "Cancelled";

  saveData();
  renderRegistrationTable();
  renderDashboard();
  renderEvents();

  showMessage("Your registration has been cancelled.");
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const selectedEvent = events.find(item => item.id === selectedEventId);

  if (!selectedEvent || getEventStatus(selectedEvent) !== "Open") {
    showMessage("This event is no longer accepting registrations.", "error");
    return;
  }

  if (getRegistrationCount(selectedEventId) >= Number(selectedEvent.capacity)) {
    showMessage("Sorry, this event is full.", "error");
    return;
  }

  const email =
    document.getElementById("studentEmail").value.trim().toLowerCase();

  if (registrations.some(reg =>
    reg.eventId === selectedEventId &&
    reg.email.toLowerCase() === email &&
    reg.status === "Confirmed"
  )) {
    showMessage("This email is already registered for the event.", "error");
    return;
  }

  registrations.push({
    id:Date.now(),
    eventId:selectedEventId,
    name:document.getElementById("studentName").value.trim(),
    regNo:document.getElementById("studentId").value.trim(),
    email,
    phone:document.getElementById("studentPhone").value.trim(),
    status:"Confirmed",
    createdAt:Date.now()
  });

  saveData();

  this.reset();

  showMessage("Registration confirmed! See you at the event.");

  showPage("registrations");
  renderDashboard();
  renderEvents();
});

/* ORGANIZER EVENT MANAGEMENT */

function getLocalDateTimeValue(date) {
  const local = new Date(
    date.getTime() - date.getTimezoneOffset()*60000
  );

  return local.toISOString().slice(0,16);
}

function showEventForm() {
  if (!currentUser || currentUser.role !== "organizer") return;

  document.getElementById("eventForm").reset();
  document.getElementById("editEventId").value = "";

  document.getElementById("eventFormHeading").textContent = "Add New Event";
  document.getElementById("saveEventButton").textContent = "Add Event";

  document.getElementById("cancelEditButton").classList.add("hidden");

  document.getElementById("eventDate").min = getToday();

  document.getElementById("eventDeadline").min =
    getLocalDateTimeValue(new Date());
}

function resetEventForm() {
  document.getElementById("eventForm").reset();
  document.getElementById("editEventId").value = "";

  document.getElementById("eventFormHeading").textContent = "Add New Event";
  document.getElementById("saveEventButton").textContent = "Add Event";

  document.getElementById("cancelEditButton").classList.add("hidden");
}

document.getElementById("eventForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const editId = document.getElementById("editEventId").value;

  const oldEvent = editId
    ? events.find(item => item.id === Number(editId))
    : null;

  const eventDate = document.getElementById("eventDate").value;
  const deadline = document.getElementById("eventDeadline").value;
  const capacity = Number(document.getElementById("eventCapacity").value);

  if (eventDate < getToday()) {
    showMessage("Event date cannot be in the past.", "error");
    return;
  }

  if (!deadline || new Date(deadline).getTime() <= Date.now()) {
    showMessage("Choose a future registration deadline.", "error");
    return;
  }

  if (new Date(deadline).getTime() >
      new Date(eventDate + "T23:59:59").getTime()) {
    showMessage("Registration deadline cannot be after the event date.", "error");
    return;
  }

  if (!Number.isInteger(capacity) || capacity < 1) {
    showMessage("Enter a valid number of seats.", "error");
    return;
  }

  if (oldEvent && capacity < getRegistrationCount(oldEvent.id)) {
    showMessage("Capacity cannot be less than confirmed registrations.", "error");
    return;
  }

  const newEvent = {
    id:oldEvent ? oldEvent.id : Date.now(),

    name:document.getElementById("eventName").value.trim(),

    category:document.getElementById("eventCategory").value,

    date:eventDate,

    time:document.getElementById("eventTime").value,

    venue:document.getElementById("eventVenue").value.trim(),

    capacity,

    deadline:new Date(deadline).toISOString(),

    description:document.getElementById("eventDescription").value.trim(),

    createdAt:oldEvent ? oldEvent.createdAt : Date.now(),

    image:oldEvent
      ? oldEvent.image
      : getUniqueImage(
          document.getElementById("eventName").value.trim(),
          document.getElementById("eventCategory").value
        )
  };

  if (oldEvent) {
    const index = events.findIndex(item => item.id === oldEvent.id);
    events[index] = newEvent;
  } else {
    events.push(newEvent);
  }

  saveData();
  resetEventForm();
  renderAdmin();
  renderDashboard();
  renderEvents();

  showMessage(
    oldEvent
      ? "Event updated successfully."
      : "New event added successfully."
  );
});

function editEvent(id) {
  const event = events.find(item => item.id === id);

  if (!event) return;

  showPage("admin");

  document.getElementById("editEventId").value = event.id;
  document.getElementById("eventName").value = event.name;
  document.getElementById("eventCategory").value = event.category;
  document.getElementById("eventDate").value = event.date;
  document.getElementById("eventTime").value = event.time;
  document.getElementById("eventVenue").value = event.venue;
  document.getElementById("eventCapacity").value = event.capacity;

  document.getElementById("eventDeadline").value =
    getLocalDateTimeValue(new Date(event.deadline));

  document.getElementById("eventDescription").value = event.description;

  document.getElementById("eventFormHeading").textContent = "Update Event";
  document.getElementById("saveEventButton").textContent = "Save Changes";

  document.getElementById("cancelEditButton").classList.remove("hidden");

  document.getElementById("eventForm").scrollIntoView({
    behavior:"smooth",
    block:"center"
  });
}

function deleteEvent(id) {
  const event = events.find(item => item.id === id);

  if (!event) return;

  if (!confirm(`Delete "${event.name}" and its registrations?`)) return;

  events = events.filter(item => item.id !== id);

  registrations = registrations.filter(reg => reg.eventId !== id);

  saveData();

  renderAdmin();
  renderDashboard();
  renderEvents();

  showMessage("Event deleted.");
}

function renderAdmin() {
  if (!currentUser || currentUser.role !== "organizer") return;

  document.getElementById("adminTotalEvents").textContent = events.length;

  document.getElementById("adminTotalRegistrations").textContent =
    registrations.length;

  document.getElementById("adminConfirmed").textContent =
    registrations.filter(reg => reg.status === "Confirmed").length;

  document.getElementById("adminSeats").textContent =
    events.reduce((total,event) => total + getAvailableSeats(event),0);

  const table = document.getElementById("adminEventTable");

  table.innerHTML = events.length
    ? events.map(event => `
        <tr>
          <td>${escapeHTML(event.name)}</td>
          <td>${escapeHTML(event.category)}</td>
          <td>${formatDate(event.date)}</td>
          <td>${getRegistrationCount(event.id)} / ${Number(event.capacity)}</td>
          <td>
            <button class="btn secondary small" onclick="editEvent(${Number(event.id)})">Edit</button>
            <button class="btn danger small" onclick="deleteEvent(${Number(event.id)})">Delete</button>
          </td>
        </tr>`
      ).join("")
    : `<tr><td colspan="5">No events added yet.</td></tr>`;
}

/* LOGIN */

function login(email, password) {
  if (email === "student@campus.com" && password === "student123") {
    currentUser = {
      name:"Student",
      email,
      role:"student"
    };
  }

  else if (email === "admin@campus.com" && password === "admin123") {
    currentUser = {
      name:"Campus Admin",
      email,
      role:"organizer"
    };
  }

  else {
    showMessage(
      "Incorrect login details. Use one of the demo accounts shown below.",
      "error"
    );
    return;
  }

  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  document.getElementById("userName").textContent = currentUser.name;

  document.getElementById("userRole").textContent =
    currentUser.role === "organizer"
      ? "Event Organizer"
      : "Student Account";

  document.getElementById("avatar").textContent =
    currentUser.name.charAt(0).toUpperCase();

  document.querySelectorAll(".admin-only").forEach(button => {
    button.classList.toggle(
      "hidden",
      currentUser.role !== "organizer"
    );
  });

  document.getElementById("confirmedRegistrations")
    .parentElement.querySelector("p").textContent =
      currentUser.role === "organizer"
        ? "Confirmed Registrations"
        : "My Confirmed";

  showPage("dashboard");

  renderDashboard();

  if (currentUser.role === "organizer") {
    renderAdmin();
  }
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  login(
    document.getElementById("loginEmail").value.trim().toLowerCase(),
    document.getElementById("loginPassword").value
  );
});

function logout() {
  currentUser = null;
  selectedEventId = null;

  document.getElementById("app").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");

  document.getElementById("loginForm").reset();

  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
  });

  document.getElementById("dashboard").classList.add("active");
}

/* SEARCH AND CATEGORY FILTER LISTENERS */

document.getElementById("searchInput").addEventListener("input", renderEvents);

document.getElementById("categoryFilter").addEventListener("change", function() {
  setCategoryFilter(this.value);
});

// Start with the login page.
// Events are ready when the student signs in.
renderDashboardEvents();
