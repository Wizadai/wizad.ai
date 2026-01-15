// Types matching the backend API schemas

export interface CreatorDetailSchema {
  creator_id: number;
  creator_name: string;
  username: string;
  profile_photo_url: string | null;
  bio: string | null;
}

export interface FAQSchema {
  faq_id: number;
  question: string;
  answer: string;
  order_to_display: number;
}

export interface PreviewVideoSchema {
  preview_video_id: number;
  poster_type_id: number;
  video_url: string;
  is_main_preview_video: boolean;
  created_at: string;
}

export interface PublicPosterTypeSchema {
  poster_type_id: number;
  poster_type_name: string;
  description_to_display: string | null;
  icon_url: string;
  order_to_display: number;
  default_model_id: number;
  default_model_name: string;
  credit_required: number;
  tags: string[] | null;
  main_preview_video_url: string | null;
  preview_videos: PreviewVideoSchema[] | null;
  creator: CreatorDetailSchema | null;
  faqs: FAQSchema[] | null;
}

export interface PublicPaginatedPosterTypeListResponse {
  poster_types: PublicPosterTypeSchema[];
  total_count: number;
  page: number;
  page_size: number;
  total_pages: number;
}

export interface TagSchema {
  tag_id: number;
  tag_name: string;
  description: string | null;
  active: boolean;
}

export interface PublicTagListResponse {
  tags: TagSchema[];
}

export interface PublicCreatorListResponse {
  creators: CreatorDetailSchema[];
}
