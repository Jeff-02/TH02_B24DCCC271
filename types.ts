
// Kiểu dữ liệu cho Bài 1: Thời tiết
// Dựa trên API: https://wttr.in/Hanoi?format=j1
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

// Kiểu dữ liệu cho Bài 2: Sinh viên
// Dựa trên API: https://jsonplaceholder.typicode.com/users
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

// Kiểu dữ liệu cho Bài 3: Tin tức
// Dựa trên API: https://api.spaceflightnewsapi.net/v4/articles
export interface Article {
  id: number;
  title: string;
  summary: string;
  url: string;
  image_url: string;
  published_at: string;
}

// Kiểu dữ liệu cho response của API tin tức
export interface NewsApiResponse {
  results: Article[];
}