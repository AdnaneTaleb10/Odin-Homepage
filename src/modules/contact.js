const feedback = document.querySelector("#copy-feedback");

export default async function copyDiscordUserName() {
  try {
    await navigator.clipboard.writeText("adnen_taleb");
    feedback.style.visibility = "visible";
    setTimeout(() => {
      feedback.style.visibility = "hidden";
    }, 2000); 
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
