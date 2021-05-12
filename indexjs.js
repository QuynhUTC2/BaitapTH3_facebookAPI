axios
  .get(
    "https://graph.facebook.com/pagecuathayto02/posts?fields=likes.summary(true),comments,message&access_token=EAAAAZAw4FxQIBAAmFUZCPesJwuwUbkKEChc7pAqHvfZAAdHxn3JGS1CYr5DACT1KjplUc2tUoIs5hrFSSNMAsSIosrwqAh0lb24S1vIOXGip8prOWFZCGlY2bPyVLxi48KU6Xgmh2DkuYCu16Jxv7d5p8hhFPWKnZCibX6h4yxwQmxW5PEbgu"
  )
  .then((response) => {
    var output = "";
    output +=
      " <span> <b>Thông tin bài viết 1</b></span></br> Status: " +
      response.data.data[0].message +
      "</br> Like: " +
      response.data.data[0].likes.summary.total_count +
      "</br>";

    output +=
      " <span> <b>Thông tin bài viết 2 </b></span></br> Status: " +
      response.data.data[1].message +
      "</br> Like: " +
      response.data.data[1].likes.summary.total_count +
      "</br>";

    output +=
      " <span> <b>Thông tin bài viết 3 </b></span></br> Status: " +
      response.data.data[2].message +
      "</br> Like: " +
      response.data.data[2].likes.summary.total_count;
    document.getElementById("Content").innerHTML = output;
  });
