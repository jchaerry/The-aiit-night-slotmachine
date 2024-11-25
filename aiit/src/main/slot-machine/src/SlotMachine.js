import React, { useState } from 'react';
import './Project.css'; // 스타일을 별도의 CSS 파일로 관리
//import axios from 'axios'; // backend와 통신

const SlotMachine = () => {
  const [slotNumbers, setSlotNumbers] = useState([]); // 슬롯 번호 상태
  const [isRolling, setIsRolling] = useState(false); // 슬롯머신이 회전 중인지 여부

  // 버튼 클릭 시 슬롯머신 실행
  const handleButtonClick = async () => {
    if (isRolling) return; // 슬롯머신이 회전 중이면 클릭 무효화

    setIsRolling(true); // 회전 시작

    try {
      // 룰렛 돌리기 요청
      const response = await fetch('/roulette/spin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 204) {
            console.log("참여자가 없습니다.");
            alert("참여자가 없어서 룰렛을 돌릴 수 없습니다.");
            setIsRolling(false);
            return;
          }

          // response.ok가 true일 때만 JSON을 파싱
          if (response.ok) {
            const data = await response.json();
            if (data.status === 'SUCCESS') {
              const numArr = data.winnerId.split("");
              setSlotNumbers(numArr.map((num, index) => ({ id: index, value: "" }))); // 빈 값으로 초기화
              RollingNum(data.winnerId); // 새로운 번호로 슬롯머신 실행
            } else {
              console.log("알 수 없는 오류 발생:", data.status);
              alert("룰렛을 돌리는 중 오류가 발생했습니다.");
            }
          } else {
            // 응답 상태가 200~299 이외일 경우
            console.log("서버 오류 발생:", response.status);
            alert("룰렛을 돌리는 중 오류가 발생했습니다.");
          }
        } catch (error) {
          // 네트워크나 서버 연결 오류 처리
          console.error("서버와 연결 오류:", error);
          alert("서버와의 연결에 실패했습니다.");
        }

        setIsRolling(false); // 회전 종료
      };

  // 숫자 회전 함수 (슬롯머신)
  const RollingNum = (number) => {
    const numArr = number.split(""); // 문자열을 배열로 변환
    const numHeight = 80;
    const speed = 70;
    const delay = 600;

    // 숫자 회전 애니메이션
    numArr.forEach((num, index) => {
      setTimeout(() => {
        const el = document.getElementById(`num-${index}`);
        el.innerHTML = ""; // 기존 내용을 초기화
        let no = 0;
        const style = document.createElement("style");
        style.innerHTML = `.num {overflow: hidden;} .numList {display: inline-block;margin-top:0;text-align:center;transition: all ${speed / 50}s;}`;
        document.body.appendChild(style);

        const numbersDiv = document.createElement("span");
        const numbers = "0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n0\n1\n2\n3\n4\n5\n6\n7\n8\n9";
        numbersDiv.classList.add("numList");
        numbersDiv.innerText = numbers;
        el.appendChild(numbersDiv);

        // margin-top의 값이 바뀌면서 회전하고 입력받은 숫자값에서 멈춤
        const intervalNo = setInterval(() => {
          no++;
          numbersDiv.style.marginTop = `${no * numHeight * -1}px`;
          if (no === 40) {
            clearInterval(intervalNo);
            numbersDiv.style.marginTop = `${num * numHeight * -1}px`;
            numbersDiv.style.color = "#b3f624";
            numbersDiv.style.marginRight = '10px';
          }
        }, speed);
      }, delay * index);
    });
  };

  return (
    <div>
      <img src="/logo_blue.png" alt="Logo" className="logo" />
      <img src="/logo_green2.png" alt="LUCKYDRAW" className="LUCKYDRAW" />
      <img src="/machine.png" alt="Slot Machine" className="machine-img" />

      {/* 슬롯머신 시작/정지 버튼 */}
      <button
        onClick={handleButtonClick}
        disabled={isRolling} // 회전 중에는 버튼 비활성화
        className="start-stop-button"
      >
        {isRolling ? "추첨중..." : "추첨 시작"}
      </button>


      {/* 슬롯 결과를 표시할 공간 */}
      <div id="countTest2">
        {slotNumbers.map((numObj, index) => (
          <span
            key={index}
            id={`num-${index}`}
            className={`num idx${index}`}
            style={{
              height: "80px",
              lineHeight: "80px",
              width: "72px",
              backgroundColor: "#2e2e2e",
              margin: "0px 7px",
              fontSize: "50px",
              color: "white",
              borderRadius: "5px",
            }}
          >
            {numObj.value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SlotMachine;
