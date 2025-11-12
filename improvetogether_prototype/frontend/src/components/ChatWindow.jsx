import React, {useState} from 'react';

export default function ChatWindow(){
  const [messages,setMessages]=useState([]);
  const [input,setInput]=useState('');
  async function send(){
    if(!input) return;
    setMessages(m=>[...m,{role:'user',text:input}]);
    const res = await fetch('/api/chat', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({message:input})});
    const data = await res.json();
    setMessages(m=>[...m,{role:'bot',text:data.reply}]);
    setInput('');
  }
  return (
    <div style={{width:400,border:'1px solid #ddd',padding:10}}>
      <div style={{height:300,overflow:'auto',marginBottom:10}}>
        {messages.map((m,i)=>(<div key={i} style={{textAlign:m.role==='user'?'right':'left'}}>{m.text}</div>))}
      </div>
      <div style={{display:'flex'}}>
        <input style={{flex:1}} value={input} onChange={e=>setInput(e.target.value)}/>
        <button onClick={send}>Gönder</button>
      </div>
    </div>
  )
}
