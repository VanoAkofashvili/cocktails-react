import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FavoriteCocktail() {
  const navigate = useNavigate();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/auth');
    }
  }, []);

  useEffect(() => {
    async function getFavCocktail() {
      try {
        const resp = await fetch(
          'http://localhost:5000/api/v1/cocktails/favorite',
          {
            headers: {
              authorization: localStorage.getItem('token'),
            },
          }
        );
        if (!resp.ok) throw new Error();

        const data = await resp.json();
        setCocktail(data);
      } catch (err) {
        navigate('/auth');
      }
    }
    getFavCocktail();
  }, []);

  return <div>{JSON.stringify(cocktail, null, 2)}</div>;
}

export default FavoriteCocktail;
