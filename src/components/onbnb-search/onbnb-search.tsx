import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'onbnb-search',
  styleUrl: 'onbnb-search.css',
  shadow: true,
  assetsDirs: ['asset']
})

export class suchleiste {


  @Prop() ort: HTMLInputElement = document.querySelector('#ort');
  @Prop() checkin: HTMLInputElement = document.querySelector('#checkin');
  @Prop() checkout: HTMLInputElement = document.querySelector('#checkout');
  @Prop() gaeste: HTMLInputElement = document.querySelector('#gaeste');
  @Prop() menuleiste: HTMLElement = document.querySelector('.menuleiste');
  @Prop() sucherund: HTMLElement = document.querySelector('.sucherund');
  @Prop() sucheaus: HTMLElement = document.querySelector('.sucheaus');
  @Prop() suche: HTMLElement = document.querySelector('.suche');
  @Prop() ee: HTMLElement = document.querySelector('.ee');
  @Prop() gaesteanzahl: HTMLElement = document.querySelector('#gaesteanzahl');
  @Prop() aus: HTMLElement = document.querySelector('.aus');
  @Prop() datum: HTMLElement = document.querySelector('.datum');

  @Prop() heute = new Date();

  @Prop() tageimMonat = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];



  private ortclick = (event: Event) => {
    this.ort.value="";
    (document.querySelector('.ortaus') as HTMLElement).style.display = 'flex';
    (document.querySelector('.gaesteaus') as HTMLElement).style.display = 'none';
    (document.querySelector('.datum') as HTMLElement).style.display = 'none';
  }

  private checkinclick = (event: Event) => {
    for (let i: number = 0; i < this.tageimMonat.length; i++){
      if (parseInt((document.querySelector('#vonTag') as HTMLInputElement).value) === i+1){
          (document.querySelector('#vonTag') as HTMLInputElement).max = this.tageimMonat[i].toString();
      }
    }
    (document.querySelector('#vonTag') as HTMLInputElement).value = this.heute.getDate().toString();
    (document.querySelector('#vonMonat') as HTMLInputElement).value = (this.heute.getMonth()+1).toString();
    (document.querySelector('#vonJahr') as HTMLInputElement).value = this.heute.getFullYear().toString();
    (document.querySelector('#bisTag') as HTMLInputElement).value = this.heute.getDate().toString();
    (document.querySelector('#bisMonat') as HTMLInputElement).value = (this.heute.getMonth()+1).toString();
    (document.querySelector('#bisJahr') as HTMLInputElement).value = this.heute.getFullYear.toString();
    this.checkin.value = (document.querySelector('#vonTag') as HTMLInputElement).value + "/" + (document.querySelector('#vonMonat') as HTMLInputElement).value + "/" + (document.querySelector('#vonJahr') as HTMLInputElement).value ;
    (document.querySelector('.datum') as HTMLElement).style.display = 'flex';
    (document.querySelector('.gaesteaus') as HTMLElement).style.display = 'none';
    (document.querySelector('.ortaus') as HTMLElement).style.display = 'none';
  }

  private vontagchange = (event: Event) => {
    for (let i: number = 0; i < this.tageimMonat.length; i++){
      if(i === (parseInt((document.querySelector('#vonMonat') as HTMLInputElement).value)-1)){
          (document.querySelector('#vonTag')as HTMLInputElement).max = this.tageimMonat[i].toString();
      }
    }
    if (parseInt((document.querySelector('#vonTag')as HTMLInputElement).value) + 1 && (parseInt((document.querySelector('#vonTag')as HTMLInputElement).value) + 1) !== (parseInt((document.querySelector('#vonTag')as HTMLInputElement).max)+1)){
        (document.querySelector('#bisTag') as HTMLInputElement).value = (parseInt((document.querySelector('#vonTag') as HTMLInputElement).value) + 1).toString();
    } else {
        (document.querySelector('#bisTag') as HTMLInputElement).value = "1";
        (document.querySelector('#bisMonat')as HTMLInputElement).value = (parseInt((document.querySelector('#vonMonat')as HTMLInputElement).value) + 1).toString();
    }
    this.checkin.value = (document.querySelector('#vonTag')as HTMLInputElement).value + "/" + (document.querySelector('#vonMonat')as HTMLInputElement).value + "/" + (document.querySelector('#vonJahr')as HTMLInputElement).value ;
  }

  private vonmonatchange = (event: Event) => {
    if((parseInt((document.querySelector('#vonMonat') as HTMLInputElement).value) + 1) && (parseInt((document.querySelector('#vonMonat') as HTMLInputElement).value) + 1) !== (parseInt((document.querySelector('#vonMonat') as HTMLInputElement).max)+1) ){
      (document.querySelector('#bisMonat') as HTMLInputElement).value = (parseInt((document.querySelector('#vonMonat') as HTMLInputElement).value) + 1).toString();
    } else {
        (document.querySelector('#bisMonat') as HTMLInputElement).value = "1";
        (document.querySelector('#bisJahr') as HTMLInputElement).value = (parseInt((document.querySelector('#bisJahr') as HTMLInputElement).value) + 1).toString();
    }
    this.checkin.value = (document.querySelector('#vonTag') as HTMLInputElement).value + "/" + (document.querySelector('#vonMonat') as HTMLInputElement).value + "/" + (document.querySelector('#vonJahr') as HTMLInputElement).value ;
  }

