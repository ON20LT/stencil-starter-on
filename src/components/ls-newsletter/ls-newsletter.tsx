import {Component,h,Prop, Event} from '@stencil/core';

@Component({
    tag: 'ls-newsletter',
    styleUrl: 'ls-newsletter.css',
    shadow: true
})

export class Newsletter {

    @Event()emailInput: HTMLInputElement;

        handleEmailInput = (event: Event) => {
        event.preventDefault();
        console.log(this.emailInput.value);
    }

    @Prop() submit: boolean;

    private handlesubmit = () => {
        if (this.submit = true){
            alert("Danke, dass Sie uns einen Zugang zu Ihren persönlichen Daten geschaffen haben")
        }
    }



        
  render() {
      return (

             <div class="wrapper">
                <img src="src/components/ls-newsletter/assets/beach-1761410_1920.jpg"></img>
                <image id="overlay">
                    <div id="content">
                    <span>
                        <h2>Zum Newsletter anmelden</h2>
                    </span>
                    <form id="newsletterForm" onSubmit={this.handleEmailInput}>
                      <div>
                      <label class="email-label">E-mail Adresse
                      <input id="email-input" type="text" ref={(emailInput) => this.emailInput = emailInput as HTMLInputElement} placeholder="example@onbnb.de"/>
                      </label>
                      </div>
                        <button type="submit" value="submit" id="submit-button">Jetzt anmelden</button>
                    </form>
                    </div>
                </image> 
              </div>
            
        )
    }
}