import {Component,h, State} from '@stencil/core';

@Component({
    tag: 'ls-newsletter',
    styleUrl: 'ls-newsletter.css',
    shadow: true
})

export class Newsletter {


  @State() email: string;

  byClick (event){
    event.preventDefault()
    console.log(this.email);
    console.log("hallo");
  }  

  forChange(e){
    this.email = e.target.email;
    console.log(this.email);
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
                    <form onClick={(event) => this.byClick(event)}>
                        <label class="email-label">E-mail Adresse <br/>
                          <input class="email-input" type="text" placeholder="example@onbnb.de"/>
                        </label>
                    </form>
                    <button id="submit-button">Jetzt anmelden</button>
                    </div>
                </image> 
              </div>
            
        )
}
}