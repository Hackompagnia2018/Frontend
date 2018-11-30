import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {MessageService, SelectItemGroup} from 'primeng/api';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Sale} from '../../../classes/sale';
import {UsersService} from '../../../services/users/users.service';


@Component({
  selector: 'app-user-new-sale',
  templateUrl: './user-new-sale.component.html',
  styleUrls: ['./user-new-sale.component.css']
})
export class UserNewSaleComponent implements OnInit {
  @Input() display; // Visualizza il display di profilo utente
  @Output() close = new EventEmitter();
  groupedCity: SelectItemGroup[];
  form: FormGroup;
  uploadedFiles: any[] = [];
  city = null;
  region = null;
  checked = true;
  sendType = null;
  sale = new Sale();

  constructor(private fb: FormBuilder, private messageService: MessageService, private userService: UsersService) {
    this.form = this.fb.group({
      title: new FormControl({value: '', disabled: false}, [Validators.required]),
      prod: new FormControl({value: '', disabled: false}, [Validators.required]),
      address: new FormControl({value: '', disabled: false}, [Validators.required]),
      selectedCity: new FormControl({value: '', disabled: false}, [Validators.required]),
      contact: new FormControl({value: '', disabled: false}, [Validators.required])
    });
  }

  ngOnInit() {
    this.groupedCity = [
        {
          label: 'Abruzzo', value: '',
          items: [
            {label: 'Chieti', value: 'Abbruzzo.Chieti'},
            {label: 'LAquila', value: 'Abbruzzo.LAquila'},
            {label: 'Pescara', value: 'Abbruzzo.Pescara'},
            {label: 'Teramo', value: 'Abbruzzo.Teramo'}
          ]
        },
        {
          label: 'Basilicata', value: '',
          items: [
            {label: 'Matera', value: 'BasilicataMatera'},
            {label: 'Potenza', value: 'BasilicataPotenza'}
          ]
        },
        {
          label: 'Calabria', value: '',
          items: [
            {label: 'Reggio Calabria', value: 'Calabria.Reggio Calabria'},
            {label: 'Catanzaro', value: 'Calabria.Catanzaro'},
            {label: 'Cosenza', value: 'Calabria.Cosenza'},
            {label: 'Crotone', value: 'Calabria.Crotone'},
            {label: 'Vibo Valentia', value: 'Calabria.Vibo Valentia'}
          ]
        },
        {
          label: 'Campania', value: '',
          items: [
            {label: 'Avellino', value: 'Campania.Avellino'},
            {label: 'Benevento', value: 'Campania.Benevento'},
            {label: 'Caserta', value: 'Campania.Caserta'},
            {label: 'Napoli', value: 'Campania.Napoli'},
            {label: 'Salerno', value: 'Campania.Salerno'}
          ]
        },
        {
          label: 'Emilia Romagna', value: '',
          items: [
            {label: 'Bologna', value: 'Emilia Romagna.Bologna'},
            {label: 'Ferrara', value: 'Emilia Romagna.Ferrara'},
            {label: 'Forlì', value: 'Emilia Romagna.Forlì'},
            {label: 'Modena', value: 'Emilia Romagna.Modena'},
            {label: 'Parma', value: 'Emilia Romagna.Parma'},
            {label: 'Piacenza', value: 'Emilia Romagna.Piacenza'},
            {label: 'Ravenna', value: 'Emilia Romagna.Ravenna'},
            {label: 'Reggio Emilia', value: 'Emilia Romagna.Reggio Emilia'},
            {label: 'Rimini', value: 'Emilia Romagna.Rimini'}
          ]
        },
        {
          label: 'Friuli-Venezia Giulia', value: '',
          items: [
            {label: 'Gorizia', value: 'Friuli-Venezia Giulia.Gorizia'},
            {label: 'Pordenone', value: 'Friuli-Venezia Giulia.Pordenone'},
            {label: 'Trieste', value: 'Friuli-Venezia Giulia.Trieste'},
            {label: 'Udine', value: 'Friuli-Venezia Giulia.Udine'}
          ]
        },
        {
          label: 'Lazio', value: '',
          items: [
            {label: 'Frosinone', value: 'Lazio.Frosinone'},
            {label: 'Latina', value: 'Lazio.Latina'},
            {label: 'Rieti', value: 'Lazio.Rieti'},
            {label: 'Roma', value: 'Lazio.Roma'},
            {label: 'Viterbo', value: 'Lazio.Viterbo'}
          ]
        },
        {
          label: 'Liguria', value: '',
          items: [
            {label: 'Genova', value: 'Liguria.Genova'},
            {label: 'Imperia', value: 'Liguria.La Spezia'},
            {label: 'Savona', value: 'Liguria.Savona'}
          ]
        },
        {
          label: 'Lombardia', value: '',
          items: [
            {label: 'Bergamo', value: 'Lombardia.Bergamo'},
            {label: 'Brescia', value: 'Lombardia.Brescia'},
            {label: 'Como', value: 'Lombardia.Como'},
            {label: 'Cremona', value: 'Lombardia.Cremona'},
            {label: 'Lecco', value: 'Lombardia.Lecco'},
            {label: 'Lodi', value: 'Lombardia.Lodi'},
            {label: 'Mantova', value: 'Lombardia.Mantova'},
            {label: 'Milano', value: 'Lombardia.Milano'},
            {label: 'Pavia', value: 'Lombardia.Pavia'},
            {label: 'Sondrio', value: 'Lombardia.Sondrio'},
            {label: 'Varese', value: 'Lombardia.Varese'}
          ]
        },
        {
          label: 'Marche', value: '',
          items: [
            {label: 'Ancona', value: 'Marche.Ancona'},
            {label: 'Ascoli Piceno', value: 'Marche.Ascoli Piceno'},
            {label: 'Fermo', value: 'Marche.Fermo'},
            {label: 'Macerata', value: 'Marche.Macerata'},
            {label: 'Pesaro-Urbino', value: 'Marche.Pesaro-Urbino'}
          ]
        },
        {
          label: 'Molise', value: '',
          items: [
            {label: 'Campobasso', value: 'Molise.Campobasso'},
            {label: 'Isernia', value: 'Molise.Isernia'}
          ]
        },
        {
          label: 'Piemonte', value: '',
          items: [
            {label: 'Alessandria', value: 'Piemonte.Alessandria'},
            {label: 'Asti', value: 'Piemonte.Asti'},
            {label: 'Biella', value: 'Piemonte.Biella'},
            {label: 'Cuneo', value: 'Piemonte.Cuneo'},
            {label: 'Novara', value: 'Piemonte.Novara'},
            {label: 'Turin', value: 'Piemonte.Turin'},
            {label: 'Verbano-Cosio-Ossola', value: 'Piemonte.Verbano-Cosio-Ossola'},
            {label: 'Vercelli', value: 'Piemonte.Vercelli'}
          ]
        },
        {
          label: 'Puglia', value: '',
          items: [
            {label: 'Bari', value: 'Puglia.Bari'},
            {label: 'Barletta-Andria-Trani', value: 'Puglia.Barletta-Andria-Trani'},
            {label: 'Brindisi', value: 'Puglia.Brindisi'},
            {label: 'Foggia', value: 'Puglia.Foggia'},
            {label: 'Lecce', value: 'Puglia.Lecce'},
            {label: 'Taranto', value: 'Puglia.Taranto'}
          ]
        },
        {
          label: 'Sardegna', value: '',
          items: [
            {label: 'Cagliari', value: 'Sardegna.Cagliari'},
            {label: 'Carbonia Iglesias', value: 'Sardegna.Carbonia Iglesias'},
            {label: 'Medio Campidano', value: 'Sardegna.Medio Campidano'},
            {label: 'Nuoro', value: 'Sardegna.Nuoro'},
            {label: 'Ogliastra', value: 'Sardegna.Ogliastra'},
            {label: 'Olbia', value: 'Sardegna.Olbia'},
            {label: 'Tempio', value: 'Sardegna.Tempio'},
            {label: 'Oristano', value: 'Sardegna.Oristano'},
            {label: 'Sassari', value: 'Sardegna.Sassari'}
          ]
        },
        {
          label: 'Sicilia', value: '',
          items: [
            {label: 'Agrigento', value: 'Sicilia.Agrigento'},
            {label: 'Caltanissetta', value: 'Sicilia.Caltanissetta'},
            {label: 'Catania', value: 'Sicilia.Catania'},
            {label: 'Enna', value: 'Sicilia.Enna'},
            {label: 'Messina', value: 'Sicilia.Messina'},
            {label: 'Palermo', value: 'Sicilia.Palermo'},
            {label: 'Ragusa', value: 'Sicilia.Ragusa'},
            {label: 'Siracusa', value: 'Sicilia.Siracusa'},
            {label: 'Trapani', value: 'Sicilia.Trapani'}
          ]
        },
        {
          label: 'Toscana', value: '',
          items: [
            {label: 'Arezzo', value: 'Toscana.Arezzo'},
            {label: 'Firenze', value: 'Toscana.Firenze'},
            {label: 'Grosseto', value: 'Toscana.Grosseto'},
            {label: 'Livorno', value: 'Toscana.Livorno'},
            {label: 'Lucca', value: 'Toscana.Lucca'},
            {label: 'Massa-Carrara', value: 'Toscana.Massa-Carrara'},
            {label: 'Pisa', value: 'Toscana.Pisa'},
            {label: 'Pistoia', value: 'Toscana.Pistoia'},
            {label: 'Prato', value: 'Toscana.Prato'},
            {label: 'Siena', value: 'Toscana.Siena'}
          ]
        },
        {
          label: 'Trentino-Alto Adige', value: '',
          items: [
            {label: 'Bolzano', value: 'Trentino-Alto Adige.Bolzano'},
            {label: 'Trento', value: 'Trentino-Alto Adige.Trento'}
          ]
        },
        {
          label: 'Umbria', value: '',
          items: [
            {label: 'Perugia', value: 'Umbria.Perugia'},
            {label: 'Terni', value: 'Umbria.Terni'}
          ]
        },
        {
          label: 'Valle DAosta', value: '',
          items: [
            {label: 'Aosta', value: 'Valle DAosta.Aosta'}
          ]
        },
        {
          label: 'Veneto', value: '',
          items: [
            {label: 'Belluno', value: 'Veneto.Belluno'},
            {label: 'Padova', value: 'Veneto.Padova'},
            {label: 'Rovigo', value: 'Veneto.Rovigo'},
            {label: 'Treviso', value: 'Veneto.Treviso'},
            {label: 'Venezia', value: 'Veneto.Venezia'},
            {label: 'Verona', value: 'Veneto.Verona'},
            {label: 'Vicenza', value: 'Veneto.Vicenza'}
          ]
        }
      ];
    }

