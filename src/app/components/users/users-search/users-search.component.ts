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
  prods: string[] = ['Waste Oils', 'Slurry', 'Manure', 'vegetable waste', 'Timber', 'Mowings'];
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
