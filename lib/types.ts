export enum Form {
  Initial,
  Loading,
  Success,
  Error
}

export type FormState = {
  state: Form;
  message?: string;
};

export type Subscribers = {
  count: number;
};

export type Views = {
  total: number;
};

export type GithubStats = {
  repos: any;
  gists: any;
  total: number;
};


export type Song = {
  songUrl: string;
  artist: string;
  title: string;
};

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type TopTracks = {
  tracks: Song[];
};

 export type YouTube = {
   subscriberCount: number;
   viewCount: number;
 };

export type GitHub = {
  stars: number;
};

 export type Unsplash = {
   downloads: number;
   views: number;
};

export type TwitterStats = {
  user: any;
  public_metrics: any;
  followers_count: number;
  following_count: number;
  tweet_count: number;
};

export type NextUIThemeContext = {
  type: ThemeType | string;
  theme?: NextUITheme;
  isDark?: boolean;
};
