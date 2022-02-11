import { Link } from 'react-router-dom';

export function CatalogItem(props) {
  return (
    <>    
      <div className='imgBlock'>
        <img
          src={'http://localhost:3001' + props.item.image}
          alt={props.item.name}
          className='imgBlockCatalog'
        />
      </div>
      <div className='catalogBlockName'><h5>{props.item.name}</h5></div>      
      <div className='catalogbtnBlock'>
      <Link  
        className='catalogbtn'      
        to={`/category/${props.item.nameStr}`}
        key={props.item.name}
      >
        Купить
        </Link>
      </div>      
    </>
  );
}
