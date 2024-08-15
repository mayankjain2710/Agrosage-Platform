import axios from 'axios'
import React from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useEffect, useState } from 'react'
import './App.css'
import CardWeather from './components/CardWeather'
// los hooks van siempre fuera, siempre serán en el scope raiz del componente 
function App() {
  

  
  const [coords, setCoords] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [type, setType] = useState('')

  useEffect(() => {

    const success = pos =>{
      const latlon = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(latlon);
    }
    navigator.geolocation.getCurrentPosition(success)
  
  }, [])
let video
console.log(typeof(type));
 if(type == "Clouds"){
  video = type
}else if (type == "Rain"){
  video = type
}else if (type == "Snow"){
  video = type
}else if (type == "Drizzle"){
  video = type
}else if (type == "Mist"){
  video = type
}else if (type == "Thunderstorm"){
  video = type
}else {
  video = 'Random'
}
console.log(video)
  return (
    <>
    <div className="navbar">
      <div className="box1 flex">
        <div className="brand">Agrosage</div>
      </div>
      <div className="box2 flex">
        <div className="title">Home</div>
        <div className="title">About us</div>
        <div className="title">Pages</div>
      </div>
      <div className="box3 flex">
        <button className="login">Login</button>
        <button className="login login2">Sign Up</button>
      </div>
    </div>
    <div className="hero">
      <div className="big-heading">
        The Role Of Technology In Revolutionizing Agriculture
      </div>
      <div className="small-heading">
        Technology is transforming agriculture, driving efficiency and sustainability in ways previously unimaginable
      </div>
      <div className="button-cont">
        <button className="started">Get started</button>
        <button className="learn">Learn More</button>
      </div>
    </div>
    <div className="about">
      <div className="part-1">
        <div className="main-lines">
          Our Passion for Agriculture Nurturing Growth and Sustaining the Future
        </div>
        <div className="small-heading black">
          FarmTech is a comprehensive mobile application tailored specifically for farmers, offering tools and resources to optimize farming practices and increase productivity. The app provides real-time weather forecasts, crop management advice, and pest control solutions to help farmers make informed decisions. With a user-friendly interface, farmers can track their crop growth, monitor soil health, and receive timely alerts for irrigation and fertilization. Additionally, FarmTech connects farmers with local markets, enabling them to sell their produce at competitive prices. Whether you're a small-scale farmer or managing a large farm, FarmTech is your go-to app for modern farming solutions.
        </div>
        <div className="button-cont">
            <button className="started">Get started</button>
        </div>
        
      </div>
      <div className="part-2">
        <div className="image"><img src="https://th.bing.com/th/id/OIP.Vo_WA7NR7keoceGouO5APAHaE8?rs=1&pid=ImgDetMain" /></div>
      </div>
    </div>
    <div className="service">
        <div className="main-lines center">
            Our Benifits
        </div>
        <div className="small-headings center">We provide farmers with smart tools, expert advice, and market connections to enhance productivity and profitability in farming.</div>
        <div className="service-container">
            <div className="container-probleum">
              <div className="icon-blog"><FaThumbsUp /></div>
              <div className="service-text">Increas Productivity</div>
            </div>
            <div className="container-probleum">
              <div className="icon-blog"><FaThumbsUp /></div>
              <div className="service-text">Risk Management</div>
            </div>
            <div className="container-probleum">
              <div className="icon-blog"><FaThumbsUp /></div>
              <div className="service-text">Market Access</div>
            </div>
            <div className="container-probleum">
              <div className="icon-blog"><FaThumbsUp /></div>
              <div className="service-text">Expert Support</div>
            </div>
            <div className="container-probleum">
              <div className="icon-blog"><FaThumbsUp /></div>
              <div className="service-text">Sustainable Practices</div>
            </div>
        </div>
    </div>
    <div className="service">
        <div className="main-lines center">
            Our Featured Product
        </div>
        <div className="small-headings center">SmartFarm Pro is our flagship solution, designed to revolutionize modern agriculture.</div>
        <div className="service-container1">
            <div className="container2">
              <div className="image-pum"><img src="https://agrierp.com/blog/wp-content/uploads/2023/05/The-Benefits-of-Crop-Management-Software-for-Farmers-copy-850x560.jpg" /></div>
              <div className="title-pum">Crop Recommendation Tool</div>
              <div className="text-pum">Our Crop Recommendation Tool analyzes soil health, weather patterns, and local conditions to suggest the best crops for your farm. It helps you choose the most suitable crops for maximum yield and profitability, ensuring sustainable farming practices tailored to your specific needs.</div>
            </div>
            <div className="container2">
              <div className="image-pum"><img src="https://media.istockphoto.com/photos/ripe-rice-in-the-field-of-farmland-picture-id622925154?k=20&m=622925154&s=612x612&w=0&h=hLtkpC3VdXeqWhblSowvPRu4XgsCwFW6JQM-Px2KzbY=" /></div>
              <div className="title-pum">Country Crop Predictor

              </div>
              <div className="text-pum">Our Country-Specific Crop Predictor tailors recommendations based on the unique climate, soil, and market conditions of your region. By analyzing local data, it identifies the most profitable and sustainable crops for your country, helping you make informed decisions and maximize your farming success.</div>
            </div>
            <div className="container2">
  <div className="image-pum">
    <img src="https://th.bing.com/th/id/OIP.6_s1cTC8e0LUz4sV7H4DuQHaD4?rs=1&pid=ImgDetMain" alt="AI-Powered Chatbot" />
  </div>
  <div className="title-pum">AI-Powered Chatbot</div>
  <div className="text-pum">
    Our AI-Powered Chatbot offers instant, expert advice on farming practices, crop management, and problem-solving. 
    Available 24/7, it answers your questions, provides tailored recommendations, and guides you through challenges, 
    making advanced agricultural knowledge easily accessible to every farmer.
  </div>
</div>

            <div className="container2">
              <div className="image-pum"><img src="https://www.gannett-cdn.com/presto/2018/10/19/PNDN/37f2a43f-f349-47bb-9f10-ee7b5064171e-nbc2_7day_web.jpg?crop=1099,618,x0,y0&width=3200&height=1680&fit=bounds" /></div>
              <div className="title-pum">Weather Forecasting

              </div>
              <div className="text-pum">Get accurate, real-time weather forecasts tailored to your farm's location. Our weather forecasting feature helps you plan planting, irrigation, and harvest schedules, minimizing risks and maximizing yields with precise, up-to-date information. Stay ahead of adverse weather conditions with timely alerts and detailed reports.</div>
            </div>
        </div>
    </div>
    <div className="sustainable-cont">
      <div className="suatainable-heading">Sustainable Farming Meets Technology: Building a Greener Future</div>
      <div className="button-cont">
        <button className="started">Get started</button>
        <button className="learn">Learn More</button>
      </div>
    </div>
    <div className="service1">
      <div className="main-lines center">
          Our Blogs
      </div>
      <div className="small-headings center">Explore our blog for insightful articles, expert tips, and the latest updates in agriculture.</div>
      <div className="service-container1">
          <div className="container1"><img src="https://th.bing.com/th/id/OIP.ltTc4bxx31QNnJr8wgBHBAHaEt?rs=1&pid=ImgDetMain" /></div>
          <div className="container1"><img src="https://ediblehouston.ediblecommunities.com/sites/default/files/images/article/gold-rush-in-1.jpg" /></div>
          <div className="container1"><img src="https://th.bing.com/th/id/OIP.rpU7bdvQS5C2PAEl_UXGdgHaE9?rs=1&pid=ImgDetMain" /></div>
          <div className="container1"><img src="https://th.bing.com/th/id/OIP.iPbFzEMXKgiuTpqxckPFwgHaE8?rs=1&pid=ImgDetMain" /></div>
      </div>
      <div className="blog-container">
        <div className="container1-blog">In today’s rapidly evolving agricultural landscape, precision farming stands out as a game-changer. By leveraging GPS technology and IoT sensors, farmers can monitor their crops with unparalleled accuracy. Precision farming allows for the precise application of water, fertilizers, and pesticides, ensuring resources are used efficiently. This not only boosts crop yields but also minimizes waste and environmental impact. As we move towards a more sustainable future, precision farming is leading the way, helping farmers achieve better results with less effort.</div>
          <div className="container1-blog">Artificial Intelligence (AI) is revolutionizing how farmers manage their crops. By analyzing vast amounts of data, AI provides farmers with insights that were once impossible to obtain. Whether it's predicting the best time to plant, identifying potential pest threats, or optimizing irrigation schedules, AI empowers farmers to make data-driven decisions. This technology is not just about increasing productivity; it's about smarter farming that balances the needs of the crop, the environment, and the market.</div>
          <div className="container1-blog">Automation is becoming increasingly prevalent in agriculture, and for good reason. From robotic harvesters to drones that monitor crop health, automated farming technologies are streamlining labor-intensive tasks. These innovations help farmers save time and reduce costs, while also addressing labor shortages. Moreover, automation improves precision, reduces human error, and enhances overall farm efficiency. As technology continues to advance, the future of farming looks more automated—and more promising—than ever.</div>
          <div className="container1-blog">In the digital age, market access is no longer a challenge for farmers. Technology has bridged the gap between producers and consumers, allowing farmers to connect directly with buyers through digital platforms and mobile apps. This not only ensures fair pricing but also expands market reach, enabling farmers to sell their produce beyond local boundaries. By reducing the number of intermediaries, farmers can retain a greater share of the profits, making their operations more profitable and sustainable.</div>
    </div>
  </div>
  <footer>
    <div className="footer-box1">
      <div className="brand white">Agrosage Farms</div>
      <div className="small-heading footer-text">we are dedicated to empowering farmers with cutting-edge technology and practical solutions. Our mission is to enhance agricultural productivity and sustainability through innovative tools and expert support. With a focus on real-time weather forecasting, precise crop recommendations, and seamless market access, we strive to support farmers at every step of their journey</div>
      <div class="icon-cont">
        <div class="icon"><a href="https://www.instagram.com/agrigoi/"><FaInstagram /></a></div>
        <div class="icon"><a href="https://www.facebook.com/groups/agrifarming.in/"><FaFacebook />
        </a></div>
        <div class="icon"><a href="https://x.com/OECDagriculture"><FaTwitter />
        </a></div>
        <div class="icon"><a href="https://www.youtube.com/c/DiscoverAgriculture/videos"><FaYoutube />
        </a></div>
      </div>
    </div>
    <div className="footer-box2">
      <div className="footer-title1"><a href="">Pages</a></div>
      <div className="footer-title"><a href="">home</a></div>
      <div className="footer-title"><a href="">about</a></div>
      <div className="footer-title"><a href="">blog</a></div>
      <div className="footer-title"><a href="">product</a></div>
    </div>
    <div className="footer-box3">
      <div className="footer-title1"><a href="">About</a></div>
      <div className="footer-title"><a href="">Testimonials</a></div>
      <div className="footer-title"><a href="">Our Services</a></div>
      <div className="footer-title"><a href="">Contact Us</a></div>
      <div className="footer-title"><a href="">Benifits</a></div>
    </div>
  </footer>
    


    <div className="App">

      <div className='main'>

        <video src={`src/assets/video/${video}.mp4`} autoPlay loop muted ></video>
        <div className='content'>

          <CardWeather 
            lon={coords?.lon} 
            lat = {coords?.lat}   
            setType= {setType}/>
        </div>

      </div>

    </div>
    </>
  )
}

export default App