private vonjahrchange = (event: Event) => {
      (document.querySelector('#bisJahr') as HTMLInputElement).value = (parseInt((document.querySelector('#vonJahr') as HTMLInputElement).value)+1).toString();
      this.checkin.value = (document.querySelector('#vonTag') as HTMLInputElement).value + "/" + (document.querySelector('#vonMonat') as HTMLInputElement).value + "/" + (document.querySelector('#vonJahr') as HTMLInputElement).value ;
}

private checkoutclick = (event: Event) => {
    this.checkout.value = (document.querySelector('#bisTag') as HTMLInputElement).value + "/" + (document.querySelector('#bisMonat') as HTMLInputElement).value + "/" + (document.querySelector('#bisJahr') as HTMLInputElement).value ;
    (document.querySelector('.datum') as HTMLElement).style.display = 'flex';
    (document.querySelector('.gaesteaus') as HTMLElement).style.display = 'none';
    (document.querySelector('.ortaus') as HTMLElement).style.display = 'none';
}

private bistagechange = (event: Event) => {
  if(parseInt((document.querySelector('#bisTag') as HTMLInputElement).value) < parseInt((document.querySelector('#vonTag') as HTMLInputElement).value)){
    (document.querySelector('#bisJahr') as HTMLInputElement).value = (parseInt((document.querySelector('#vonJahr') as HTMLInputElement).value) +1).toString();
  }
  this.checkout.value = (document.querySelector('#bisTag') as HTMLInputElement).value + "/" + (document.querySelector('#bisMonat') as HTMLInputElement).value + "/" + (document.querySelector('#bisJahr') as HTMLInputElement).value ;
}

private bismonatechange = (event: Event) => {
  if(parseInt((document.querySelector('#bisMonat') as HTMLInputElement).value) < parseInt((document.querySelector('#vonMonat') as HTMLInputElement).value)){
    (document.querySelector('#bisJahr') as HTMLInputElement).value = (parseInt((document.querySelector('#vonJahr') as HTMLInputElement).value) +1).toString();
  }
  this.checkout.value = (document.querySelector('#bisTag') as HTMLInputElement).value + "/" + (document.querySelector('#bisMonat') as HTMLInputElement).value + "/" + (document.querySelector('#bisJahr') as HTMLInputElement).value ;
}

private bisjahrechange = (event: Event) => {
  if(parseInt((document.querySelector('#bisJahr') as HTMLInputElement).value) > parseInt((document.querySelector('#vonJahr') as HTMLInputElement).value)) {
    (document.querySelector('#bisJahr') as HTMLInputElement).min = (parseInt((document.querySelector('#vonJahr') as HTMLInputElement).value)).toString();
  }
  this.checkout.value = (document.querySelector('#bisTag') as HTMLInputElement).value + "/" + (document.querySelector('#bisMonat') as HTMLInputElement).value + "/" + (document.querySelector('#bisJahr') as HTMLInputElement).value ;
}

