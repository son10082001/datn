import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Warning from "~/src/icons/Warning";
import { imgUser } from "~/src/recoil_state/checkIn";
import Button from "~/src/ui/Button";
import ButtonLink from "~/src/ui/ButtonLink";
import Modal from "~/src/ui/Modal";
import SurFace from "~/src/ui/SurFace";
import WebcamCapture from "./components/WebcamCapture";
interface location {
  Latitude: number;
  Longitude: number;
}

export default function CheckIn() {
  const [location, setLocation] = useState<location>({
    Longitude: NaN,
    Latitude: NaN,
  });
  const GetLocation = () => {
    const result: location = { Latitude: NaN, Longitude: NaN };
    navigator.geolocation.getCurrentPosition((position) => {
      result.Latitude = position.coords.latitude;
      result.Longitude = position.coords.longitude;
      setLocation({ Latitude: result.Latitude, Longitude: result.Longitude });
    });
  };
  const [showCamera, setShowCamera] = useState(false);
  const dataImg = useRecoilValue(imgUser);
  const setDataImg = useSetRecoilState(imgUser);
  const [check_in, setCheck_in] = useState(true);
  const today = new Date();
  const onSubmit = () => {
    console.log(location, dataImg);
  };
  const handleCheckboxChange = () => {
    setCheck_in(!check_in);
  };
  useEffect(() => {
    console.log(location);
  }, [location]);
  const handleDinhvilai = () => {
    GetLocation();
  };

  return (
    <div className="container mx-auto w-full mt-6">
      <Button onClick={handleDinhvilai}>Định vị lại</Button>

      <SurFace>
        <div className="flex justify-between">
          <h1 className="mt-[8px] text-3xl font-bold">Check In</h1>
          <h1>{location.Latitude}</h1>
          <h1>{location.Longitude}</h1>
          {!check_in ? (
            <SurFace className="w-[500px] bg-[#fee2e2]">
              <span className="text-[#dc2626]">
                {`Hiện tại ${today} bạn chưa check-in, vui lòng check-in trước khi bắt
                đầu công việc!`}
              </span>
            </SurFace>
          ) : (
            <SurFace className="w-[280px] bg-[#ecfdf5]">
              <span className="text-[#10b981]">
                Bạn đã check-in lúc 8:34:55 ngày 29/07/2022 thành công!
              </span>
            </SurFace>
          )}
        </div>
        <div className="mt-6">
          <SurFace>
            <h1 className="mb-1 text-lg font-semibold">Chụp hình</h1>
            {dataImg ? (
              <div className="flex flex-col justify-center">
                <div className="w-[300px]">
                  <img src={dataImg} alt="checkInImg" />
                </div>
                {!check_in && (
                  <ButtonLink
                    id="modal-check-in"
                    className="w-[120px] mt-1 border-dashed"
                  >
                    Chụp lại
                  </ButtonLink>
                )}
              </div>
            ) : (
              <div
                className="relative h-[200px] w-[200px] border-2 border-dashed cursor-pointer rounded-lg hover:border-indigo-600
                  "
              >
                <label
                  onClick={() => {
                    setShowCamera(true);
                  }}
                  htmlFor="modal-check-in"
                >
                  <div className="flex h-full flex-col items-center justify-center">
                    <img src="/assets/img/upload.png" alt="" />
                    <span className="text-gray-790 font-semibold">
                      Click open your camera
                    </span>
                  </div>
                </label>
              </div>
            )}
          </SurFace>
          <Modal
            id="modal-check-in"
            handleCancel={() => {
              setDataImg(null);
              setShowCamera(false);
            }}
          >
            <div>{showCamera && <WebcamCapture></WebcamCapture>}</div>
          </Modal>
        </div>
        <SurFace className="mt-6">
          <div className="flex justify-between">
            <h1 className="font-semibold text-lg mb-1">GPS</h1>
          </div>
          <div className="h-60 flex justify-center">
            <h1 className="my-auto font-semibold text-lg">MAP</h1>
          </div>
        </SurFace>
        <div className="text-center">
          <Modal
            id="modal-btn-check-in-img"
            customCancel={"Hủy"}
            nextCancelButton={
              <button className="whitespace-nowrap rounded-md border border-gray-300 bg-[#4f46e5] px-3 py-2 text-sm font-semibold text-[#fff] hover:opacity-90">
                Tiếp tục
              </button>
            }
          >
            <div className="flex flex-row">
              <div className="flex h-fit rounded-full bg-[#fee2e2] p-2">
                <Warning className="" />
              </div>
              <div className="ml-4 text-left">
                <p className="font-semibold mb-3 text-lg">
                  Ảnh không hợp lệ, tiếp tục check-in?
                </p>
                <p className="text-sm leading-6">
                  Nếu tiếp tục sử dụng ảnh này, bạn sẽ check-in với hình ảnh bất
                  thường!
                </p>
              </div>
            </div>
          </Modal>
          <Modal
            id="modal-btn-check-in-location"
            customCancel={"Hủy"}
            nextCancelButton={
              <button className="whitespace-nowrap rounded-md border border-gray-300 bg-[#4f46e5] px-3 py-2 text-sm font-semibold text-[#fff] hover:opacity-90">
                Tiếp tục
              </button>
            }
          >
            <div className="flex flex-row w-[520px]">
              <div className="flex h-fit rounded-full bg-[#fee2e2] p-2">
                <Warning className="" />
              </div>
              <div className="ml-4 text-left">
                <p className="font-semibold mb-3 text-lg">
                  Vị trí của bạn không hợp lệ, khoảng cách tới VarMeta Office
                  quá xa, tiếp tục check-in?
                </p>
                <p className="text-sm leading-6">
                  Nếu tiếp tục check-in, bạn sẽ check-in với vị trí bất thường!
                </p>
              </div>
            </div>
          </Modal>

          <ButtonLink
            id="modal-btn-check-in-location"
            onClick={onSubmit}
            className="rounded-md mt-4"
            disabled={check_in}
          >
            Check-in
          </ButtonLink>
        </div>
      </SurFace>
      {/* </div> */}
    </div>
  );
}
