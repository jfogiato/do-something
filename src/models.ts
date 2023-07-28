export interface Activity {
  activity: string,
  done: boolean,
  key: string,
  link: string,
  error?: string
};

export interface FetchError {
  error: string
}