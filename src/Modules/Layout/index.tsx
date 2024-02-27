import Header from "../../componentes/header/header";


const Layout = ({ children }: any): JSX.Element  => {
  return (
    <main className="w-screen bg-gradient-to-b bg-white from-10% to-red-400 to-15%  h-screen  ">
      <div className="w-screen h-screen  mx-auto flex flex-col overflow-x-hidden">
        <Header/>
        <div className=" flex-grow ">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
