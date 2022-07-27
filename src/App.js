import styled from "styled-components";
import square from './assets/icon/square.png'
import fillSquare from './assets/icon/fillSquare.png'

function App() {
  return (
    <div className="App">
      <Table>
        <thead>
        <tr>
          <th colSpan="10">자동차 점검 · 정비 명세서</th>
        </tr>
        </thead>
        <tbody>
        {/* 차량 소유자 */}
        <tr>
          <td rowSpan={3} style={{verticalAlign: "middle"}}>차량 소유자</td>
          <td>등록번호</td>
          <td colSpan={2}>51수0194</td>
          <td colSpan={2}>주행거리</td>
          <td colSpan={4}>130,000km</td>
        </tr>
        <tr>
          <td>브랜드</td>
          <td colSpan={2}>BENZ</td>
          <td colSpan={2}>차명</td>
          <td colSpan={4}>E클래스(2016+) 세단 W213</td>
        </tr>
        <tr>
          {/*<td>*/}
          <td>등록년월일</td>
          <td>2222</td>
          <td>점검·정비 의뢰일자</td>
          <td colSpan={3}>2022-07-26</td>
          <td>전화번호</td>
          <td colSpan={2}>010****0000</td>
        </tr>

        {/* 정비 사업자 */}
        <tr>
          <td rowSpan={4} style={{verticalAlign: "middle"}}>정비 사업자</td>
          <td>업체명</td>
          <td colSpan={8}>공임나라대화점</td>
        </tr>

        <tr>
          <td>사업자 등록번호</td>
          <td>1281169394</td>
          <td>정비업 등록번호</td>
          <td colSpan={3}>04110600814</td>
          <td>대표자</td>
          <td>김용</td>
          <td></td>
        </tr>

        <tr>
          <td>주소</td>
          <td colSpan={5}>경기 고양시 일산서구 대화로 398번길 7-1 (대화동) 2087번지 1층</td>
          <td>전화번호</td>
          <td colSpan={2}>031-916-0394</td>
        </tr>

        <tr>
          <td>점검 · 정비 완료일자</td>
          <td>2022-07-26</td>
          <td>출고일자</td>
          <td colSpan={3}>2022-07-26</td>
          <td>정비책임자</td>
          <td>관리자</td>
          <td></td>
        </tr>

        <tr>
          <td colSpan={7}>점검 · 정비내역</td>
          <td>추가정비 동의여부</td>
          <td colSpan={2}>
            <img src={fillSquare} alt='square' style={{width: '10px', height: '10px', marginRight: '4px'}}/>
            동의{` `}
            <img src={square} alt='square' style={{width: '10px', height: '10px', marginRight: '4px'}}/>
            비동의
          </td>
        </tr>

        <tr>
          <td colSpan={4}>할인</td>
          <td>1</td>
          <td>241,000</td>
          <td>241,000</td>
          <td colSpan={3}>241,000</td>
        </tr>

        <tr>
          <td colSpan={4}>작업 및 부품내역</td>
          <td>수량</td>
          <td>단가</td>
          <td>계</td>
          <td colSpan={3}>소계</td>
        </tr>

        <tr>
          <td>공급가</td>
          <td className="right">219,090</td>
          <td>부가세</td>
          <td className="right">219,090</td>
          <td colSpan={2}>합계</td>
          <td colSpan={4} className="right">241,000</td>
        </tr>


        <tr>
          <td colSpan={10} style={{textAlign: "left"}}>
            <p>(자동차 관리법) 제 58조 제3항 및 같은 법 시행규칙 제134조 제2항에 따라 위와 같이 발급합니다.</p>
            <p className='right'>2022-07-12</p>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <p>작성자 관리자 서명</p>
              <p>대표이사 김용</p>
            </div>

          </td>
        </tr>

        <tr>
          <td colSpan={10} className='left'>
            <p>1. 정비업자가 점검 · 정비의 잘못으로 다음 구분에 따른 기간 중 발생하는 고장에는 무상점검 · 정비를 합니다.</p>
            <p className="pl-4">(자동차관리법시행규칙 제134조 제1항 제2호)</p>
            <p className="pl-4">가. 차령 1년미만 또는 주행거리 2만킬로미터 이내의 자동차: 점검 · 정비일부터 90일 이내</p>
            <p className="pl-4">나. 차령 3년미만 또는 주행거리 6만킬로미터 이내의 자동차: 점검 · 정비일부터 60일 이내</p>
            <p className="pl-4">다. 차령 3년이상 또는 주행거리 6만킬로미터 이상의 자동차: 점검 · 정비일부터 30일 이내</p>
            <p>2. 이 명세서는 2부를 작성, 정비의뢰자에게 1부를 교부하고, 정비사업자는 1부를 1년간 문서 또는 전산자료로 보관하여야 합니다.</p>
            <p>3. '부품의 구분'란에는 다음에 따라 기재하여야 합니다.</p>
            <p className="pl-4">가. 자동차제작사 및 부품업체가 공급하는 신품(자동차제작사의 경우에는 사후관리용 보증부품을 포함한다.) : A</p>
            <p className="pl-4">나. 재제조품 : B</p>
            <p className="pl-4">다. 중고품 (중고 재생품 포함) : C</p>
            <p className="pl-4">라. 수입부품: F</p>
            <p className="pl-4 mt-20">* 재생정비한 원동기를 부품으로 사용한 경우에는 별지 제92호서식의 원동기재생정비사실확인서를 첨부하여야 합니다.</p>
          </td>
        </tr>
        </tbody>
      </Table>
    </div>
  );
}

const Table = styled.table`
  width: 1133px;
  margin: 10px auto 0;
  text-align: center;
  line-height: 22px;

  table, th, td {
    border: 1px solid black;
  }

  th {
    font-weight: bold;
    font-size: 28px;
  }

  td {
    min-width: 60px;
  }

  td, th {
    padding: 15px
  }

  .right {
    text-align: right;
  }

  .left {
    text-align: left
  }

  .pl-4 {
    padding-left: 8px;
  }

  .mt-20 {
    margin-top: 20px;
  }

`

export default App;
