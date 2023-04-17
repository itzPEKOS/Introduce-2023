const pic = document.querySelector("#My-pic");
        const walk = 100;

        function shadow(e) {
          const { offsetWidth: width, offsetHeight: height } = pic;
          let { offsetX: x, offsetY: y } = e;

          if (this !== e.target) {
            x = x + e.target.offsetLeft;
            y = y + e.target.offsetTop;
          }

          const xwalk = (x / width) * walk - walk / 2;
          const ywalk = (y / height) * walk - walk / 2;

          pic.style.boxShadow = `${xwalk}px ${ywalk}px 100px rgb(228, 165, 87)`;
        }

        pic.addEventListener("mousemove", shadow);
        pic.addEventListener("mouseleave", function () {
          const pic = document.querySelector("#My-pic");
          pic.style.boxShadow = "none";
        });