const themeSwitch = document.getElementById("switch");
const html = document.documentElement;

const localTheme = localStorage.getItem("theme");

const switchLocalTheme = (theme) => {
  if (theme && theme === "dark") {
    html.classList.add("dark");
    themeSwitch.checked = true;
  } else {
    html.classList.remove("dark");
    themeSwitch.checked = false;
  }
};

switchLocalTheme(localTheme);

themeSwitch.addEventListener("change", ({ target: { checked } }) => {
  console.log(checked);
  if (checked) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});
