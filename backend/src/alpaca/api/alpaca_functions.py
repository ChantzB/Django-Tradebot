import yfinance as yf
import requests
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