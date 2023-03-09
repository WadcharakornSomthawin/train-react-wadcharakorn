import React from "react";
import Image from "../../../assets/image/Image.png";

function ShowData() {
  return (
    <div className="w-full">
      <div className="row d-flex justify-content-center">
        <div className="col-8">
          <div className="row">
            <div className="col-12">
              <div className="card p-2">
                <div className="row">
                  <div className="col-2">
                    <img src={Image} alt={Image} height={150} width={150} />
                  </div>
                  <div className="col-10">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h2>ตรวจสุขภาพ</h2>
                      </div>
                      <div>
                        <p>09/03/2566</p>
                      </div>
                    </div>
                    <div>
                      <p>ทันตแพทย์ วัชรากร สมถวิล</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowData;
