class Heroj {
  ime: string;
  health: number;
  ranac: Magija[] | Oruzje[];
  aktivnoOruzje: Magija | Oruzje;
}

class Carobnjak extends Heroj {
  private static instance: Carobnjak;
  private _ime: string;
  private _health: number;
  private _ranac: Magija[] = [];
  private _aktivnoOruzje: Magija;
  private constructor(ime: string, health: number) {
    super();
    this._ime = ime;
    this._health = health;
  }

  static instanciraj() {
    if (Carobnjak.instance) {
      return this.instance;
    }
    this.instance = new Carobnjak("Apolo", 150);
    return this.instance;
  }

  uzmiOruzje(oruzje: Magija | Stun) {
    this._ranac.filter((item) => {
      if (item === oruzje) {
        throw Error("Vec imate ovo oruzje!!!");
      }
    });

    if (!(oruzje instanceof Magija) && !(oruzje instanceof Stun)) {
      throw Error("Carobnjak moze samo magijom da rukuje");
    }

    if (this._ranac.length >= 2) {
      throw Error("Nije dozvoljeno vise od 2 oruzja!");
    }
    this._ranac.push(oruzje);
    console.log(`${this._ime} je pokupio ${oruzje.name}`);
    this.postaviOruzje(oruzje);
  }
  private postaviOruzje(oruzje: Magija) {
    this._aktivnoOruzje = oruzje;
    console.log(`Oruzje ${oruzje.name} je postavljeno!`);
  }
}

class Macevalac extends Heroj {
  private static instance: Macevalac;
  private _ime: string;
  private _health: number;
  private _ranac: Oruzje[] = [];
  private _aktivnoOruzje: Oruzje;
  constructor(ime: string, health: number) {
    super();
    this._ime = ime;
    this._health = health;
  }

  static instanciraj() {
    if (Macevalac.instance) {
      return this.instance;
    }
    this.instance = new Macevalac("Macevalac", 120);
    return this.instance;
  }

  uzmiOruzje(oruzje: Mac | Koplje) {
    this._ranac.filter((item) => {
      if (item === oruzje) {
        throw Error("Vec imate ovo oruzje!!!");
      }
    });

    if (!(oruzje instanceof Mac) && !(oruzje instanceof Koplje)) {
      throw Error("Macevalac moze samo sa macem da rukuje");
    }
    if (this._ranac.length >= 2) {
      throw Error("Nije moguce vise od 2 oruzja");
    }

    this._ranac.push(oruzje);
    console.log(`${this._ime} je pokupio ${oruzje.name}`);
    this.postaviOruzje(oruzje);
  }
  private postaviOruzje(oruzje: Oruzje) {
    this._aktivnoOruzje = oruzje;
    console.log(`Oruzje ${oruzje.name} je postavljeno!`);
  }
}

interface Oruzje {
  name: string;
  points: number;
}

class Magija implements Oruzje {
  static instance: Magija = new Magija("carolija", 30);
  name: string;
  points: number;
  private constructor(name: string, points: number) {
    this.name = name;
    this.points = points;
  }
}

class Mac implements Oruzje {
  static instance: Mac = new Mac("Mac", 20);
  name: string;
  points: number;
  private constructor(name: string, points: number) {
    this.name = name;
    this.points = points;
  }
}

class Koplje implements Oruzje {
  static instance: Koplje = new Koplje("Koplje", 25);
  name: string;
  points: number;
  private constructor(name: string, points: number) {
    this.name = name;
    this.points = points;
  }
}

class Stun implements Oruzje {
  static instance: Stun = new Stun("Stun", 27);
  name: string;
  points: number;
  private constructor(name: string, points: number) {
    this.name = name;
    this.points = points;
  }
}
const koplje = Koplje.instance;
const mac = Mac.instance;
const magija = Magija.instance;
const stun = Stun.instance

const carobnjak = Carobnjak.instanciraj();
const macevalac = Macevalac.instanciraj();

// carobnjak.uzmiOruzje(magija)
// macevalac.uzmiOruzje(koplje)
// macevalac.uzmiOruzje(mac);
// macevalac.uzmiOruzje(koplje);

carobnjak.uzmiOruzje(magija)
carobnjak.uzmiOruzje(stun)

// console.log(carobnjak)
