(() => {

    class BookPanel {

        constructor () {
            this.panel = null
            this.data = {
                btnText: 'Achetez ce livre',
                author: 'Jean-Christophe Giuliani',
                language: 'Français',
                slideTitle: 'Egalement disponible au format éléctronique',
                format: 'Kindle',
                filePrice: '6,44',
                bookSize: '15,2 x 1,3 x 22,9 cm', 
                book1: {
                    title: 'Pour en finir<br> avec le chômage !',
                    imgSrc: '/src/img/book_1_250x382.jpg',
                    publishDate: '2020',
                    pageCount: '225',
                    isbn10: '2956073702',
                    isbn13: '978-2956073703',
                    price: '17,41',
                    fileWeigth: '6690',
                },
                book2: {
                    title: 'Pour vous réaliser autrement !',
                    imgSrc: '/src/img/book_2_250x382.jpg',
                    publishDate: '2020',
                    pageCount: '228',
                    isbn10: '2956073710',
                    isbn13: '978-2956073710',
                    price: '17,41',
                    fileWeigth: '6690',
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
            <h4 class="book__panel__title">${data[bookId].title}</h4>
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
                    <div>${data.slideTitle}</div>
                    <ul>
                        <li><span>Format :</span> Format ${data.format}</li>
                        <li><span>Taille du fichier :</span> ${data[bookId].fileWeigth} KB</li>
                        <li><span>Prix :</span> ${data.filePrice}€</li>
                    </ul>
                </div>
            </div>
            <div class="book__panel__action">
                <a href="/">${data.btnText}</a>
            </div>
            `
            div.innerHTML = markup.trim()
            document.querySelector('body').append(div)
            this.panel = div
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
                }, {once: true})
        }

        Init () {
            this.LocalStorage('isBookPannel', true)
            this.RanderPanel('book2')
            setTimeout(() => {
                this.IsScroll()
                this.ClosePanel()
            }, 1)
        }
    }

    new BookPanel().Init()
})()