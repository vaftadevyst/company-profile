let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    customTheme.classList.remove('active');
}

let customTheme = document.querySelector('.customize-theme')

document.querySelector('#custom-theme').onclick = () => {
    customTheme.classList.toggle('settings-menu-height');
    navbar.classList.remove('active');
}

let closeTheme = document.querySelector('.customize-theme')

document.querySelector('#close-theme').onclick = () => {
    closeTheme.classList.remove('settings-menu-height');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    customTheme.classList.remove('active');
}

function sendEmail(){
    Email.send({
      SecureToken: "8d4e4a17-af1a-47ff-94bf-219567bca90b",
      To : "abizaregi21@gmail.com",
      From : "vaftadevyst@gmail.com",
      Subject : "Email From Vafta Devyst Website",
      Body : "halo, I am " + document.getElementById("name").value + "<br> my email " + document.getElementById("email").value + "<br> content: " + document.getElementById("message").value
      }).then(
        message => alert("Message Sent Succesfully")
      );
}


var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span')
const changeActiveColorClass = () => {
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  })

}
colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    let primary;
    changeActiveColorClass();
    if(color.classList.contains('color-1')){
      primaryHue = 255;
    } else if(color.classList.contains('color-2')){
      primaryHue = 355;
    } else if(color.classList.contains('color-3')){
      primaryHue = 455;
    } else if(color.classList.contains('color-4')){
      primaryHue = 555;
    } else if(color.classList.contains('color-5')){
      primaryHue = 655;
    }
    color.classList.add('active');
    root.style.setProperty('--hue-color', primaryHue);
  })
})

gsap.from('.header', { duration: 1.5, y: '-100%', opacity: 0, ease: 'bounce'});
gsap.registerPlugin(TextPlugin);
gsap.to('.description', { duration: 5, delay: 4, text: 'Start boosting your business with us now. We will be developer and analyst to get more value and conversion. Our service is website, dashboard, report, analyze, machine learning and advertisement. Get free one-project to trial our service, no agreement required!'});
VanillaTilt.init(document.querySelector('.content'), {
		max: 25,
		speed: 400,
    scale: 1.1
	});
VanillaTilt.init(document.querySelectorAll('.image'), {
		max: 25,
		speed: 400,
    scale: 1.1
	});

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)