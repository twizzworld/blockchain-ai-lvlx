export function Overlay() {

    return (
        <>
        <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: 40,
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          pointerEvents: "none",
        }}>
        <div style={{ width: "100%", padding: 0, display: "inline-flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <p
            style={{
              fontFamily: "'Antonio', sans-serif",
              flex: "1 1 0%",
              height: 30,
              fontSize: 30,
              fontWeight: "700",
              lineHeight: "30px",
              color: "black",
              letterSpacing: -2,
            }}>
            <br />
          </p>
          <div style={{ flex: "1 1 0%", display: "flex", gap: "2em" }}></div>
          <p style={{ flex: "1 1 0%", height: 30, fontSize: 30, lineHeight: "30px", textAlign: "right", color: "black" , fontFamily: "Potra",}}>X</p>
        </div>
        <div style={{ height: 20 }} />
        <div style={{ width: "100%", padding: 0, display: "inline-flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "center" }}>
          <p style={{ flex: "1 1 0%", height: "100%", fontSize: 12, lineHeight: "1.5em", color: "black" }}>
            <br />
          </p>
          <div style={{ width: 10 }} />
          <p
            style={{
              transform: "rotate3d(0, 0, 1, 90deg) translate3d(100%,10px,0)",
              transformOrigin: "right",
              fontSize: 12,
              fontWeight: "700",
              lineHeight: "100%",
              textAlign: "right",
              color: "black",
              whiteSpace: "nowrap",
              visibility: "visible",
            }}>
            FULLY ON-CHAIN ORDERBOOK &nbsp; ● &nbsp; ADVANCED ORDER TYPES &nbsp; ● &nbsp; PERPETUALS &nbsp; ● &nbsp; API & SDK
          </p>
        </div>
        
        
      </div>


      <footer style={{ position: "absolute", bottom: 40, right: 40, display: "flex", flexDirection: "row"}}>
        <ul style={{ flex: "1 1 0%", fontSize: 12, lineHeight: "1em", textAlign: "right"}}>
          <li><a href='mailto:numinousmuses@gmail.com' id="contact">contact</a></li>
          
        </ul>
    
      </footer>
      
      {/*center text*/}
      
        
        <div>
            
        <div
        class="popups"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: 40,
          pointerEvents: "none",
          color: "black",
        }}>
            <div class="popups aboutPopup background"
                style={{
                    width: "90vw",
                    height: "90vh",
                    borderRadius: "3px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                }}>
            <div>
              <div class="hheader">MOMENTUM MARKETS</div>
               <div style={{fontFamily: "Anurati", fontSize: "24px"}}>HIGH FREQUENCY TRADING BROUGHT TO BLOCKCHAIN</div> 
            </div>
            </div>
        </div>
            
            </div>
        

         
      </>
    )
  }


  