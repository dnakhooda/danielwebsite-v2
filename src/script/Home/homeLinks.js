Array.prototype.forEach.call(document.getElementsByClassName("dot_game_link"), item => {
  item.onclick = () => {
    if (window.innerWidth <= 800) 
      alert('This Game Is Not Supported On Mobile!');
    location.href = './games/TheDotGame/DotGame.html';
  }
});

Array.prototype.forEach.call(document.getElementsByClassName("aliens_link"), item => {
  item.onclick = () => {
    if (window.innerWidth <= 800) 
      alert('This Game Is Not Supported On Mobile!');
    location.href = './games/Aliens/Aliens.html';
  }
});

Array.prototype.forEach.call(document.getElementsByClassName("space_link"), item => {
  item.onclick = () => {
    if (window.innerWidth <= 800) 
      alert('This Game Is Not Supported On Mobile!');
    location.href = './games/Space/SpaceHome.html';
  }
});

Array.prototype.forEach.call(document.getElementsByClassName("danielwebsite_link"), item => item.onclick = () => location.href = './index.html');

Array.prototype.forEach.call(document.getElementsByClassName("neutron_link"), item => item.onclick = () => location.href = 'https://github.com/dnakhooda/Neutron/blob/main/src/Script/Neutron/Neutron.ts');

Array.prototype.forEach.call(document.getElementsByClassName("flappy_bird_link"), item => {
  item.onclick = () => {
    if (window.innerWidth <= 800) 
      alert('This Game Is Not Supported On Mobile!');
    location.href = './games/FlappyBird/FlappyBird.html';
  }
});

Array.prototype.forEach.call(document.getElementsByClassName("jump_game_link"), item => {
  item.onclick = () => {
    if (window.innerWidth <= 800) 
      alert('This Game Is Not Supported On Mobile!');
    location.href = './games/JumpGame/JumpGame.html';
  }
});

Array.prototype.forEach.call(document.getElementsByClassName("platformer_link"), item => {
  item.onclick = () => {
    if (window.innerWidth <= 800) 
      alert('This Game Is Not Supported On Mobile!');
    location.href = './games/Platformer/Platformer.html';
  }
});

Array.prototype.forEach.call(document.getElementsByClassName("explore_link"), item => {
  item.onclick = () => {
    if (window.innerWidth <= 800) 
      alert('This Game Is Not Supported On Mobile!');
    location.href = './games/Explore/Explore.html';
  }
});

Array.prototype.forEach.call(document.getElementsByClassName("self_care_link"), item => item.onclick = () => location.href = 'https://github.com/dnakhooda/SelfCareApp');

Array.prototype.forEach.call(document.getElementsByClassName("fees_app_link"), item => item.onclick = () => location.href = 'https://github.com/dnakhooda/FeesApp');