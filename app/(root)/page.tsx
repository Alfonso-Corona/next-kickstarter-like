import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 150,
      author: {_id: 1, name: "John Doe"},
      _id: 1,
      description: "Innovative AI startup",
      image: "https://images.unsplash.com/photo-1754275047961-e2ed3624fda7?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "AI",
      title: "AI Innovations"
    }
  ]

  return (
    <>
      <section className="pink_container bg-pink-500 pattern">
        <h2 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h2>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (posts.map((post: StartupCardType) => (
            <StartupCard post={post} key={post?._id}/>
            ))): (
            <p className="text-center text-gray-500">No startups found.</p>
          )}
        </ul>
      </section>
    </>
  );
}
