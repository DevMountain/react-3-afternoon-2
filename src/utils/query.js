export default ( str, key ) => {
  let search = new URLSearchParams( str.split('?').pop() );
  return search.get(key);
}