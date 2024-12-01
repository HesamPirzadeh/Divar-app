import { useQuery } from "@tanstack/react-query";
import Main from "components/templates/Main";
import SideBar from "components/templates/SideBar";
import Loader from "module/Loader";
import { getCategory } from "services/admin";
import { getAllPosts } from "services/user";

const style = { display: "flex" };

function Home() {
  const { data: posts, isLoading: postloading } = useQuery({
    queryKey: ["allposts"],
    queryFn: getAllPosts,
  });
  const { data: category, isLoading: categoryloading } = useQuery({
    queryKey: ["admin"],
    queryFn: getCategory,
  });

  return (
    <>
      {postloading || categoryloading ? (
        <Loader />
      ) : (
        <div style={style}>
          <SideBar data={category} />
          <Main data={posts} />
        </div>
      )}
    </>
  );
}

export default Home;
