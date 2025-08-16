import StartupCard, { StartupCardType } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/lite";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null }
  //const posts = await client.fetch(STARTUPS_QUERY);
  const { data: posts } = await sanityFetch({query: STARTUPS_QUERY, params})

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
      <SanityLive/>
    </>
  );
}
