import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.css']
})
export class UsersSearchComponent implements OnInit {

  form: FormGroup;
  groupedCity: any;
  prods: string[] = ['Waste Oils', 'Slurry', 'Manure', 'Vegetable waste', 'Timber', 'Mowings'];
  regions: SelectItem[];
  provinces: SelectItem[];
  cities: SelectItem[];
  filteredProds: any[];
  @Output() displaySearch = new EventEmitter();
  prod: string;
  constructor(private fb: FormBuilder) {
    this.regions = [
      {label: 'Marche', value: 'Marche'}
    ];
    this.provinces = [
      {label: 'Macerata', value: 'Macerata'}
    ];
    this.cities = [
      {label: 'Montecassiano', value: 'Montecassiano'},
      {label: 'Morrovalle', value: 'Morrovalle'},
      {label: 'Loreto', value: 'Loreto'}
    ];
    this.form = this.fb.group({
      Product: new FormControl({value: null, disabled: false}, [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z ]+$')]),
      selectedCity: new FormControl({value: null, disabled: false}, [Validators.required])
    });
  }

  ngOnInit() {
    this.groupedCity = [
      {
        label: 'Abruzzo', value: '',
        items: [
          {label: 'Chieti', value: 'Chieti'},
          {label: 'LAquila', value: 'LAquila'},
          {label: 'Pescara', value: 'Pescara'},
          {label: 'Teramo', value: 'Teramo'}
        ]
      },
      {
        label: 'Basilicata', value: '',
        items: [
          {label: 'Matera', value: 'Matera'},
          {label: 'Potenza', value: 'Potenza'}
        ]
      },
      {
        label: 'Calabria', value: '',
        items: [
          {label: 'Reggio Calabria', value: 'Reggio Calabria'},
          {label: 'Catanzaro', value: 'Catanzaro'},
          {label: 'Cosenza', value: 'Cosenza'},
          {label: 'Crotone', value: 'Crotone'},
          {label: 'Vibo Valentia', value: 'Vibo Valentia'}
        ]
      },
      {
        label: 'Campania', value: '',
        items: [
          {label: 'Avellino', value: 'Avellino'},
          {label: 'Benevento', value: 'Benevento'},
          {label: 'Caserta', value: 'Caserta'},
          {label: 'Napoli', value: 'Napoli'},
          {label: 'Salerno', value: 'Salerno'}
        ]
      },
      {
        label: 'Emilia Romagna', value: '',
        items: [
          {label: 'Bologna', value: 'Bologna'},
          {label: 'Ferrara', value: 'Ferrara'},
          {label: 'Forlì', value: 'Forlì'},
          {label: 'Modena', value: 'Modena'},
          {label: 'Parma', value: 'Parma'},
          {label: 'Piacenza', value: 'Piacenza'},
          {label: 'Ravenna', value: 'Ravenna'},
          {label: 'Reggio Emilia', value: 'Reggio Emilia'},
          {label: 'Rimini', value: 'Rimini'}
        ]
      },
      {
        label: 'Friuli-Venezia Giulia', value: '',
        items: [
          {label: 'Gorizia', value: 'Gorizia'},
          {label: 'Pordenone', value: 'Pordenone'},
          {label: 'Trieste', value: 'Trieste'},
          {label: 'Udine', value: 'Udine'}
        ]
      },
      {
        label: 'Lazio', value: '',
        items: [
          {label: 'Frosinone', value: 'Frosinone'},
          {label: 'Latina', value: 'Latina'},
          {label: 'Rieti', value: 'Rieti'},
          {label: 'Roma', value: 'Roma'},
          {label: 'Viterbo', value: 'Viterbo'}
        ]
      },
      {
        label: 'Liguria', value: '',
        items: [
          {label: 'Genova', value: 'Genova'},
          {label: 'Imperia', value: 'La Spezia'},
          {label: 'Savona', value: 'Savona'}
        ]
      },
      {
        label: 'Lombardia', value: '',
        items: [
          {label: 'Bergamo', value: 'Bergamo'},
          {label: 'Brescia', value: 'Brescia'},
          {label: 'Como', value: 'Como'},
          {label: 'Cremona', value: 'Cremona'},
          {label: 'Lecco', value: 'Lecco'},
          {label: 'Lodi', value: 'Lodi'},
          {label: 'Mantova', value: 'Mantova'},
          {label: 'Milano', value: 'Milano'},
          {label: 'Pavia', value: 'Pavia'},
          {label: 'Sondrio', value: 'Sondrio'},
          {label: 'Varese', value: 'Varese'}
        ]
      },
      {
        label: 'Marche', value: '',
        items: [
          {label: 'Ancona', value: 'Ancona'},
          {label: 'Ascoli Piceno', value: 'Ascoli Piceno'},
          {label: 'Fermo', value: 'Fermo'},
          {label: 'Macerata', value: 'Macerata'},
          {label: 'Pesaro-Urbino', value: 'Pesaro-Urbino'}
        ]
      },
      {
        label: 'Molise', value: '',
        items: [
          {label: 'Campobasso', value: 'Campobasso'},
          {label: 'Isernia', value: 'Isernia'}
        ]
      },
      {
        label: 'Piemonte', value: '',
        items: [
          {label: 'Alessandria', value: 'Alessandria'},
          {label: 'Asti', value: 'Asti'},
          {label: 'Biella', value: 'Biella'},
          {label: 'Cuneo', value: 'Cuneo'},
          {label: 'Novara', value: 'Novara'},
          {label: 'Turin', value: 'Turin'},
          {label: 'Verbano-Cosio-Ossola', value: 'Verbano-Cosio-Ossola'},
          {label: 'Vercelli', value: 'Vercelli'}
        ]
      },
      {
        label: 'Puglia', value: '',
        items: [
          {label: 'Bari', value: 'Bari'},
          {label: 'Barletta-Andria-Trani', value: 'Barletta-Andria-Trani'},
          {label: 'Brindisi', value: 'Brindisi'},
          {label: 'Foggia', value: 'Foggia'},
          {label: 'Lecce', value: 'Lecce'},
          {label: 'Taranto', value: 'Taranto'}
        ]
      },
      {
        label: 'Sardegna', value: '',
        items: [
          {label: 'Cagliari', value: 'Cagliari'},
          {label: 'Carbonia Iglesias', value: 'Carbonia Iglesias'},
          {label: 'Medio Campidano', value: 'Medio Campidano'},
          {label: 'Nuoro', value: 'Nuoro'},
          {label: 'Ogliastra', value: 'Ogliastra'},
          {label: 'Olbia', value: 'Olbia'},
          {label: 'Tempio', value: 'Tempio'},
          {label: 'Oristano', value: 'Oristano'},
          {label: 'Sassari', value: 'Sassari'}
        ]
      },
      {
        label: 'Sicilia', value: '',
        items: [
          {label: 'Agrigento', value: 'Agrigento'},
          {label: 'Caltanissetta', value: 'Caltanissetta'},
          {label: 'Catania', value: 'Catania'},
          {label: 'Enna', value: 'Enna'},
          {label: 'Messina', value: 'Messina'},
          {label: 'Palermo', value: 'Palermo'},
          {label: 'Ragusa', value: 'Ragusa'},
          {label: 'Siracusa', value: 'Siracusa'},
          {label: 'Trapani', value: 'Trapani'}
        ]
      },
      {
        label: 'Toscana', value: '',
        items: [
          {label: 'Arezzo', value: 'Arezzo'},
          {label: 'Firenze', value: 'Firenze'},
          {label: 'Grosseto', value: 'Grosseto'},
          {label: 'Livorno', value: 'Livorno'},
          {label: 'Lucca', value: 'Lucca'},
          {label: 'Massa-Carrara', value: 'Massa-Carrara'},
          {label: 'Pisa', value: 'Pisa'},
          {label: 'Pistoia', value: 'Pistoia'},
          {label: 'Prato', value: 'Prato'},
          {label: 'Siena', value: 'Siena'}
        ]
      },
      {
        label: 'Trentino-Alto Adige', value: '',
        items: [
          {label: 'Bolzano', value: 'Bolzano'},
          {label: 'Trento', value: 'Trento'}
        ]
      },
      {
        label: 'Umbria', value: '',
        items: [
          {label: 'Perugia', value: 'Perugia'},
          {label: 'Terni', value: 'Terni'}
        ]
      },
      {
        label: 'Valle DAosta', value: '',
        items: [
          {label: 'Aosta', value: 'Aosta'}
        ]
      },
      {
        label: 'Veneto', value: '',
        items: [
          {label: 'Belluno', value: 'Belluno'},
          {label: 'Padova', value: 'Padova'},
          {label: 'Rovigo', value: 'Rovigo'},
          {label: 'Treviso', value: 'Treviso'},
          {label: 'Venezia', value: 'Venezia'},
          {label: 'Verona', value: 'Verona'},
          {label: 'Vicenza', value: 'Vicenza'}
        ]
      }
    ];
  }
  filterProds(event) {
    this.filteredProds = [];
    for (let i = 0; i < this.prods.length; i++) {
      const prod = this.prods[i];
      if (prod.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.filteredProds.push(prod);
      }
    }
  }
  reset() {
    this.form.reset();
  }
  search(search) {
    this.displaySearch.emit(search);
    this.form.reset();
  }
}
