import {Component,Host, h, Prop,Event, State} from '@stencil/core';

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

    handleEmailInput = (event: Event) => {
    event.preventDefault();
    console.log(this.emailInput.value);
    alert("Vielen Dank, dass Sie uns Zugriff auf Ihre persönlichen Daten ermöglicht haben. Wir wünschen einen guten Flug!")
    window.onload;
    }

  /*   @Event() submit: boolean;

        handlesubmit = (ev: Event) => {
        ev.target.addEventListener;
        if (this.submit = true){
            alert("Danke, dass Sie uns einen Zugang zu Ihren persönlichen Daten geschaffen haben")
        } else console.log("fail");
    } */

    @State() moveLabel = document.querySelectorAll('.label-descr input');
        changeLabel(): void {
            let labelDescr
        for(var i = 0; i < labelDescr.length; i++) {
            scaleLabel(labelDescr[i], true);
            labelDescr[i].addEventListener('focus', function () {
                scaleLabel(this, false)
            });
            labelDescr[i].addEventListener('blur', function () {
                scaleLabel(this, true)
            });
        }
        function scaleLabel(element, isLikePlaceholder) {
            if (isLikePlaceholder) {
                if (element.value === '') {
                    element.parentNode.querySelector('label')
                        .classList.add('like-placeholder');
                }
            } else {
                element.parentNode.querySelector('label')
                    .classList.remove('like-placeholder');
            }
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
                    {this.newsletterTitle && <h2>{this.newsletterTitle}</h2>}
                    <slot></slot>
                    <form id="newsletterForm" onSubmit={this.handleEmailInput}>
                        <div class="label-descr">
                            <label class="email" htmlFor="email-input">E-mail Adresse</label>
                                <input id="email-input" type="text" ref={(emailInput) => this.emailInput = emailInput as HTMLInputElement} placeholder="example@onbnb.de"/>
                            
                        </div>
                        <button type="submit" value="submit" id="submit-button">Jetzt anmelden</button>
                    </form>
                </div>
            </div>
            </Host>
        );
    }
}