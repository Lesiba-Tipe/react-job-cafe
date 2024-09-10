
const YouthCafeDatabase = async () => {

  const url = process.env.NODE_ENV === 'production' 
  ? process.env.REACT_APP_YOUTHCAFE_DATABASE_URL 
  : process.env.REACT_APP_LOCALHOST


  return await fetch(url) //Returns a promise
};

export default YouthCafeDatabase;