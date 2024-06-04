"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./Blog.module.css";
import Image from "next/image";
import { AppContext } from "@/Context/AppContext";
import Form from "../Form/Form";

const Blog = () => {
  const { blogs } = useContext(AppContext);

  const [clicked, setClicked] = useState("");
  const [show, setShow] = useState({});
  const [show1, setShow1] = useState({});
  const [show2, setShow2] = useState({});
  const [sorted, setSorted] = useState([]);

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      const sortedBlogs = [...blogs].sort(
        (b, a) =>
          new Date(a.createdAt.toDate()) - new Date(b.createdAt.toDate())
      );
      setSorted(sortedBlogs);
      console.log(sortedBlogs);
    }
    setClicked("gm");
  }, [blogs]);

  useEffect(() => {
    if (sorted && sorted.length) {
      if (clicked === "gm") {
        const data = sorted.filter((blog) => blog.category === "GMAT");
        setShow(data[0]);
        setShow1(data[1]);
        setShow2(data[2]);
      }
      if (clicked === "gr") {
        const data = sorted.filter((blog) => blog.category === "GRE");
        setShow(data[0]);
        setShow1(data[1]);
        setShow2(data[2]);
      }
      if (clicked === "mp") {
        const data = sorted.filter(
          (blog) => blog.category === "Masters" || blog.category === "PhD"
        );
        setShow(data[0]);
        setShow1(data[1]);
        setShow2(data[2]);
      }
      if (clicked === "ug") {
        const data = sorted.filter((blog) => blog.category === "Undergraduate");
        setShow(data[0]);
        setShow1(data[1]);
        setShow2(data[2]);
      }
      if (clicked === "it") {
        const data = sorted.filter(
          (blog) => blog.category === "IELTS" || blog.category === "TOEFL"
        );
        setShow(data[0]);
        setShow1(data[1]);
        setShow2(data[2]);
      }
    }
  }, [clicked, sorted]);

  return (
    <div className={styles.blog}>
      <div>
        <p
          onClick={() => setClicked("gm")}
          id={clicked === "gm" && styles.clicked}
        >
          GMAT
        </p>
        <p
          onClick={() => setClicked("gr")}
          id={clicked === "gr" && styles.clicked}
        >
          GRE
        </p>
        <p
          onClick={() => setClicked("mp")}
          id={clicked === "mp" && styles.clicked}
        >
          Masters & PhD
        </p>
        <p
          onClick={() => setClicked("ug")}
          id={clicked === "ug" && styles.clicked}
        >
          Undergraduate
        </p>
        <p
          onClick={() => setClicked("it")}
          id={clicked === "it" && styles.clicked}
        >
          IELTS/TOEFL
        </p>
      </div>
      <div>
        {show ? (
          <div>
            <h2>{show.title}</h2>
            <div>
              <img src={show.image} />
            </div>
            <p dangerouslySetInnerHTML={{ __html: show.description }} />
            {/* <p>{show.description}</p> */}
            <ul>{show.tags && show.tags.map((tag) => <li>{tag}</li>)}</ul>
            <p>{show.summary}</p>
          </div>
        ) : (
          <div>No Blogs to show related to this Category</div>
        )}
        <div>
          <h2>MUST READ</h2>
          {show1 || show2 ? (
            <div>
              {show1 && (
                <div>
                  <img src={show1.image} />
                  <div>
                    <p>{show1.title}</p>
                    <p>
                      {show1.createdAt &&
                        new Date(show1.createdAt.toDate()).toDateString()}
                    </p>
                  </div>
                </div>
              )}
              {show2 && (
                <div>
                  <img src={show2.image} />
                  <div>
                    <p>{show2.title}</p>
                    <p>
                      {show2.createdAt &&
                        new Date(show2.createdAt.toDate()).toDateString()}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>No more Blogs related to this Category</div>
          )}
          <p>Request a Call Back</p>
          <section>
            <Form />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog;
