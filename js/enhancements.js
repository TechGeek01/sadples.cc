// Collapse detail menu blocks when clicking outside of them
document.addEventListener('click', (e) => {
	document.querySelectorAll('menu nav details[open]').forEach((details) => {
		if (!details.contains(e.target)) {
			details.removeAttribute('open');
		}
	});
});