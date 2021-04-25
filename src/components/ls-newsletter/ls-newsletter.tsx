import {Component,h, State, Element} from '@stencil/core';

@Component({
    tag: 'ls-newsletter',
    styleUrl: 'ls-newsletter.css',
    shadow: true
})

export class Newsletter {


  @Element() newsletterForm: HTMLElement;
  @State() emailInput: HTMLInputElement;

  
  
 

  
  render() {
      return (

             <div class="wrapper">
                <img src="src/components/ls-newsletter/assets/beach-1761410_1920.jpg"></img>
                <image id="overlay">
                    <div id="content">
                    <span>
                        <h2>Zum Newsletter anmelden</h2>
                    </span>
                    <form id="newsletterForm">
                      <div>
                      <label class="email-label" htmlfor="email-input">E-mail Adresse</label>
                          <input class="email-input" id="email-input" type="text" placeholder="example@onbnb.de"/>
                      </div>
                        <button id="submit-button">Jetzt anmelden</button>
                    </form>
                    
                    </div>
                </image> 
              </div>
            
        )
}
}