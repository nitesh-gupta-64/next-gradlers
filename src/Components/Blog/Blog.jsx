import MustRead from "../MustRead";

const Blog = ({ show, mb, show1, show2, setShow, setShow1, setShow2 }) => {
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
      <MustRead
        mb={mb}
        setShow={setShow}
        show1={show1}
        setShow1={setShow1}
        show2={show2}
        setShow2={setShow2}
      />
    </div>
  );
};

export default Blog;
