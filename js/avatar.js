(() => {
    const frame = document.querySelector('.avatar-frame');
    const image = frame.querySelector('img');
    let settled = false;
    function finish(failed = false) {
        if (settled) return;
        settled = true;
        frame.classList.remove('is-loading');
        frame.classList.toggle('has-error', failed);
        frame.removeAttribute('aria-busy');
    }
    async function reveal() {
        try { await image.decode(); } catch { /* Fall back to the loaded image. */ }
        finish(image.naturalWidth === 0);
    }
    image.addEventListener('load', reveal, { once: true });
    image.addEventListener('error', () => finish(true), { once: true });
    if (image.complete) {
        if (!image.naturalWidth) finish(true);
        // Cached images render immediately, without an artificial loading delay.
        return;
    }
    frame.classList.add('is-loading');
    frame.setAttribute('aria-busy', 'true');
})();
