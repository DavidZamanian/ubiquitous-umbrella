import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig";
import { Post } from "@/types";

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetch = async () => {
      if (!id) return;
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setPost({
          id: docSnap.id,
          ...(data as any),
          createdAt: (data.createdAt as any).toDate(),
        });
      }
    };
    fetch();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{post.title}</h1>
      <p>
        <em>{post.createdAt.toLocaleDateString()}</em>
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </main>
  );
};

export default PostDetail;
