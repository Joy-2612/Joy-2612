# Hi there 👋, I'm Joy

<style>
@import url('https://fonts.googleapis.com/css?family=Krub:400,700&display=swap');

/* ─── LAYOUT ─────────────────────────────────────────────────────────── */
body{
    background-color: white;
    color: black;
}

body {
  margin: 0;
  padding: 0;
}
.profile-container {
  max-width: 960px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: 1fr 340px;
  column-gap: 20px;
  align-items: start;   /* force both columns to sit at the top */
}
.profile-left {
  flex: 1;
  min-width: 200px;
  margin-top:-20px;
  margin-right: 20px;
  font-family: 'Krub', sans-serif;
  color: black;
}
.profile-left h2 {
  font-size: 24px;
  margin-bottom: 12px;
  margin-top:0;
  color: black;
}
.profile-left p, .profile-left ul {
  font-size: 14px;
  line-height: 1.6;
}
.profile-left ul {
  list-style: none;
  padding-left: 0;
}
.profile-right {
  flex: 0 0 340px;
}

/* ─── CARD ───────────────────────────────────────────────────────────── */
.card {
  position: relative;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  border-radius: 20px;
  border: 3px solid transparent;
  /* define a transparent border to carve out the border-box */
  background-image:
    radial-gradient(
      ellipse at right top,
      rgb(162, 52, 52) 0%,
      #1e1e1e 47%,
      #1e1e1e 100%
    ),
    linear-gradient(
      45deg,
rgb(35, 34, 40) 0%,
rgb(0, 0, 0) 50%,
      rgb(255, 53, 53) 100%
    );

  /* clip the first (radial) to the padding-box (inside the border),
     and the second (diagonal) to the border-box */
  background-clip: padding-box, border-box;

  /* make sure the backgrounds are sized to fill each box */
  background-origin: padding-box, border-box;

}
.card .ds-top {
  width: 340px;
  height: 80px;
  margin-left: -10px;
  /* background: linear-gradient(90deg, #6BB8F1, #4A90E2); */
  animation: dsTop 1.2s forwards;
}
.card .avatar-holder {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px; height: 100px;
  border-radius: 50%;
  background: #111;
  padding: 5px;
  box-shadow: 0 0 0 5px #1e1e1e, inset 0 0 0 3px #000;
  overflow: hidden;
  animation: mvTop 1s 0.3s forwards;
}
.card .avatar-holder img {
  width:100%; height:100%; object-fit:cover;
}
.card .name {
  text-align: center;
  padding-top: 50px;
  z-index:100;
  animation: fadeIn 1s 0.6s forwards;
}
.card .name a {
  color:#fff; font-size:30px; font-weight:700; text-decoration:none;
}
.card .name a:hover { color:#fff; text-decoration:underline; }
.card .name h6 {
  margin-top:4px; font-size:12px; color:#bbb;
}
.card .button {
  text-align:center; margin: 20px 0 0;
  animation: fadeIn 1s 0.8s forwards;
}
.card .button a {
  display:inline-block;
  padding:6px 18px;
  border:1px solid #fff;
  border-radius:20px;
  color:#fff;
  font-size:12px;
  text-decoration:none;
  transition: all .3s;
}
.card .button a.following {
  background:#fff; color:#111; border-color:#fff;
}
.card .button a:hover {
  background:#fff; color:#111;
}
.card .ds-info {
  display:flex;
  justify-content: space-around;
  margin: 25px 0 0;
  animation: fadeInMove 1s 1s forwards;
}
.card .ds-info div {
  text-align:center;
}
.card .ds-info h6 {
  font-size:10px; color:#fff; text-transform:uppercase; margin-bottom:4px;
}
.card .ds-info p {
    color:white;
  font-size:14px; margin:0;
}
.card .ds-skill {
  padding: 20px;
  animation: mvBottom 1s 1.2s forwards;
}
.card .ds-skill h6 {
  font-size:12px; color:#fff; text-transform:uppercase; margin-bottom:8px;
}
.card .ds-skill .skill {
  margin-bottom:10px;
}
.card .ds-skill .skill h6 {
  font-size:10px; margin:0 0 4px; color:#ddd;
}
.card .ds-skill .bar {
  height:6px; background:rgb(233, 52, 24); position:relative; overflow:hidden;
  transition: background .3s;
  border-radius: 10px;
}
.card .ds-skill .bar p {
  position:absolute; right:4px; top:-2px;
  font-size:8px; color:#111;
}
.card .ds-skill .bar:hover { background:#4A90E2; }
.card .ds-skill .bar-html { width:0; animation: htmlSkill 1s .5s forwards; }
.card .ds-skill .bar-css  { width:0; animation: cssSkill 1s .7s forwards; }
.card .ds-skill .bar-js   { width:0; animation: jsSkill 1s .9s forwards; }


.card.tools-card {
  box-sizing: border-box;
  grid-column: 1 / -1;       /* span both columns */
  justify-self: stretch;
  width: 100%;
  max-width: none;
  margin: 20px 0 0;
  padding: 20px;
  border-radius: 20px;
  background-image:
    radial-gradient(ellipse at right top, rgb(131, 52, 162) 0%, #1e1e1e 47%, #1e1e1e 100%),
    linear-gradient(45deg, rgba(0, 0, 0, 0.89) 0%, #232228 60%, rgb(221, 53, 255) 100%);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  color: #fff;
}

.card.tools-card h3 {
  margin: 0;
  margin-bottom:25px;
  font-size: 20px;
}

.tools-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 17px;
}

.tools-grid img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

/* ─── PLATFORMS CARD (blue) ───────────────────────────────────────────── */
.card.platforms-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  margin-top: 20px;
  border-radius: 20px;
  background-image:
    radial-gradient(ellipse at right top, rgb(52,92,162) 0%, #1e1e1e 47%, #1e1e1e 100%),
    linear-gradient(45deg, rgba(0, 0, 0, 0.87) 0%, #232228 50%, rgb(53,111,255) 100%);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
}

.card.platforms-card .circle {
  flex-shrink: 0;
  margin: 0;
  width: 100px;
  height: 100px;
  border: 4px solid #fff;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.card.platforms-card .circle span {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
}

.card.platforms-card .platform-bars {
  flex: 1;
}

.card.platforms-card .platform-bar {
  margin-bottom: 12px;
}
.card.platforms-card .platform-name {
  display: block;
  font-size: 12px;
  color: #ddd;
  margin-bottom: 4px;
}

.card.platforms-card .bar {
  position: relative;
  width: 100%;
  height: 8px;
  background: rgba(255,255,255,0.2);
  border-radius: 4px;
  overflow: hidden;
}

.card.platforms-card .fill {
  height: 100%;
  background: #4A90E2;
}

.card.platforms-card .bar-value {
  position: absolute;
  top: -16px;
  right: 0;
  font-size: 10px;
  color: #ddd;
  font-weight: bold;
}

/* adjust these ratios if your totals change */
.card.platforms-card .bar-leetcode    { width: calc(120  / 350 * 100%); }
.card.platforms-card .bar-codeforces { width: calc(150  / 350 * 100%); }
.card.platforms-card .bar-codechef   { width: calc(80   / 350 * 100%); }

/* full-width green info card */
.card.green-card {
  /* include this */
  box-sizing: border-box;

  /* rest of your rules… */
  grid-column: 1 / -1;
  justify-self: stretch;
  width: 100%;
  max-width: none;
  margin: 20px 0 0;
  padding: 20px;
  border-radius: 20px;
  background-image:
    radial-gradient(
      ellipse at right top,
      rgb(52, 162, 92) 0%,
      #1e1e1e 47%,
      #1e1e1e 100%
    ),
    linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.83) 0%,
      #232228 60%,
      rgb(53, 255, 111) 100%
    );
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  color: #fff;
}




/* logo centering */
.card.green-card .logo-holder {
  text-align: center;
  margin-bottom: 12px;
}
.card.green-card .logo-holder img {
  height: 60px;
  object-fit: contain;
}

/* heading + text */
.card.green-card h3 {
  margin: 0 0 8px;
  font-size: 20px;
}
.card.green-card p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
}
.card.green-card .inline-logo {
  vertical-align: middle;
  height: 50px;    /* smaller */
  width: auto;     /* maintain aspect ratio */
  margin: 0 6px;
}


/* ─── KEYFRAMES ──────────────────────────────────────────────────────── */
@keyframes dsTop     { from { margin-top:-100px;} to { margin-top:0;} }
@keyframes mvTop     { from { top:-150px; } to { top:40px;} }
@keyframes mvBottom  { from { opacity:0; transform: translateY(50px);} to { opacity:1; transform:none;} }
@keyframes fadeIn    { from { opacity:0;} to { opacity:1;} }
@keyframes fadeInMove{ from { opacity:0; transform: translateX(-50px);} to { opacity:1; transform:none;} }
@keyframes htmlSkill { from { width:0;} to { width:95%;} }
@keyframes cssSkill  { from { width:0;} to { width:90%;} }
@keyframes jsSkill   { from { width:0;} to { width:80%;} }
</style>

<div class="profile-container">
  <!-- LEFT: About Me -->
  <div class="profile-left">
    <h2>👨‍💻 About Me</h2>
    <p>I’m a <strong>System Engineer & Fullstack Developer</strong> with a passion for building robust, scalable applications and optimizing system architecture. I love tackling challenging problems and learning new technologies along the way.</p>
    <ul>
      <li>🌱 Currently learning <strong>Kubernetes & GraphQL</strong></li>
      <li>💬 Ask me about <strong>DevOps, System Design & Web Development</strong></li>
      <li>📫 How to reach me: <a href="mailto:j26122003@gmail.com" style="color:#4A90E2;">j2612200@gmail.com</a></li>
    </ul>
    <h6 align="left"> I'm also learning Data Structures and Algorithms 👩🏻‍💻 </h6>

<div class="card platforms-card">
<div class="circle">
<span>350</span>
</div>

<div class="platform-bars">
<div class="platform-bar">
    <span class="platform-name">LeetCode</span>
    <div class="bar">
    <div class="fill bar-leetcode"></div>
    <span class="bar-value">120</span>
    </div>
</div>

<div class="platform-bar">
    <span class="platform-name">Codeforces</span>
    <div class="bar">
    <div class="fill bar-codeforces"></div>
    <span class="bar-value">150</span>
    </div>
</div>

<div class="platform-bar">
    <span class="platform-name">CodeChef</span>
    <div class="bar">
    <div class="fill bar-codechef"></div>
    <span class="bar-value">80</span>
    </div>
</div>
</div>
</div>

  </div>

  <!-- RIGHT: Profile Card -->
  <div class="profile-right">
    <div class="card">
      <div class="ds-top"></div>
      <div class="avatar-holder">
        <img src="https://github.com/Joy-2612.png?size=512" alt="Joy’s Avatar">
      </div>
      <div class="name">
        <a href="https://github.com/Joy-2612" target="_blank">Joy</a>
        <h6><i class="fas fa-users"></i> <span class="followers">120</span> Followers</h6>
      </div>
      <div class="button">
        <a href="#" id="follow-btn"><i class="fas fa-user-plus"></i> Follow</a>
      </div>
      <div class="ds-info">
        <div>
          <h6><i class="fas fa-book"></i> Repos</h6>
          <p>42</p>
        </div>
        <div>
          <h6><i class="fas fa-project-diagram"></i> Projects</h6>
          <p>8</p>
        </div>
        <div>
          <h6><i class="fas fa-star"></i> Stars</h6>
          <p>230</p>
        </div>
      </div>
      <div class="ds-skill">
        <h6><i class="fas fa-code"></i> Skills</h6>
        <div class="skill">
          <h6><i class="fab fa-html5"></i> HTML5</h6>
          <div class="bar bar-html"><p>95%</p></div>
        </div>
        <div class="skill">
          <h6><i class="fab fa-css3-alt"></i> CSS3</h6>
          <div class="bar bar-css"><p>90%</p></div>
        </div>
        <div class="skill">
          <h6><i class="fab fa-js-square"></i> JavaScript</h6>
          <div class="bar bar-js"><p>80%</p></div>
        </div>
      </div>
    </div>
  </div>
  <!-- NEW: Green full-width “Currently working at …” card -->
  <div class="card green-card">
    <h3>
    <img src="https://docs.google.com/drawings/d/e/2PACX-1vThj1h050f90iKGwpkb27WDHRtTPODAFzn7mKycY553WLPbA9yv2XiUPQleyVd52Gm7mtk9S57Gwlj6/pub?w=960&h=720"
         alt="Greenphard Energy Logo"
         class="inline-logo">
    </h3>
    <h4>System Engineer</h4>
    <p>
      I’m part of the DevOps team at Greenphard Energy, where I design and maintain our CI/CD pipelines, manage Kubernetes clusters,
      and help architect resilient, scalable microservices for our renewable-energy platforms.
    </p>
  </div>
</div>

<script>
  // simple follow toggle (GitHub strips <script>, but kept here for reference)
  const btn = document.getElementById('follow-btn');
  const fw  = document.querySelector('.followers');
  let count = 120, following = false;
  btn?.addEventListener('click', e => {
    e.preventDefault();
    following = !following;
    btn.innerHTML = following
      ? '<i class="fas fa-user-minus"></i> Following'
      : '<i class="fas fa-user-plus"></i> Follow';
    btn.classList.toggle('following');
    fw.textContent = following ? ++count : --count;
  });
</script>

<!-- NEW: full-width Languages & Tools card -->
<div class="card tools-card">
  <h3>Languages &amp; Tools</h3>
  <div class="tools-grid">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="C++">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="Docker">
    <img src="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/aws-color.png" alt="AWS"/>

  </div>
</div>

---

### 🔗 Find me on

<p align="left">
  <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank">
    <img align="center" src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" height="40"/>
  </a>
  <a href="https://github.com/Joy-2612" target="_blank" style="margin:0 12px;">
    <img align="center" src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub" height="40"/>
  </a>
  <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank">
    <img align="center" src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="Instagram" height="40"/>
  </a>
</p>
<p align="center">
  <img
    src="https://raw.githubusercontent.com/Joy-2612/Joy-2612/main/assets/profile-card.svg"
    alt="My GitHub Profile Card" />
</p>
