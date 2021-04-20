import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'onbnb-darkmode',
  styleUrl: 'onbnb-darkmode.css',
  shadow: true
})

export class darkMode {

  @Prop() dmode: HTMLElement = document.querySelector('.switch');
  @Prop() dmpruefer = 1;

  private  dMode = () => {
    let elementdm = document.body;
    elementdm.classList.toggle("dark-mode");
    if (this.dmpruefer === 1){
      this.dmpruefer++;
    } else {
      this.dmpruefer--;
    }
  }

  render() {
    return (
      <Host>
        <label class="switch">
            <input  type="checkbox" onChange={this.dMode}/>
            <span class="slider round"></span>
        </label>
      </Host>
    )
  }
}
