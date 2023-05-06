import data from "./docsData.json";
const Docs = () => {
  return (
    <section className="wapper">
      {data.basic_syntax.map((item, i) => {
        return (
          <article key={i}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <h3>examples:</h3>
            <span>markdown</span>
            <p>{item.examples[0].markdown}</p>
            <span>html</span>
            <p>{item.examples[0].html}</p>
          </article>
        );
      })}
    </section>
  );
};
export default Docs;
