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

function toggleShorts(hide) {

	const styleId = "show-shorts";
	let style = document.getElementById(styleId);

	if (!style) {
		style = document.createElement("style");
		style.id = styleId;
		document.head.appendChild(style);
	}

	let showShortsDisplay = hide ? "none" : "block";

	style.textContent = `
		ytd-rich-section-renderer {
			display: ${showShortsDisplay} !important;
		}`;

}

function init() {
    chrome.storage.sync.get(["columns"], (result) => {
        applyColumns(result.columns || 6);
    });
	chrome.storage.sync.get(["showShorts"], (result) => {
        toggleShorts(result.showShorts);
    });
}

init();

chrome.storage.onChanged.addListener((changes) => {
    if (changes.columns) {
        applyColumns(changes.columns.newValue);
    }
	if(changes.showShorts){
		toggleShorts(changes.showShorts.newValue);
	}
});

document.addEventListener("yt-navigate-finish", init);
