class Heroj {
  constructor(ime, health) {
    this.ime = ime;
    this.health = health;
    this.ranac = [];
    this.aktivnoOruzje = null;
  }
}

function randomNapad(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Carobnjak extends Heroj {
  constructor(ime, health) {
    super(ime, health);
    this.ranac = [];
    this.aktivnoOruzje = null;
  }

  uzmiOruzje(oruzje) {
    if (!(oruzje instanceof Magija)) {
      console.log("Nije dozvoljeno");
      return;
    }
    if (this.ranac.length >= 2) {
      console.log("Nije dozvoljeno vise od 2 oruzja");
      return;
    }
    this.ranac.push(oruzje);
    this.postaviOruzje(oruzje);
  }

  baciOruzje(brojIndexa) {
    if (this.ranac.length == 0) {
      console.log("Nema oruzja");
      return;
    }
    console.log(this.ranac[brojIndexa], "izbacena");
    this.ranac.splice(brojIndexa, 1);
    this.aktivnoOruzje = this.ranac[0];
  }

  postaviOruzje(oruzje) {
    this.aktivnoOruzje = oruzje;
  }

  promeniOruzje(brojIndexa) {
    if (this.ranac.length == 0) {
      console.log("Nema oruzja");
      return;
    }
    this.aktivnoOruzje = this.ranac[brojIndexa];
  }

  napadni(cudoviste) {
    console.log(`${this.ime} napao ${cudoviste.name} pomocu ${this.aktivnoOruzje.name}`)
    cudoviste.health -= 20;
  }
}
class Macevalac extends Heroj {
  constructor(ime, health) {
    super(ime, health);
    this.ranac = [];
    this.aktivnoOruzje = null;
  }

  uzmiOruzje(oruzje) {
    if (!(oruzje instanceof Oruzje)) {
      console.log("Nije dozvoljeno");
      return;
    }
    if (this.ranac.length >= 2) {
      console.log("Nije dozvoljeno vise od 2 oruzja");
      return;
    }
    console.log(`${this.ime} je pokupio ${oruzje.name}`)
    this.ranac.push(oruzje);
    this.postaviOruzje(oruzje);
  }

  baciOruzje(brojIndexa) {
    if (this.ranac.length == 0) {
      console.log("Nema oruzja");
      return;
    }
    console.log(this.ranac[brojIndexa], "izbacena");
    this.ranac.splice(brojIndexa, 1);
    this.aktivnoOruzje = this.ranac[0];
  }

  postaviOruzje(oruzje) {
    this.aktivnoOruzje = oruzje;
  }

  promeniOruzje(brojIndexa) {
    if (this.ranac.length == 0) {
      console.log("Nema oruzja");
      return;
    }
    this.aktivnoOruzje = this.ranac[brojIndexa];
  }

  napadni(cudoviste) {
    if(this.aktivnoOruzje.name == 'mac') {
        console.log(`${this.ime} napao ${cudoviste.name} pomocu ${this.aktivnoOruzje}`)
        cudoviste.health -= 10
    }
    if(this.aktivnoOruzje.name == 'koplje') {
        console.log(`${this.ime} napao ${cudoviste.name} pomocu ${this.aktivnoOruzje}`)
        cudoviste.health -= 15
    }
    
  }
}

class Oruzje {
  constructor(name) {
    this.name = name;
  }
}

class Magija {
  constructor(name) {
    this.name = name;
  }
}

class Zmaj {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  udara(heroj) {
    console.log(`${this.name} napao ${heroj.ime}  pomocu udarca`)
    heroj.health -= 5;
  }

  vatra(heroj) {
    console.log(`${this.name} napao ${heroj.ime} pomocu vatre`)
    heroj.health -= 20;
  }

  napadni(heroj) {
    let napadArr = [udara(heroj), vatra(heroj)];
    let item = napadArr[Math.floor(Math.random() * napadArr.length)];
    item(heroj);
  }
}
class Pauk {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  udara(heroj) {
    console.log(`${this.name} napao ${heroj.ime} pomocu udarca`)
    heroj.health -= 5;
  }

  ujeda(heroj) {
    console.log(`${this.name} napao ${heroj.ime} pomocu ujeda`)
    heroj.health -= 8;
  }

}

const carobnjak = new Carobnjak("carobnjak", "150");
const macevalac = new Macevalac("macevalac", "100");
const carolija = new Magija("carolija");
const mac = new Oruzje("mac");
const koplje = new Oruzje("koplje");
const zmaj = new Zmaj("Zmaj", "200");

macevalac.uzmiOruzje(koplje)



carobnjak.uzmiOruzje(carolija);


do {
  const random = randomNapad(0, 100);
  if (random > 50) {
    zmaj.vatra(carobnjak);
  }
  if (random < 50) {
    carobnjak.napadni(zmaj);
  }
} while (zmaj.health > 0 || carobnjak.health > 0);

console.log(carobnjak);
console.log(zmaj);
