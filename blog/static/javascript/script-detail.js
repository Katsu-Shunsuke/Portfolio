/* detail画面でのクリックによる画像切り替え */
// サムネイル画像を取得
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');

    // クリックされたサムネイル画像のソースを取得し、main-imageの画像ソースを変更する
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
        // クリックされたサムネイルから画像ソースを取得
            const imgSrc = thumbnail.getAttribute('src');

            // main-imageのimg要素を取得
            const mainImg = document.querySelector('#main-img');

            // main-imageの画像ソースを変更
            mainImg.setAttribute('src', imgSrc);

            // クリックされたサムネイルに.activeクラスを追加し、他のサムネイルから.activeクラスを削除
            thumbnails.forEach(thumbnail => {
                thumbnail.classList.remove('active');
            });
            thumbnail.classList.add('active');
        });
    });
});

