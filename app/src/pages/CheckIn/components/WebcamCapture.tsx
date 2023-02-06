import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { imgUser } from "~/src/recoil_state/checkIn";
import Button from "~/src/ui/Button";

const WebcamCapture = () => {
  const setDataImg = useSetRecoilState(imgUser);
  const dataImg = useRecoilValue(imgUser);
  const webcamRef = useRef<any>();
  const [imgSrc, setImgSrc] = useState<any>(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef?.current?.getScreenshot();
    setImgSrc(imageSrc);
    setDataImg(imageSrc);
  }, [webcamRef, setDataImg, setImgSrc]);

  return (
    <>
      {dataImg ? (
        <div className="flex flex-col justify-center">
          <img src={imgSrc} />
          <label
            htmlFor={"modal-check-in"}
            className="btn btn-primary mt-2 rounded-md"
            onClick={() => {
              setDataImg(imgSrc);
            }}
          >
            Dùng ảnh này
          </label>

          <Button
            className="mt-2"
            onClick={() => {
              setDataImg(null);
            }}
          >
            Chụp lại
          </Button>
        </div>
      ) : (
        <div className="flex flex-col justify-center">
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />

          <Button className="mt-2" onClick={capture}>
            Chụp
          </Button>
        </div>
      )}
    </>
  );
};
export default WebcamCapture;
