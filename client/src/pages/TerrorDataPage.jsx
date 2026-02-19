import NavBar from "../components/NavBar";
import TerrorData from "../components/terrorData";

// console.log(terrorData);
function TerrorDataPage() {
  return (
    <div className="page">
      <div>
        <NavBar />
      </div>
      <h2 className="terrorDataTitle">חומר לעיון לפני החידון</h2>
      <main className="terrorDataDiv">
        <TerrorData />
      </main>
    </div>
  );
}

export default TerrorDataPage;
