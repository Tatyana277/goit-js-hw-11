
import axios from 'axios';
const API_KEY = '39605451-2a978709c93af824fe2a9e2e1';
const BASE_URL = 'https://pixabay.com/api';

export default class ImageApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 40;
  }
  async fetchImages() {
    const params = new URLSearchParams({
      q: this.searchQuery,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: this.per_page,
      page: this.page,
    });
    const url = `${BASE_URL}/?${params}`;
    
    this.addingPage();
    
    return await axios.get(url, { params });
  }
  addingPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.query - newQuery;
  }
}
