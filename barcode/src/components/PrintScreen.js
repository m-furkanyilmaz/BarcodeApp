import React, { useRef } from "react";
// import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

function PrintScreen({ urun, ad, firstD, lastD }) {
  const targetRef = useRef();
  // const params = useParams();
  const handlePrint = useReactToPrint({
    content: () => targetRef.current,
  });

  return (
    <div style={{ width: "300px", marginTop: "50px" }}>
      <div ref={targetRef}>
        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            margin: "0px",
          }}
        >
          XXXXXX HASTANESİ
        </p>
        <table style={{ width: "223px" }}>
          <tr>
            <td>
              <b>Ürün Adı</b>
            </td>
            <td>
              <b>{urun}</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>Adı Soyadı</b>
            </td>
            <td>
              <b>{ad}</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>Paket Açılış T.</b>
            </td>
            <td>
              <b>{firstD}</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>Son Kull.</b>
            </td>
            <td>
              <b>{lastD}</b>
            </td>
          </tr>
        </table>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={handlePrint}
          style={{
            marginBlock: "20px",
            padding: "10px",
          }}
        >
          Yazdır
        </button>
      </div>
    </div>
  );
}

export default PrintScreen;
