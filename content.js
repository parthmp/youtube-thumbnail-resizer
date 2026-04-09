function applyColumns(columns) {

    const styleId = "yt-thumb-resize-style";
    let style = document.getElementById(styleId);

    if (!style) {
        style = document.createElement("style");
        style.id = styleId;
        document.head.appendChild(style);
    }

    style.textContent = `
        ytd-rich-grid-renderer {
            --ytd-rich-grid-items-per-row: ${columns} !important;
        }
    `;
}

function init() {
    chrome.storage.sync.get(["columns"], (result) => {
        applyColumns(result.columns || 6);
    });
}

init();

chrome.storage.onChanged.addListener((changes) => {
    if (changes.columns) {
        applyColumns(changes.columns.newValue);
    }
});

document.addEventListener("yt-navigate-finish", init);