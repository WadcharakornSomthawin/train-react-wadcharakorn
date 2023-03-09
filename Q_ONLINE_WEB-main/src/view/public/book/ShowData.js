import React from "react";
import Image from "../../../assets/image/Image.png";
import Pagination from "react-js-pagination";
import { baseURL } from "../../../helper/Axios";
import DateTh from "../../../components/DateTh";
import { TextSelect } from "../../../components/TextSelect";
import PageSize from "../../../data/pageSize.json";

function ShowData({ data, pagin, changePage, changePageSize }) {
  console.log(data);
  console.log(pagin);
  return (
    <div className="w-full">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-8">
        <div className="w-pagesize">
          <TextSelect
            id="pagesize"
            name="pagesize"
            options={PageSize}
            value={PageSize.filter((a) => a.id === pagin.pageSize)}
            onChange={(item) => {
              changePageSize(item.id);
            }}
            getOptionLabel={(z) => z.label}
            getOptionValue={(x) => x.id}
          />
        </div>
          <div className="row">
            {data.map((item, index) => (
              <div className="col-12 my-2" key={item.id}>
                <div className="card p-3">
                  <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-4 col-lg-3 col-xxl-2">
                      <div className="d-flex justify-content-center justify-content-md-start">
                        <img
                          src={
                            item.path_image
                              ? `${baseURL}${item.path_image}`
                              : Image
                          }
                          alt={`${baseURL}${item.path_image}`}
                          height={150}
                          width={150}
                        />
                      </div>
                    </div>
                    <div className="col-10">
                      <div className="d-flex justify-content-between ">
                        <div>
                          <h2>{item.treatment_type_name}</h2>
                        </div>
                        <div>
                          <p>
                            วันที่ทำการรักษา <DateTh date={item.open_date} />
                          </p>
                        </div>
                      </div>
                      <p>{item.fullname}</p>
                      <div className="d-flex justify-content-between">
                        <div>
                          <h4>จำนวน {`${item.book_amount}/${item.amount}`}</h4>
                        </div>
                        <div>
                          <button type="button" className="btn btn-success">
                            จองคิว
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between mt-3">
            <div>จำนวน {pagin.totalRow} รายการ</div>
            <div>
              <Pagination
                activePage={pagin.currentPage}
                itemsCountPerPage={pagin.pageSize}
                totalItemsCount={pagin.totalRow}
                pageRangeDisplayed={pagin.totalPage}
                onChange={(page) => {
                  changePage(page);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowData;
