const slider = document.getElementById("slider");
const value = document.getElementById("value");
const shortsCheckbox = document.getElementById("shorts-checkbox");

chrome.storage.sync.get(["columns"], (result) => {
    const cols = result.columns || 6;
    slider.value = cols;
    value.textContent = cols;
});
chrome.storage.sync.get(["showShorts"], (result) => {
    shortsCheckbox.checked = result.showShorts;
});

slider.addEventListener("input", () => {

    const cols = slider.value;

    value.textContent = cols;

    chrome.storage.sync.set({
        columns: cols
    });
});

shortsCheckbox.addEventListener("change", () => {
	chrome.storage.sync.set({
        showShorts: shortsCheckbox.checked
    });
});