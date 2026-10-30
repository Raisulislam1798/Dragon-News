
import Navbar from "@/Component/Share/Navbar";
import Header from "@/Component/Share/Header";
import BrecakingNews from "@/Component/Share/BecakingNews";
 

const MainLayout = ({children}) => {
    return (
        <>
            <Header/>
            <BrecakingNews/>
            <Navbar/>
            {children}
        </>
    );
};

export default MainLayout;