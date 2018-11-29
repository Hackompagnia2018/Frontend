import { Component, OnInit } from '@angular/core';
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
  prod: string;
  displaySearch = false;
  constructor(private fb: FormBuilder) {
    this.regions = [
      {label: 'Marche', value: 'Marche'}
    ];
    this.provinces = [
      // {label: 'Ancona', value: 'Ancona'},
      {label: 'Macerata', value: 'Macerata'}
      // {label: 'Ascoli', value: 'Ascoli'},
      // {label: 'Pesaro e Urbino', value: 'Pesaro e Urbino'},
      // {label: 'Fermo', value: 'Fermo'},
    ];
    this.cities = [
      {label: 'Montecassiano', value: 'Offagna'},
      {label: 'Morrovalle', value: 'Offagna'},
      {label: 'Loreto', value: 'Loreto'}
    ];
    this.form = this.fb.group({
      Product: new FormControl({value: null, disabled: false}, [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z ]+$')]),
      Region: new FormControl({value: null, disabled: false}, [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z ]+$')]),
      Province: new FormControl({value: null, disabled: false}, [Validators.required]),
      City: new FormControl({value: null, disabled: false}, [Validators.required])
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
  search() {
    this.displaySearch = true;
  }
  reset() {
    this.form.reset();
  }

}