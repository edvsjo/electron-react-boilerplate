import NameInput from '../components/NameInput';
import SelectButtons from '../components/SelectButtons';
import ImageViewer from '../components/ImageViewer';

export default function SelectFolder() {
  return (
    <div>
      <div className="TopSection">
        <h1>Cropper</h1>
        <SelectButtons />
        <NameInput />
      </div>
      <div className="MidSection">
        {/* liste over bilder
        selve bildet
        */}
        <ImageViewer />
      </div>
    </div>
  );
}
