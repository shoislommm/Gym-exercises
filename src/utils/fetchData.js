export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '77a056b7e1mshc35d5fffbb8ede5p13f8b3jsn1fb60ead9e95'
  }
}

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    return data;
  } catch (error) {
    console.error('Ошибка при запросе данных:', error)
    throw error
  }
}
