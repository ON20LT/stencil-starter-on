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
  @Prop() valuebtv = document.querySelector('#bisTag') as HTMLElement;



  @State() valuebj: number = 0;
  @State() valuebt: number = 0;
  @State() valuebm: number = 0;

  @Prop() naechte: number;
/*

  private datummorgen = () => {
      this.valuebt = this.valuevt +1;
      if(this.valuebt > this.tageimMonat[this.valuebm-1]){
        this.valuebm = this.valuebm +1;
        this.valuebt = 1;
        if(this.valuebm > this.tageimMonat.length) {
          this.valuebt = 1;
          this.valuebm = 1;
          this.valuebj = this.valuebj +1;
        }

      }
  }

  /*private handleInputT (e: InputEvent) {
    const target = e.target as HTMLInputElement;
    this.valuebt = target.valueAsNumber +1;
    this.valuebtv.value = this.valuebt;
    console.log(this.valuebt);
  }*/

  private handleInputNaechte (e: InputEvent) {
    const target = e.target as HTMLInputElement;
    this.naechte = target.valueAsNumber;
  }


/*
  private handleInputvT (e: InputEvent) {
    const target = e.target as HTMLInputElement;
    this.valuevt = target.valueAsNumber;
    this.valuebt = target.valueAsNumber +1;
    this.valuebtv.innerHTML = (this.valuebt).toString();
    console.log(this.valuebt);
  }*/


/*
  private handleInputvJ (e: InputEvent) {
    const target = e.target as HTMLInputElement;
    this.valuevj = parseInt((target.value).toString());
  }

  private handleInputbT (e: InputEvent) {
    const target = e.target as HTMLInputElement;
    target.valueAsNumber = this.valuevt +1;
  }

  private datummorgent = () => {
    if ((this.valuebt + 1) > this.tageimMonat[this.heute.getMonth()]){
      if ((this.valuevm + 1) === 12) {
        this.valuebj = this.valuevj +1;
        this.valuebm = 1;
      } else {
        this.valuebm = this.valuevm +1;
      }
      this.valuebt = 1;
    } else {
      this.valuebt = this.valuevt +1;
    }
  }

  private datummorgenm = () => {
    if (this.valuebm == 12) {
      this.valuebj = this.valuevj +1;
      this.valuebm = 1;
    } else {
      this.valuebm = (this.valuebm +1);
    }
  }

  private datummorgenj = () => {
    this.valuebj = this.valuebj +1;
  }


/*
  onChange={this.datummorgent}
  onChange={this.datummorgenm}
  onChange={this.datummorgenj}

  onMouseEnter={this.datummorgen}

  <div class="checkout">
              Check-Out:
              <div class="eingabe"><p id="bisTag"></p>/<p id="bisMonat">{this.valuebm}</p>/<p id="bisJahr">{this.valuebj}</p></div>
          </div>
*/


  @Prop() heute = new Date();

  @Prop() tageimMonat: number [] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  @State() valuevt: number = this.heute.getDate();
  @Prop() valuevm: number = this.heute.getMonth()+1;
  @State() valuevj: number = this.heute.getFullYear();

/*
  private handleInputvM (e: InputEvent) {
    const target = e.target as HTMLInputElement;

    if(target.valueAsNumber > 12) {
      target.valueAsNumber = 1;
    } else {
    this.valuevm = target.valueAsNumber;
    console.log(this.valuevm);
    }
  }

  @Prop() valuemA: number = this.tageimMonat[this.valuevm -1];


  private handleInputvT (e: InputEvent) {
    const target = e.target as HTMLInputElement;
    if(target.valueAsNumber > this.valuemA) {
      target.valueAsNumber = 1;
    }
    console.log(this.valuevm);
    console.log(target.max);
    if(this.valuevm === 1){
      target.max = "31";
    }if(this.valuevm === 2){
      target.max = "28";
    }if(this.valuevm === 3){
      target.max = "31";
    }if(this.valuevm === 4){
      target.max = "30";
    }if(this.valuevm === 5){
      target.max = "31";
    }if(this.valuevm === 6){
      target.max = "30";
    }if(this.valuevm === 7){
      target.max = "31";
    }if(this.valuevm === 8){
      target.max = "31";
    }if(this.valuevm === 9){
      target.max = "30";
    }if(this.valuevm === 10){
      target.max = "31";
    }if(this.valuevm === 11){
      target.max = "30";
    }if(this.valuevm === 12){
      target.max = "31";
    }
    console.log(target.max + "h");
  }

onInput={this.handleInputvT}
onInput={this.handleInputvM}
 onInput={this.handleInputvJ}
*/



  private goclick = () => {
    alert('Augen schließen und genießen... Danke und beehren Sie uns bald wieder, wir würden uns freuen. - Ihr ONbnb-Team.');
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
              <div class="eingabe"><input type='number' id="vonTag" min={1} max={31} value={this.valuevt} />/<input type='number' id="vonMonat" min={1} max={12} value={this.valuevm} />/<input type='number' id="vonJahr" min={2021} max={2030} value={this.valuevj}/></div>
          </div>
          <div class="naechte">
              Nächte:
              <div class="eingabe"> <input type='number' id="vonTag" min={1} max={100} value={1} onInput={this.handleInputNaechte}/> </div>
          </div>

          <div class="gaeste">
              Gäste:
              <input type='number' id='gaesteanzahl' name='Gästeanzahl' min={1} max={15} value={1}/>
          </div>
              <button class="suche" onClick={this.goclick}>GO</button>
        </div>
      </Host>
    )
  }
}
