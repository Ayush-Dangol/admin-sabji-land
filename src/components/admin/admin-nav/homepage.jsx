import UploadImg from "../../uploadImage";

export default function Home() {
  return (
    <div>
      <h1>Ad Section</h1>
      <UploadImg dimension="1160*590" setMultiple={true} />
    </div>
  );
}
