import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'onbnb-suche',
  styleUrl: 'onbnb-suche.css',
  shadow: true,
  assetsDirs: ['asset']
})

export class suchleiste {


  @Prop() ort: HTMLElement = document.querySelector('.ort');
  @Prop() checkin: HTMLElement = document.querySelector('.checkin');
  @Prop() checkout: HTMLElement = document.querySelector('.checkout');
  @Prop() gaeste: HTMLElement = document.querySelector('.gaeste');
  @Prop() menuleiste: HTMLElement = document.querySelector('.menuleiste');
  @Prop() suche: HTMLElement = document.querySelector('.suche');
  @Prop() ee: HTMLElement = document.querySelector('.ee');

  @Prop() heute = new Date();

  @Prop() tageimMonat = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  @State() valuevt: number = this.heute.getDate();
  @State() valuevm: number = this.heute.getMonth()+1;
  @State() valuevj: number = this.heute.getFullYear();

  @State() valuebj: number = this.valuevj;
  @State() valuebt: number = this.valuevt;
  @State() valuebm: number = this.valuevm;

  private datummorgent = () => {
    if ((this.valuevt + 1) > this.tageimMonat[this.heute.getMonth()]){
      if ((this.valuevm + 1) === 12) {
        this.valuebj = this.valuevj +1;
        this.valuebm = 1;
      } else {
        this.valuebm = this.valuevm +1;
      }
      this.valuebt = 1;
    } else {
      this.valuebt = (this.valuevt + 1);
    }
  }

  private datummorgenm = () => {
    if (this.valuevm == 12) {
      this.valuebj = this.valuevj +1;
      this.valuebm = 1;
    } else {
      this.valuebm = (this.valuevm +1);
    }
  }

  render() {
    return (
      <Host>
        <div class="menuleiste">
          <div class="ort">
              Ort:
              <input type="String" id="ort" name="Ort" value="..."/>
          </div>

          <div class="checkin">
              Check-In:
              <div class="eingabe"><input type='number' id="vonTag" min={1} max={31} value={this.valuevt} onChange={this.datummorgent} onClick={this.datummorgent}/>/<input type='number' id="vonMonat" min={1} max={12} value={this.valuevm} onChange={this.datummorgenm} onClick={this.datummorgenm}/>/<input type='number' id="vonJahr" min={2021} max={2030} value={this.valuevj}/></div>
          </div>
          <div class="checkout">
              Check-Out:
              <div class="eingabe"><input type='number' id="bisTag" min={1} max={31} value={this.valuebt}/>/<input type='number' id="bisMonat" min={1} max={12} value={this.valuebm}/>/<input type='number' id="bisJahr" min={2021} max={2030} value={this.valuevj}/></div>
          </div>
          <div class="gaeste">
              Gäste:
              <input type='number' id='gaesteanzahl' name='Gästeanzahl' min={1} max={15} value={0}/>
          </div>
              <button class="suche">GO</button>
          <div class="ee"><iframe src="https://giphy.com/embed/ckrbT1rPtrt1rGM19p" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a id="eetext" href="https://giphy.com/stickers/travel-world-globe-ckrbT1rPtrt1rGM19p">via GIPHY</a></p></div>
        </div>
      </Host>
    )
  }
}
