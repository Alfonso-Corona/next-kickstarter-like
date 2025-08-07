import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}: {searchParams: Promise<{query?:string}>}) {

  const query = (await searchParams).query;

  return <>
  <section className="pink_container bg-pink-500 pattern">
    <h2 className="heading">Pitch Your Startup, <br/> Connect With Entrepreneurs</h2>
    <p className="sub-heading !max-w-3xl">Submit ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>
    <SearchForm query={query} />
  </section>
  </>;
}
