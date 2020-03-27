(() => {
  class BookPanel {
    constructor () {
      this.panel = null
      this.smallPanel = null
      this.data = {
        book1: {
          btnText: 'Buy this book',
          btnTextSecondary: 'Buy this book',
          author: 'Marijn Haverbeke',
          language: 'English',
          slideSubTitle1: 'Paperback format',
          slideSubTitle2: 'eBook format',
          format: 'ePub',
          filePrice: 'free',
          bookSize: '17,8 x 23,5 cm',
          editor: 'no starch press',
          slideTitle: 'JavaScript',
          bookTitle: 'Eloquent JavaScript',
          bookType: 'programming',
          publishDate: 'Dec 04, 2018',
          pageCount: '472',
          isbn10: '1593279507',
          isbn13: '978-1593279509',
          price: '30,36',
          imgSrc: 'img/cover.jpg',
          linkHref: 'https://eloquentjavascript.net/'
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
            <i class="book__panel--close material-icons" title="Close">close</i>
            <h4 class="book__panel__title">${data[bookId].slideTitle}</h4>
            <div class="book__panel__slider">
                <div class="book__panel__slider__img">
                    <img src="${data[bookId].imgSrc}" alt="${data[bookId].bookTitle}">
                    <i class="material-icons">play_arrow</i>
                </div>
                <div class="book__panel__slider__text">
                    <div>${data[bookId].slideSubTitle1}</div>
                    <ul>
                        <li><span>Type :</span> ${data[bookId].bookType}</li>
                        <li><span>Paperback :</span> ${data[bookId].pageCount} pages</li>
                        <li><span>Author :</span> ${data[bookId].author}</li>
                        <li><span>Publish date :</span> ${data[bookId].publishDate}</li>
                        <li><span>Language :</span> ${data[bookId].language}</li>
                        <li><span>Dimensions :</span> ${data[bookId].bookSize}</li>
                        <li><span>ISBN-10 :</span> ${data[bookId].isbn10}</li>
                        <li><span>ISBN-13 :</span> ${data[bookId].isbn13}</li>
                        <li><span>Editor :</span> ${data.editor}</li>
                        <li><span>Price:</span> ${data[bookId].price} € TTC</li>
                    </ul>
                    <div>${data[bookId].slideSubTitle2}</div>
                    <ul>
                        <li><span>Format :</span> ${data[bookId].format}</li>
                        <li><span>Prix :</span> ${data[bookId].filePrice}</li>
                    </ul>
                </div>
            </div>
            <div class="book__panel__action">
                <a href="${data[bookId].linkHref}" target="_blank" rel="noreferrer">${data[bookId].btnText}</a>
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
        <div class="book__small__panel__content"><div>${data[bookId].bookTitle}</div><a href="${data[bookId].linkHref}" target="_blank" rel="noreferrer">${data[bookId].btnText}</a></div>
      `
      div.innerHTML = markup.trim()
      document.querySelector('body').appendChild(div)
      this.smallPanel = div
    }

    RanderPanels (bookId) {
      this.RanderPanel(bookId)
      this.RanderSmallPanel(bookId)
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
      this.RanderPanels('book1')
      setTimeout(() => {
        this.OnScroll()
        this.ClosePanel()
      }, 1)
    }
  }
  // if (window.location.search === '?drozerah=1') {
  //   new BookPanel().Init()
  // }
  new BookPanel().Init()
})()
