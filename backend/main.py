from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

quotes = [
    "Success is not final, failure is not fatal.",
    "Push yourself, because no one else will do it for you.",
    "Dream big and dare to fail.",
    "Stay consistent and never give up."
]

@app.get("/")
def home():
    return {"message": "API is running"}

@app.get("/quote")
def get_quote():
    return {"quote": random.choice(quotes)}
