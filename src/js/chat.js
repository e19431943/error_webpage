/* textData 是想要讓艾拉說出的文字 */
const textData ='大家好!我是ERROR!!由人工智慧研究中心所製造的ST02T(serve type 02 test)女僕機器人，但BUG多到不行，於是成為了倉管漸漸萌生自我意識的艾拉決定逃離倉庫(雖然不見也沒有人會發現)，艾拉就此展開新的生活';
const chatText = document.querySelector('.chat-text');
const roleZoom = document.querySelector('.role-zoom');
// const inputText = textData[0].split('');


roleZoom.addEventListener('click',function()
{
  console.log('click');
  setupWrite(textData);
});


let chatTimeout;
function setupWrite(text) {
  let textArray=[text];
  let  inputText = textArray[0].split('');
  clearTimeout(chatTimeout);
  write(0,inputText);
}


function write(index,inputText) {
  
  if( index < inputText.length) {
    if(index%31 === 0) {
      chatText.innerHTML="";
      chatText.innerHTML +=inputText[index];
    }else {
      chatText.innerHTML +=inputText[index];  
    }
    chatTimeout =setTimeout(write, 300, ++index, inputText);
  }else
  {
    chatText.innerHTML ='';
  }
}


// setTimeout(write.bind(this), 300, ++index)