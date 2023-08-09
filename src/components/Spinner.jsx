export default function Spinner() {
  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Fetcing Countries Data...</p>
    </div>
  );
}
