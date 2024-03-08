import Header from "../../componentes/header/header";



const Layout = ({ children }: any): JSX.Element  => {

  return (

<main className="w-auto bg-gradient-to-b bg-gray-700 from-10% to-red-400 to-15%  h-screen  ">

      <div className="w-auto h-screen  flex flex-col overflow-x-hidden">

        <Header/>

        <div className=" flex-grow ">{children}</div>

      </div>

    </main>

);

};



export default Layout;
