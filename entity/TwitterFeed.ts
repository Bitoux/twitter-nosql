interface TwitterFeed {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  source: string;
  truncated: boolean;
  in_reply_to_status_id?: any;
  in_reply_to_status_id_str?: any;
  in_reply_to_user_id?: any;
  in_reply_to_user_id_str?: any;
  in_reply_to_screen_name?: any;
  user: User;
  geo?: any;
  coordinates?: any;
  place?: any;
  contributors?: any;
  retweeted_status: Retweetedstatus;
  retweet_count: number;
  favorite_count: number;
  entities: Entities2;
  favorited: boolean;
  retweeted: boolean;
  possibly_sensitive: boolean;
  filter_level: string;
  lang: string;
}

interface Entities2 {
  hashtags: Hashtag[];
  symbols: any[];
  urls: Url[];
  user_mentions: Usermention[];
  media: Media2[];
}

interface Media2 {
  id: number;
  id_str: string;
  indices: number[];
  media_url: string;
  media_url_https: string;
  url: string;
  display_url: string;
  expanded_url: string;
  type: string;
  sizes: Sizes;
  source_status_id: number;
  source_status_id_str: string;
}

interface Retweetedstatus {
  created_at: string;
  id: number;
  id_str: string;
  text: string;
  source: string;
  truncated: boolean;
  in_reply_to_status_id?: any;
  in_reply_to_status_id_str?: any;
  in_reply_to_user_id?: any;
  in_reply_to_user_id_str?: any;
  in_reply_to_screen_name?: any;
  user: User;
  geo?: any;
  coordinates?: any;
  place?: any;
  contributors?: any;
  retweet_count: number;
  favorite_count: number;
  entities: Entities;
  favorited: boolean;
  retweeted: boolean;
  possibly_sensitive: boolean;
  lang: string;
}

interface Entities {
  hashtags: Hashtag[];
  symbols: any[];
  urls: Url[];
  user_mentions: Usermention[];
  media: Media[];
}

interface Media {
  id: number;
  id_str: string;
  indices: number[];
  media_url: string;
  media_url_https: string;
  url: string;
  display_url: string;
  expanded_url: string;
  type: string;
  sizes: Sizes;
}

interface Sizes {
  thumb: Thumb;
  small: Thumb;
  medium: Thumb;
  large: Thumb;
}

interface Thumb {
  w: number;
  h: number;
  resize: string;
}

interface Usermention {
  screen_name: string;
  name: string;
  id: number;
  id_str: string;
  indices: number[];
}

interface Url {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
}

interface Hashtag {
  text: string;
  indices: number[];
}

interface User {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  url: string;
  description: string;
  protected: boolean;
  followers_count: number;
  friends_count: number;
  listed_count: number;
  created_at: string;
  favourites_count: number;
  utc_offset: number;
  time_zone: string;
  geo_enabled: boolean;
  verified: boolean;
  statuses_count: number;
  lang: string;
  contributors_enabled: boolean;
  is_translator: boolean;
  is_translation_enabled: boolean;
  profile_background_color: string;
  profile_background_image_url: string;
  profile_background_image_url_https: string;
  profile_background_tile: boolean;
  profile_image_url: string;
  profile_image_url_https: string;
  profile_banner_url: string;
  profile_link_color: string;
  profile_sidebar_border_color: string;
  profile_sidebar_fill_color: string;
  profile_text_color: string;
  profile_use_background_image: boolean;
  default_profile: boolean;
  default_profile_image: boolean;
  following?: any;
  follow_request_sent?: any;
  notifications?: any;
}