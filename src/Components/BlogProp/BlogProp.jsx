"use client";
import React, { useContext, useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import { AppContext } from "@/Context/AppContext";
import { useRouter, useParams } from "next/navigation";
import styles from "../Blog/Blog.module.css";

const BlogProp = () => {
  const { gm, gr, ma, ug, ie, mb, sorted, setSorted } = useContext(AppContext);

  const [clicked, setClicked] = useState("");
  const [show, setShow] = useState({});
  const [show1, setShow1] = useState({});
  const [show2, setShow2] = useState({});

  const router = useRouter();
  const params = useParams();
  const { categoryId, blogId } = params;

  useEffect(() => {
    if (categoryId === "gmat") {
      setClicked("gm");
      const data = sorted.filter((blog) => blog.category === "GMAT");
      setShow(data[0]);
      setShow1(data[1]);
      setShow2(data[2]);
    }
    if (categoryId === "gre") {
      setClicked("gr");
      const data = sorted.filter((blog) => blog.category === "GRE");
      setShow(data[0]);
      setShow1(data[1]);
      setShow2(data[2]);
    }
    if (categoryId === "masters") {
      setClicked("mp");
      const data = sorted.filter(
        (blog) => blog.category === "Masters" || blog.category === "PhD"
      );
      setShow(data[0]);
      setShow1(data[1]);
      setShow2(data[2]);
    }
    if (categoryId === "undergraduate") {
      setClicked("ug");
      const data = sorted.filter((blog) => blog.category === "Undergraduate");
      setShow(data[0]);
      setShow1(data[1]);
      setShow2(data[2]);
    }
    if (categoryId === "ielts") {
      setClicked("it");
      const data = sorted.filter(
        (blog) => blog.category === "IELTS" || blog.category === "TOEFL"
      );
      setShow(data[0]);
      setShow1(data[1]);
      setShow2(data[2]);
    }
  }, [sorted]);

  return (
    <div className={styles.blog}>
      <div>
        <p
          onClick={() => {
            router.push(`/blogs/gmat/${gm && Object.keys(gm).length === 0 ? 'noblog' : gm?.slug || 'noblog'}`);
          }}
          id={clicked === "gm" && styles.clicked}
        >
          GMAT
        </p>
        <p
          onClick={() => {
            router.push(`/blogs/gre/${gr && Object.keys(gr).length === 0 ? 'noblog' : gr?.slug || 'noblog'}`);
          }}
          id={clicked === "gr" && styles.clicked}
        >
          GRE
        </p>
        <p
          onClick={() => {
            router.push(`/blogs/masters/${ma && Object.keys(ma).length === 0 ? 'noblog' : ma?.slug || 'noblog'}`);
          }}
          id={clicked === "mp" && styles.clicked}
        >
          Masters & PhD
        </p>
        <p
          onClick={() => {
            router.push(`/blogs/undergraduate/${ug && Object.keys(ug).length === 0 ? 'noblog' : ug?.slug || 'noblog'}`);
          }}
          id={clicked === "ug" && styles.clicked}
        >
          Undergraduate
        </p>
        <p
          onClick={() => {
            router.push(`/blogs/ielts/${ie && Object.keys(ie).length === 0 ? 'noblog' : ie?.slug || 'noblog'}`);
          }}
          id={clicked === "it" && styles.clicked}
        >
          IELTS/TOEFL
        </p>
      </div>
      <Blog
        mb={mb}
        show={show}
        setShow={setShow}
        show1={show1}
        setShow1={setShow1}
        show2={show2}
        setShow2={setShow2}
        sorted={sorted}
        setSorted={setSorted}
        clicked={clicked}
        setClicked={setClicked}
      />
    </div>
  );
};

export default BlogProp;
