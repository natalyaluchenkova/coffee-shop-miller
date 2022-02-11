import { Outlet } from 'react-router-dom';
import MailBot from './MailBot';
import Footer from './Footer';



const Layout = () => {
  return (
    <>
    
    <div className='middle'>
      <Outlet />
    </div>
    <MailBot />
    <Footer />      
    </>
  );
};

export { Layout };
