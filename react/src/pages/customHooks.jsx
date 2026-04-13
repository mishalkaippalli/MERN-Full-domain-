import { use } from 'react';
import {useState, useEffect} from 'react';

const Home = () => { 
   onst useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};
}