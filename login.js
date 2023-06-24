var dataBase = [{
    userName: 'Eliot',
    password: 'su'
},
{
    userName: 'Sally',
    password: '123'
},
{
    userName: 'Cares',
    password: '123456'
},
];
//輸入上半部後 才能看到下半部nesFeed


///新增帳號密碼
function addAccount() {
    var username = document.getElementById('newUsername').value;
    var password = document.getElementById('newPassword').value;

    // 將新帳號密碼加入到 dataBase
    var registerform = document.getElementById('register-form');
    registerform.style.display = 'none';


    dataBase.push({
        userName: username,
        password: password
    });

    // 顯示成功訊息或其他處理邏輯
    alert("帳號密碼新增成功");

}


function registerIn() {
    var hide = document.getElementById('but');
    var hide5 = document.getElementById('but1');
    var hide2 = document.getElementById('user1');
    var hide3 = document.getElementById('ps1');
    var update = document.getElementById('newfeed');
    var hide4 = document.getElementById('three');
    var hide6 = document.getElementById('hidelogin');
    hide.style.display = 'none';
    hide2.style.display = 'none';
    hide3.style.display = 'none';
    hide4.style.display = 'none';
    hide5.style.display = 'none';
    hide6.style.display = 'none';

    update.innerText = "Today's NewsFeed";

    var registerform = document.getElementById('register-form');
    registerform.style.display = 'block';
    var loginForm = document.getElementById('login-form');
    loginForm.style.display = 'block';


}
// 只檢查單一個人
// function sub() {
//     var userNamePrompt = prompt("What's your username?");
//     var passwordPrompt = prompt("What's your password?");

//     if (userNamePrompt === dataBase[0].userName
//         && passwordPrompt == dataBase[0].password) {

//         var news = document.getElementById('news');
//         news.innerText = ""; // 清空原有的內容

//         for (var i = 0; i < newsFeed.length; i++) {
//             news.innerText += newsFeed[i].userName + ": " + newsFeed[i].timeLine + "\n";
//         }
//         var h1 = document.getElementById('sign');
//         h1.innerText = 'Welcome!';
//         h1.style.color = '#334581'

//         var hide = document.getElementById('but');
//         var hide2 = document.getElementById('user1');
//         var hide3 = document.getElementById('ps1');
//         var update = document.getElementById('newfeed')
//         hide.style.display = 'none';
//         hide2.style.display = 'none';
//         hide3.style.display = 'none';
//         update.innerText = "Today's NewsFeed"

//     } else {
//         alert('Sorry,wrong username or password!')
//     }
// }

// }

function isUserValid(username, password) {
    for (var i = 0; i < dataBase.length; i++) {
        if (dataBase[i].userName === username &&
            dataBase[i].password === password) {
            return true;
        }
    }
    return false;
}


function signIn() {
    var hide = document.getElementById('but');
    var hide5 = document.getElementById('but1');
    var hide2 = document.getElementById('user1');
    var hide3 = document.getElementById('ps1');
    var update = document.getElementById('newfeed');
    var hide4 = document.getElementById('three');
    hide.style.display = 'none';
    hide2.style.display = 'none';
    hide3.style.display = 'none';
    hide4.style.display = 'none';
    hide5.style.display = 'none';
    update.innerText = "Today's NewsFeed";

    var loginForm = document.getElementById('login-form');
    loginForm.style.display = 'block';
}

function submitLogin() {
    var usernameInput = document.getElementById('username-input').value;
    var passwordInput = document.getElementById('password-input').value;

    if (isUserValid(usernameInput, passwordInput)) {


        var news = document.getElementById('news');
        news.innerText = ""; // 清空原有的內容



        var h1 = document.getElementById('sign');
        h1.innerText = 'Welcome!';
        h1.style.color = '#334581';
        var h2 = document.getElementById('newfeed');

        h2.innerHTML = 'Start your exploration and create infinite possibilities together !';
        var loginForm = document.getElementById('login-form');
        loginForm.style.display = 'none';

        var imageContainer = document.getElementById('imageContainer');

        //串建第一張圖片
        var image1 = document.createElement('img');
        image1.src = './img/s11.jpg'; // 設置圖片路徑
        image1.alt = 'Image 1'; // 設置第一張圖片的文本
        imageContainer.appendChild(image1); // 把第一張圖加到html
        image1.classList.add('image-container1'); //新增class類別



        var image2 = document.createElement('img');
        image2.src = './img/s12.jpg';
        image2.alt = 'Image 2';
        imageContainer.appendChild(image2);
        image2.classList.add('image-container2');


        var image3 = document.createElement('img');
        image3.src = './img/s13.jpg';
        image3.alt = 'Image 3';
        imageContainer.appendChild(image3);
        image3.classList.add('image-container3');



    } else {
        alert('Sorry, wrong username or password!');
    }
}


window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    // 获取导航栏元素
    var navbar = document.getElementById('navbar');

    // 获取导航栏的高度
    var navbarHeight = navbar.offsetHeight;

    // 判断滚动位置
    if (scrollTop > navbarHeight) {
        // 添加背景色
        navbar.classList.add('navbar-scroll');
    } else {
        // 移除背景色
        navbar.classList.remove('navbar-scroll');
    }
});


// singIn(userNamePrompt, passwordPrompt);



// 獲取所需元素
var loginText = document.getElementById("loginText");
var registerText = document.getElementById("registerText");
var loginForm = document.getElementById("login-form");
var registerForm = document.getElementById("register-form");

// 文字段落 添加點擊事件
loginText.addEventListener("click", function () {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
});

registerText.addEventListener("click", function () {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
});
















