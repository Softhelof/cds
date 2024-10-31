'use strict';

document.querySelector('#frmCD').addEventListener('submit', function(e) {
    e.preventDefault();
    const trNew = `
        <tr>
            <td>${e.target.txtAuthor.value}</td>
            <td>${e.target.txtTitle.value}</td>
            <td class="right">${parseInt(e.target.txtYear.value)}</td>
            <td class="right"><img src="img/trash.png" onclick="this.parentElement.parentElement.remove();"></td>
        </tr>
    `;
    document.querySelector('table > tbody').innerHTML += trNew;
    document.querySelector('table').classList.add('visible');

    // The form is reset
    this.reset();
});