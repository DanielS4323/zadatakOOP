class Heroj {
  ime: string;
  health: number;
  ranac: Object[];
  aktivnoOruzje: null;
  constructor(ime: string, health: number) {
    this.ime = ime;
    this.health = health;
    this.ranac = [];
    this.aktivnoOruzje = null;
  }

  //   randomNapad(): number {

  //   }
}

class Carobnjak extends Heroj {
  ime: string;
  health: number;
  ranac: Magija[];
  aktivnoOruzje: any;
  constructor(ime: string, health: number) {
    super(ime, health);
    this.ranac = [];
    this.aktivnoOruzje = null;
  }
  uzmiOruzje(oruzje: Magija) {
    if (!(oruzje instanceof Magija)) {
      throw Error("Carobnjak moze samo magijom da rukuje");
    }
    if (this.ranac.length >= 2) {
      throw Error("Nije dozvoljeno vise od 2 oruzja!");
    }
    this.ranac.push(oruzje);
    console.log(`${this.ime} je pokupio ${oruzje.name}`);
    this.postaviOruzje(oruzje)
  }
 private postaviOruzje(oruzje: Magija) {
    this.aktivnoOruzje = oruzje;
    console.log(`Oruzje ${oruzje.name} je postavljeno!`)
  }
}

class Macevalac extends Heroj {
  ime: string;
  health: number;
  ranac: Oruzje[];
  aktivnoOruzje: any;
  constructor(ime: string, health: number) {
    super(ime, health);
    this.ranac = [];
    this.aktivnoOruzje = null;
  }

  uzmiOruzje(oruzje: Oruzje) {
    if(!(oruzje instanceof Oruzje)) {
        throw Error('Macevalac moze samo sa oruzjem da rukuje')
    }
    if(this.ranac.length >= 2) {
        throw Error('Nije moguce vise od 2 oruzja')
    }
    try {
        this.ranac.push(oruzje)
        console.log(`${this.ime} je pokupio ${oruzje.name}`)
        this.postaviOruzje(oruzje)
    } catch(e) {
        console.error(e)
    }
  }
 private postaviOruzje(oruzje: Oruzje) {
    this.aktivnoOruzje = oruzje
    console.log(`Oruzje ${oruzje.name} je postavljeno!`)
  }
}

class Magija {
  name: string;
  points: number;
  constructor(name: string, points: number) {
    this.name = name;
    this.points = points;
  }
}
class Oruzje {
  name: string;
  points: number;
  constructor(name: string, points: number) {
    this.name = name;
    this.points = points;
  }
}

const carobnjak = new Carobnjak("Apolo", 150);
const carolija = new Magija("carolija", 20);
const bljest = new Magija("bljest", 35);

const macevalac = new Macevalac('macevalac', 100)
const mac = new Oruzje("mac", 22);

macevalac.uzmiOruzje(mac)



// carobnjak.uzmiOruzje(carolija);
// carobnjak.uzmiOruzje(bljest);


