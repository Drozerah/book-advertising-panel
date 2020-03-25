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
        slideSubTitle1: 'Format papier',
        slideSubTitle2: 'Format numérique',
        format: 'ePub',
        filePrice: '6,99',
        bookSize: '150×230 mm',
        editor: 'Les Editions du Net',
        book1: {
          slideTitle: 'Pour en finir<br> avec le chômage !',
          bookTitle: 'En finir avec le chômage : un choix de société !',
          bookType: 'economie',
          publishDate: '18-12-2019',
          pageCount: '396',
          isbn10: '978-2-312-07108-4',
          price: '24',
          imgSrc: '/src/img/book_1_250x382.jpg',
          linkHref: 'https://www.leseditionsdunet.com/economie/6657-en-finir-avec-le-chomage-un-choix-de-societe-jean-christophe-giuliani-9782312071084.html'
        },
        book2: {
          slideTitle: 'Pour vous réaliser autrement !',
          bookTitle: 'Satisfaire nos besoins : un choix de société !',
          bookType: 'sciences-humaines',
          publishDate: '03-01-2020',
          pageCount: '376',
          isbn10: '978-2-312-07119-0',
          price: '24',
          imgSrc: '/src/img/book_2_250x382.jpg',
          linkHref: 'https://www.leseditionsdunet.com/sciences-humaines/6671-satisfaire-nos-besoins-un-choix-de-societe-jean-christophe-giuliani-9782312071190.html'
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
      div.classList.add('noselect')
      const markup = `
            <i class="book__panel--close material-icons" title="Fermer">close</i>
            <h4 class="book__panel__title">${data[bookId].slideTitle}</h4>
            <div class="book__panel__slider">
                <div class="book__panel__slider__img">
                    <img src="${data[bookId].imgSrc}" alt="book cover image">
                    <i class="material-icons">play_arrow</i>
                </div>
                <div class="book__panel__slider__text">
                    <div>${data.slideSubTitle1}</div>
                    <ul>
                        <li><span>Discipline :</span> ${data[bookId].bookType}</li>
                        <li><span>Broché :</span> ${data[bookId].pageCount} pages</li>
                        <li><span>Auteur :</span> ${data.author}</li>
                        <li><span>Parution :</span> ${data[bookId].publishDate}</li>
                        <li><span>Langue :</span> ${data.language}</li>
                        <li><span>Dimensions :</span> ${data.bookSize}</li>
                        <li><span>ISBN :</span> ${data[bookId].isbn10}</li>
                        <li><span>Editeur :</span> ${data.editor}</li>
                        <li><span>Prix :</span> ${data[bookId].price} € TTC</li>
                    </ul>
                    <div>${data.slideSubTitle2}</div>
                    <ul>
                        <li><span>Format :</span> ${data.format}</li>
                        <li><span>Prix :</span> ${data.filePrice} € TTC</li>
                    </ul>
                </div>
            </div>
            <div class="book__panel__action">
                <a href="${data[bookId].linkHref}" target="_blank" rel="noreferrer">${data.btnText}</a>
            </div>
            `
      div.innerHTML = markup.trim()
      document.querySelector('body').appendChild(div)
      this.panel = div
    }

    RanderSmallPanel (bookId) {
      const data = this.data
      const div = document.createElement('div')
      div.classList.add('book__small__panel')
      div.classList.add('noselect')
      const markup = `
            ${data[bookId].bookTitle}<a href="${data[bookId].linkHref}" target="_blank" rel="noreferrer">${data.btnTextSecondary}</a>
            `
      div.innerHTML = markup.trim()
      document.querySelector('body').appendChild(div)
      this.smallPanel = div
    }

    OnScroll () {
      const panel = this.panel
      window.addEventListener('scroll', function cb (event) {
        panel.classList.add('book__panel--active')
        event.currentTarget.removeEventListener(event.type, cb)
      })
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
        }, { once: true })
    }

    Init () {
      this.LocalStorage('isBookPannel', true)
      this.RanderPanel('book2')
      this.RanderSmallPanel('book2')
      setTimeout(() => {
        this.OnScroll()
        this.ClosePanel()
      }, 1)
    }
  }

  new BookPanel().Init()
})()
