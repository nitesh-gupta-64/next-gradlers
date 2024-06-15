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
      if (data[0] && blogId === data[0].slug) {
        setShow(data[0]);
        setShow1(data[1]);
        setShow2(data[2]);
      }
      if (data[1] && blogId === data[1].slug) {
        setShow(data[1]);
        setShow1(data[0]);
        setShow2(data[2]);
      }
      if (data[2] && blogId === data[2].slug) {
        setShow(data[2]);
        setShow1(data[0]);
        setShow2(data[1]);
      }
    }
    if (categoryId === "gre") {
      setClicked("gr");
      const data = sorted.filter((blog) => blog.category === "GRE");

      if (data[0] && blogId === data[0].slug) {
        setShow(data[0]);
        setShow1(data[1]);
        setShow2(data[2]);
      }
      if (data[1] && blogId === data[1].slug) {
        setShow(data[1]);
        setShow1(data[0]);
        setShow2(data[2]);
      }
      if (data[2] && blogId === data[2].slug) {
        setShow(data[2]);
        setShow1(data[0]);
        setShow2(data[1]);
      }
    }
    if (categoryId === "masters") {
      setClicked("mp");
      const data = sorted.filter(
        (blog) => blog.category === "Masters" || blog.category === "PhD"
      );
      if (data[0] && blogId === data[0].slug) {
        setShow(data[0]);
        setShow1(data[1]);
        setShow2(data[2]);
      }
      if (data[1] && blogId === data[1].slug) {
        setShow(data[1]);
        setShow1(data[0]);
        setShow2(data[2]);
      }
      if (data[2] && blogId === data[2].slug) {
        setShow(data[2]);
        setShow1(data[0]);
        setShow2(data[1]);
      }
    }
    if (categoryId === "undergraduate") {
      setClicked("ug");
      const data = sorted.filter((blog) => blog.category === "Undergraduate");
      if (data[0] && blogId === data[0].slug) {
        setShow(data[0]);
        setShow1(data[1]);
        setShow2(data[2]);
      }
      if (data[1] && blogId === data[1].slug) {
        setShow(data[1]);
        setShow1(data[0]);
        setShow2(data[2]);
      }
      if (data[2] && blogId === data[2].slug) {
        setShow(data[2]);
        setShow1(data[0]);
        setShow2(data[1]);
      }
    }
    if (categoryId === "ielts") {
      setClicked("it");
      const data = sorted.filter(
        (blog) => blog.category === "IELTS" || blog.category === "TOEFL"
      );
      if (data[0] && blogId === data[0].slug) {
        setShow(data[0]);
        setShow1(data[1]);
        setShow2(data[2]);
      }
      if (data[1] && blogId === data[1].slug) {
        setShow(data[1]);
        setShow1(data[0]);
        setShow2(data[2]);
      }
      if (data[2] && blogId === data[2].slug) {
        setShow(data[2]);
        setShow1(data[0]);
        setShow2(data[1]);
      }
    }
  }, [sorted]);

  return (
    <div className={styles.blog}>
      <div>
        <p
          onClick={() => {
            router.push(
              `/blogs/gmat/${
                gm[0] && Object.keys(gm[0]).length === 0
                  ? "noblog"
                  : gm[0]?.slug || "noblog"
              }`
            );
          }}
          id={clicked === "gm" && styles.clicked}
        >
          GMAT
        </p>
        <p
          onClick={() => {
            router.push(
              `/blogs/gre/${
                gr[0] && Object.keys(gr[0]).length === 0
                  ? "noblog"
                  : gr[0]?.slug || "noblog"
              }`
            );
          }}
          id={clicked === "gr" && styles.clicked}
        >
          GRE
        </p>
        <p
          onClick={() => {
            router.push(
              `/blogs/masters/${
                ma[0] && Object.keys(ma[0]).length === 0
                  ? "noblog"
                  : ma[0]?.slug || "noblog"
              }`
            );
          }}
          id={clicked === "mp" && styles.clicked}
        >
          Masters & PhD
        </p>
        <p
          onClick={() => {
            router.push(
              `/blogs/undergraduate/${
                ug[0] && Object.keys(ug[0]).length === 0
                  ? "noblog"
                  : ug[0]?.slug || "noblog"
              }`
            );
          }}
          id={clicked === "ug" && styles.clicked}
        >
          Undergraduate
        </p>
        <p
          onClick={() => {
            router.push(
              `/blogs/ielts/${
                ie[0] && Object.keys(ie[0]).length === 0
                  ? "noblog"
                  : ie[0]?.slug || "noblog"
              }`
            );
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
