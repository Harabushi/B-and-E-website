import React from "react";

export function Home() {
  
  return (
    <section>

      {/* floating sidebar */}
      <aside className="float-end border border-white rounded-start sidebar-affix">
        <p className="lead">
          A Business & Empire
          <br />
          <br />
          Built & Engineered by
          <br />
          <br />
          Brainiacs & Entrepreneurs
          <br />
          <br />
          to Bewilder & Entertain
          <br />
          <br />
          <span className="interlude">because that's what we've</span>
          <br />
          <br />
          been Bred & Entrusted to do
          <br />
          <br />
          since Birth & Establishment.
        </p>
      </aside>

      {/* latest release and upcoming show */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <h3>Latest Releases</h3>
          <img src={require("../../assets/images/bill-nye-art.png")} className="img-fluid mb-4" alt="latest release" />
          <iframe
          style={{ border: "0", width: "100%", height: "120px" }}
          title="bandcamp player"
          src="https://bandcamp.com/EmbeddedPlayer/album=1379977098/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
          seamless={true}>
          <a href="https://bandemusic.bandcamp.com/album/liminality-ep">Liminality [EP] by Glass Eyes</a></iframe>
          <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBAndEMusic%2Fposts%2F&tabs=timeline&width=500&height=2000&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
          width="100%" height="500" style={{ border:"none",overflow:"hidden" }} 
          title="facebook widget"
          scrolling="no" frameBorder="0" allowFullScreen={true} 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        <div className="col-12 col-lg-6">
          <h3>Upcoming Shows</h3>
          <img src={require("../../assets/images/poster-art.jpg")} className="img-fluid" alt="upcoming show poster" />
        </div>
      </div>
      
    </section>
  );
};