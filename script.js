const RECIPIENT_EMAIL = "sophie.boiral.art@gmail.com";

const appointments = {
  oeuvre: {
    number: "01",
    title: "Échanger autour d’une œuvre",
  },
  projet: {
    number: "02",
    title: "Imaginons un projet ensemble",
  },
  atelier: {
    number: "03",
    title: "Rencontre à l’atelier",
  },
};

let selectedAppointment = appointments.oeuvre;

const form = document.querySelector("#appointment-form");
const title = document.querySelector("#appointment-title");
const number = document.querySelector("#appointment-number");
const dateField = document.querySelector("#appointment-date");
const errorMessage = document.querySelector("#form-error");
const sentMessage = document.querySelector("#sent-message");

function tomorrowAsIsoDate() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const localDate = new Date(tomorrow.getTime() - tomorrow.getTimezoneOffset() * 60000);
  return localDate.toISOString().split("T")[0];
}

dateField.min = tomorrowAsIsoDate();

document.querySelectorAll(".choose-button").forEach((button) => {
  button.addEventListener("click", () => {
    selectedAppointment = appointments[button.dataset.appointment];
    number.textContent = selectedAppointment.number;
    title.textContent = selectedAppointment.title;
    sentMessage.hidden = true;
    document.querySelector("#demande").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const date = String(data.get("date") || "").trim();
  const time = String(data.get("time") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!name || !email || !date || !time) {
    errorMessage.textContent = "Merci de renseigner votre nom, votre email, une date et une heure souhaitées.";
    errorMessage.hidden = false;
    sentMessage.hidden = true;
    return;
  }

  if (!form.elements.email.validity.valid) {
    errorMessage.textContent = "Merci de renseigner une adresse email valide.";
    errorMessage.hidden = false;
    sentMessage.hidden = true;
    return;
  }

  errorMessage.hidden = true;
  sentMessage.hidden = false;

  const subject = `Demande de rendez-vous — ${selectedAppointment.title}`;
  const lines = [
    "Bonjour Sophie,",
    "",
    `Je souhaite prendre rendez-vous pour : ${selectedAppointment.title}.`,
    `Créneau souhaité : ${date} à ${time}.`,
    "",
    `Nom : ${name}`,
    `Email : ${email}`,
  ];

  if (phone) lines.push(`Téléphone : ${phone}`);
  if (message) lines.push("", "Ma demande :", message);
  lines.push("", "Bien cordialement,", name);

  window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
});
