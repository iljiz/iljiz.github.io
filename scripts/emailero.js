const emailIcon = document.querySelector(".email-icon");
const emailAddress = document.getElementById("email");

function encodePart(str) {
  return btoa(str.split("").reverse().join(""));
}

function decodePart(encoded) {
  return atob(encoded).split("").reverse().join("");
}

const encodedUser = "emlqbGk=";
const encodedAt = "QA==";
const encodedDomain = "bm90b3Jw";
const encodedDot = "Lg==";
const encodedTld = "ZW0=";

const emailUser = decodePart(encodedUser);
const emailAt = decodePart(encodedAt);
const emailDomain = decodePart(encodedDomain);
const emailDot = decodePart(encodedDot);
const emailTld = decodePart(encodedTld);
const fullEmail = emailUser + emailAt + emailDomain + emailDot + emailTld;

emailAddress.textContent = fullEmail;
emailAddress.href = `mailto:${fullEmail}`;

emailIcon.addEventListener("click", () => {
  if (
    emailAddress.style.display === "none" ||
    emailAddress.style.display === ""
  ) {
    emailAddress.style.display = "inline";
  } else {
    emailAddress.style.display = "none";
  }
});
