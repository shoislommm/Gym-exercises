export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY 
  }
};

export const youtubeOptions = {
  method: 'GET',
  params: {
    id: 'UCE_M8A5yxnLfW0KghEeajjw'
  },
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '7c4f539f6amsh7d181b609a17894p155c9djsn12aeb534742f'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options)
  const data = await res.json()
  return data;
};