  // Metodo alla chiusura del profilo
  closeAddSale() {
    this.close.emit();
    this.display = false;
  }

  // Metodo per salvare i dati
  saveSale() {
    const provAndCity = this.form.value['selectedCity'].split('.');
    this.region = provAndCity[0];
    this.city = provAndCity[1];
    if (this.checked) {
      this.sendType = 'seller';
    } else {
      this.sendType = 'buyer';
    }
    this.sale['title'] = this.form.value['title'];
    this.sale['address'] = this.form.value['address'];
    this.sale['contact'] = this.form.value['contact'];
    this.sale['prod'] = this.form.value['prod'];
    this.sale['region'] = this.region;
    this.sale['province'] = this.city;
    this.sale['send_type'] = this.sendType;
    console.log(this.sale);
    this.userService.postNewSale(this.sale).subscribe(res => console.log(res), error => console.log(error));
    this.userService.postSuggestion(this.sale).subscribe(res => console.log(res), error => console.log(error));

    this.messageService.add({severity: 'success', summary: 'Successfully', detail: 'Add Sale Successful'});
    this.form.reset();
    this.close.emit();
    this.display = false;
  }
  // Metodo per resettare i dati
  resetSale() {
    this.form.reset();
  }
  // Add Image
  onUpload(event) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

}
