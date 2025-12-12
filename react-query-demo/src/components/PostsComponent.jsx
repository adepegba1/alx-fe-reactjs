import { useQuery } from "react-query";

// Define a fetch function that can be used to fetch data from an API
const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const PostsComponent = () => {
  // Use the useQuery hook to handle data fetching and caching
  const { data, isLoading, isError } = useQuery({
    fetchPosts: fetchData,
    cacheTime: 60000,
    staleTime: 30000,
    refetchInterval: 120000,
  });

  // Handle loading state
  if (isLoading) return <div>Loading...</div>;
  // Handle error state
  if (isError) return <div>Error loading data</div>;

  // Render the fetched data
  return (
    <div>
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
