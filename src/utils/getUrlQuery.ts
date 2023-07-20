const getUrlQuery = (query: string) => {
    let params = window.location.search;
  
    let searchParams = new URLSearchParams(params);
  
    const result = searchParams.get(query);
  
    return result;
  };
  
  export default getUrlQuery;
  