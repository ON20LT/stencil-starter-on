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
           
             <div>
             <h2>Melde dich jetzt zu unserem Newsletter an</h2>
                  <p>LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM LOREM IPSUM</p>
              <form onClick={(event) => this.byClick(event)}>
                    <label>
                    E-mail Adresse
                      <input type="text" value={this.email} onInput={(e) => this.forChange(e)}/>
                    </label>
                    <button type="click" value="Click">Jetzt anmelden</button>
              </form>
              </div>
            
        )
}
}