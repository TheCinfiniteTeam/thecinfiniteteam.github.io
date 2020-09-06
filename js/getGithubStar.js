function f()
{
    console.log(document.body.innerHTML.toString())
    //return document.body.innerHTML.toString();
    return document.body.outerHTML().add("www.baidu.com").toString();
}