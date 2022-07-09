let processScroll = () => {
  let docElem = document.documentElement, 
    docBody = document.body,
    scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
      scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
    scrollPercent = scrollTop / scrollBottom * 100 / 2 + '%';
  
  // console.log(scrollTop + ' / ' + scrollBottom + ' / ' + scrollPercent);
  
  document.getElementById("progress-bar").style.setProperty("--scrollAmount", scrollPercent); 
  document.querySelector("progress").value = scrollTop / scrollBottom * 100 /2
}

document.addEventListener('scroll', processScroll);


if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    let lightIcon = document.getElementById("light-icon");
    let darkIcon = document.getElementById("dark-icon");
    lightIcon.classList.add("hidden");
    darkIcon.classList.remove("hidden");
    document.querySelector('html').classList.add('dark');    
    localStorage.theme = 'dark';
} 

document.getElementById('toggleMode').addEventListener('click', function() {
    let h =   document.querySelector('html');
    let lightIcon = document.getElementById("light-icon");
    let darkIcon = document.getElementById("dark-icon");
    // console.log("click");
    if(localStorage.theme == 'dark') {
        h.classList.remove('dark');
        localStorage.theme = 'light';
        darkIcon.classList.add("hidden");
        lightIcon.classList.remove('hidden');
    } else {
        h.classList.add('dark');
        localStorage.theme = 'dark';
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
    }

});