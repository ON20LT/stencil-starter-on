import {Component,Host, h, Prop,Event, /*Listen, State*/} from '@stencil/core';

@Component({
    tag: 'ls-newsletter',
    styleUrl: 'ls-newsletter.css',
    shadow: true
})

export class Newsletter {

    @Prop({reflect:true,mutable:true}) img: string;

    //@Prop() overlay: boolean
    //Idee: overlay optional zuschaltbar

    @Prop() newsletterTitle: string;

    @Event()emailInput: HTMLInputElement;

    @Event()emailInfo: HTMLInputElement;

    //mit Fremdcod erarbeitet
    setInputSuccess(
        inputEl: HTMLInputElement |null,
        infoEl: HTMLElement |null,
        message: string
        ) :void{
            if(inputEl && infoEl) {
                inputEl.classList.add("is-success");
                inputEl.classList.remove("is-error");
                infoEl.textContent = message;
            }       
    }

    setInputError(
        inputEl: HTMLInputElement |null,
        infoEl: HTMLElement |null,
        message: string
    ):void {
        if(inputEl&&infoEl){
            inputEl.classList.remove("is-success");
            inputEl.classList.add("is-error");
            infoEl.textContent = message;
        }
    }

    checkMail(mail:string | undefined):boolean{
    console.log("checkMail");
       const format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       if(format.test(String(mail).toLowerCase())) {
           this.setInputSuccess(this.emailInput,this.emailInfo,"Vielen Dank, dass du dich für unseren Newsletter angemeldet hast :)");
           return true;
       } else {
           this.setInputError(this.emailInput,this.emailInfo, "Mensch Josef, musste schon richtig machen… bitte gebe eine gültige E-Mail Adresse an!");
           return false;
       }
    }

    handleEmailInput = (event: Event) => {
    event.preventDefault();
    console.log(this.checkMail(this.emailInput.value));
    console.log(this.emailInput.value);
    if(this.checkMail(this.emailInput.value)) {
        this.emailInput.value="";
    } 
}

  render() {
      return (
        <Host>
            <div class="wrapper">
                <div class="newsletter-background">
                    <slot name="newsletter-img">
                        <img class="img" src={this.img}/>
                     </slot>
                    <image id="overlay"></image>
                </div>

                <div id="content">
                    <h2>{this.newsletterTitle}</h2>
                    <slot></slot>
                    <form id="newsletterForm" onSubmit={this.handleEmailInput}>
                        <div class="label-descr">
                            <label htmlFor="email-input">E-mail Adresse</label>
                                <input id="email-input" type="text" ref={(emailInput) => this.emailInput = emailInput as HTMLInputElement} placeholder="example@onbnb.de"/>
                                <p id="inputmail-info" ref={(emailInfo) => this.emailInfo = emailInfo as HTMLInputElement}></p>
                        </div>
                        <button type="submit" value="submit" id="submit-button">Jetzt anmelden</button>
                    </form>
                </div>
            </div>
            </Host>
        );
    }
}