import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'onbnb-darkmode',
  styleUrl: 'onbnb-darkmode.css',
  shadow: true,
  assetsDirs: ['asset']
})

export class darkMode {

  @Prop() dmode: HTMLElement = document.querySelector('.switch');
  @Prop() sun: HTMLElement = document.querySelector('#sun');
  @Prop() moon: HTMLElement = document.querySelector('#moon');
  @Prop() dmpruefer = 1;

  private  dMode = () => {
    let elementdm = document.body;
    elementdm.classList.toggle("dark-mode");
    if (this.dmpruefer === 1){
      this.sun.style.display = 'none';
      this.moon.style.display = 'block';
      this.dmpruefer++;
    } else {
      this.sun.style.display = 'block';
      this.moon.style.display = 'none';
      this.dmpruefer--;
    }
  }

  render() {
    return (
      <Host>
        <label class="switch">
            <div class="icon">
                <img src="./icons/moon.png"  id="moon"></img>
                <img src="./icons/sun.png" id="sun"></img>
            </div>
            <input  type="checkbox" onChange={this.dMode}/>
            <span class="slider round"></span>
        </label>
      </Host>
    )
  }
}
