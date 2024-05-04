export interface Course {
  id: number;
  name: string;
  nr_videos: number;
  nr_teachers: number;
  views: number;
  price: number;
  img_id: string;
}

export interface SortCriteria {
  price: boolean;
  popularity: boolean;
}
