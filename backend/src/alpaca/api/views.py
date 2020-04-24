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
    
@api_view(['POST','GET'])
def positions(request):
    BASE_URL = 'https://paper-api.alpaca.markets'
    HEADERS = {"APCA-API-KEY-ID" : API_KEY, "APCA-API-SECRET-KEY" : SECRET_KEY}
    if request.method == "GET":
        POSITIONS_URL = '{}/v2/positions'.format(BASE_URL)
        r = requests.get(POSITIONS_URL, headers=HEADERS)
        data = json.loads(r.content)
        return Response(data)
    else: #POST
        data = request.data
        symbol = data['Symbol'] 
        CLOSE_POSITION = '{}/v2/positions/{}'.format(BASE_URL, symbol)
        requests.delete(CLOSE_POSITION, headers=HEADERS)

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
        order = data['order']
        requests.post(ORDERS_URL, json=order, headers=HEADERS)
        return Response({"message": "Got an order", "data": request.data})

@api_view()
def market_data(request):
    msft = yf.Ticker("MSFT")
    return Response(msft.history(period="1mo"))

def make_recommendation(rec_list):
    #function to return single recommendation
    Buy_count = [] #contains all 'buy', 'overweight', 'outperform', 'strong buy'
    Sell_count = [] #contains all 'sell', 'underwieght', 'under perform','market perform'
    Hold_count = [] #contains all 'hold', 'equal-weight,  'neutral'
    Extra_count = []
    for i in rec_list:
        if i in ['Buy', 'Overweight', 'Outperform', 'Strong Buy']:
            Buy_count.append(i)
        elif i in ['Sell', 'Underweight', 'Underperform', 'Market Perform']:
            Sell_count.append(i)
        elif i in ['Hold', 'Equal-Weight', 'Neutral']:
            Hold_count.append(i)
        else:
            Extra_count.append(i)
        if len(Buy_count) > len(Sell_count) and len(Buy_count) > len(Hold_count):
            return ({'Recommendation' : "Buy"})
        elif len(Buy_count) > len(Sell_count) and len(Buy_count) < len(Hold_count):
            return ({'Recommendation' : "Hold"})
        elif len(Sell_count) > len(Hold_count):
            return ({'Recommendation' : "Sell"})
        else:
            return ({'Hold'})

@api_view(['POST', 'GET'])
def recommendation(request):
    if request.method == 'POST':
        data = request.data
        symbol = data['Symbol'] 
        finance_data = yf.Ticker(symbol)
        recommendations = finance_data.recommendations
        return Response(make_recommendation(recommendations['To Grade']))
    elif request.method == 'GET':
        return Response(None)


