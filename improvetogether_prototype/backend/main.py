from fastapi import FastAPI
from pydantic import BaseModel
import os, openai
from prompts import SYSTEM_PROMPT

openai.api_key = os.getenv('OPENAI_API_KEY')
app = FastAPI()

class ChatReq(BaseModel):
    user_id: str = None
    message: str

@app.post('/chat')
async def chat(req: ChatReq):
    messages = [
        {"role":"system","content":SYSTEM_PROMPT},
        {"role":"user","content":req.message}
    ]
    resp = openai.ChatCompletion.create(model='gpt-4o-mini', messages=messages, max_tokens=500)
    return {'reply': resp['choices'][0]['message']['content']}
