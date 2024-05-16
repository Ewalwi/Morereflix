document.addEventListener('DOMContentLoaded', function() {
    links = [{
        "title": "BBC channel",
        "url": "https://www.bbc.co.uk/",
        "description": "Click here to access the BBC offical website"
    }, {
        "title": "BTN channel",
        "url": "https://www.abc.net.au/btn",
        "description": "Click here to access the BTN channel's website"
    }, {
        "title": "CNN channel",
        "url": "https://edition.cnn.com/",
        "description": "Click here to access the CNN channel"
    }, {
        "title": "AudioLingua",
        "url": "https://audio-lingua.ac-versailles.fr/",
        "description": "Click here to access the AudioLingua website"
    }];

    loaderHTML = '<div class="loader"></div>';

    menu = document.querySelector(".cardsMenu");

    links.forEach(link => {
        const card = document.createElement('div');
        card.classList.add('card');

        const container = document.createElement('div');
        container.classList.add('Container');
        card.appendChild(container)

        const title = document.createElement('h2');
        title.textContent = link.title;
        container.appendChild(title);

        const description = document.createElement('h4');
        description.textContent = link.description;
        container.appendChild(description);

        const button = document.createElement('button');
        button.classList.add('btnCard');
        button.textContent = 'Go';
        button.addEventListener('click', () => {
            container.innerHTML = loaderHTML;
            waiter = document.createElement('h3');
            waiter.textContent = 'Redirecting in 2 seconds...';
            container.appendChild(waiter);
            setTimeout(function() {
                window.open(link.url);
                window.location.reload();
              }, 2000);
            
        });
        container.appendChild(button);

        card.appendChild(container);

        menu.appendChild(card);
    });
});