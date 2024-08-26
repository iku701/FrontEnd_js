// 메모 추가 기능을 수행하는 함수
const onClickAdd = () => {
    // 입력 필드를 가져옵니다.
    const textEl = document.getElementById("add-text");
    // 입력 필드의 값을 가져옵니다.
    const text = textEl.value;
    // 입력 필드를 비웁니다.
    textEl.value = "";
    // 콘솔에 입력된 텍스트를 출력합니다.
    console.log(text);

    // 새로운 리스트 항목(li)을 생성합니다.
    const li = document.createElement("li");
    // 새로운 div 요소를 생성합니다.
    const div = document.createElement("div");
    // 새로운 p 요소를 생성하고, 텍스트를 설정합니다.
    const p = document.createElement("p");
    p.textContent = text;
    div.appendChild(p);

    // 삭제 버튼을 생성하고, 텍스트를 '삭제'로 설정합니다.
    const button = document.createElement('button');
    button.textContent = "삭제";
    // 삭제 버튼에 클릭 이벤트 리스너를 추가합니다.
    button.addEventListener('click', () => {
        // 버튼과 가장 가까운 li 요소를 찾습니다.
        const deleteTarget = button.closest('li');
        // 메모 목록에서 해당 li 요소를 제거합니다.
        document.getElementById('memo-list').removeChild(deleteTarget);
    });

    // p 요소를 div에 추가합니다. (이미 추가된 상태이므로 이 라인은 중복됨)
    div.appendChild(p);
    // 버튼을 div에 추가합니다.
    div.appendChild(button);
    // 완성된 div를 li에 추가합니다.
    li.appendChild(div);
    // 완성된 li를 메모 목록에 추가합니다.
    document.getElementById('memo-list').appendChild(li);
}

// '추가' 버튼에 클릭 이벤트 리스너를 등록합니다.
document.getElementById("add-button").addEventListener("click", onClickAdd);