private gaesteclick = (event: Event) => {
    (this.gaeste as HTMLInputElement).value = (this.gaesteanzahl as HTMLInputElement).value + " Gäste";
    (document.querySelector('.datum') as HTMLElement).style.display = 'none';
    (document.querySelector('.gaesteaus') as HTMLElement).style.display = 'flex';
    (document.querySelector('.ortaus') as HTMLElement).style.display = 'none';
}

private gaesteanzahlchange = (event: Event) => {
    if (parseInt((this.gaesteanzahl as HTMLInputElement).value) === 1){
        this.gaeste.value = ((this.gaesteanzahl as HTMLInputElement).value).toString() + " Gast";
    } else {
        this.gaeste.value = ((this.gaesteanzahl as HTMLInputElement).value).toString() + " Gäste";
    }
}

private sucherundenter = (event: Event) => {
    this.sucherund.style.display = 'none';
    this.sucheaus.style.display = 'flex';
}

private sucherundleave = (event: Event) => {
    this.sucherund.style.display = 'flex';
    this.sucheaus.style.display = 'none';
}

private menuleisteclick = (event: Event) => {
    this.sucherund.style.display = 'none';
    this.sucheaus.style.display = 'flex';
}

private sucheausenter = (event: Event) => {
    this.sucheaus.style.background = '#a1987f';
}

private sucheausleave = (event: Event) => {
    this.sucheaus.style.background = '#d8cdb0';
}

private sucheausclick = (event: Event) => {
    this.suche.style.display = 'none';
    this.ort.style.display = 'none';
    this.checkin.style.display = 'none';
    this.checkout.style.display = 'none';
    this.gaeste.style.display = 'none';
    this.ee.style.display = 'block';
    (document.querySelector('.gaesteaus') as HTMLElement).style.display = 'none';
    (document.querySelector('.ortaus') as HTMLElement).style.display = 'none';
    (document.querySelector('.datum') as HTMLElement).style.display = 'none';
}




  render() {
    return (
      <Host>
        <div class="menuleiste" onClick={this.menuleisteclick}>
            <div class="ort" onClick={this.ortclick}>
                <input type="String" id="ort" name="Ort" value="Ort"/>
            </div>

            <div class="checkin" onClick={this.checkinclick}>
                <input type="String" id="checkin" name="Check-In" value="Check-In"/>
            </div>

            <div class="checkout" >
                <input type="String" id="checkout" name="Check-Out" value="Check-Out" onClick={this.checkoutclick}/>
            </div>

            <div class="gaeste" onClick={this.gaesteclick}>
                <input type="String" id="gaeste" name="Gäste" value="Gäste"/>
            </div>

            <div class="suche">
                <div class="sucherund" onMouseEnter={this.sucherundenter} onMouseLeave={this.sucherundleave}><img src="./search.png" id="search"/></div>
                <button class="sucheaus" onMouseEnter={this.sucheausenter} onMouseLeave={this.sucheausleave} onClick={this.sucheausclick}>Suche <img src="./search.png" id="search"/></button>
            </div>

            <div class="ee"><iframe src="https://giphy.com/embed/ckrbT1rPtrt1rGM19p" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a id="eetext" href="https://giphy.com/stickers/travel-world-globe-ckrbT1rPtrt1rGM19p">via GIPHY</a></p></div>
        </div>
          <div class="aus">
            <div class="ortaus">Wo soll es hingehen?</div>
            <div class="datum">
              <div class="von">
                Check-In <input type='number' id="vonTag" min={1} max={31} value={1} onChange={this.vontagchange}/>/<input type='number' id="vonMonat" min={1} max={12} value={1} onChange={this.vonmonatchange}/>/<input type='number' id="vonJahr" min={2021} max={2030} value={2021} onChange={this.vonjahrchange}/>
              </div>
              <div class="bis">
                Check-Out <input type='number' id="bisTag" min={1} max={31} onChange={this.bistagechange}/>/<input type='number' id="bisMonat" min={1} max={12}  onChange={this.bismonatechange}/>/<input type='number' id="bisJahr" min={2021} max={2030} onChange={this.bisjahrechange}/>
              </div>
          </div>
          <div class="gaesteaus">Gästeanzahl <input type='number' id='gaesteanzahl' name='Gästeanzahl' min={1} max={15} value={0} onChange={this.gaesteanzahlchange}/></div>
        </div>
      </Host>
    )
  }
}
