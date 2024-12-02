window.onload = function() {
    const container = document.getElementById('calendar-container');
    const currentDate = new Date();

    for (let i = 1; i <= 24; i++) {
        let dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';
        dayDiv.textContent = i;
        let dateOfDecember = new Date(new Date().getFullYear(), 11, i); // December i-th

        if (currentDate < dateOfDecember) {
            dayDiv.classList.add('hidden');
        } else {
            dayDiv.addEventListener('click', function() {
                window.open(`pdfji/Day${i}.pdf`, '_blank');
            });
        }

        container.appendChild(dayDiv);
    }
};
