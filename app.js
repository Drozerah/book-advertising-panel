class BookPanel {

    constructor(){
        this.body = document.querySelector('body')
    }

    Debug(){
        console.log(this.body) // !DEBUG
    }

    CreatePanelElement(){
        const panel = document.createElement('div')
        panel.classList.add('book__panel')
        this.body.append(panel)
    }

    Init(){
        this.Debug()
        this.CreatePanelElement()
    }
}

// new BookPanel().Init()