const API_KEY = process.env.REACT_APP_API_KEY;
export const CHAT_LENGTH = 20;
export const API_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+API_KEY;
export const SUGGESSION_API_URL ='http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='
export const SEARCH_API_URL = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key='+API_KEY+'&q=';
