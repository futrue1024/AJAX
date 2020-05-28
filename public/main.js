getCSS.onclick = () => {
  const request = new XMLHttpRequest(); //此对象可以向服务器发送请求
  request.open("GET", "/style.css"); //参数一为method，参数二为请求得文件，初始化一个请求。
  request.onload = () => {
    //监听请求成功
    console.log("成功了");
    console.log("request.response");
    console.log(request.response);
    const style = document.createElement("style"); //创建style标签
    style.innerHTML = request.response; //,添加style内容,内容是请求返回的响应内容
    document.head.appendChild(style); //插入头部信息
  };
  request.onerror = () => {
    console.log("失败了");
  }; //  监听请求失败
  request.send(); //发送请求
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/main2.js");
  request.onload = () => {
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("失败了");
  };
  request.send();
};

// getHtml.onclick = () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "/3.html");
//   request.onload = () => {
//     const x = document.createElement("div");
//     x.innerHTML = request.response;
//     document.body.appendChild(x);
//   };
//   request.onerror = () => {
//     console.log("失败了");
//   };
//   request.send();
// };

//监听onreadystatechange
getHtml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      //判断请求码为4时,将响应返回得html插入页面中
      if (request.status >= 200 && request.status < 300) {
        const x = document.createElement("div");
        x.innerHTML = request.response;
        document.body.appendChild(x);
      } else {
        alert("加载失败了");
      }
    }
  };
  request.send();
};

//加载Xml
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const x = request.responseXML;
      const text = x.getElementsByTagName("warning")[0].textContent;
      //因为getElementsByTagName返回得时一个伪数组,所以要选择第0个.
      console.log(text.trim()); //去除text得空格回车
    }
  };
  request.send();
};

//加载JSOn
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    //监听request的请求流程码变化事件
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const object = JSON.parse(request.response);
      myName.textContent = object.name;
    }
  };
  request.send();
};
