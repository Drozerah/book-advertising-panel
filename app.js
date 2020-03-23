(() => {

    class BookPanel {

        constructor () {
            this.panel = null
        }

        LocalStorage (id, value) {
            window.localStorage.setItem(id, value)
        }

        RanderPanel () {
            const div = document.createElement('div')
            div.classList.add('book__panel')
            const markup = `
            <i class="book__panel--close material-icons" title="Fermer">close</i>
            <h4 class="book__panel__title">Pour en finir<br> avec le chômage !</h4>
            <div class="book__panel__slider">
                <div class="book__panel__slider__img">
                    <img src="/src/img/book_1_250x382.jpg" alt="book cover image">
                    <i class="material-icons">play_arrow</i>
                </div>
                <div class="book__panel__slider__text">
                    <ul>
                        <li><span>Broché :</span> 225 pages</li>
                        <li><span>Auteur :</span> Jean-Christophe Giuliani</li>
                        <li><span>Parution :</span> 2017</li>
                        <li><span>Langue :</span> Français</li>
                        <li><span>Dimensions :</span> 15,2 x 1,3 x 22,9 cm</li>
                        <li><span>ISBN-10 :</span> 2956073702</li>
                        <li><span>ISBN-13 :</span> 978-2956073703</li>
                        <li><span>Prix :</span> 17,41€</li>
                    </ul>
                    <div>Egalement disponible au format éléctronique</div>
                    <ul>
                        <li><span>Format :</span> Format Kindle</li>
                        <li><span>Taille du fichier :</span> 6690 KB</li>
                        <li><span>Prix :</span> 6,44€</li>
                    </ul>
                </div>
            </div>
            <div class="book__panel__action">
                <a href="/">Achetez ce livre</a>
            </div>
            `
            div.innerHTML = markup.trim()
            document.querySelector('body').append(div)
            this.panel = div
        }

        IsScroll () {
            window.addEventListener('scroll', () => {
                this.panel.classList.add('book__panel--active')
            }, {
                once: true
            })
        }

        ClosePanel () {
            this.panel
                .querySelector('.book__panel--close')
                .addEventListener('click', () => {
                    this.panel.classList.remove('book__panel--active')
                    this.LocalStorage('isBookPannel', false)
                })
        }

        Init () {
            this.LocalStorage('isBookPannel', true)
            this.RanderPanel()
            setTimeout(() => {
                this.IsScroll()
                this.ClosePanel()
            }, 1)
        }
    }

    new BookPanel().Init()
})()