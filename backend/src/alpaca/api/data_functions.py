import yfinance as yf
import requests,json
import pandas as pd
from datetime import datetime

def round_account(data):
    df = pd.DataFrame(data)  
    df['avg_entry_price'] = df['avg_entry_price'].astype(float)
    df['avg_entry_price'] = df['avg_entry_price'].round(2)
    df['avg_entry_price'] = df['avg_entry_price'].astype(str)
    df = df.to_dict('records')
    return(df)

def chart_data(symbol, time):
    market_data = yf.Ticker(symbol)
    plot_data = market_data.history(period=time)
    df = pd.DataFrame(plot_data)
    df['date'] = pd.to_datetime(df.index, format='%d-%m-%Y')
    df['date'] = df['date'].dt.date
    df = df.fillna('')
    data = df.to_dict('records')
    return (data)

def asset_price(symbol):
    asset = yf.Ticker(symbol)
    df = asset.history()
    return (df.iloc[-1]['Close'])

def portfolio_history(data):
    df = pd.DataFrame(data)
    df['date'] = pd.to_datetime(df['timestamp'], unit='s')
    df['date'] = df['date'].dt.date
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