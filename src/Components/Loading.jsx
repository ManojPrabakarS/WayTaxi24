import Logo from "../assets/calogo.png";

function Loading() {
  return (
    <>
      <style>{`
        .loader-container{
          position:fixed;
          inset:0;
          display:flex;
          justify-content:center;
          align-items:center;
          background:linear-gradient(180deg,#ffffff,#f8fafc);
          z-index:9999;
        }

        .loader-content{
          text-align:center;
          display:flex;
          flex-direction:column;
          align-items:center;
        }

        /* Logo Circle */
        .logo-wrapper{
          width:200px;
          height:200px;
          border-radius:50%;
          display:flex;
          justify-content:center;
          align-items:center;
          background:rgba(255,193,7,.08);
          box-shadow:
            0 0 30px rgba(255,193,7,.15),
            0 0 80px rgba(255,193,7,.08);
          animation:float 2s ease-in-out infinite;
        }

        .logo{
          width:220px;
          height:auto;
          user-select:none;
          animation:glow 5s ease-in-out infinite;
        }

        
        
      
        /* Progress Bar */
        .progress{
          margin-top:25px;
          width:260px;
          height:4px;
          background:#e5e7eb;
          border-radius:20px;
          overflow:hidden;
        }

        .progress span{
          display:block;
          height:100%;
          width:30%;
          border-radius:20px;
          background:linear-gradient(90deg,#facc15,#f59e0b);
          animation:progress 1.5s linear infinite;
        }

        

        @keyframes glow{
          0%,100%{
            transform:scale(1);
            filter:drop-shadow(0 0 8px rgba(250,204,21,.4));
          }
          50%{
            transform:scale(1.04);
            filter:drop-shadow(0 0 22px rgba(250,204,21,.9));
          }
        }

        @keyframes float{
          0%,100%{
            transform:translateY(0);
          }
          50%{
            transform:translateY(-10px);
          }
        }

        @keyframes progress{
          0%{
            transform:translateX(-100%);
          }
          100%{
            transform:translateX(320%);
          }
        }

      `}</style>

      <div className="loader-container">
        <div className="loader-content">

          <div className="logo-wrapper">
            <img
              src={Logo}
              alt="WayTaxi24"
              className="logo"
            />
          </div>
          <div className="mt-4 flex flex-col items-center">
            <div
              className="flex justify-center text-4xl font-bold uppercase tracking-[0.25em] text-gray-800"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              {"Loading".split("").map((letter, index) => (
                <span
                  key={index}
                  className="animate-bounce"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </div>

            <div className="my-3 flex gap-2">
              <span className="h-3 w-3 animate-bounce rounded-full bg-yellow-400"></span>
              <span
                className="h-3 w-3 animate-bounce rounded-full bg-yellow-400"
                style={{ animationDelay: "0.2s" }}
              ></span>
              <span
                className="h-3 w-3 animate-bounce rounded-full bg-yellow-400"
                style={{ animationDelay: "0.4s" }}
              ></span>
            </div>

            <p className="mt-5 text-sm tracking-widest text-gray-500 uppercase">
              Finding your ride...
            </p>
          </div>


          <div className="progress">
            <span></span>
          </div>


        </div>
      </div>
    </>
  );
}

export default Loading;