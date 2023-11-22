export default function Minput({ value, setforminput, nameofinput }) {
  return (
    <>
      <label htmlFor="number"> {nameofinput}</label>
      <input
        placeholder="+963 994 595 431"
        value={value}
        type="text"
        id="number"
        onChange={(e) => {
          setforminput(e.target.value);
        }}
      />
    </>
  );
}
