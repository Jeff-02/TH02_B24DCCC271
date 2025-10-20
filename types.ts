
export interface WeatherData {
  current_condition: {
    temp_C: string;
    weatherDesc: {
      value: string;
    }[];
  }[];
  nearest_area: {
    areaName: {
      value: string;
    }[];
  }[];
}


export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}


export interface Article {
  id: number;
  title: string;
  summary: string;
  url: string;
  image_url: string;
  published_at: string;
}

export interface NewsApiResponse {
  results: Article[];
}
