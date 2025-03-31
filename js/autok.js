class Auto {
  constructor(kep, nev, ar, teljesitmeny, motor, ev, km) {
      this.kep = kep;
      this.nev = nev;
      this.ar = ar;
      this.teljesitmeny = teljesitmeny;
      this.motor = motor;
      this.ev = ev;
      this.km = km;
  }
}

const autok = [
  new Auto('https://img.hasznaltautocdn.com/640x480/21633905/9016808.jpg', 'Opel Astra F', 289000, 66, 1389, 1997, 151023),
  new Auto('https://img.hasznaltautocdn.com/640x480/21387543/6173451.jpg', 'Mercedes-AMG S 63L', 44000000, 612, 3982, 2018, 16900),
  new Auto('https://img.hasznaltautocdn.com/640x480/21692428/9716800.jpg', 'Audi A6 Avant', 6590000, 218, 2967, 2016, 199508),
  new Auto('https://img.hasznaltautocdn.com/640x480/21684130/9611552.jpg', 'PEUGEOT 106', 165000, 50, 954, 1999, 174000),
  new Auto('https://img.hasznaltautocdn.com/640x480/21588189/8527169.jpg', 'FIAT 500x', 4780000, 140, 1368, 2018, 48603),
  new Auto('https://img.hasznaltautocdn.com/640x480/21598488/8638853.jpg', 'AUDI A4 Avant', 1860000, 143, 1968, 2010, 395002),
  new Auto('https://img.hasznaltautocdn.com/640x480/21676563/9520854.jpg', 'Mercedes-BENZ GLE 400', 26990000, 330, 2925, 2023, 78310),
  new Auto('https://img.hasznaltautocdn.com/640x480/21416964/6498467.jpg', 'BMW 218i M Sport', 8799000, 136, 1499, 2021, 115000),
  new Auto('https://img.hasznaltautocdn.com/640x480/21679660/9558531.jpg', 'Fiat 500', 3000000, 18, 500, 1960, 9900),
  new Auto('https://img.hasznaltautocdn.com/640x480/21699726/9817766.jpg', 'Toyota Corolla Sedan', 6200000, 132, 1600, 2019, 46000),
  new Auto('https://img.hasznaltautocdn.com/640x480/21609924/8762623.jpg', 'Bmw 525i 24V', 2090000, 192, 2500, 1995, 250000),
  new Auto('https://tse2.mm.bing.net/th?id=OIP.s6AACFWTH9Fg2CqvnyLOTAHaFj&pid=Api&P=0&h=180', 'Tesla Model S 85', 8000000, 370, 0, 2014, 116000),
  new Auto('https://img.hasznaltautocdn.com/640x480/21656942/9283528.jpg', 'Renault Talisman', 5000000, 109, 1500, 2016, 160020),
  new Auto('https://img.hasznaltautocdn.com/640x480/21378794/7076930.jpg', 'Volvo C40', 14000000, 230, 0, 2022, 6000),
  new Auto('https://img.hasznaltautocdn.com/640x480/21247144/4761644.jpg', 'BMW 530e', 19000000, 184, 2000, 2022, 68576),
  new Auto('https://tse2.mm.bing.net/th?id=OIP.zy3vBR_mHuzKAGTztthZJQHaFm&pid=Api&P=0&h=180', 'Opel Astra H', 1380000, 110, 1686, 2008, 325000),
  new Auto('https://img.hasznaltautocdn.com/640x480/21593852/8587846.jpg', 'Hyundai I30', 5000000, 185, 1600, 2016, 23000),
  new Auto('https://slike.autodiler.me/size/600x450/2023/5/9/AD327460627ME/23cf89a5-1e81-4884-9c9b-2941160e4488.webp', 'KIA Soul 1.6 GDI EX', 5600000, 1600, 132, 2017, 110000),
  new Auto('https://img.hasznaltautocdn.com/640x480/21698971/9809418.jpg', 'Yale GDP60VX', 12000000, 75, 1400, 2020, 3800),
  new Auto('https://img.hasznaltautocdn.com/640x480/21640515/9097685.jpg', 'Volvo XC40', 10200000, 130, 1500, 2020, 70000)
];

function megjelenit(autok) {
  const container = document.getElementById('autok-container');
  container.innerHTML = '';
  autok.forEach(auto => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
          <img src="${auto.kep}" alt="Autó" style="width:100%">
          <h1>${auto.ar} Ft</h1>
          <p class="title">Teljesitmeny: ${auto.teljesitmeny} LE</p>
          <p class="title">Motorterfogat: ${auto.motor} cm³</p>
          <p class="title">Evjarat: ${auto.ev}</p>
          <p class="title">Futott km: ${auto.km}</p>
      `;
      container.appendChild(card);
  });
}

function resetOldal() {
 
  document.getElementById('szuresArMin').value = '';
  document.getElementById('szuresArMax').value = '';
  document.getElementById('szuresTeljesitmenyMin').value = '';
  document.getElementById('szuresTeljesitmenyMax').value = '';
  document.getElementById('szuresMotorMin').value = '';
  document.getElementById('szuresMotorMax').value = '';

  
  megjelenit(autok);
}

function megjelenit(autok) {
  const container = document.getElementById('autok-container');
  container.innerHTML = '';
  autok.forEach(auto => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
          <img src="${auto.kep}" alt="${auto.nev}" style="width:100%">
          <h1>${auto.nev}</h1>
          <p class="title">Ar: ${auto.ar} Ft</p>
          <p class="title">Teljesitmeny: ${auto.teljesitmeny} LE</p>
          <p class="title">Motorterfogat: ${auto.motor} cm³</p>
          <p class="title">Evjarat: ${auto.ev}</p>
          <p class="title">Futott km: ${auto.km}</p>
      `;
      container.appendChild(card);
  });
}

function szures() {
  const arMin = document.getElementById('szuresArMin').value;
  const arMax = document.getElementById('szuresArMax').value;
  const teljesitmenyMin = document.getElementById('szuresTeljesitmenyMin').value;
  const teljesitmenyMax = document.getElementById('szuresTeljesitmenyMax').value;
  const motorMin = document.getElementById('szuresMotorMin').value;
  const motorMax = document.getElementById('szuresMotorMax').value;


  const szurtAutok = autok.filter(auto => {
      return (
          (!arMin || auto.ar >= arMin) && 
          (!arMax || auto.ar <= arMax) &&
          (!teljesitmenyMin || auto.teljesitmeny >= teljesitmenyMin) &&
          (!teljesitmenyMax || auto.teljesitmeny <= teljesitmenyMax) && 
          (!motorMin || auto.motor >= motorMin) && 
          (!motorMax || auto.motor <= motorMax) 
      );
  });

  
  megjelenit(szurtAutok);
}

document.addEventListener('DOMContentLoaded', () => megjelenit(autok));