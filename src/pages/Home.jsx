import Main from "components/templates/Main";
import SideBar from "components/templates/SideBar";

const style = { display: "flex" };

function Home() {
  return (
    <div style={style}>
      <SideBar />
      <Main />
    </div>
  );
}

export default Home;
