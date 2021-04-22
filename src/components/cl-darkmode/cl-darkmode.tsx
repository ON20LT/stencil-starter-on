import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'cl-darkmode',
  styleUrl: 'cl-darkmode.css',
  shadow: true
})

export class darkMode {

  @Prop() dmode: HTMLElement = document.querySelector('.switch');
  @Prop() dmpruefer: number = 1;

  private  dMode = () => {
    let elementdm = document.body;
    elementdm.classList.toggle("dark-mode");
    if(this.dmpruefer === 1){
      this.dmpruefer++;
    } else {
      this.dmpruefer--;
    }
  }

  private dmHoverEnter = () => {
    let elementdm = document.body;
    if(this.dmpruefer === 1) {
      console.log("e1");
      elementdm.classList.toggle("dmhoverenter");
    }
  }

  private dmHoverLeave = () => {
    let elementdm = document.body;
    if(this.dmpruefer === 1) {
      console.log("he");
      elementdm.classList.toggle("dmhoverleave");
    }
  }

  render() {
    return (
      <Host>
        <label class="switch" onMouseEnter={this.dmHoverEnter} onMouseLeave={this.dmHoverLeave}>
            <input  type="checkbox" onChange={this.dMode} />
            <span class="slider round"></span>
        </label>
      </Host>
    )
  }
}
