import { useQuery } from "react-query";

// Define a fetch function that can be used to fetch data from an API
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

const PostsComponent = () => {
  // Use the useQuery hook to handle data fetching and caching
  const { data, isLoading, isError, refetch } = useQuery("posts", fetchPosts, {
    cacheTime: 60000,
    staleTime: 30000,
    refetchInterval: 120000,
    refetchOnWindowFocus: true,
    refetchInterval: 120000,
    keepPreviousData: true,
  });

  // Handle loading state
  if (isLoading) return <div>Loading...</div>;
  // Handle error state
  if (isError) return <div>Error loading data</div>;

  // Render the fetched data
  return (
    <div>
      <button onClick={refetch}>Refetch Posts</button>
      {data.map((item) => (
        <div key={item.id}>
          <h2>User id: {item.userId}</h2>
          <h3>Title: {item.title}</h3>
          <p>Body: {item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsComponent;
