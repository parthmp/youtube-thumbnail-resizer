const slider = document.getElementById("slider");
const value = document.getElementById("value");

chrome.storage.sync.get(["columns"], (result) => {
    const cols = result.columns || 6;
    slider.value = cols;
    value.textContent = cols;
});

slider.addEventListener("input", () => {

    const cols = slider.value;

    value.textContent = cols;

    chrome.storage.sync.set({
        columns: cols
    });
});