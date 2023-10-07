import React from 'react';

const TeacherProfile = () => {
  return( 

<div>

<div>
<header/>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
<header/>
</div>

<body class="w3-content" styles="max-width:1300px">

<div class="w3-row">
  <div class="w3-half w3-black w3-container w3-center" styles="height:700px">
    <div class="w3-padding-64">
      <h1>My Logo</h1>
    </div>
    <div class="w3-padding-64">
      <a href="#" class="w3-button w3-black w3-block w3-hover-blue-grey w3-padding-16">Home</a>
      <a href="#work" class="w3-button w3-black w3-block w3-hover-teal w3-padding-16">My Work</a>
      <a href="#work" class="w3-button w3-black w3-block w3-hover-dark-grey w3-padding-16">Resume</a>
      <a href="#contact" class="w3-button w3-black w3-block w3-hover-brown w3-padding-16">Contact</a>
    </div>
  </div>
  <div class="w3-half w3-blue-grey w3-container" styles="height:700px">
    <div class="w3-padding-64 w3-center">
      <h1>About Me</h1>
      <img src="./temp.jpeg" class="w3-margin w3-circle" alt="Person" width={400} height={250}  styles="width:50%"/>
      <div class="w3-left-align w3-padding-large">
        <p>Lorem ipusm sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
        <p>Lorem ipusm sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
      </div>
    </div>
  </div>
</div>

<div class="w3-row">
  <div class="w3-half w3-light-grey w3-center" styles="min-height:800px" id="work">
    <div class="w3-padding-64">
      <h2>My Work</h2>
      <p>Some of my latest projects.</p>
    </div>
    <div class="w3-row">
      <div class="w3-half">
        <img src="/w3images/coffee.jpg" styles="width:100%"/>
      </div>
      <div class="w3-half">
        <img src="/w3images/workbench.jpg" styles="width:100%"/>
      </div>
    </div>
    <div class="w3-row w3-hide-small">
      <div class="w3-half">
        <img src="/w3images/workbench.jpg" styles="width:100%"/>
      </div>
      <div class="w3-half">
        <img src="/w3images/coffee.jpg" styles="width:100%"/>
      </div>
    </div>

    <div class="w3-row w3-hide-small">
      <div class="w3-half">
        <img src="/w3images/sound.jpg" styles="width:100%"/>
      </div>
      <div class="w3-half">
        <img src="/w3images/workbench.jpg" styles="width:100%"/>
      </div>
    </div><br/>
    <p>Just call me awesome.</p>
  </div>
  <div class="w3-half w3-indigo w3-container" styles="min-height:800px">
    <div class="w3-padding-64 w3-center">
      <h2>Resume</h2>
      <p>A draft from my CV</p>
      <div class="w3-container w3-responsive">
        <table class="w3-table">
          <tr>
            <th>Year</th>
            <th>Title</th>
            <th>Where</th>
          </tr>
          <tr class="w3-white">
            <td>2012-2016</td>
            <td>The rest is history..</td>
            <td>Lorem ipsum</td>
          </tr>
          <tr>
            <td>2009-2012</td>
            <td>Started my own company</td>
            <td>My Garage</td>
          </tr>
          <tr class="w3-white">
            <td>2008-2009</td>
            <td>Started working for Lorem</td>
            <td>London, UK</td>
          </tr>
          <tr>
            <td>2005-2008</td>
            <td>Degree in Bachelor of Design</td>
            <td>Harvard, USA</td>
          </tr>
          <tr class="w3-white">
            <td>2002-2005</td>
            <td>Degree in Bachelor of Business</td>
            <td>RMIT University, Melbourne, Australia</td>
          </tr>
          <tr class="w3-hide-medium">
            <td>2002-2005</td>
            <td>Degree in Bachelor of Business</td>
            <td>RMIT University, Melbourne, Australia</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</div>

<div class="w3-row" id="contact">
  <div class="w3-half w3-dark-grey w3-container w3-center" styles="height:700px">
    <div class="w3-padding-64">
      <h1>My Socials</h1>
    </div>
    <div class="w3-padding-64">
      <p>Instagram: </p>
      <p>Linkedin: </p>
      <p>Facebook:</p>
      <p>Email: </p>
    </div>
  </div>
  <div class="w3-half w3-teal w3-container" styles="height:700px">
    <div class="w3-padding-64 w3-padding-large">
      <h1>Contact</h1>
      <p class="w3-opacity">GET IN TOUCH</p>
      <form class="w3-container w3-card w3-padding-32 w3-white" action="/action_page.php" target="_blank">
        <div class="w3-section">
          <label>Name</label>
          <input class="w3-input" styles="width:100%;" type="text" required name="Name"/>
        </div>
        <div class="w3-section">
          <label>Email</label>
          <input class="w3-input" styles="width:100%;" type="text" required name="Email"/>
        </div>
        <div class="w3-section">
          <label>Message</label>
          <input class="w3-input" styles="width:100%;" type="text" required name="Message"/>
        </div>
        <button type="submit" class="w3-button w3-teal w3-right">Send</button>
      </form>
    </div>
  </div>
</div>
</body>

</div>

  );
};

export default TeacherProfile;
