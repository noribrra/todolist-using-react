export default function Minput({ value, setforminput, forminput }) {
  return (
    <>
      <label htmlFor="number"> Namber</label>
      <input
        placeholder="+963 994 595 431"
        value={value}
        type="text"
        id="number"
        onChange={(e) => {
          setforminput({ ...forminput, number: e.target.value });
        }}
      />
    </>
  );
}
