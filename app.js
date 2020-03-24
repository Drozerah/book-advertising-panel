(() => {

    class BookPanel {

        constructor () {
            this.panel = null
            this.smallPanel = null
            this.data = {
                btnText: 'Achetez ce livre',
                btnTextSecondary: 'Acheter ce livre',
                author: 'Jean-Christophe Giuliani',
                language: 'Français',
                slideSubTitle: 'Egalement disponible au format éléctronique',
                format: 'Kindle',
                filePrice: '6,44',
                bookSize: '15,2 x 1,3 x 22,9 cm', 
                book1: {
                    slideTitle: 'Pour en finir<br> avec le chômage !',
                    bookTitle: 'En finir avec le chômage : un choix de société !',
                    imgSrc: '/src/img/book_1_250x382.jpg',
                    publishDate: '2020',
                    pageCount: '225',
                    isbn10: '2956073702',
                    isbn13: '978-2956073703',
                    price: '17,41',
                    fileWeigth: '6690',
                    linkHref:'/'
                },
                book2: {
                    slideTitle: 'Pour vous réaliser autrement !',
                    bookTitle: 'Satisfaire nos besoins : un choix de société !',
                    imgSrc: '/src/img/book_2_250x382.jpg',
                    publishDate: '2020',
                    pageCount: '228',
                    isbn10: '2956073710',
                    isbn13: '978-2956073710',
                    price: '17,41',
                    fileWeigth: '6690',
                    linkHref:'/'
                }
            }
        }

        LocalStorage (id, value) {
            window.localStorage.setItem(id, value)
        }

        RanderPanel (bookId) {
            const data = this.data
            const div = document.createElement('div')
            div.classList.add('book__panel')
            const markup = `
            <i class="book__panel--close material-icons" title="Fermer">close</i>
            <h4 class="book__panel__title">${data[bookId].slideTitle}</h4>
            <div class="book__panel__slider">
                <div class="book__panel__slider__img">
                    <img src="${data[bookId].imgSrc}" alt="book cover image">
                    <i class="material-icons">play_arrow</i>
                </div>
                <div class="book__panel__slider__text">
                    <ul>
                        <li><span>Broché :</span> ${data[bookId].pageCount} pages</li>
                        <li><span>Auteur :</span> ${data.author}</li>
                        <li><span>Parution :</span> ${data[bookId].publishDate}</li>
                        <li><span>Langue :</span> ${data.language}</li>
                        <li><span>Dimensions :</span> ${data.bookSize}</li>
                        <li><span>ISBN-10 :</span> ${data[bookId].isbn10}</li>
                        <li><span>ISBN-13 :</span> ${data[bookId].isbn13}</li>
                        <li><span>Prix :</span> ${data[bookId].price}€</li>
                    </ul>
                    <div>${data.slideSubTitle}</div>
                    <ul>
                        <li><span>Format :</span> Format ${data.format}</li>
                        <li><span>Taille du fichier :</span> ${data[bookId].fileWeigth} KB</li>
                        <li><span>Prix :</span> ${data.filePrice}€</li>
                    </ul>
                </div>
            </div>
            <div class="book__panel__action">
                <a href="${data[bookId].linkHref}" target="_blank" rel="noreferrer">${data.btnText}</a>
            </div>
            `
            div.innerHTML = markup.trim()
            document.querySelector('body').append(div)
            this.panel = div
        }

        RanderSmallPanel (bookId) {
            const data = this.data
            const div = document.createElement('div')
            div.classList.add('book__small__panel')
            const markup = `
            ${data[bookId].bookTitle}<a href="${data[bookId].linkHref}" target="_blank" rel="noreferrer">${data.btnTextSecondary}</a>
            `
            div.innerHTML = markup.trim()
            document.querySelector('body').append(div)
            this.smallPanel = div
        }

        IsScroll () {
            window.addEventListener('scroll', () => {
                this.panel.classList.add('book__panel--active')
            }, {once: true})
        }

        ClosePanel () {
            this.panel
                .querySelector('.book__panel--close')
                .addEventListener('click', () => {
                    this.panel.classList.remove('book__panel--active')
                    this.isClosed()
                })
        }

        isClosed () {
            this.panel
                .addEventListener('transitionend', () => {
                    this.LocalStorage('isBookPannel', false)
                    this.smallPanel.classList.add('book__small__panel--active')
                }, {once: true})
        }

        Init () {
            this.LocalStorage('isBookPannel', true)
            this.RanderPanel('book1')
            this.RanderSmallPanel('book1')
            setTimeout(() => {
                this.IsScroll()
                this.ClosePanel()
            }, 1)
        }
    }

    new BookPanel().Init()
})()