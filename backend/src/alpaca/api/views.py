from django.shortcuts import render
import requests, json
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .keys import *
import yfinance as yf
from alpaca.api.data_functions import chart_data, make_recommendation


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
        return Response({"message": "Position Sold"})

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

@api_view(['POST', 'GET'])
def watchlist(request):
    BASE_URL = 'https://paper-api.alpaca.markets'
    HEADERS = {"APCA-API-KEY-ID" : API_KEY, "APCA-API-SECRET-KEY" : SECRET_KEY}    
    WATCHLIST_URL = '{}/v2/watchlists/6d70c540-0900-4372-9ea6-88f7d88e52e9'.format(BASE_URL)
    if request.method =='GET':
        watchlist_recommendations = []
        r = requests.get(WATCHLIST_URL, headers=HEADERS)
        data = json.loads(r.content)
        assets = data['assets']
        for asset in assets:
            try: 
                symbol = asset['symbol']
                our_recommendation = make_recommendation(symbol)
                watchlist_recommendations.append({"symbol" : symbol, "recommendation" : our_recommendation})
            except:
                watchlist_recommendations.append({"symbol" : symbol, "recommendation" : "NONE"})
        return Response(watchlist_recommendations)
    if request.method == 'POST':
        try:
            data = request.data
            requests.post(WATCHLIST_URL, json=data, headers=HEADERS)
            return Response({"message" : "Added to watchlist"})
        except:
            return Response({"Error" : "Not added to watchlist"})
    
@api_view(['POST', 'GET'])
def market_data(request):
    if request.method == 'POST':
        post = request.data
        data = post['market_search']
        symbol = data['Symbol']
        time = data['Time']
        pdata = chart_data(symbol, time)
        return Response(pdata)
    else:
        symbol = "AAPL"
        market_data = yf.Ticker(symbol)
        plot_data = market_data.history(period="1d")
        return Response(plot_data)

@api_view(['POST', 'GET'])
def recommendation(request):
    if request.method == 'POST':
        data = request.data
        symbol = data['Symbol'] 
        return Response(make_recommendation(symbol))
    elif request.method == 'GET':
        return Response(None)
