const loadingAreaGrey = document.getElementById('loading');
const loadingAreaGreen = document.getElementById('loading-screen');
const loadingText = document.querySelector('#loading p');



//ロードが終わった時の処理
window.addEventListener('load', () => {

    //loadedクラスを追加して背景色を透明にする    
    loadingAreaGrey.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        },        
    );

    //緑色の背景が下から上に移動
    loadingAreaGreen.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh'],
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards',
        },
    );

    //loadingテキスト
    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8 //80%
            },
            {
                opacity: 0,
                offset: 1 //100%
            },
        ],  
        {
            duration: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
});