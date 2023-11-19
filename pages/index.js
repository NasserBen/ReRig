import Navbar from "../components/navbar";
import FilterParts from "../components/filterParts";
import Footer from "../components/footer";
import Post from "../components/post";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FilterParts />
      <Post />
      <Footer />
    </div>
  );
}
