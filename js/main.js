const loading = document.querySelector('#loading');

//ロードされた時、domにクラスを追加する
window.addEventListener('load', () => {
    loading.classList.add('loaded');
});



//要素を取得
const text1 = document.querySelector('#colorText1');
const text2 = document.querySelector('#colorText2');

//要素を取得
const colorCode1 = document.querySelector('#colorPicker1');
const colorCode2 = document.querySelector('#colorPicker2');

//背景色を取得して変数に入れる
const sectionBg1 = document.querySelector('.bg_strip1');
const sectionBg2 = document.querySelector('.bg_strip2');
const sectionBg3 = document.querySelector('.bg_strip3');


colorCode1.addEventListener('input', () => {
    text1.textContent = `${colorCode1.value}`;
    sectionBg1.style.background = colorCode1.value;
});
colorCode1.addEventListener('input', () => {
    text1.textContent = `${colorCode1.value}`;
    sectionBg3.style.background = colorCode1.value;
});


colorCode2.addEventListener('input', () => {
    text2.textContent = `${colorCode2.value}`;
    sectionBg2.style.background = colorCode2.value;
});



//定義した関数を入れるバージョン
//  変数.addEventListener('イベントの種類',定義した関数);
//  const　関数名　() => {
//    (例)変数.textContent = `${変数.値の種類}`;
//  }

//無名関数で直接書き込む←関数定義をする必要がない！！
//  変数.addEventListener('イベントの種類', () => {
//　　(例)変数.textContent = `${変数.値の種類}`;
//  });


