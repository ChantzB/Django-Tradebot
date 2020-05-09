import yfinance as yf
import requests,json
import pandas as pd
from datetime import datetime

def chart_data(symbol, time):
    market_data = yf.Ticker(symbol)
    plot_data = market_data.history(period=time)
    df = pd.DataFrame(plot_data)
    df['date'] = pd.to_datetime(df.index, format='%Y-%m-%d %H:%M:%S')
    df = df.fillna('')
    data = df.to_dict('records')
    return (data)

def portfolio_history(data):
    df = pd.DataFrame(data)
    df['timestamp'] = pd.to_datetime(df['timestamp'], unit='s')
    df = df.fillna('')
    data_dict = df.to_dict('records')
    return(data_dict)

def make_recommendation(symbol):
    #function to return single recommendation
    finance_data = yf.Ticker(symbol)
    recommendations = finance_data.recommendations['To Grade']
    Buy_count = [] #contains all 'buy', 'overweight', 'outperform', 'strong buy'
    Sell_count = [] #contains all 'sell', 'underwieght', 'under perform','market perform'
    Hold_count = [] #contains all 'hold', 'equal-weight,  'neutral'
    Extra_count = []
    for i in recommendations:
        if i in ['Buy', 'Overweight', 'Outperform', 'Strong Buy']:
            Buy_count.append(i)
        elif i in ['Sell', 'Underweight', 'Underperform', 'Market Perform']:
            Sell_count.append(i)
        elif i in ['Hold', 'Equal-Weight', 'Neutral']:
            Hold_count.append(i)
        else:
            Extra_count.append(i)
        if len(Buy_count) > len(Sell_count) and len(Buy_count) > len(Hold_count):
            return ("Buy")
        elif len(Buy_count) > len(Sell_count) and len(Buy_count) < len(Hold_count):
            return ("Hold")
        elif len(Sell_count) > len(Hold_count):
            return ("Sell")
        else:
            return ("Hold")