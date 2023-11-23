import Header from "../../componentes/header/header";


const Layout = ({ children }:any): JSX.Element => {
  return (
    <main className="w-screen bg-custom-background h-screen ">
      <div className="w-screen h-screen bg-[#fffffff8]  mx-auto flex flex-col overflow-x-hidden">
        <Header/>
        <div className=" flex-grow ">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
