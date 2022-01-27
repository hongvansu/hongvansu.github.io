         // Truy cập vào thẻ p
         let para = document.querySelector("p");

         // Viết gộp
         // para.innerText = para.innerText.replaceAll("?", "🤔");
         // para.innerText = para.innerText.replaceAll("!", "😲");

         // Viết tách ra
         let content1 = para.innerText.replaceAll("?", "🤔");
         para.innerText = content1;

         let content2 = para.innerText.replaceAll("!", "😲");
         para.innerText = content2;