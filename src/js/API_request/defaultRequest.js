import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/recipes';

export class fetchAllRecipes {
  constructor() {
    this.page = 1;
    this.query = '';
    this.area = '';
    this.time = '';
    this.ingredient = '';
    this.category = '';
    this.title = '';
  };
  async fetchRecipes() {
    const url = BASE_URL;
    const params = {
      category: this.category,
      page: this.page,
      limit: this.limit,
      time: this.time,
      area: this.area,
      ingredient: this.ingredient,
      title: this.title,
    };

    const Allrecipes = await axios.get(url, { params });
    return Allrecipes.data;
  };

  setSearchValue(query) {
    this.title = query;
  };

  setCategoryValue(category) {
    this.category = category;
  };

  setTimeValue(time) {
    this.time = time;
  };

  setAreaValue(area) {
    this.area = area;
  };

  setIngredientsValue(ingredient) {
    this.ingredient = ingredient;
  };

  setLimitValue() {
    if (window.innerWidth < 768) {
      this.limit = 6;
      return;
    } else if (window.innerWidth < 1280) {
      this.limit = 8;
      return;
    } else {
      this.limit = 9;
      return;
    }
  };

  setPage(page) {
    this.page = page;
  };

  resetPage() {
    this.page = 1;
  };

  resetCategorie() {
    this.page = 1;
    this.query = '';
    this.area = '';
    this.time = '';
    this.ingredient = '';
    this.category = '';
    this.title = '';  };
};
