const main = () => {
  const currentAddress = new URL(window.location.href);
  
  const isWatchingVideo = /^\/watch$/i.test(currentAddress.pathname);
  if (isWatchingVideo) {
    const params = currentAddress.searchParams;
    
    const isWatchingFromWatchlist = /^WL$/i.test(params.get('list'));
    if (isWatchingFromWatchlist) {
      params.delete('list');
      params.delete('index');
      
      currentAddress.searchParams = params;
      
      window.location.href = currentAddress.href;
    }
  }
};

main();
