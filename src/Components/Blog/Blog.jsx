import Form from "../Form/Form";

const Blog = ({ show, mb, show1, show2 }) => {
  return (
    <div>
      {show ? (
        <div>
          <h2>{show.title}</h2>
          <main>
            <div>
              <img src={show.image} />
            </div>
          </main>
          <p dangerouslySetInnerHTML={{ __html: show.description }} />
          {/* <p>{show.description}</p> */}
          <ul>{show.tags && show.tags.map((tag) => <li>{tag}</li>)}</ul>
          <p>{show.summary}</p>
        </div>
      ) : (
        <div>No Blogs to show related to this Category</div>
      )}
      <div>
        {mb && (
          <>
            <section>
              <h2>MUST READ</h2>
            </section>
            {show1 || show2 ? (
              <div>
                {show1 && (
                  <div>
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
                  <div>
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
    </div>
  );
};

export default Blog;
