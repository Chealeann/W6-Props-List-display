export default function Place({ data }) {
  return (
    <li key="the place id" className="place-item">
      <button>
        <img src={data.image.src} alt={data.image.src} />
        <h3>{data.title}</h3>
      </button>
    </li>
  );
}
