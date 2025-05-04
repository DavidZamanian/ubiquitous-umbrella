import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { Post } from "@/types";
import { Link } from "react-router-dom";

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as any),
        createdAt: (doc.data() as any).createdAt.toDate(),
      }));
      setPosts(data);
      setFiltered(data);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    setFiltered(
      posts.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, posts]);

  return (
    <main>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "1rem", width: "100%", padding: "0.5rem" }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
        }}
      >
        {filtered.map((post) => (
          <article key={post.id}>
            <h2>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </h2>
            <p>{post.body.substring(0, 100)}...</p>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Blog;
