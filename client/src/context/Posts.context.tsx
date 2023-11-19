"use client";
import { useContext, createContext, useState, useEffect } from "react";

export type Post = {
  id: number;
  title: string;
  author: string;
  content: string;
  category: string;
  createdAt: Date;
  likes: number;
  comments: number;
};

type IContext = {
  posts: Post[];
  isLoading: boolean;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  filterPosts: (filter: string) => void;
};

const PostsContext = createContext<IContext>({
  posts: [],
  isLoading: false,
  setPosts: () => {},
  filterPosts: () => {},
});

const fetchData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/posts");
    const data: Post[] = await res.json();
    console.log("dskjfsd", data);
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const filterPosts = (filter: string) => {
    const filteredPosts = allPosts.filter((post) => {
      if (filter.toLowerCase() === "all") return true;
      return post.category.toLowerCase() === filter.toLowerCase();
    });
    sessionStorage.setItem("posts", JSON.stringify(filteredPosts));
    if (filter === "all") filteredPosts.sort((ele) => ele.likes);
    console.log(filteredPosts);
    setPosts(filteredPosts);
  };

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const data = await fetchData();
      setAllPosts(data);

      const filteredPosts = data.filter((post) => {
        return post.category.toLowerCase() === "finance";
      });
      console.log(filteredPosts);
      setPosts(filteredPosts);
      sessionStorage.setItem("posts", JSON.stringify(filterPosts));
    })();
    setIsLoading(false);
  }, []);

  //@ts-ignore
  const [posts, setPosts] = useState<Post[]>([]);

  const [allPosts, setAllPosts] = useState<Post[]>([]);

  return (
    <PostsContext.Provider
      value={{
        posts,
        isLoading,
        setPosts,
        filterPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
