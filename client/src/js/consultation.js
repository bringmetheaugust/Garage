document.getElementById('consultation').addEventListener('submit', async e => {
    e.preventDefault();
    
    try {
        const res = await fetch('/api/callme', {
            method: 'POST',
            body: JSON.stringify({
                phone: document.getElementById('consultation-tel').value,
                name: document.getElementById('consultation-name').value
            })
        });

        console.log(res);
    } catch(err) {
        console.err(err);
    }
});
