import React,{Component} from 'react';

class Maincontent extends Component{
  render(){
    return (
    <div className="main_content">
      <div className="title">
      <h1>All Time Favourite</h1>
      </div>
      <div className="date">
      <span>-23 October 2017</span>
      </div>
      <div className="Content">

      <ul>
      <li>
      <p>Batman: Arkham Knight is my most favourite game of all time ! It has everything a player looks for in a third person action game
      with super awesome visuals and addictive gameplay mechanisms, this game is the complete package!! </p>
      </li>
      </ul>
      </div>
      <hr />
      <div className="title">
      <h1>Best Graphic Card</h1>
      </div>
      <div className="date">
      <span>-31 October 2017 </span>
      </div>
      <div className="Content">
      <ul>
      <li>
      <p>The Nvidia GTX 1080Ti is currently the best graphic card you can get in the market right now!
          The GTX 1080 Ti is over 30 percent faster than the GTX 1080, and more than twice as fast as the GTX 970.
          Combined with the architectural improvements of Pascal, long-term we could see even greater improvements in performance compared to Maxwell.
          Pascal has better delta color compression, resulting in higher effective memory bandwidth by about 20 percent (according to Nvidia). </p>
</li>
</ul>

      </div>
      <hr />
      <div className="title">
      <h1>Top Upcoming Playstation 4 Exclusives</h1>
      </div>
      <div className="date">
      <span>-5 November 2017</span>
      </div>
      <div className="Content">

      <ul>
      <li>
      <p>The most anticipated upcoming games that are exclusive to the Playstation 4 include
      God of War , Shadow of the Colossus , Spiderman and The Last of Us 2.
      Playstation is surely to get massive sales during this holiday season thanks to these amazing exclusives
      that are available only for Playstation 4</p>
      </li>
      </ul>
      </div>
    </div>
    );
  }
}
export default Maincontent;
