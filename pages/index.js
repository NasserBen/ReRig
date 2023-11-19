import Navbar from "../components/navbar";
import FilterParts from "../components/filterParts";
import Footer from "../components/footer";
import AllPosts from "../components/allPosts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FilterParts />
      <AllPosts />
      <Footer />
    </div>
  );
}
