import { ReactNode } from 'react';
 
 
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
 
    <div>
      {/* Add your header or any other common elements */}
      <header>
        <h1 className='text-6xl font-bold my-10'>Work</h1>
      </header>
      
      {/* Render the content of your pages */}
      <main>
        {children}
       
      </main>
       
    
    </div>
     
  );
};

export default Layout;
