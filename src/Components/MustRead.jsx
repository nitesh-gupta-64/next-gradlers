import React from "react";
import Form from "./Form/Form";
import { useRouter } from "next/navigation";

const MustRead = ({ mb, show, show1, show2, setShow, setShow1, setShow2 }) => {
  const router = useRouter();
  return (
    <div>
      {mb && (
        <>
          <section>
            <h2>MUST READ</h2>
          </section>
          {show1 || show2 ? (
            <div>
              {show1 && (
                <div
                  onClick={() => {
                    router.push(
                      `${show1.slug}                    `
                    );
                  }}
                >
                  <img src={show1.image} />
                  <div>
                    <p>{show1.seo && show1.seo.seoauthor}</p>
                    <ul>
                      <li>
                        <p>
                          {show1.createdAt &&
                            new Date(show1.createdAt.toDate()).getDate()}{" "}
                          {show1.createdAt &&
                            new Date(show1.createdAt.toDate()).toLocaleString(
                              "default",
                              { month: "short" }
                            )}
                          ,{" "}
                          {show1.createdAt &&
                            new Date(show1.createdAt.toDate()).getFullYear()}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {show2 && (
                <div
                  onClick={() => {
                    router.push(
                      `${show2.slug}
                      `
                    );
                  }}
                >
                  <img src={show2.image} />
                  <div>
                    <p>{show2.seo && show2.seo.seoauthor}</p>
                    <ul>
                      <li>
                        <p>
                          {show2.createdAt &&
                            new Date(show2.createdAt.toDate()).getDate()}{" "}
                          {show2.createdAt &&
                            new Date(show2.createdAt.toDate()).toLocaleString(
                              "default",
                              { month: "short" }
                            )}
                          ,{" "}
                          {show2.createdAt &&
                            new Date(show2.createdAt.toDate()).getFullYear()}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>No more Blogs related to this Category</div>
          )}
        </>
      )}
      <p>Request a Call Back</p>
      <section>
        <Form />
      </section>
    </div>
  );
};

export default MustRead;
