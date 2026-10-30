import Navbar from '@/Component/Share/Navbar';
import { montserrat } from '@/app/layout';
const AuthLayout = ({children}) => {
    return (
        <>
         <div className={`${montserrat.className}`}>

            <Navbar/>
            {children}
         </div>
        </>
    );
};

export default AuthLayout;