export interface Activity {
  activity: string,
  done: boolean,
  key: string,
  link: string,
  error?: string
};

export interface FetchError {
  error?: string
};

export interface ActivityPreferences {
  type: string,
  participants: string,
  cost: string,
};