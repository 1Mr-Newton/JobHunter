import Header from "./Header";
import Jobs from "./Jobs";
export default function FindJob() {
  return (
    <>
      <header className="w-full">
        <Header />
      </header>
      <main className="w-full">
        <Jobs />
      </main>
    </>
  );
}
