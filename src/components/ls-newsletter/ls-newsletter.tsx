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

    @Event()formObject = document.querySelector<HTMLInputElement|any>("email-input");

    /*  @Prop()form = document.getElementById("newsletterForm");

   @Event() Validation = document.addEventListener("submit", this.validateRegistration);
    @Listen('Validation')*/

    validateRegistration(e: Event):void {
        let isValid: boolean =true;
        e.preventDefault();
        const mail = this.checkMail(this.formObject);
        isValid = mail;
       } 

    //ff enthält "fremdcode"
    setInputSuccess(
        inputEl: HTMLInputElement |null,
        infoEl: HTMLElement |null,
        ) :void{
            if(inputEl && infoEl) {
                inputEl.classList.add("is-success");
                inputEl.classList.remove("is-error");
                infoEl.textContent = "";
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
       const info = document.getElementById("inputmail-info")
       const format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       if(format.test(String(mail).toLowerCase())) {
           this.setInputSuccess(this.formObject, info);
           return true;
       } else {
           this.setInputError(this.formObject, info, "Bitte gebe eine gültige E-Mail Adresse an");
           return false;
       }
    }

    handleEmailInput = (event: Event) => {
    event.preventDefault();
    document.addEventListener("submit", this.validateRegistration);
    console.log(this.emailInput.value);
    alert("Vielen Dank, Du hast dich erfolreich zu unseren Newsletter angemeldet! :)")
    window.onload;
    this.emailInput.value="";
    
    //document.getElementById("newsletter-Form");
    //alert("Oops, das hat wohl nicht geklappt! :(")
    };

/*     @State() moveLabel: NodeListOf<HTMLElement>= document.querySelectorAll('.label-descr');

        // ff. mit Fremdcode erarbeitet, funktioniert noch nicht, wenn funktonsfähig, ist label describtion hinfällig:)

        changeLabel(): void {
            console.log("changeLabel")
            let labelDescr: NodeListOf<HTMLBodyElement>;
        for(let i: number = 0; i < labelDescr.length; i++) {
            scaleLabel(labelDescr[i], true);
            labelDescr[i].addEventListener('focus', function ():void {
                scaleLabel(this, false)
            });
            labelDescr[i].addEventListener('blur', function ():void {
                scaleLabel(this, true)
            });
        }
        function scaleLabel(element:any, likePlaceholder) { 
            if (likePlaceholder) {
                if (element.value === '') {
                    element.parentNode.querySelector('label').classList.add('email-placeholder');
                        console.log("hallhallo");
                }
            } else {
                element.parentNode.querySelector('label').classList.remove('email-placeholder');
            }
        }
    } */
      
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
                                <p id="inputmail-info"></p>
                        </div>
                        <button type="submit" value="submit" id="submit-button">Jetzt anmelden</button>
                    </form>
                </div>
            </div>
            </Host>
        );
    }
}