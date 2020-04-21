from django.shortcuts import render
import requests, json
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .keys import *
import yfinance as yf


@api_view()
def get_account(request):
    BASE_URL = 'https://paper-api.alpaca.markets'
    ACCOUNT_URL = '{}/v2/account'.format(BASE_URL)
    HEADERS = {"APCA-API-KEY-ID" : API_KEY, "APCA-API-SECRET-KEY" : SECRET_KEY}

    r = requests.get(ACCOUNT_URL, headers=HEADERS)
    data = json.loads(r.content)
    return Response(data)
    
@api_view()
def get_positions(request):
    BASE_URL = 'https://paper-api.alpaca.markets'
    HEADERS = {"APCA-API-KEY-ID" : API_KEY, "APCA-API-SECRET-KEY" : SECRET_KEY}
    POSITIONS_URL = '{}/v2/positions'.format(BASE_URL)

    r = requests.get(POSITIONS_URL, headers=HEADERS)
    data = json.loads(r.content)
    return Response(data)

@api_view()
def order_history(request):
    BASE_URL = 'https://paper-api.alpaca.markets'
    HEADERS = {"APCA-API-KEY-ID" : API_KEY, "APCA-API-SECRET-KEY" : SECRET_KEY}
    HISTORY_URL = '{}/v2/account/activities'.format(BASE_URL)

    r = requests.get(HISTORY_URL,  headers=HEADERS)
    data = json.loads(r.content)
    return Response(data)

@api_view(['POST'])
def create_order(request):
    BASE_URL = 'https://paper-api.alpaca.markets'
    HEADERS = {"APCA-API-KEY-ID" : API_KEY, "APCA-API-SECRET-KEY" : SECRET_KEY}
    ORDERS_URL = '{}/v2/orders'.format(BASE_URL)
    if request.method == 'POST':
        data = request.data
        r = requests.post(ORDERS_URL, json=data, headers=HEADERS)
        print(r)
        return Response({"message": "Got an order", "data": request.data})

@api_view()
def market_data(request):
    msft = yf.Ticker("MSFT")
    return Response(msft.history(period="1mo"))


