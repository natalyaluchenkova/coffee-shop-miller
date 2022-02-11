import { Link } from 'react-router-dom';
import { Preloader } from '../../Preloader';

export const CategoryList = (props) => {
  return (
    <div className='categoryName'>
      {!props.category.length ? (
        <Preloader />
      ) : (
        <>
          <h1>{props.category[0].name}</h1>
          <ul className='categoryItems' key={props.category[0].name}>
            {props.category[0].subCat.map((subCat) => (
              <li key={subCat.name}>
                <Link
                  to={`/category/${props.category[0].nameStr}/${subCat.nameStr}`}
                >
                  <div className='categoryImgdiv'>
                    <img
                      src={'http://localhost:3001' + subCat.img}
                      alt={subCat.name}
                      className='categoryImg'
                    />
                  </div>
                  <p>{subCat.name}</p>
                </Link>{' '}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
