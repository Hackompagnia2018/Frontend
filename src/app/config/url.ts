export class Url {
  devUrl = 'http://localhost:8080';
  prodUrl = '';
  // Restituisce il valore dell'url in backend per lo sviluppo
  public getDevUrl() {
    return this.devUrl;
  }
  // Restituisce il valore dell'url in backend per la produzione
  public getProdUrl() {
    return this.prodUrl;
  }
}
