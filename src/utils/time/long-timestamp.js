const longTimestamp = function () {
    const now = new Date();
    const formattedTimestamp = now.toISOString().replace(/[-:.TZ]/g, '').slice(0, -1);
    return formattedTimestamp;
}
  
export default longTimestamp